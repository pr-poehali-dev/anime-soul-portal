import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { FaVk } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiDiscord } from "react-icons/si";
import NavBar from "@/components/NavBar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика авторизации
    console.log("Логин:", email, password);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика регистрации
    console.log("Регистрация:", username, email, password);
  };

  return (
    <div className="min-h-screen bg-anisoul-dark bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-anisoul-purple-deep/20 via-anisoul-dark to-anisoul-dark">
      <NavBar />
      <main className="container mx-auto px-4 pt-32 pb-16 flex justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-anisoul-purple-light to-anisoul-purple-neon text-transparent bg-clip-text">
              Добро пожаловать в AniSoul
            </h1>
            <p className="text-anisoul-gray-light mt-2">
              Войдите или создайте аккаунт, чтобы получить доступ ко всем возможностям
            </p>
          </div>

          <div className="bg-anisoul-gray-darker p-6 rounded-lg border border-anisoul-purple-deep/30 shadow-xl backdrop-blur-sm">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Вход</TabsTrigger>
                <TabsTrigger value="register">Регистрация</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@mail.com"
                      className="bg-anisoul-gray-dark border-anisoul-purple-medium/30"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="password">Пароль</Label>
                      <Link 
                        to="/forgot-password" 
                        className="text-xs text-anisoul-purple-light hover:text-anisoul-purple-neon transition-colors"
                      >
                        Забыли пароль?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="bg-anisoul-gray-dark border-anisoul-purple-medium/30"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-anisoul-purple-medium hover:bg-anisoul-purple-deep">
                    Войти
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Никнейм</Label>
                    <Input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="AnimeHero"
                      className="bg-anisoul-gray-dark border-anisoul-purple-medium/30"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-email">Email</Label>
                    <Input
                      id="reg-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@mail.com"
                      className="bg-anisoul-gray-dark border-anisoul-purple-medium/30"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-password">Пароль</Label>
                    <Input
                      id="reg-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Минимум 8 символов"
                      className="bg-anisoul-gray-dark border-anisoul-purple-medium/30"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-anisoul-purple-medium hover:bg-anisoul-purple-deep">
                    Создать аккаунт
                  </Button>
                </form>
              </TabsContent>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-anisoul-gray-darker px-2 text-anisoul-gray-light">
                      Или войти через
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Button variant="outline" className="border-anisoul-purple-medium/30 hover:bg-anisoul-purple-medium/20">
                    <FaVk className="h-5 w-5 text-blue-400" />
                  </Button>
                  <Button variant="outline" className="border-anisoul-purple-medium/30 hover:bg-anisoul-purple-medium/20">
                    <FcGoogle className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="border-anisoul-purple-medium/30 hover:bg-anisoul-purple-medium/20">
                    <SiDiscord className="h-5 w-5 text-indigo-400" />
                  </Button>
                </div>
              </div>
            </Tabs>
          </div>
          
          <p className="text-center text-xs text-anisoul-gray-light mt-4">
            Регистрируясь, вы соглашаетесь с {" "}
            <Link to="/terms" className="text-anisoul-purple-light hover:text-anisoul-purple-neon">
              условиями использования
            </Link>{" "}
            и{" "}
            <Link to="/privacy" className="text-anisoul-purple-light hover:text-anisoul-purple-neon">
              политикой конфиденциальности
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
