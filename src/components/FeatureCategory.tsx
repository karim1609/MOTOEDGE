import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface FeatureCategoryProps {
  title: string;
  description: string;
  image: string;
  link: string;
  position?: 'left' | 'right';
}

const FeatureCategory: React.FC<FeatureCategoryProps> = ({
  title,
  description,
  image,
  link,
  position = 'left'
}) => {
  return (
    <div className="bg-gray-900 overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:scale-[1.02] group">
      <div className={`flex flex-col ${position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:bg-gradient-to-r"></div>
        </div>
        
        <div className="relative w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            {title}
          </h3>
          <p className="text-gray-300 mb-5">
            {description}
          </p>
          <Link
            to={link}
            className="inline-flex items-center text-red-500 hover:text-red-400 font-medium"
          >
            Explore {title}
            <ChevronRight className="ml-1 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureCategory;