import { Link } from 'react-router-dom'
import { Mail, MessageCircle, Github, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                <span className="text-black font-bold">한</span>
              </div>
              <span className="text-lg font-bold text-white">
                Korean Trader Hub
              </span>
            </div>
            <p className="text-sm text-gray-400">
              한국 트레이더를 위한 최강 프랍펌 정보 사이트. 
              실시간 데이터와 커뮤니티 리뷰를 통해 
              최적의 프랍펌을 찾아보세요.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">
              주요 서비스
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/compare" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  프랍펌 비교
                </Link>
              </li>
              <li>
                <Link to="/rankings" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  주간 순위
                </Link>
              </li>
              <li>
                <Link to="/simulator" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  수익 시뮤레이터
                </Link>
              </li>
              <li>
                <Link to="/promos" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  할인 이벤트
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">
              리소스
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/strategies" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  전략 허브
                </Link>
              </li>
              <li>
                <Link to="/rules" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  규칙 설명
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  블로그
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">
              뉴스레터 구독
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              최신 프랍펌 정보와 할인 소식을 
              가장 먼저 받아보세요.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="이메일 주소"
                className="w-full px-4 py-2 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition-colors"
              >
                구독하기
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Korean Trader Hub. All rights reserved.
            </p>
            <div className="text-xs text-gray-500 text-center md:text-right">
              <p>데이터 출처: Kelly Ann's Futures Trading</p>
              <p>실시간 업데이트 • 6시간마다 갱신</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}