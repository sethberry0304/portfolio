import Image from 'next/image';
import { BilibiliVideo, formatVideoDate } from '../lib/fetchBiliRSS';

interface VideoCardProps {
  video: BilibiliVideo;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <a
      href={video.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-brand_red/30 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={video.cover}
          alt={video.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder-video.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-3 left-3 right-3">
          <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-sm font-medium truncate">
              {video.title}
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-light_text font-heading font-semibold text-lg mb-2 group-hover:text-brand_red transition-colors line-clamp-2">
          {video.title}
        </h3>
        <p className="text-light_text/60 text-sm">
          {formatVideoDate(video.isoDate)}
        </p>
      </div>
    </a>
  );
}
