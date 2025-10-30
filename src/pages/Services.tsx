import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Детейлинг',
      description: 'Комплексный уход и восстановление автомобиля',
      icon: 'Sparkles',
      link: '/detailing',
      services: [
        'Оклейка виниловой и полиуретановой плёнкой',
        'Полировка и керамическое покрытие',
        'Химчистка салона',
        'PDR - беспокрасочный ремонт вмятин',
        'Замена автостёкол',
        'Локальная покраска элементов'
      ]
    },
    {
      title: 'Тонировка',
      description: 'Профессиональная тонировка любой сложности',
      icon: 'Shield',
      link: '/services',
      services: [
        'Атермальная тонировка стёкол',
        'Съёмная силиконовая тонировка',
        'Антигравийная плёнка на капот',
        'Бронирование фар',
        'Тонировка задних фонарей'
      ]
    },
    {
      title: 'Автомойка',
      description: 'Ручная и бесконтактная мойка',
      icon: 'Droplets',
      link: '/services',
      services: [
        'Бесконтактная мойка кузова',
        'Ручная мойка премиум',
        'Мойка двигателя',
        'Химчистка салона',
        'Полировка кузова'
      ]
    },
    {
      title: 'Шумоизоляция',
      description: 'Комфорт и тишина в салоне',
      icon: 'Volume2',
      link: '/services',
      services: [
        'Шумоизоляция дверей',
        'Шумоизоляция пола и арок',
        'Шумоизоляция крыши',
        'Виброизоляция кузова',
        'Акустическая подготовка'
      ]
    },
    {
      title: 'Шиномонтаж',
      description: 'Быстро и качественно',
      icon: 'CircleDot',
      link: '/services',
      services: [
        'Монтаж и демонтаж шин',
        'Балансировка колёс',
        'Ремонт проколов и порезов',
        'Хранение колёс',
        'Проверка давления и геометрии'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/20 via-transparent to-black" />
        <img 
          src="https://cdn.poehali.dev/projects/0d3193b1-8fe3-4619-abaf-3cbee0c6bc83/files/c624e712-481a-4c48-8b36-ebb8550d685b.jpg"
          alt="Услуги"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Все услуги для вашего авто
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            От детейлинга до шиномонтажа — полный спектр услуг в одном месте
          </p>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, idx) => (
              <Card 
                key={idx} 
                className="bg-card border-gold/20 hover:border-gold/50 transition-all group hover:scale-105 duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
                    <Icon name={category.icon} size={40} className="text-gold" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-white">{category.title}</h3>
                  <p className="text-white/60 mb-6 text-lg">{category.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {category.services.map((service, sidx) => (
                      <li key={sidx} className="flex items-start gap-3 text-sm text-white/80">
                        <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0 mt-1.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={category.link}>
                    <Button 
                      className="w-full bg-gold text-black hover:bg-gold/90 font-semibold"
                    >
                      Подробнее
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 text-white">
              Комплексное обслуживание
            </h2>
            <p className="text-center text-white/60 mb-12 text-lg">
              Мы предлагаем не только отдельные услуги, но и выгодные комплексные пакеты
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-gold/20 hover:border-gold/50 transition-all text-center">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gold">Базовый</h3>
                  <p className="text-white/60 mb-4">Мойка + Химчистка</p>
                  <div className="text-3xl font-bold text-white mb-4">от 3 500 ₽</div>
                  <Button className="w-full bg-gold text-black hover:bg-gold/90 font-semibold">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-gold hover:border-gold transition-all text-center scale-105">
                <CardContent className="p-6">
                  <div className="bg-gold text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                    ПОПУЛЯРНЫЙ
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gold">Стандарт</h3>
                  <p className="text-white/60 mb-4">Полировка + Керамика</p>
                  <div className="text-3xl font-bold text-white mb-4">от 15 000 ₽</div>
                  <Button className="w-full bg-gold text-black hover:bg-gold/90 font-semibold">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-gold/20 hover:border-gold/50 transition-all text-center">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gold">Премиум</h3>
                  <p className="text-white/60 mb-4">Полный детейлинг</p>
                  <div className="text-3xl font-bold text-white mb-4">от 35 000 ₽</div>
                  <Button className="w-full bg-gold text-black hover:bg-gold/90 font-semibold">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Нужна консультация?
          </h2>
          <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
            Наши специалисты помогут подобрать оптимальный пакет услуг для вашего автомобиля
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gold text-black hover:bg-gold/90 font-semibold text-lg px-8 py-6"
            >
              Получить консультацию
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold/10 font-semibold text-lg px-8 py-6"
            >
              +7 968 664-88-88
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
