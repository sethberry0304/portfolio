import type { Work } from '@/data/works';
import WorkCard from './WorkCard';

interface ProjectGridProps {
  works: Work[];
}

export default function ProjectGrid({ works }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {works.map((work) => (
        <WorkCard key={work.id} work={work} />
      ))}
    </div>
  );
}