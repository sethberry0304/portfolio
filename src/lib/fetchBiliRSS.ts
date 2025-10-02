export interface BilibiliVideo {
  bvid: string;
  title: string;
  link: string;
  cover: string;
  pubDate: string;
  isoDate: string;
}

export interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  isoDate: string;
  enclosure?: {
    url: string;
    type: string;
  };
  content?: string;
  description?: string;
}

// Parse XML and extract video data
function parseRSSXML(xmlText: string): BilibiliVideo[] {
  const videos: BilibiliVideo[] = [];
  
  // Extract all <item> elements
  const itemMatches = xmlText.match(/<item>[\s\S]*?<\/item>/g) || [];
  
  for (const item of itemMatches) {
    try {
      // Extract title
      const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
      if (!titleMatch) continue;
      
      // Extract link and bvid
      const linkMatch = item.match(/<link>(.*?)<\/link>/);
      if (!linkMatch) continue;
      
      const bvidMatch = linkMatch[1].match(/\/video\/([A-Za-z0-9]+)/);
      if (!bvidMatch) continue;
      
      // Extract publication date
      const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
      const isoDateMatch = item.match(/<dc:date>(.*?)<\/dc:date>/);
      
      // Extract cover image
      let cover = '';
      
      // Try to get from enclosure first
      const enclosureMatch = item.match(/<enclosure[^>]*url="([^"]*)"[^>]*>/);
      if (enclosureMatch) {
        cover = enclosureMatch[1];
      } else {
        // Try to extract from content/description
        const contentMatch = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/);
        if (contentMatch) {
          const imgMatch = contentMatch[1].match(/<img[^>]*src="([^"]*)"[^>]*>/);
          if (imgMatch) {
            cover = imgMatch[1];
          }
        }
      }
      
      // Fallback to default Bilibili cover pattern
      if (!cover) {
        cover = `https://i0.hdslb.com/bfs/archive/${bvidMatch[1]}.jpg`;
      }
      
      const pubDate = pubDateMatch ? pubDateMatch[1] : '';
      const isoDate = isoDateMatch ? isoDateMatch[1] : new Date(pubDate).toISOString();
      
      videos.push({
        bvid: bvidMatch[1],
        title: titleMatch[1],
        link: linkMatch[1],
        cover,
        pubDate,
        isoDate
      });
    } catch (error) {
      console.warn('Failed to parse RSS item:', error);
      continue;
    }
  }
  
  return videos;
}

// Filter videos by date (only 2023-01-01 and later)
function filterVideosByDate(videos: BilibiliVideo[]): BilibiliVideo[] {
  const cutoffDate = new Date('2023-01-01');
  
  return videos.filter(video => {
    const videoDate = new Date(video.isoDate);
    return videoDate >= cutoffDate;
  });
}

// Sort videos by publication date (newest first)
function sortVideosByDate(videos: BilibiliVideo[]): BilibiliVideo[] {
  return videos.sort((a, b) => {
    const dateA = new Date(a.isoDate).getTime();
    const dateB = new Date(b.isoDate).getTime();
    return dateB - dateA;
  });
}

// Format date to YY-MM-DD
export function formatVideoDate(isoDate: string): string {
  const date = new Date(isoDate);
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Main function to fetch and process Bilibili RSS
export async function fetchBilibiliVideos(): Promise<BilibiliVideo[]> {
  const RSS_URL = 'https://rsshub.app/bilibili/user/video/398797485';
  
  try {
    console.log('📡 Fetching Bilibili RSS...');
    
    const response = await fetch(RSS_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`RSS fetch failed: ${response.status} ${response.statusText}`);
    }
    
    const xmlText = await response.text();
    console.log('✅ RSS fetched successfully');
    
    // Parse XML
    const videos = parseRSSXML(xmlText);
    console.log(`📹 Parsed ${videos.length} videos from RSS`);
    
    // Filter by date
    const filteredVideos = filterVideosByDate(videos);
    console.log(`🔍 Filtered to ${filteredVideos.length} videos since 2023-01-01`);
    
    // Sort by date
    const sortedVideos = sortVideosByDate(filteredVideos);
    
    return sortedVideos;
  } catch (error) {
    console.error('❌ Failed to fetch Bilibili videos:', error);
    throw error;
  }
}

// Get recent videos (for homepage/works page)
export async function getRecentVideos(limit: number = 6): Promise<BilibiliVideo[]> {
  try {
    const videos = await fetchBilibiliVideos();
    return videos.slice(0, limit);
  } catch (error) {
    console.error('Failed to get recent videos:', error);
    return [];
  }
}
