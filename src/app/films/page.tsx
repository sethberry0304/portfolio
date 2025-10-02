import Container from '../../components/Container';
import Section from '../../components/Section';
import WorkCard from '../../components/WorkCard';
import { works } from '../../../data/works';

export default function VideosPage() {
  const videos = works.filter(work => work.tag === "video");

  return (
    <Section>
      <Container>
        {/* Star Decorations - sides only, behind content */}
        <div className="hidden lg:block pointer-events-none z-0">
          <div className="absolute top-16 left-0 w-[320px] h-[320px]">
            <img src="/images/star1.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute bottom-24 right-0 w-[640px] h-[640px]">
            <img src="/images/star2.png" alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="relative z-10 text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-brand_red mb-4 tracking-tight">All Films</h1>
          <p className="text-light_text/70 text-lg max-w-2xl mx-auto">
            Explore my complete collection of short films. From personal stories to creative experiments.
          </p>
        </div>

        {videos.length === 0 ? (
          <div className="relative z-10 text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-light_text/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
                <h3 className="text-xl font-heading font-bold text-light_text mb-2">No Films Available</h3>
                <p className="text-light_text/60 mb-6">
                  No films found. Please check your data configuration.
                </p>
            </div>
          </div>
        ) : (
          <>
            <div className="relative z-10 mb-8">
              <p className="text-light_text/60 text-sm">
                Showing {videos.length} films
              </p>
            </div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((work) => (
                <WorkCard key={work.id} work={work} />
              ))}
            </div>
            
            <div className="relative z-10 text-center mt-12">
              <p className="text-brand_red text-sm">
                All films written, directed and edited by seth
              </p>
            </div>
          </>
        )}
      </Container>
    </Section>
  );
}
