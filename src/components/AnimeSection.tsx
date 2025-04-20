import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import AnimeCard from "./AnimeCard";

interface AnimeSectionProps {
  title: string;
  animeList: {
    id: string;
    title: string;
    image: string;
    type?: string;
    rating?: number;
    year?: number;
    episodes?: number;
  }[];
  viewAllLink?: string;
}

const AnimeSection = ({
  title,
  animeList,
  viewAllLink,
}: AnimeSectionProps) => {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        {viewAllLink && (
          <Link
            to={viewAllLink}
            className="flex items-center text-anisoul-purple-neon hover:text-anisoul-purple-light transition-colors"
          >
            Смотреть все <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        )}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {animeList.slice(0, 5).map((anime) => (
          <Link to={`/anime/${anime.id}`} key={anime.id}>
            <AnimeCard
              id={anime.id}
              title={anime.title}
              image={anime.image}
              type={anime.type}
              rating={anime.rating}
              year={anime.year}
              episodes={anime.episodes}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AnimeSection;
