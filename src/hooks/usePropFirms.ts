// hooks/usePropFirms.ts - Real-time prop firm data management
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect, useMemo } from 'react';

export interface PropFirm {
  id: number;
  name: string;
  nameKorean: string;
  totalCost: string;
  resetFee: string;
  promoCode: string;
  accountType: string;
  platform: string;
  maxAccounts: string;
  drawdownType: string;
  consistency: string;
  consistencyPA: string;
  dailyLossLimit: string;
  profitTarget: string;
  daysToPass: string;
  daysToPayout: string;
  buffer: string;
  maxPayout: string;
  accountPrice: string;
  setupFee: string;
  profitSplit: string;
  rules: string;
  lastUpdated: string;
  rating: number;
  featured: boolean;
  restrictions: {
    dca: boolean;
    news: boolean;
    bots: boolean;
    copyTrading: boolean;
    vpn: boolean;
  };
}

export interface PropFirmFilters {
  search: string;
  platforms: string[];
  drawdownTypes: string[];
  priceRange: [number, number];
  maxAccounts: number;
  profitSplit: number;
  featuredOnly: boolean;
  restrictions: {
    dca?: boolean;
    news?: boolean;
    bots?: boolean;
    copyTrading?: boolean;
    vpn?: boolean;
  };
}

const DEFAULT_FILTERS: PropFirmFilters = {
  search: '',
  platforms: [],
  drawdownTypes: [],
  priceRange: [0, 1000],
  maxAccounts: 0,
  profitSplit: 0,
  featuredOnly: false,
  restrictions: {}
};

// Fetch prop firms from N8N-generated JSON
async function fetchPropFirms(): Promise<{ propFirms: PropFirm[]; lastUpdate: string; totalCount: number }> {
  try {
    // Try to fetch from the N8N-generated file first
    const response = await fetch('/data/propFirms.json');
    if (response.ok) {
      const data = await response.json();
      return {
        propFirms: data.propFirms || [],
        lastUpdate: data.lastUpdate || new Date().toISOString(),
        totalCount: data.totalCount || 0
      };
    }
  } catch (error) {
    console.warn('N8N data not available, using fallback');
  }

  // Fallback to static data if N8N data is not available
  const fallbackData = await import('../data/propFirms.json');
  return {
    propFirms: fallbackData.default || [],
    lastUpdate: new Date().toISOString(),
    totalCount: fallbackData.default?.length || 0
  };
}

// Main hook for prop firm data
export function usePropFirms() {
  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['propFirms'],
    queryFn: fetchPropFirms,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 30 * 60 * 1000, // 30 minutes
    refetchInterval: 6 * 60 * 60 * 1000, // 6 hours to match N8N schedule
    refetchOnWindowFocus: true,
    retry: 3
  });

  // WebSocket connection for real-time updates
  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:3001/ws`);
    
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'DATA_UPDATED') {
        console.log('Received data update notification');
        queryClient.invalidateQueries({ queryKey: ['propFirms'] });
      }
    };

    ws.onerror = (error) => {
      console.warn('WebSocket connection failed:', error);
    };

    return () => ws.close();
  }, [queryClient]);

  return {
    propFirms: data?.propFirms || [],
    lastUpdate: data?.lastUpdate,
    totalCount: data?.totalCount || 0,
    isLoading,
    error,
    refetch
  };
}

// Hook for filtered prop firms
export function useFilteredPropFirms(filters: PropFirmFilters = DEFAULT_FILTERS) {
  const { propFirms, isLoading, error } = usePropFirms();

  const filteredPropFirms = useMemo(() => {
    if (!propFirms) return [];

    return propFirms.filter(firm => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch = 
          firm.name.toLowerCase().includes(searchLower) ||
          firm.nameKorean.toLowerCase().includes(searchLower) ||
          firm.platform.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Platform filter
      if (filters.platforms.length > 0) {
        const firmPlatforms = firm.platform.split(',').map(p => p.trim());
        const hasMatchingPlatform = filters.platforms.some(platform =>
          firmPlatforms.some(fp => fp.includes(platform))
        );
        if (!hasMatchingPlatform) return false;
      }

      // Drawdown type filter
      if (filters.drawdownTypes.length > 0) {
        if (!filters.drawdownTypes.includes(firm.drawdownType)) return false;
      }

      // Price range filter
      const price = parseFloat(firm.totalCost.replace(/[^0-9.]/g, ''));
      if (!isNaN(price) && (price < filters.priceRange[0] || price > filters.priceRange[1])) {
        return false;
      }

      // Max accounts filter
      if (filters.maxAccounts > 0) {
        const maxAccounts = parseInt(firm.maxAccounts);
        if (isNaN(maxAccounts) || maxAccounts < filters.maxAccounts) return false;
      }

      // Profit split filter
      if (filters.profitSplit > 0) {
        const profitSplit = parseInt(firm.profitSplit.replace('%', ''));
        if (isNaN(profitSplit) || profitSplit < filters.profitSplit) return false;
      }

      // Featured only filter
      if (filters.featuredOnly && !firm.featured) return false;

      // Restrictions filter
      for (const [key, value] of Object.entries(filters.restrictions)) {
        if (value !== undefined && firm.restrictions[key as keyof typeof firm.restrictions] !== value) {
          return false;
        }
      }

      return true;
    });
  }, [propFirms, filters]);

  return {
    propFirms: filteredPropFirms,
    totalCount: filteredPropFirms.length,
    isLoading,
    error
  };
}