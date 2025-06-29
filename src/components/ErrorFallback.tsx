import { AlertTriangle, RotateCcw, Home } from 'lucide-react'

interface ErrorFallbackProps {
  error?: Error
  resetErrorBoundary?: () => void
  title?: string
  message?: string
}

export default function ErrorFallback({ 
  error, 
  resetErrorBoundary,
  title = '오류가 발생했습니다',
  message = '예상치 못한 오류가 발생했습니다. 다시 시도해주세요.'
}: ErrorFallbackProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
        </div>
        
        <h1 className="text-2xl-ko font-bold text-white mb-4">
          {title}
        </h1>
        
        <p className="text-base-ko text-gray-400 mb-6 leading-korean">
          {message}
        </p>
        
        {error && process.env.NODE_ENV === 'development' && (
          <details className="text-left bg-dark-card rounded-korean p-4 mb-6">
            <summary className="text-sm-ko text-gray-400 cursor-pointer mb-2">
              개발자 정보 (클릭하여 상세보기)
            </summary>
            <pre className="text-xs text-red-400 overflow-auto">
              {error.message}
              {error.stack && (
                <>
                  {'\n\n'}
                  {error.stack}
                </>
              )}
            </pre>
          </details>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {resetErrorBoundary && (
            <button
              onClick={resetErrorBoundary}
              className="btn-primary flex items-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>다시 시도</span>
            </button>
          )}
          
          <a
            href="/"
            className="btn-secondary flex items-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>홈으로 돌아가기</span>
          </a>
        </div>
        
        <div className="mt-8 pt-6 border-t border-dark-border">
          <p className="text-sm-ko text-gray-500">
            문제가 지속되면{' '}
            <a 
              href="mailto:support@koreantrader.hub"
              className="text-gold-primary hover:text-gold-secondary transition-colors"
            >
              고객지원팀
            </a>
            에 문의해주세요.
          </p>
        </div>
      </div>
    </div>
  )
}

// Specific error components for different scenarios
export function NetworkError({ onRetry }: { onRetry?: () => void }) {
  return (
    <ErrorFallback
      title="네트워크 연결 오류"
      message="인터넷 연결을 확인하고 다시 시도해주세요."
      resetErrorBoundary={onRetry}
    />
  )
}

export function DataError({ onRetry }: { onRetry?: () => void }) {
  return (
    <ErrorFallback
      title="데이터 로딩 실패"
      message="데이터를 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
      resetErrorBoundary={onRetry}
    />
  )
}

export function NotFoundError() {
  return (
    <ErrorFallback
      title="페이지를 찾을 수 없습니다"
      message="요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."
    />
  )
}