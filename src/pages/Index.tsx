import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Crown" size={32} className="text-amber-200" />
              <h1
                className="text-3xl font-bold"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Пушкинский бал
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#about"
                className="hover:text-amber-200 transition-colors"
              >
                О событии
              </a>
              <a
                href="#gallery"
                className="hover:text-amber-200 transition-colors"
              >
                Галерея
              </a>
              <a
                href="#dances"
                className="hover:text-amber-200 transition-colors"
              >
                Танцы
              </a>
              <a
                href="#location"
                className="hover:text-amber-200 transition-colors"
              >
                Место
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url(/img/7b2d73fb-db61-4bcd-a4d3-1c9b44d6359a.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <Badge className="mb-4 bg-amber-600 text-white px-4 py-2">
            <Icon name="Calendar" size={16} className="mr-2" />
            15 декабря 2024
          </Badge>
          <h2
            className="text-6xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Пушкинский бал
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Окунитесь в атмосферу XIX века. Бальные танцы, исторические костюмы,
            изысканная музыка и незабываемые впечатления
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              <Icon name="Ticket" size={20} className="mr-2" />
              Купить билет
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-800"
            >
              <Icon name="Info" size={20} className="mr-2" />
              Подробнее
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3
              className="text-4xl font-bold mb-4 text-amber-900"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              О событии
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Пушкинский бал — это уникальное культурное событие, где история
              оживает. Погрузитесь в эпоху великого поэта, насладитесь
              атмосферой русской аристократии и почувствуйте себя героем
              произведений Александра Сергеевича Пушкина.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Music"
                  size={48}
                  className="mx-auto text-amber-600 mb-4"
                />
                <CardTitle className="text-amber-900">Живая музыка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Оркестр исполнит произведения композиторов XIX века
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Sparkles"
                  size={48}
                  className="mx-auto text-amber-600 mb-4"
                />
                <CardTitle className="text-amber-900">
                  Исторические костюмы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Аутентичные наряды эпохи Пушкина и возможность аренды
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Users"
                  size={48}
                  className="mx-auto text-amber-600 mb-4"
                />
                <CardTitle className="text-amber-900">
                  Светское общество
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Встреча с единомышленниками и любителями истории
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h3
            className="text-4xl font-bold text-center mb-12 text-amber-900"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Галерея костюмов
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div
                className="aspect-square bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/img/97d0501e-11a0-47e1-9341-7e42d2938574.jpg)",
                }}
              ></div>
              <CardHeader>
                <CardTitle className="text-amber-900">Дамские платья</CardTitle>
                <CardDescription>
                  Роскошные бальные платья в стиле ампир и романтизм
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div
                className="aspect-square bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/img/258b2b84-cbf9-4b15-8a8b-45b2f5d94baa.jpg)",
                }}
              ></div>
              <CardHeader>
                <CardTitle className="text-amber-900">
                  Мужские костюмы
                </CardTitle>
                <CardDescription>
                  Фраки, жилеты и аксессуары джентльменов XIX века
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-amber-200 flex items-center justify-center">
                <Icon name="Camera" size={64} className="text-amber-600" />
              </div>
              <CardHeader>
                <CardTitle className="text-amber-900">
                  Исторические фото
                </CardTitle>
                <CardDescription>
                  Редкие снимки балов и светских мероприятий прошлого
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Dances Section */}
      <section id="dances" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3
            className="text-4xl font-bold text-center mb-12 text-amber-900"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Танцы и мастер-классы
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center">
                  <Icon
                    name="Heart"
                    size={24}
                    className="mr-2 text-amber-600"
                  />
                  Бальные танцы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-amber-600"
                    />
                    Вальс — король бальных танцев
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-amber-600"
                    />
                    Полонез — торжественный танец
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-amber-600"
                    />
                    Мазурка — польский народный танец
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-amber-600"
                    />
                    Кадриль — французский квадратный танец
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center">
                  <Icon
                    name="GraduationCap"
                    size={24}
                    className="mr-2 text-amber-600"
                  />
                  Мастер-классы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon
                      name="Clock"
                      size={16}
                      className="mr-2 text-amber-600"
                    />
                    <span>
                      <strong>18:00</strong> — Основы бального этикета
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Clock"
                      size={16}
                      className="mr-2 text-amber-600"
                    />
                    <span>
                      <strong>18:30</strong> — Вальс для начинающих
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Clock"
                      size={16}
                      className="mr-2 text-amber-600"
                    />
                    <span>
                      <strong>19:00</strong> — Полонез и мазурка
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Clock"
                      size={16}
                      className="mr-2 text-amber-600"
                    />
                    <span>
                      <strong>19:30</strong> — Свободные танцы
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h3
            className="text-4xl font-bold text-center mb-12 text-amber-900"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Место проведения
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center">
                  <Icon
                    name="MapPin"
                    size={24}
                    className="mr-2 text-amber-600"
                  />
                  Усадьба "Архангельское"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Историческая усадьба XVIII века с роскошными интерьерами и
                  парком. Идеальное место для проведения бала в стиле пушкинской
                  эпохи.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Icon
                      name="MapPin"
                      size={16}
                      className="mr-2 text-amber-600"
                    />
                    <span>Московская область, Красногорский район</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Car"
                      size={16}
                      className="mr-2 text-amber-600"
                    />
                    <span>Бесплатная парковка на 200 мест</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Bus"
                      size={16}
                      className="mr-2 text-amber-600"
                    />
                    <span>Автобус от м. Тушинская</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900">Карта проезда</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-amber-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon
                      name="Map"
                      size={48}
                      className="mx-auto text-amber-600 mb-2"
                    />
                    <p className="text-amber-800">Интерактивная карта</p>
                    <p className="text-sm text-amber-700">
                      Усадьба "Архангельское"
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <Button
                    variant="outline"
                    className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                  >
                    <Icon name="Navigation" size={16} className="mr-2" />
                    Построить маршрут
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Пушкинский бал
              </h4>
              <p className="text-amber-200">
                Культурное событие для ценителей истории и прекрасного
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Контакты</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Icon
                    name="Phone"
                    size={16}
                    className="mr-2 text-amber-400"
                  />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2 text-amber-400" />
                  <span>info@pushkinball.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <Icon
                  name="Instagram"
                  size={24}
                  className="text-amber-400 hover:text-white cursor-pointer"
                />
                <Icon
                  name="Facebook"
                  size={24}
                  className="text-amber-400 hover:text-white cursor-pointer"
                />
                <Icon
                  name="Twitter"
                  size={24}
                  className="text-amber-400 hover:text-white cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2024 Пушкинский бал. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
