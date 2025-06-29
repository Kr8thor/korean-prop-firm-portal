import { Calculator, DollarSign, TrendingUp } from 'lucide-react'

export default function Simulator() {
  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            수익 시뮤레이터
          </h1>
          <p className="text-lg text-gray-400">
            예상 수익을 계산하고 최적의 계좌 크기를 추천받으세요
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 text-center">
          <Calculator className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">
            고급 시뮤레이터 개발 중
          </h2>
          <p className="text-gray-400 mb-6">
            실시간 수익 계산 및 맞춤 추천 시스템을 개발 중입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded p-4">
              <DollarSign className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-white font-semibold">수익 계산</h3>
              <p className="text-gray-400 text-sm">예상 일/월/연 수익</p>
            </div>
            <div className="bg-gray-800 rounded p-4">
              <TrendingUp className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-white font-semibold">리스크 분석</h3>
              <p className="text-gray-400 text-sm">드로우다운 및 손실 한도</p>
            </div>
            <div className="bg-gray-800 rounded p-4">
              <Calculator className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-white font-semibold">최적 추천</h3>
              <p className="text-gray-400 text-sm">맞춤 프랍펌 및 계좌 크기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}