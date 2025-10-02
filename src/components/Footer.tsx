import { basic, links } from '../../data/content';

export default function Footer() {
  return (
    <footer className="bg-blue_bg mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-light_text text-sm mb-4 md:mb-0">
            © 2024 {basic.name_en}. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href={links.bilibili}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light_text hover:text-brand_blue transition-colors text-sm font-medium border-b border-transparent hover:border-brand_blue"
            >
              Bilibili
            </a>
            <a
              href={links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light_text hover:text-brand_blue transition-colors text-sm font-medium border-b border-transparent hover:border-brand_blue"
            >
              Youtube
            </a>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light_text hover:text-brand_blue transition-colors text-sm font-medium border-b border-transparent hover:border-brand_blue"
            >
              Instagram
            </a>
            <a
              href={links.rednote}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light_text hover:text-brand_blue transition-colors text-sm font-medium border-b border-transparent hover:border-brand_blue"
            >
              RedNote
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light_text hover:text-brand_blue transition-colors text-sm font-medium border-b border-transparent hover:border-brand_blue"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}