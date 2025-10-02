import { BilibiliVideo } from '../lib/fetchBiliRSS';
import VideoCard from './VideoCard';

interface VideoGridProps {
  videos: BilibiliVideo[];
  showTitle?: boolean;
  title?: string;
  subtitle?: string;
}

export default function VideoGrid({ videos, showTitle = true, title = "Videos", subtitle }: VideoGridProps) {
  if (videos.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-light_text/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-heading font-bold text-light_text mb-2">No Videos Available</h3>
          <p className="text-light_text/60 mb-6">
            Unable to load videos at the moment. Please check back later or visit my Bilibili channel.
          </p>
          <a
            href="https://space.bilibili.com/398797485"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand_red hover:bg-brand_blue text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1"
          >
            Visit Bilibili Channel
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {showTitle && (
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-light_text mb-4 tracking-tight">{title}</h2>
          {subtitle && (
            <p className="text-light_text/70 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <VideoCard key={video.bvid} video={video} />
        ))}
      </div>
    </div>
  );
}
