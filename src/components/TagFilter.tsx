'use client';

import { useState } from 'react';

interface TagFilterProps {
  tags: string[];
  selectedTag: string;
  onTagChange: (tag: string) => void;
}

export default function TagFilter({ tags, selectedTag, onTagChange }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onTagChange('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          selectedTag === 'all'
            ? 'bg-brand_red text-white shadow-glow-red'
            : 'bg-white/10 text-light_text hover:bg-white/20 border border-white/20'
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all capitalize ${
            selectedTag === tag
              ? 'bg-brand_red text-white shadow-glow-red'
              : 'bg-white/10 text-light_text hover:bg-white/20 border border-white/20'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}