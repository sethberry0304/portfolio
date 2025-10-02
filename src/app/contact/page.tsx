import Container from '../../components/Container';
import Section from '../../components/Section';
import { basic, links } from '../../../data/content';

export default function ContactPage() {
  const socialLinks = [
    { name: 'Email', url: `mailto:${basic.email}`, icon: '📧', color: 'text-brand_red' },
    { name: 'Bilibili', url: links.bilibili, icon: '📺', color: 'text-blue-400' },
    { name: 'YouTube', url: links.youtube, icon: '🎥', color: 'text-red-500' },
    { name: 'Instagram', url: links.instagram, icon: '📷', color: 'text-pink-400' },
    { name: 'RedNote', url: links.rednote, icon: '📕', color: 'text-red-400' },
    { name: 'LinkedIn', url: links.linkedin, icon: '💼', color: 'text-blue-600' },
  ];

  return (
    <Section>
      <Container>
        {/* Star Decorations - desktop */}
        <div className="hidden lg:block pointer-events-none z-0">
          <div className="absolute top-20 left-16 w-[384px] h-[384px]">
            <img src="/images/star1.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute top-1/3 right-12 w-[320px] h-[320px]">
            <img src="/images/star3.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute -bottom-24 left-1/3 w-[640px] h-[640px]">
            <img src="/images/star2.png" alt="" className="w-full h-full" />
          </div>
        </div>
        {/* Star Decorations - mobile */}
        <div className="lg:hidden pointer-events-none z-0">
          <div className="absolute top-16 left-4 w-24 h-24">
            <img src="/images/star1.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute bottom-24 right-4 w-28 h-28">
            <img src="/images/star3.png" alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-display font-bold text-brand_red mb-4 tracking-tight">hi</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-light_text mb-6 tracking-tight">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-light_text/60 text-sm">Email</p>
                      <a 
                        href={`mailto:${basic.email}`}
                        className="text-light_text hover:text-brand_red transition-colors font-medium"
                      >
                        {basic.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-light_text/60 text-sm">Location</p>
                      <p className="text-light_text font-medium">Boston, MA</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-light_text/60 text-sm">Education</p>
                      <p className="text-light_text font-medium">Media Ventures @ BU</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-light_text mb-4">Let's Collaborate</h3>
                <p className="text-light_text/80 leading-relaxed">
                  Whether you're looking for video production, research collaboration, 
                  or creative technology solutions, I'd love to hear about your project. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-light_text mb-6 tracking-tight">Connect With Me</h2>
              
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-brand_red/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-brand_red/20 transition-colors">
                      <span className="text-2xl">{link.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-light_text font-medium group-hover:text-brand_red transition-colors">
                        {link.name}
                      </p>
                      <p className="text-light_text/60 text-sm">
                        {link.name === 'Email' ? 'Send me an email' : `Follow me on ${link.name}`}
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-light_text/40 group-hover:text-brand_red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
                </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-white/5 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-heading font-bold text-light_text mb-4 tracking-tight">Ready to Start a Project?</h3>
            <p className="text-light_text/80 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new creative projects. Whether it's video production, 
              research collaboration, or creative technology development, let's discuss your ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${basic.email}?subject=Project Inquiry`}
                className="bg-brand_red hover:bg-brand_blue text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-contrast-red transform hover:-translate-y-1 border-2 border-brand_red hover:border-brand_blue"
              >
                Start a Conversation
              </a>
              <a
                href="/files/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-brand_red text-blue_bg hover:text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-contrast-red border-2 border-white hover:border-brand_red"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}