import { BookOpen, Video, Download } from 'lucide-react'

export default function Strategies() {
  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            전략 허브
          </h1>
          <p className="text-lg text-gray-400">
            프랍펌별 맞춤 전략과 NinjaTrader 설정 파일
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 text-center">
          <BookOpen className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">
            전략 라이브러리 구축 중
          </h2>
          <p className="text-gray-400 mb-6">
            각 프랍펌에 맞춤화된 전략과 도구를 준비 중입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded p-4">
              <Video className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-white font-semibold">비디오 가이드</h3>
              <p className="text-gray-400 text-sm">단계별 전략 설명</p>
            </div>
            <div className="bg-gray-800 rounded p-4">
              <Download className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-white font-semibold">설정 파일</h3>
              <p className="text-gray-400 text-sm">NinjaTrader 또는 TradingView</p>
            </div>
            <div className="bg-gray-800 rounded p-4">
              <BookOpen className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-white font-semibold">전략 가이드</h3>
              <p className="text-gray-400 text-sm">상세 구현 방법</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}