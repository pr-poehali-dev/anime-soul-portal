import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimeCardProps {
  id: string;
  title: string;
  image: string;
  type?: string;
  rating?: number;
  year?: number;
  episodes?: number;
  className?: string;
}

const AnimeCard = ({
  id,
  title,
  image,
  type = "TV",
  rating = 0,
  year,
  episodes,
  className,
}: AnimeCardProps) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg bg-anisoul-gray-dark card-hover",
        className
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <button className="bg-black/60 hover:bg-anisoul-purple-deep/80 p-1.5 rounded-full transition-colors">
            <Heart className="w-4 h-4 text-white" />
          </button>
        </div>
        <div className="absolute top-2 left-2">
          <span className="bg-anisoul-purple-medium px-2 py-0.5 text-xs font-semibold rounded-md text-white">
            {type}
          </span>
        </div>
        {rating > 0 && (
          <div className="absolute bottom-2 right-2">
            <span className="bg-black/60 px-2 py-0.5 text-xs font-semibold rounded-md text-white">
              ★ {rating.toFixed(1)}
            </span>
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-sm line-clamp-2 text-white">
          {title}
        </h3>
        <div className="mt-1 flex items-center text-xs text-gray-400 space-x-2">
          {year && <span>{year}</span>}
          {episodes && (
            <>
              <span>•</span>
              <span>{episodes} эп.</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
