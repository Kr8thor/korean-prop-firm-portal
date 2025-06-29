import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

// Layout components
import Header from './components/Header'
import Footer from './components/Footer'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Compare = lazy(() => import('./pages/Compare'))
const Rankings = lazy(() => import('./pages/Rankings'))
const Strategies = lazy(() => import('./pages/Strategies'))
const Simulator = lazy(() => import('./pages/Simulator'))
const Promos = lazy(() => import('./pages/Promos'))
const Replays = lazy(() => import('./pages/Replays'))

// Loading component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-8 h-8 border-4 border-gray-600 border-t-yellow-500 rounded-full animate-spin"></div>
      <span className="ml-3 text-gray-400">로딩 중...</span>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      
      <main className="flex-1">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/비교" element={<Compare />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/순위" element={<Rankings />} />
            <Route path="/strategies" element={<Strategies />} />
            <Route path="/전략" element={<Strategies />} />
            <Route path="/simulator" element={<Simulator />} />
            <Route path="/시뮬레이터" element={<Simulator />} />
            <Route path="/promos" element={<Promos />} />
            <Route path="/할인" element={<Promos />} />
            <Route path="/replays" element={<Replays />} />
            <Route path="/리플레이" element={<Replays />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  )
}

// 404 Not Found component
function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">
          404 - 페이지를 찾을 수 없습니다
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          요청하신 페이지가 존재하지 않습니다.
        </p>
        <a 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition-colors"
        >
          홈으로 돌아가기
        </a>
      </div>
    </div>
  )
}

export default App