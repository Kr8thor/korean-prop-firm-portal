import { TrendingUp, Trophy, Award } from 'lucide-react'

export default function Rankings() {
  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            주간 프랍펌 순위
          </h1>
          <p className="text-lg text-gray-400">
            커뮤니티 평가 기반 순위와 통계
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 text-center">
          <TrendingUp className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">
            공사 중
          </h2>
          <p className="text-gray-400 mb-6">
            주간 순위 시스템을 개발 중입니다.
          </p>
          <div className="space-y-2">
            <div className="bg-gray-800 rounded p-4">
              <div className="flex items-center justify-between">
                <span className="text-white">커뮤니티 평가 시스템</span>
                <span className="text-yellow-500">90%</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded p-4">
              <div className="flex items-center justify-between">
                <span className="text-white">실시간 통계 대시보드</span>
                <span className="text-yellow-500">75%</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded p-4">
              <div className="flex items-center justify-between">
                <span className="text-white">주간 순위 업데이트</span>
                <span className="text-yellow-500">60%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}