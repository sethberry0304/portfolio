import Image from 'next/image';
import Container from '../../components/Container';
import Section from '../../components/Section';
import { basic } from '../../../data/content';

export default function AboutPage() {
  return (
    <Section>
      <Container>
        {/* Star Decorations - desktop */}
        <div className="hidden lg:block pointer-events-none z-0">
          <div className="absolute top-24 right-16 w-[320px] h-[320px]">
            <Image src="/images/star1.png" alt="" width={320} height={320} className="w-full h-full" />
          </div>
          <div className="absolute top-1/3 right-8 w-[640px] h-[640px]">
            <Image src="/images/star2.png" alt="" width={640} height={640} className="w-full h-full" />
          </div>
          <div className="absolute bottom-24 right-1/4 w-[384px] h-[384px]">
            <Image src="/images/star3.png" alt="" width={384} height={384} className="w-full h-full" />
          </div>
        </div>
        {/* Star Decorations - mobile */}
        <div className="lg:hidden pointer-events-none z-0">
          <div className="absolute top-16 right-4 w-24 h-24">
            <Image src="/images/star1.png" alt="" width={96} height={96} className="w-full h-full" />
          </div>
          <div className="absolute bottom-20 left-6 w-28 h-28">
            <Image src="/images/star3.png" alt="" width={112} height={112} className="w-full h-full" />
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-display font-bold text-brand_red mb-4 tracking-tight">About Me</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border-2 border-brand_red/30">
                <Image
                  src="/images/profile_v2.jpg"
                  alt={basic.name_en}
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-heading font-bold text-light_text mb-4 tracking-tight">
                  {basic.name_en}
                </h2>
                <p className="text-sm text-light_text/80 mb-6">
                  {basic.tagline}
                </p>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-light_text/80 text-sm leading-relaxed italic">
                  {basic.about_en}
                </p>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold text-light_text mb-4">Current Focus</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 border-2 border-brand_red/50">
                    <h4 className="font-bold text-brand_red mb-2">Video Production</h4>
                    <p className="text-light_text/70 text-sm">Bedroom filmmaking and creative storytelling</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border-2 border-brand_red/50">
                    <h4 className="font-bold text-brand_red mb-2">Research</h4>
                    <p className="text-light_text/70 text-sm">Media, marketing, and creative technology</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border-2 border-brand_red/50">
                    <h4 className="font-bold text-brand_red mb-2">Photography</h4>
                    <p className="text-light_text/70 text-sm">Visual documentation and artistic expression</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border-2 border-brand_red/50">
                    <h4 className="font-bold text-brand_red mb-2">Innovation</h4>
                    <p className="text-light_text/70 text-sm">Building creative technology solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}