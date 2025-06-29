import { useState } from 'react'
import { Search, SlidersHorizontal, Star } from 'lucide-react'

// Sample data for prop firms
const propFirms = [
  {
    id: 1,
    name: "Funded Futures Network",
    nameKorean: "펜디드 퓨처스 네트워크",
    totalCost: "$75",
    resetFee: "$37",
    promoCode: "ARMYNAVY",
    platform: "Quantower, Rithmic, EdgeProX",
    maxAccounts: "4 Minis, 40 Micros",
    drawdownType: "EOT",
    profitSplit: "80%",
    rating: 4.8,
    featured: true
  },
  {
    id: 2,
    name: "Lucid",
    nameKorean: "루시드",
    totalCost: "$96",
    resetFee: "$48",
    promoCode: "ARMYNAVY",
    platform: "Quantower, Rithmic",
    maxAccounts: "4 Minis, 40 Micros",
    drawdownType: "EOD",
    profitSplit: "80%",
    rating: 4.6,
    featured: true
  },
  {
    id: 3,
    name: "Earn2Trade",
    nameKorean: "언투트레이드",
    totalCost: "$165",
    resetFee: "$82",
    promoCode: "ARMYNAVY",
    platform: "NinjaTrader, Rithmic",
    maxAccounts: "6 Minis, 60 Micros",
    drawdownType: "EOD",
    profitSplit: "80%",
    rating: 4.5,
    featured: false
  },
  {
    id: 4,
    name: "TopStep",
    nameKorean: "탑스텍",
    totalCost: "$165",
    resetFee: "$82",
    promoCode: "",
    platform: "Tradovate, TradingView, ProjectX",
    maxAccounts: "5 Minis, 50 Micros",
    drawdownType: "EOD",
    profitSplit: "90%",
    rating: 4.9,
    featured: true
  },
  {
    id: 5,
    name: "TradeDay",
    nameKorean: "트레이드데이",
    totalCost: "$89",
    resetFee: "$44",
    promoCode: "ARMYNAVY",
    platform: "NinjaTrader, Tradovate, TradingView",
    maxAccounts: "1 Mini, 10 Micros",
    drawdownType: "Static",
    profitSplit: "95%",
    rating: 4.8,
    featured: true
  }
]

export default function Compare() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedFirms, setSelectedFirms] = useState<number[]>([])

  const filteredFirms = propFirms.filter(firm =>
    firm.nameKorean.toLowerCase().includes(searchTerm.toLowerCase()) ||
    firm.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleSelection = (firmId: number) => {
    setSelectedFirms(prev => 
      prev.includes(firmId)
        ? prev.filter(id => id !== firmId)
        : [...prev, firmId]
    )
  }

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            프랍펌 비교
          </h1>
          <p className="text-lg text-gray-400">
            최적의 프랍펌을 찾아보세요
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="프랍펌 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center space-x-2 px-6 py-3 rounded font-semibold transition-colors ${
                showFilters 
                  ? 'bg-yellow-500 text-black' 
                  : 'bg-gray-800 text-white border border-gray-600 hover:bg-gray-700'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>필터</span>
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    플랫폼
                  </label>
                  <select className="w-full px-4 py-2 bg-black border border-gray-600 rounded text-white focus:border-yellow-500 focus:outline-none">
                    <option>모든 플랫폼</option>
                    <option>NinjaTrader</option>
                    <option>Tradovate</option>
                    <option>TradingView</option>
                    <option>Quantower</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    드로우다운 유형
                  </label>
                  <select className="w-full px-4 py-2 bg-black border border-gray-600 rounded text-white focus:border-yellow-500 focus:outline-none">
                    <option>모든 유형</option>
                    <option>EOD</option>
                    <option>Static</option>
                    <option>Intraday</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    가격 범위
                  </label>
                  <select className="w-full px-4 py-2 bg-black border border-gray-600 rounded text-white focus:border-yellow-500 focus:outline-none">
                    <option>모든 가격</option>
                    <option>$0 - $100</option>
                    <option>$100 - $200</option>
                    <option>$200+</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
          <div className="mb-4 lg:mb-0">
            <p className="text-base text-gray-400">
              총 {filteredFirms.length}개의 프랍펌 발견
            </p>
          </div>

          {/* Selection Info */}
          {selectedFirms.length > 0 && (
            <div className="flex items-center space-x-4 bg-yellow-500/10 border border-yellow-500/20 rounded px-4 py-2">
              <span className="text-sm text-yellow-500 font-medium">
                {selectedFirms.length}개 선택됨
              </span>
              <button
                onClick={() => setSelectedFirms([])}
                className="text-sm text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                초기화
              </button>
            </div>
          )}
        </div>

        {/* Prop Firm Grid */}
        {filteredFirms.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredFirms.map((firm) => (
              <PropFirmCard
                key={firm.id}
                firm={firm}
                isSelected={selectedFirms.includes(firm.id)}
                onToggleSelect={() => toggleSelection(firm.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              검색 결과가 없습니다
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              다른 검색어를 시도해보세요
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="px-6 py-3 bg-gray-800 text-white border border-gray-600 font-semibold rounded hover:bg-gray-700 transition-colors"
            >
              검색 초기화
            </button>
          </div>
        )}

        {/* Comparison Table */}
        {selectedFirms.length > 1 && (
          <div className="mt-12 pt-8 border-t border-gray-800">
            <ComparisonTable firms={propFirms.filter(firm => selectedFirms.includes(firm.id))} />
          </div>
        )}
      </div>
    </div>
  )
}

// Prop Firm Card Component
interface PropFirmCardProps {
  firm: any
  isSelected: boolean
  onToggleSelect: () => void
}

function PropFirmCard({ firm, isSelected, onToggleSelect }: PropFirmCardProps) {
  return (
    <div className={`bg-gray-900 border rounded-lg p-6 hover:border-yellow-500 transition-colors ${
      isSelected ? 'border-yellow-500 bg-yellow-500/5' : 'border-gray-800'
    }`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">
            {firm.nameKorean}
          </h3>
          <p className="text-sm text-gray-400">
            {firm.name}
          </p>
        </div>
        
        <div className="flex items-center space-x-2 ml-4">
          {firm.featured && (
            <div className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
              추천
            </div>
          )}
          <button
            onClick={onToggleSelect}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              isSelected 
                ? 'bg-yellow-500 text-black' 
                : 'bg-gray-800 text-gray-300 hover:text-yellow-500'
            }`}
          >
            {isSelected ? '선택됨' : '비교'}
          </button>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(firm.rating) 
                  ? 'text-yellow-500 fill-current' 
                  : 'text-gray-600'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-400">
          {firm.rating}/5
        </span>
      </div>

      {/* Key Info */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <span className="text-xs text-gray-400 block">총 비용</span>
          <span className="text-sm text-white font-medium">{firm.totalCost}</span>
        </div>
        <div>
          <span className="text-xs text-gray-400 block">수익 분배</span>
          <span className="text-sm text-yellow-500 font-medium">{firm.profitSplit}</span>
        </div>
        <div>
          <span className="text-xs text-gray-400 block">최대 계좌</span>
          <span className="text-sm text-white">{firm.maxAccounts}</span>
        </div>
        <div>
          <span className="text-xs text-gray-400 block">드로우다운</span>
          <span className="text-sm text-white">{firm.drawdownType}</span>
        </div>
      </div>

      {/* Promo Code */}
      {firm.promoCode && (
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded p-3 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-yellow-500 font-medium">
              프로모 코드:
            </span>
            <code className="text-xs text-yellow-500 font-mono bg-yellow-500/20 px-2 py-1 rounded">
              {firm.promoCode}
            </code>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button className="flex-1 px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition-colors">
          지금 신청
        </button>
        <button className="px-4 py-2 bg-gray-800 text-white border border-gray-600 font-semibold rounded hover:bg-gray-700 transition-colors">
          상세정보
        </button>
      </div>
    </div>
  )
}

// Comparison Table Component
function ComparisonTable({ firms }: { firms: any[] }) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-semibold text-white mb-2">
          선택한 프랍펌 비교
        </h2>
        <p className="text-sm text-gray-400">
          {firms.length}개 프랍펌의 상세 비교
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-black">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">
                항목
              </th>
              {firms.map((firm) => (
                <th key={firm.id} className="px-4 py-3 text-center text-sm font-medium text-gray-300 min-w-48">
                  <div className="text-white font-semibold">{firm.nameKorean}</div>
                  <div className="text-xs text-yellow-500">{firm.rating}/5</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-800">
              <td className="px-4 py-3 text-sm font-medium text-gray-300">총 비용</td>
              {firms.map((firm) => (
                <td key={firm.id} className="px-4 py-3 text-center text-sm text-white">
                  {firm.totalCost}
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-800">
              <td className="px-4 py-3 text-sm font-medium text-gray-300">수익 분배</td>
              {firms.map((firm) => (
                <td key={firm.id} className="px-4 py-3 text-center text-sm text-yellow-500 font-medium">
                  {firm.profitSplit}
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-800">
              <td className="px-4 py-3 text-sm font-medium text-gray-300">플랫폼</td>
              {firms.map((firm) => (
                <td key={firm.id} className="px-4 py-3 text-center text-sm text-white">
                  {firm.platform.split(',')[0].trim()}
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-800">
              <td className="px-4 py-3 text-sm font-medium text-gray-300">드로우다운</td>
              {firms.map((firm) => (
                <td key={firm.id} className="px-4 py-3 text-center text-sm text-white">
                  {firm.drawdownType}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}