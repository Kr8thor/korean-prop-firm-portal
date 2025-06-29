import { Loader2 } from 'lucide-react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

export default function LoadingSpinner({ 
  size = 'md', 
  text = '로딩 중...', 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const textSizeClasses = {
    sm: 'text-sm-ko',
    md: 'text-base-ko',
    lg: 'text-lg-ko'
  }

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <Loader2 
        className={`${sizeClasses[size]} text-gold-primary animate-spin`} 
      />
      {text && (
        <p className={`${textSizeClasses[size]} text-gray-400 font-medium`}>
          {text}
        </p>
      )}
    </div>
  )
}

// Page-level loading component
export function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <LoadingSpinner 
        size="lg" 
        text="페이지를 불러오는 중..." 
      />
    </div>
  )
}

// Inline loading component
export function InlineLoader({ text }: { text?: string }) {
  return (
    <div className="flex items-center justify-center py-8">
      <LoadingSpinner 
        size="sm" 
        text={text || '데이터를 불러오는 중...'} 
      />
    </div>
  )
}

// Button loading state
export function ButtonLoader() {
  return (
    <Loader2 className="w-4 h-4 animate-spin" />
  )
}

// Full screen loading overlay
export function FullScreenLoader({ text }: { text?: string }) {
  return (
    <div className="fixed inset-0 bg-dark-bg/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-dark-card rounded-korean-lg p-8 shadow-korean-lg">
        <LoadingSpinner 
          size="lg" 
          text={text || '처리 중...'}
        />
      </div>
    </div>
  )
}