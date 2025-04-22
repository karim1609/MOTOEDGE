import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  image: string;
  rating: number;
  motorcycle: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  text,
  image,
  rating,
  motorcycle
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md relative">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-red-500"
        />
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <p className="text-xs text-gray-400">{motorcycle} Owner</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
          />
        ))}
      </div>
      
      <p className="text-gray-300 text-sm">"{text}"</p>
      
      <div className="absolute -top-3 -right-3 text-4xl text-red-500/20 font-serif">"</div>
    </div>
  );
};

export default TestimonialCard;