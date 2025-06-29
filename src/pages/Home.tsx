import { Link } from 'react-router-dom'
import { 
  Search, 
  TrendingUp, 
  Calculator, 
  Percent, 
  PlayCircle, 
  BookOpen, 
  Users,
  Star,
  ArrowRight
} from 'lucide-react'

// Sample prop firm data
const samplePropFirms = [
  {
    id: 1,
    name: "Funded Futures Network",
    nameKorean: "펜디드 퓨처스 네트워크",
    totalCost: "$75",
    platform: "Quantower, Rithmic",
    profitSplit: "80%",
    rating: 4.8,
    promoCode: "ARMYNAVY"
  },
  {
    id: 2,
    name: "Lucid",
    nameKorean: "루시드",
    totalCost: "$96",
    platform: "Quantower, Rithmic",
    profitSplit: "80%",
    rating: 4.6,
    promoCode: "ARMYNAVY"
  },
  {
    id: 3,
    name: "TopStep",
    nameKorean: "탑스텍",
    totalCost: "$165",
    platform: "Tradovate, TradingView",
    profitSplit: "90%",
    rating: 4.9,
    promoCode: ""
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              한국 최고의 프랍펌 정보 허브
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              당신의 트레이딩 여정을 시작하세요
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/compare"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-black font-semibold rounded text-lg hover:bg-yellow-400 transition-colors"
              >
                프랍펌 찾기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/roadmap"
                className="inline-flex items-center px-8 py-4 bg-gray-800 text-white border border-gray-600 font-semibold rounded text-lg hover:bg-gray-700 transition-colors"
              >
                무료 가이드 받기
              </Link>
            </div>

            {/* Live Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-900/50 backdrop-blur rounded-lg p-6 text-center border border-gray-700">
                <div className="flex items-center justify-center mb-3">
                  <Users className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">247</div>
                <div className="text-sm text-gray-400">오늘의 통과자</div>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur rounded-lg p-6 text-center border border-gray-700">
                <div className="flex items-center justify-center mb-3">
                  <Percent className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">90%</div>
                <div className="text-sm text-gray-400">이번 주 최고 할인율</div>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur rounded-lg p-6 text-center border border-gray-700">
                <div className="flex items-center justify-center mb-3">
                  <TrendingUp className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-400">활성 프랍펌</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              한국 트레이더를 위한 모든 것
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              프랍펌 선택부터 성공까지, 필요한 모든 도구와 정보를 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <FeatureCard
              icon={<Search className="w-8 h-8" />}
              title="프랍펌 비교 엔진"
              description="실시간 데이터로 50+ 프랍펌을 한눈에 비교하고 필터링하세요"
              href="/compare"
              badge="실시간"
            />
            
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="주간 순위표"
              description="커뮤니티 평가 기반 프랍펌 순위와 통과율 통계"
              href="/rankings"
              badge="매주 업데이트"
            />
            
            <FeatureCard
              icon={<Calculator className="w-8 h-8" />}
              title="수익 시뮤레이터"
              description="예상 수익을 계산하고 최적의 계좌 크기를 추천받으세요"
              href="/simulator"
              badge="인기"
            />
            
            <FeatureCard
              icon={<Percent className="w-8 h-8" />}
              title="할인 이벤트 추적"
              description="실시간 프로모션 알림과 최대 90% 할인 정보"
              href="/promos"
              badge="핫딴"
            />
            
            <FeatureCard
              icon={<PlayCircle className="w-8 h-8" />}
              title="트레이드 리플레이"
              description="성공한 트레이더들의 실제 거래 영상과 분석"
              href="/replays"
            />
            
            <FeatureCard
              icon={<BookOpen className="w-8 h-8" />}
              title="전략 허브"
              description="프랍펌별 맞춤 전략과 NinjaTrader 설정 파일"
              href="/strategies"
            />
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              최신 업데이트
            </h2>
            <p className="text-lg text-gray-400">
              가장 최근에 업데이트된 프랍펌 정보
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {samplePropFirms.map((firm) => (
              <div key={firm.id} className="bg-black border border-gray-800 rounded-lg p-6 hover:border-yellow-500 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {firm.nameKorean}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-400">
                      {firm.rating}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">총 비용:</span>
                    <span className="text-sm text-white font-medium">
                      {firm.totalCost}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">플랫폼:</span>
                    <span className="text-sm text-white">
                      {firm.platform.split(',')[0].trim()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">수익 분배:</span>
                    <span className="text-sm text-yellow-500 font-medium">
                      {firm.profitSplit}
                    </span>
                  </div>
                </div>
                
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
                
                <Link
                  to={`/compare?firm=${firm.id}`}
                  className="block w-full text-center px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition-colors"
                >
                  자세히 보기
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white border border-gray-600 font-semibold rounded hover:bg-gray-700 transition-colors"
            >
              <span>모든 프랍펌 보기</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  badge?: string
}

function FeatureCard({ icon, title, description, href, badge }: FeatureCardProps) {
  return (
    <Link to={href} className="group block">
      <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-yellow-500 transition-colors relative">
        {badge && (
          <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
            {badge}
          </div>
        )}
        
        <div className="flex items-center justify-center w-16 h-16 bg-yellow-500/10 rounded-lg mb-4 group-hover:bg-yellow-500/20 transition-colors">
          <div className="text-yellow-500">
            {icon}
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-500 transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-gray-400 mb-4">
          {description}
        </p>
        
        <div className="flex items-center text-yellow-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
          <span>자세히 보기</span>
          <ArrowRight className="ml-1 w-4 h-4" />
        </div>
      </div>
    </Link>
  )
}