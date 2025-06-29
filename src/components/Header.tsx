import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Search, Bell, User } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: '홈', href: '/' },
    { name: '프랍펌 비교', href: '/compare' },
    { name: '주간 순위', href: '/rankings' },
    { name: '전략 허브', href: '/strategies' },
    { name: '수익 시뮤레이터', href: '/simulator' },
    { name: '할인 이벤트', href: '/promos' }
  ]

  const isActive = (href: string) => {
    return location.pathname === href
  }

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                <span className="text-black font-bold text-lg">한</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-white">
                  Korean Trader Hub
                </h1>
                <p className="text-xs text-gray-400">
                  한국 최고의 프랍펌 정보 허브
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-yellow-500 bg-gray-900'
                    : 'text-gray-300 hover:text-yellow-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Data Status Indicator */}
            <div className="hidden md:flex items-center space-x-2 text-xs text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>실시간 데이터</span>
            </div>

            {/* Search Toggle */}
            <button className="p-2 text-gray-400 hover:text-white rounded hover:bg-gray-800 transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-white rounded hover:bg-gray-800 transition-colors">
              <Bell className="w-5 h-5" />
            </button>

            {/* User Menu */}
            <Link
              to="/auth"
              className="hidden sm:flex items-center space-x-2 text-gray-400 hover:text-white rounded hover:bg-gray-800 px-3 py-2 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="text-sm">로그인</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white rounded hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-yellow-500 bg-black'
                    : 'text-gray-300 hover:text-white hover:bg-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}