'use client';

export default function VideoErrorFallback() {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-xl font-heading font-bold text-light_text mb-2">Unable to Load Videos</h3>
        <p className="text-light_text/60 mb-6">
          There was an issue loading videos from Bilibili. This might be due to network connectivity 
          or temporary service issues. Please try again later or visit my Bilibili channel directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://space.bilibili.com/398797485"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand_red hover:bg-brand_blue text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1"
          >
            Visit Bilibili Channel
          </a>
          <button
            onClick={() => window.location.reload()}
            className="border border-white/30 hover:border-brand_red text-light_text hover:text-brand_red font-bold px-6 py-3 rounded-lg transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
