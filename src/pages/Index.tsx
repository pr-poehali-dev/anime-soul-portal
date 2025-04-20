import NavBar from "@/components/NavBar";
import AnimeBanner from "@/components/AnimeBanner";
import AnimeSection from "@/components/AnimeSection";

// Временные данные для демонстрации
const featuredAnime = {
  id: "1",
  title: "Магическая битва",
  description: "Итадори Юдзи — обычный старшеклассник, который сталкивается со сверхъестественным, когда его друзья попадают в опасность. Чтобы спасти их, он проглатывает проклятую реликвию — палец демона Сукуны, получая новые силы. Теперь он вынужден присоединиться к тайной организации Магов Джиджутсу, чтобы найти все части Сукуны и уничтожить их.",
  image: "https://loremflickr.com/1200/700/anime,poster,fantasy/all",
  genres: ["Экшен", "Фэнтези", "Сверхъестественное"]
};

const popularAnime = [
  { id: "1", title: "Магическая битва", image: "https://loremflickr.com/600/800/anime,poster,hero/all", type: "TV", rating: 9.1, year: 2020, episodes: 24 },
  { id: "2", title: "Человек-бензопила", image: "https://loremflickr.com/600/800/anime,poster,action/all", type: "TV", rating: 8.7, year: 2022, episodes: 12 },
  { id: "3", title: "Атака титанов", image: "https://loremflickr.com/600/800/anime,poster,titan/all", type: "TV", rating: 9.0, year: 2013, episodes: 87 },
  { id: "4", title: "Семья шпиона", image: "https://loremflickr.com/600/800/anime,poster,spy/all", type: "TV", rating: 8.6, year: 2022, episodes: 25 },
  { id: "5", title: "Клинок, рассекающий демонов", image: "https://loremflickr.com/600/800/anime,poster,demon/all", type: "TV", rating: 8.9, year: 2019, episodes: 44 }
];

const newAnime = [
  { id: "6", title: "Синий ящик", image: "https://loremflickr.com/600/800/anime,poster,sport/all", type: "TV", rating: 8.3, year: 2023, episodes: 24 },
  { id: "7", title: "Сага о Винланде", image: "https://loremflickr.com/600/800/anime,poster,viking/all", type: "TV", rating: 8.8, year: 2023, episodes: 24 },
  { id: "8", title: "Фрирен: После конца путешествия", image: "https://loremflickr.com/600/800/anime,poster,magic/all", type: "TV", rating: 9.1, year: 2023, episodes: 28 },
  { id: "9", title: "Хеллсинг: Рассвет", image: "https://loremflickr.com/600/800/anime,poster,dark/all", type: "TV", rating: 7.9, year: 2023, episodes: 13 },
  { id: "10", title: "Ведьмак: Кошмар волка", image: "https://loremflickr.com/600/800/anime,poster,fantasy/all", type: "Фильм", rating: 8.2, year: 2023, episodes: 1 }
];

const topRated = [
  { id: "11", title: "Стальной алхимик: Братство", image: "https://loremflickr.com/600/800/anime,poster,alchemy/all", type: "TV", rating: 9.3, year: 2009, episodes: 64 },
  { id: "12", title: "Шедевр мечты", image: "https://loremflickr.com/600/800/anime,poster,dream/all", type: "TV", rating: 9.2, year: 2013, episodes: 12 },
  { id: "13", title: "Врата Штейна", image: "https://loremflickr.com/600/800/anime,poster,scifi/all", type: "TV", rating: 9.1, year: 2011, episodes: 24 },
  { id: "14", title: "Охотник х Охотник", image: "https://loremflickr.com/600/800/anime,poster,hunter/all", type: "TV", rating: 9.1, year: 2011, episodes: 148 },
  { id: "15", title: "Легенда о Гальгрене", image: "https://loremflickr.com/600/800/anime,poster,legend/all", type: "TV", rating: 9.0, year: 1988, episodes: 110 }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-anisoul-dark">
      <NavBar />
      <main className="container mx-auto px-4 pt-20">
        {/* Главный баннер */}
        <div className="pt-8">
          <AnimeBanner {...featuredAnime} />
        </div>

        {/* Разделы с аниме */}
        <AnimeSection title="Популярное" animeList={popularAnime} viewAllLink="/popular" />
        <AnimeSection title="Новинки сезона" animeList={newAnime} viewAllLink="/new" />
        <AnimeSection title="Высокий рейтинг" animeList={topRated} viewAllLink="/top" />
      </main>

      {/* Футер */}
      <footer className="mt-16 py-8 border-t border-anisoul-purple-deep/30 bg-anisoul-gray-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-anisoul-purple-light to-anisoul-purple-neon text-transparent bg-clip-text">
                AniSoul
              </span>
              <p className="text-sm text-gray-400 mt-2">
                Ваш премиальный портал в мир аниме
              </p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-anisoul-purple-neon transition-colors">О проекте</a>
              <a href="#" className="hover:text-anisoul-purple-neon transition-colors">Контакты</a>
              <a href="#" className="hover:text-anisoul-purple-neon transition-colors">Правила</a>
              <a href="#" className="hover:text-anisoul-purple-neon transition-colors">Помощь</a>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-gray-500">
            © 2024 AniSoul. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
