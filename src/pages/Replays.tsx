import { PlayCircle, Video, MessageCircle } from 'lucide-react'

export default function Replays() {
  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            트레이드 리플레이 보관소
          </h1>
          <p className="text-lg text-gray-400">
            성공한 트레이더들의 실제 거래 영상과 분석
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 text-center">
          <PlayCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">
            비디오 라이브러리 구축 중
          </h2>
          <p className="text-gray-400 mb-6">
            실제 통과자들의 거래 영상을 수집하고 분석 중입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded p-4">
              <Video className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-white font-semibold">거래 영상</h3>
              <p className="text-gray-400 text-sm">실시간 거래 리플레이</p>
            </div>
            <div className="bg-gray-800 rounded p-4">
              <MessageCircle className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-white font-semibold">전문가 분석</h3>
              <p className="text-gray-400 text-sm">전략 해설 및 팁</p>
            </div>
            <div className="bg-gray-800 rounded p-4">
              <PlayCircle className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-white font-semibold">대화형 학습</h3>
              <p className="text-gray-400 text-sm">Q&A 및 커뮤니티</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}