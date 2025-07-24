import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-vibrant-orange to-teal py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-5xl font-bold mb-6 font-poppins">
                Конкуренты не просто обогнали, а даже не посмотрели назад?
              </h1>
              <p className="text-xl mb-8 font-inter opacity-90">
                Нужно вернуться в игру? Мы знаем, как это сделать быстро и эффективно!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-vibrant-orange hover:bg-gray-100 font-semibold">
                  Получи рецепт для роста продаж
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-vibrant-orange">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/46f75562-1afb-4a37-8f03-ad817d0998cb.jpg" 
                alt="Marketing hero"
                className="w-full h-64 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-navy mb-4 font-[Poppins]">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 font-[Inter]">
              Комплексные решения для вашего маркетинга
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-vibrant-orange rounded-full flex items-center justify-center mb-4">
                  <Icon name="Target" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl font-[Poppins]">Точное попадание</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[Inter]">
                  Анализируем вашу аудиторию и создаем кампании, которые работают на результат
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-teal rounded-full flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl font-[Poppins]">Быстрый рост</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[Inter]">
                  Видимые результаты уже через 30 дней. Увеличиваем продажи и узнаваемость бренда
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-dark-navy rounded-full flex items-center justify-center mb-4">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl font-[Poppins]">Надежность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[Inter]">
                  Работаем по договору с гарантией результата. Ваш успех - наша репутация
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-navy mb-4 font-[Poppins]">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 font-[Inter]">
              Полный спектр маркетинговых решений
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:scale-105 transition-transform duration-300 border-l-4 border-l-vibrant-orange">
              <CardHeader>
                <Icon name="Megaphone" size={24} className="text-vibrant-orange mb-2" />
                <CardTitle className="font-[Poppins]">Контекстная реклама</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[Inter]">
                  Google Ads, Яндекс.Директ
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform duration-300 border-l-4 border-l-teal">
              <CardHeader>
                <Icon name="Users" size={24} className="text-teal mb-2" />
                <CardTitle className="font-[Poppins]">SMM</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[Inter]">
                  Ведение соцсетей
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform duration-300 border-l-4 border-l-dark-navy">
              <CardHeader>
                <Icon name="Search" size={24} className="text-dark-navy mb-2" />
                <CardTitle className="font-[Poppins]">SEO</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[Inter]">
                  Продвижение в поиске
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform duration-300 border-l-4 border-l-vibrant-orange">
              <CardHeader>
                <Icon name="BarChart3" size={24} className="text-vibrant-orange mb-2" />
                <CardTitle className="font-[Poppins]">Аналитика</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[Inter]">
                  Отчеты и аналитика
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-navy to-teal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-[Poppins]">
            Готовы вернуться в игру?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 font-[Inter]">
            Получите бесплатную консультацию и план развития для вашего бизнеса
          </p>
          <Button size="lg" className="bg-vibrant-orange hover:bg-orange-600 text-white font-semibold px-8">
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-navy text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-[Poppins]">Контакты</h3>
              <p className="font-[Inter]">
                Телефон: +7 (999) 123-45-67<br/>
                Email: info@marketing.ru
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-[Poppins]">Услуги</h3>
              <ul className="space-y-2 font-[Inter]">
                <li>Контекстная реклама</li>
                <li>SMM</li>
                <li>SEO</li>
                <li>Аналитика</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-[Poppins]">О компании</h3>
              <p className="font-[Inter]">
                Возвращаем бизнес в игру с помощью эффективного маркетинга
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;