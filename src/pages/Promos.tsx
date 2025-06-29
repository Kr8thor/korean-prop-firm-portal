import { Percent, Clock, Tag } from 'lucide-react'

export default function Promos() {
  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            할인 이벤트 추적
          </h1>
          <p className="text-lg text-gray-400">
            실시간 프로모션 알림과 최대 90% 할인 정보
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 text-center">
          <Percent className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">
            실시간 할인 추적 시스템
          </h2>
          <p className="text-gray-400 mb-6">
            모든 프랍펌의 프로모션을 실시간으로 모니터링합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded p-4">
              <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-white font-semibold">실시간 알림</h3>
              <p className="text-gray-400 text-sm">새로운 할인 즉시 알림</p>
            </div>
            <div className="bg-gray-800 rounded p-4">
              <Tag className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-white font-semibold">쿠폰 코드</h3>
              <p className="text-gray-400 text-sm">자동 적용 쿠폰 시스템</p>
            </div>
            <div className="bg-gray-800 rounded p-4">
              <Percent className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-white font-semibold">최대 90% 할인</h3>
              <p className="text-gray-400 text-sm">최고 할인율 보장</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}