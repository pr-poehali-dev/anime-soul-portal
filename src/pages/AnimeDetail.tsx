import { useParams } from "react-router-dom";
import { Play, Heart, Share2, Star, Calendar, Film, Clock, User, List, MessageSquare } from "lucide-react";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

// Временные данные для демонстрации
const animeDetails = {
  id: "1",
  title: "Магическая битва",
  originalTitle: "呪術廻戦",
  englishTitle: "Jujutsu Kaisen",
  description: "Итадори Юдзи — обычный старшеклассник, который сталкивается со сверхъестественным, когда его друзья попадают в опасность. Чтобы спасти их, он проглатывает проклятую реликвию — палец демона Сукуны, получая новые силы. Теперь он вынужден присоединиться к тайной организации Магов Джиджутсу, чтобы найти все части Сукуны и уничтожить их.",
  longDescription: "В мире, где негативные эмоции людей порождают проклятия, существуют маги дзюцу — особые люди, способные бороться с этими созданиями. Итадори Юдзи, обычный старшеклассник с выдающимися физическими способностями, неожиданно вовлекается в мир дзюцу, когда его друзья находят и распечатывают проклятую реликвию — высушенный палец Рёмена Сукуны, короля проклятий.\n\nЧтобы спасти друзей от нападения проклятий, привлеченных пальцем, Итадори проглатывает реликвию и становится сосудом для Сукуны. Однако, вопреки ожиданиям, он сохраняет контроль над своим телом. Это привлекает внимание школы магов дзюцу, и Итадори встречает Гоздо Сатору, могущественного мага, который решает взять юношу под свою опеку.\n\nВместо немедленной казни, которая полагается всем сосудам проклятий, Сатору предлагает альтернативу: Итадори должен найти и проглотить все 20 пальцев Сукуны, чтобы потом умереть вместе с ним, тем самым навсегда уничтожив короля проклятий. Так начинается опасное путешествие Итадори в мире дзюцу, где ему предстоит обучиться магии, сразиться с опасными проклятиями и найти свое место среди других магов.",
  image: "https://loremflickr.com/800/1200/anime,poster,fantasy/all",
  coverImage: "https://loremflickr.com/1200/600/anime,scene,fantasy/all",
  studio: "MAPPA",
  genres: ["Экшен", "Фэнтези", "Сверхъестественное", "Школа", "Сёнен"],
  status: "Онгоинг",
  year: 2020,
  season: "Осень",
  episodes: 24,
  duration: 24,
  rating: 9.1,
  popularity: 92,
  nextEpisode: "Пятница, 20:00",
  similarAnime: [
    { id: "2", title: "Человек-бензопила", image: "https://loremflickr.com/600/800/anime,poster,action/all", type: "TV", rating: 8.7, year: 2022, episodes: 12 },
    { id: "3", title: "Атака титанов", image: "https://loremflickr.com/600/800/anime,poster,titan/all", type: "TV", rating: 9.0, year: 2013, episodes: 87 },
    { id: "5", title: "Клинок, рассекающий демонов", image: "https://loremflickr.com/600/800/anime,poster,demon/all", type: "TV", rating: 8.9, year: 2019, episodes: 44 }
  ],
  userRating: {
    story: 9.3,
    animation: 9.5,
    sound: 9.0,
    characters: 9.2,
    enjoyment: 9.4
  }
};

// Временные данные о сезонах и эпизодах
const seasons = [
  {
    id: 1,
    title: "Сезон 1",
    episodes: [
      { number: 1, title: "Рёмен Сукуна", duration: "24 мин.", aired: "03.10.2020" },
      { number: 2, title: "Для себя", duration: "24 мин.", aired: "10.10.2020" },
      { number: 3, title: "Девочка стали", duration: "24 мин.", aired: "17.10.2020" },
      { number: 4, title: "Соглашение между проклятыми", duration: "24 мин.", aired: "24.10.2020" },
      { number: 5, title: "Проклятое святилище", duration: "24 мин.", aired: "31.10.2020" },
    ]
  },
  {
    id: 2,
    title: "Сезон 2",
    episodes: [
      { number: 1, title: "Скрытый инвентарь", duration: "24 мин.", aired: "06.07.2023" },
      { number: 2, title: "Вспышки", duration: "24 мин.", aired: "13.07.2023" },
      { number: 3, title: "Непарное лезвие", duration: "24 мин.", aired: "20.07.2023" },
    ]
  }
];

const AnimeDetail = () => {
  const { id } = useParams();

  // В реальном приложении здесь будет запрос к API для получения данных по id
  const anime = animeDetails;

  return (
    <div className="min-h-screen bg-anisoul-dark">
      <NavBar />
      
      {/* Основной контент */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Верхний блок с обложкой */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
          <img 
            src={anime.coverImage} 
            alt={anime.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-anisoul-dark via-anisoul-dark/80 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col md:flex-row items-end md:items-center gap-6">
            <div className="relative w-28 h-40 md:w-36 md:h-52 rounded-lg overflow-hidden border-2 border-anisoul-purple-medium shadow-lg">
              <img 
                src={anime.image} 
                alt={anime.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{anime.title}</h1>
              <div className="flex flex-wrap gap-2 mb-3">
                {anime.genres.map((genre, index) => (
                  <span key={index} className="bg-anisoul-purple-deep/80 text-xs px-2 py-1 rounded-md text-white">
                    {genre}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{anime.year}</span>
                </div>
                <div className="flex items-center">
                  <Film className="w-4 h-4 mr-1" />
                  <span>{anime.episodes} эп.</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{anime.duration} мин.</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-400" />
                  <span>{anime.rating}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>Студия {anime.studio}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-row md:flex-col gap-2 md:text-center">
              <Button className="bg-anisoul-purple-neon hover:bg-anisoul-purple-light">
                <Play className="w-4 h-4 mr-2" /> Смотреть
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="border-anisoul-purple-medium/50 hover:bg-anisoul-purple-deep/20">
                  <Heart className="w-4 h-4 text-anisoul-purple-neon" />
                </Button>
                <Button variant="outline" size="icon" className="border-anisoul-purple-medium/50 hover:bg-anisoul-purple-deep/20">
                  <Share2 className="w-4 h-4 text-anisoul-purple-neon" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Основной контент в табах */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="bg-anisoul-gray-dark mb-6">
                <TabsTrigger value="about">Об аниме</TabsTrigger>
                <TabsTrigger value="episodes">Эпизоды</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="bg-anisoul-gray-dark rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-white">Описание</h2>
                <p className="text-gray-300 mb-6 whitespace-pre-line">{anime.longDescription}</p>
                
                <h3 className="text-lg font-bold mb-3 text-white">Альтернативные названия</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-400">Оригинальное название:</p>
                    <p className="text-gray-200">{anime.originalTitle}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Английское название:</p>
                    <p className="text-gray-200">{anime.englishTitle}</p>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-white">Рейтинг пользователей</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">Сюжет</span>
                      <span className="text-sm text-gray-300">{anime.userRating.story}/10</span>
                    </div>
                    <Progress value={anime.userRating.story * 10} className="h-2 bg-anisoul-gray-light" indicatorClassName="bg-gradient-to-r from-anisoul-purple-medium to-anisoul-purple-neon" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">Анимация</span>
                      <span className="text-sm text-gray-300">{anime.userRating.animation}/10</span>
                    </div>
                    <Progress value={anime.userRating.animation * 10} className="h-2 bg-anisoul-gray-light" indicatorClassName="bg-gradient-to-r from-anisoul-purple-medium to-anisoul-purple-neon" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">Звук</span>
                      <span className="text-sm text-gray-300">{anime.userRating.sound}/10</span>
                    </div>
                    <Progress value={anime.userRating.sound * 10} className="h-2 bg-anisoul-gray-light" indicatorClassName="bg-gradient-to-r from-anisoul-purple-medium to-anisoul-purple-neon" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">Персонажи</span>
                      <span className="text-sm text-gray-300">{anime.userRating.characters}/10</span>
                    </div>
                    <Progress value={anime.userRating.characters * 10} className="h-2 bg-anisoul-gray-light" indicatorClassName="bg-gradient-to-r from-anisoul-purple-medium to-anisoul-purple-neon" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="episodes" className="bg-anisoul-gray-dark rounded-lg p-6">
                <div className="space-y-6">
                  {seasons.map((season) => (
                    <div key={season.id}>
                      <h3 className="text-lg font-bold mb-4 text-white">{season.title}</h3>
                      <div className="space-y-3">
                        {season.episodes.map((episode) => (
                          <div key={episode.number} className="bg-anisoul-gray-light/20 rounded-lg p-4 hover:bg-anisoul-gray-light/30 transition-colors">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-anisoul-purple-deep rounded-full flex items-center justify-center mr-3">
                                  <span className="text-white text-sm font-medium">{episode.number}</span>
                                </div>
                                <div>
                                  <h4 className="text-white font-medium">{episode.title}</h4>
                                  <div className="flex items-center text-xs text-gray-400 mt-1">
                                    <span>{episode.duration}</span>
                                    <span className="mx-2">•</span>
                                    <span>{episode.aired}</span>
                                  </div>
                                </div>
                              </div>
                              <Button size="sm" variant="ghost" className="hover:bg-anisoul-purple-deep/20">
                                <Play className="w-4 h-4 mr-1 text-anisoul-purple-neon" />
                                <span>Смотреть</span>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="bg-anisoul-gray-dark rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">Отзывы</h2>
                  <Button variant="outline" className="border-anisoul-purple-medium/50 hover:bg-anisoul-purple-deep/20">
                    <MessageSquare className="w-4 h-4 mr-2 text-anisoul-purple-neon" />
                    Написать отзыв
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div className="p-4 bg-anisoul-gray-light/20 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-anisoul-purple-deep/50 flex items-center justify-center mr-3">
                        <span className="text-white font-bold">АК</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">АнимеКритик</h4>
                        <div className="flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-3 h-3 text-yellow-400" fill="#FBBF24" />
                            ))}
                          </div>
                          <span className="text-xs text-gray-400 ml-2">15.04.2024</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Одно из лучших аниме, которые я видел за последнее время! Анимация боевых сцен просто потрясающая, 
                      особенно в эпизодах с Годжо Сатору. Сюжет затягивает с первой серии, а персонажи очень харизматичные.
                      Однозначно рекомендую к просмотру всем любителям жанра!
                    </p>
                  </div>
                  
                  <div className="p-4 bg-anisoul-gray-light/20 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-anisoul-purple-deep/50 flex items-center justify-center mr-3">
                        <span className="text-white font-bold">МТ</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">МангаТян</h4>
                        <div className="flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4].map((star) => (
                              <Star key={star} className="w-3 h-3 text-yellow-400" fill="#FBBF24" />
                            ))}
                            <Star className="w-3 h-3 text-gray-400" />
                          </div>
                          <span className="text-xs text-gray-400 ml-2">02.03.2024</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Как читатель манги могу сказать, что адаптация вышла очень достойной. Студия MAPPA отлично 
                      передала атмосферу оригинала и даже улучшила некоторые боевые сцены. Единственное, что немного 
                      расстраивает — это темп повествования, местами он кажется немного торопливым. В целом же - отличное аниме!
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <div className="bg-anisoul-gray-dark rounded-lg p-6 mb-6">
              <h2 className="text-lg font-bold mb-4 text-white">Информация</h2>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-400">Статус:</span>
                  <span className="text-white">{anime.status}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Студия:</span>
                  <span className="text-white">{anime.studio}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Год выпуска:</span>
                  <span className="text-white">{anime.year}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Сезон:</span>
                  <span className="text-white">{anime.season}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Эпизоды:</span>
                  <span className="text-white">{anime.episodes}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Продолжительность:</span>
                  <span className="text-white">{anime.duration} мин.</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Рейтинг:</span>
                  <span className="text-white">{anime.rating}/10</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Популярность:</span>
                  <span className="text-white">#{anime.popularity}</span>
                </li>
                {anime.nextEpisode && (
                  <li className="flex justify-between">
                    <span className="text-gray-400">Следующий эпизод:</span>
                    <span className="text-white">{anime.nextEpisode}</span>
                  </li>
                )}
              </ul>
            </div>
            
            <div className="bg-anisoul-gray-dark rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-white">Похожие аниме</h2>
                <Button variant="link" className="text-anisoul-purple-neon p-0 h-auto">
                  Все <List className="w-3 h-3 ml-1" />
                </Button>
              </div>
              <div className="space-y-4">
                {anime.similarAnime.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-12 h-16 rounded overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-sm font-medium line-clamp-1">{item.title}</h3>
                      <div className="flex items-center text-xs text-gray-400 mt-1">
                        <span>{item.year}</span>
                        <span className="mx-1">•</span>
                        <span>{item.episodes} эп.</span>
                        <div className="flex items-center ml-2">
                          <Star className="w-3 h-3 text-yellow-400" fill="#FBBF24" />
                          <span className="ml-1">{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Футер */}
      <footer className="py-8 border-t border-anisoul-purple-deep/30 bg-anisoul-gray-dark">
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

export default AnimeDetail;
