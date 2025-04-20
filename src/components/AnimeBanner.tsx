import { Button } from "@/components/ui/button";
import { Play, Plus } from "lucide-react";

interface AnimeBannerProps {
  id: string;
  title: string;
  description: string;
  image: string;
  genres?: string[];
}

const AnimeBanner = ({
  id,
  title,
  description,
  image,
  genres = [],
}: AnimeBannerProps) => {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-xl">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
      
      {/* Background Image */}
      <img 
        src={image || "/placeholder.svg"} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white">{title}</h1>
          
          {genres.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {genres.map((genre, index) => (
                <span 
                  key={index}
                  className="bg-anisoul-purple-medium/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}
          
          <p className="text-gray-200 mb-6 line-clamp-3 md:line-clamp-none">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Button className="bg-anisoul-purple-neon hover:bg-anisoul-purple-light text-white">
              <Play className="mr-2 h-4 w-4" /> Смотреть
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Plus className="mr-2 h-4 w-4" /> В список
            </Button>
          </div>
        </div>
      </div>

      {/* Animated wave at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden z-10">
        <div className="wave-background animate-wave"></div>
        <div className="wave-background animate-wave" style={{ animationDelay: '-2s' }}></div>
      </div>
    </div>
  );
};

export default AnimeBanner;
