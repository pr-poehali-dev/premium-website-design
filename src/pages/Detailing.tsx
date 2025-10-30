import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Detailing = () => {
  const services = [
    {
      title: 'Оклейка автомобиля',
      description: 'Защитная и декоративная оклейка виниловыми и полиуретановыми пленками',
      icon: 'Shield',
      features: ['Полная оклейка кузова', 'Частичная оклейка', 'Оклейка элементов']
    },
    {
      title: 'Полировка и керамика',
      description: 'Восстановление ЛКП и долговременная защита',
      icon: 'Sparkles',
      features: ['Абразивная полировка', 'Керамическое покрытие', 'Жидкое стекло']
    },
    {
      title: 'Химчистка салона',
      description: 'Глубокая очистка всех элементов салона',
      icon: 'Droplets',
      features: ['Химчистка сидений', 'Очистка потолка', 'Чистка багажника']
    },
    {
      title: 'PDR (беспокрасочный ремонт)',
      description: 'Удаление вмятин без нарушения ЛКП',
      icon: 'Hammer',
      features: ['Удаление градовых повреждений', 'Ремонт дверей', 'Ремонт капота']
    },
    {
      title: 'Замена стёкол',
      description: 'Быстрая замена автомобильных стекол',
      icon: 'Square',
      features: ['Лобовое стекло', 'Боковые стёкла', 'Заднее стекло']
    },
    {
      title: 'Локальная покраска',
      description: 'Восстановление ЛКП поврежденных элементов',
      icon: 'Paintbrush',
      features: ['Покраска деталей', 'Подбор цвета', 'Полировка после покраски']
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Премиум материалы',
      description: '3M, XPEL, CeramicPro и другие топовые бренды'
    },
    {
      icon: 'Users',
      title: 'Сертифицированные мастера',
      description: 'Опыт работы более 10 лет'
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'До 3 лет гарантии на работы'
    },
    {
      icon: 'Clock',
      title: 'Быстрое выполнение',
      description: 'Соблюдаем сроки и работаем в день обращения'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/20 via-transparent to-black" />
        <img 
          src="https://cdn.poehali.dev/projects/0d3193b1-8fe3-4619-abaf-3cbee0c6bc83/files/9c3781ac-d7cb-4adb-a249-bf68ef40e610.jpg"
          alt="Детейлинг"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Детейлинг премиум-класса
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Полный комплекс услуг по восстановлению и защите вашего автомобиля
          </p>
          <Button 
            size="lg"
            className="bg-gold text-black hover:bg-gold/90 font-semibold text-lg px-8 py-6"
          >
            Записаться на детейлинг
          </Button>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Услуги детейлинга
          </h2>
          <p className="text-center text-white/60 mb-12 text-lg">
            Профессиональный уход за каждым элементом автомобиля
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card 
                key={idx} 
                className="bg-card border-gold/20 hover:border-gold/50 transition-all group hover:scale-105 duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gold/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                    <Icon name={service.icon} size={32} className="text-gold" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-white/60 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-sm text-white/80">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Почему выбирают нас
          </h2>
          <p className="text-center text-white/60 mb-12 text-lg">
            Гарантия качества и внимание к деталям
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="bg-card border-gold/20 hover:border-gold/50 transition-all text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={adv.icon} size={40} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{adv.title}</h3>
                  <p className="text-white/60 text-sm">{adv.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Готовы преобразить ваш автомобиль?
          </h2>
          <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
            Запишитесь на детейлинг прямо сейчас и получите консультацию специалиста
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gold text-black hover:bg-gold/90 font-semibold text-lg px-8 py-6"
            >
              Записаться онлайн
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold/10 font-semibold text-lg px-8 py-6"
            >
              Позвонить: +7 968 664-88-88
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Detailing;
