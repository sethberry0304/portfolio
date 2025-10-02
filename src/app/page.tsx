import Image from 'next/image';
import Container from '../components/Container';
import Section from '../components/Section';
import WorkCard from '../components/WorkCard';
import { basic, pages } from '../../data/content';
import { works } from '../../data/works';

export default function HomePage() {
  // Get featured works (first 6)
  const featuredWorks = works.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Star Decorations */}
        <div className="absolute top-20 left-10 w-[320px] h-[320px] hidden lg:block">
          <Image src="/images/star1.png" alt="" width={320} height={320} className="w-full h-full" />
        </div>
        <div className="absolute bottom-48 left-1/4 w-[640px] h-[640px] hidden lg:block">
          <Image src="/images/star2.png" alt="" width={640} height={640} className="w-full h-full" />
        </div>
        <div className="absolute top-1/4 right-48 w-[384px] h-[384px] hidden lg:block">
          <Image src="/images/star3.png" alt="" width={384} height={384} className="w-full h-full" />
        </div>
        
        <Container className="relative z-10">
          <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand_red tracking-tight">
                    {basic.name_en}
                  </h1>
            <h2 className="text-2xl md:text-3xl text-light_text/80 mb-8 font-sans font-medium tracking-wide">
              {basic.tagline}
            </h2>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href="/films"
                      className="bg-brand_red hover:bg-brand_blue text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-contrast-red transform hover:-translate-y-1 border-2 border-brand_red hover:border-brand_blue"
                    >
                      View My Films
                    </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Works Section */}
      <Section>
        <Container>
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-heading font-bold text-brand_red mb-4 tracking-tight">Short Films</h2>
                  <p className="text-light_text/70 text-lg max-w-2xl mx-auto">
                    Short films
                  </p>
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorks.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
          
          {works.length > 6 && (
            <div className="text-center mt-12">
              <a
                href="/films"
                className="bg-brand_red hover:bg-brand_blue text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-contrast-red transform hover:-translate-y-1 border-2 border-brand_red hover:border-brand_blue"
              >
                View All Films
              </a>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}