import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-drama-red via-fire-orange to-money-green py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-6xl font-bold mb-6 font-poppins leading-tight">
                Конкуренты не просто обогнали, а даже <span className="text-fire-orange">не посмотрели назад?</span>
              </h1>
              <p className="text-2xl mb-8 font-inter opacity-90 leading-relaxed">
                Нужно вернуться в игру? Мы знаем, как это сделать <span className="text-money-green font-bold">быстро и эффективно!</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-money-green hover:bg-green-600 text-white font-bold text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all">
                  🔥 Получи рецепт для роста продаж
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-drama-red font-semibold text-lg px-6 py-4">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-up">
              <img 
                src="/img/db1c70d7-4157-4041-abc0-e188b256c386.jpg" 
                alt="Драматичная ситуация в бизнесе"
                className="w-full h-80 object-cover rounded-xl shadow-2xl border-4 border-white/20"
              />
              <div className="absolute -top-4 -right-4 bg-money-green text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
                ЭКСТРЕННАЯ ПОМОЩЬ!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-drama-red mb-6 font-poppins">
              Горите от отставания?
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto">
              Пока вы думаете, конкуренты уже захватывают ваших клиентов. Каждый день промедления - это потерянная прибыль.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-drama-red border-2 text-center hover:bg-gray-700 transition-colors">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-drama-red rounded-full flex items-center justify-center mb-4">
                  <Icon name="TrendingDown" size={40} className="text-white" />
                </div>
                <CardTitle className="text-xl font-poppins text-drama-red">Падают продажи</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-inter text-gray-300">
                  Клиенты уходят к конкурентам, которые активнее продвигаются в интернете
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-fire-orange border-2 text-center hover:bg-gray-700 transition-colors">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-fire-orange rounded-full flex items-center justify-center mb-4">
                  <Icon name="Clock" size={40} className="text-white" />
                </div>
                <CardTitle className="text-xl font-poppins text-fire-orange">Время уходит</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-inter text-gray-300">
                  Каждый день без маркетинга - это упущенные возможности и потерянные деньги
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-money-green border-2 text-center hover:bg-gray-700 transition-colors">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-money-green rounded-full flex items-center justify-center mb-4">
                  <Icon name="Target" size={40} className="text-white" />
                </div>
                <CardTitle className="text-xl font-poppins text-money-green">Нет стратегии</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-inter text-gray-300">
                  Хаотичные попытки привлечь клиентов не дают результата
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-r from-money-green to-fire-orange">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 font-poppins">
              🌳 Мы тушим пожар и растим денежное дерево!
            </h2>
            <p className="text-xl text-white/90 font-inter max-w-3xl mx-auto">
              Наша система работает как пожарная команда: быстро, эффективно и с гарантированным результатом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/95 hover:bg-white transition-colors shadow-2xl transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">🚨</div>
                <CardTitle className="font-poppins text-drama-red">ЭКСТРЕННАЯ ДИАГНОСТИКА</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-inter text-gray-700">
                  За 24 часа находим все проблемы в вашем маркетинге
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/95 hover:bg-white transition-colors shadow-2xl transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">💧</div>
                <CardTitle className="font-poppins text-fire-orange">ТУШИМ ПОЖАР</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-inter text-gray-700">
                  Останавливаем потерю клиентов и стабилизируем ситуацию
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/95 hover:bg-white transition-colors shadow-2xl transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">🌱</div>
                <CardTitle className="font-poppins text-money-green">САДИМ ДЕРЕВО</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-inter text-gray-700">
                  Запускаем системы привлечения новых клиентов
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/95 hover:bg-white transition-colors shadow-2xl transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">💰</div>
                <CardTitle className="font-poppins text-money-green">СОБИРАЕМ ПЛОДЫ</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-inter text-gray-700">
                  Получаете стабильный поток клиентов и растущую прибыль
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-navy to-drama-red relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl font-bold text-white mb-6 font-poppins">
            Хватит гореть! 🔥
          </h2>
          <p className="text-2xl text-white mb-8 font-inter max-w-2xl mx-auto">
            Получите персональный план спасения вашего бизнеса и начните обгонять конкурентов уже завтра!
          </p>
          <Button size="lg" className="bg-money-green hover:bg-green-600 text-white font-bold text-2xl px-12 py-6 shadow-2xl transform hover:scale-110 transition-all animate-pulse">
            🎯 ПОЛУЧИ РЕЦЕПТ ДЛЯ РОСТА ПРОДАЖ
          </Button>
          <p className="text-white/80 mt-4 font-inter">
            ⏰ Консультация бесплатна только сегодня!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4 font-poppins text-money-green">Не дайте бизнесу сгореть!</h3>
            <p className="font-inter text-gray-300">
              📞 +7 (999) 123-45-67 | 📧 help@fire-marketing.ru
            </p>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="font-inter text-gray-400">
              © 2024 Пожарная маркетинговая служба. Тушим кризисы, растим прибыль.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;