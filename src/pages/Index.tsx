import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      id: 'detailing',
      title: 'Детейлинг',
      description: 'Полный комплекс услуг по уходу за автомобилем',
      icon: 'Sparkles',
      features: ['Оклейка авто', 'Полировка и керамика', 'Химчистка', 'PDR', 'Замена стёкол', 'Локальная покраска']
    },
    {
      id: 'tinting',
      title: 'Тонировка',
      description: 'Профессиональная тонировка сертифицированными материалами',
      icon: 'Shield',
      features: ['Атермальная тонировка', 'Съёмная тонировка', 'Антигравийная плёнка']
    },
    {
      id: 'carwash',
      title: 'Автомойка',
      description: 'Бесконтактная и ручная мойка премиум-класса',
      icon: 'Droplets',
      features: ['Бесконтактная мойка', 'Химчистка салона', 'Мойка двигателя']
    },
    {
      id: 'soundproofing',
      title: 'Шумоизоляция',
      description: 'Качественная изоляция для вашего комфорта',
      icon: 'Volume2',
      features: ['Шумоизоляция дверей', 'Шумоизоляция пола', 'Шумоизоляция крыши']
    },
    {
      id: 'tireshop',
      title: 'Шиномонтаж',
      description: 'Быстрый и качественный шиномонтаж',
      icon: 'CircleDot',
      features: ['Монтаж/демонтаж', 'Балансировка', 'Ремонт шин']
    }
  ];

  const prices = [
    { service: 'Тонировка', price: 'от 4 000 ₽' },
    { service: 'Детейлинг', price: 'от 10 000 ₽' },
    { service: 'Шумоизоляция', price: 'от 12 000 ₽' },
    { service: 'Шиномонтаж', price: 'от 1 000 ₽' },
    { service: 'Автомойка', price: 'от 700 ₽' }
  ];

  const advantages = [
    { icon: 'Award', title: 'Сертифицированные материалы', description: 'Работаем только с проверенными брендами' },
    { icon: 'Users', title: 'Опытные мастера', description: 'Более 10 лет на рынке премиум-услуг' },
    { icon: 'Clock', title: 'Работаем в день обращения', description: 'Быстрая запись и выполнение работ' }
  ];

  const faqItems = [
    { question: 'Какие гарантии вы даёте?', answer: 'Мы предоставляем гарантию на все виды работ от 6 месяцев до 3 лет в зависимости от услуги.' },
    { question: 'Сколько времени занимает тонировка?', answer: 'Тонировка автомобиля занимает от 2 до 4 часов в зависимости от типа автомобиля.' },
    { question: 'Можно ли записаться на сегодня?', answer: 'Да, мы стараемся принять клиентов в день обращения. Позвоните нам для уточнения.' },
    { question: 'Какие материалы вы используете?', answer: 'Мы работаем только с сертифицированными материалами премиум-класса от мировых производителей.' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gold">Propellini Premium</h1>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="text-sm hover:text-gold transition-colors">Главная</button>
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-gold transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('prices')} className="text-sm hover:text-gold transition-colors">Цены</button>
            <button onClick={() => scrollToSection('about')} className="text-sm hover:text-gold transition-colors">О нас</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-gold transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contacts')} className="bg-gold text-black hover:bg-gold-light font-semibold">
            Записаться
          </Button>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-transparent pointer-events-none" />
        <img 
          src="https://cdn.poehali.dev/projects/0d3193b1-8fe3-4619-abaf-3cbee0c6bc83/files/9c3781ac-d7cb-4adb-a249-bf68ef40e610.jpg"
          alt="Premium Mercedes"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            Премиальная тонировка<br />и детейлинг
          </h1>
          <p className="text-2xl text-muted-foreground mb-8">
            Быстро. Без пыли. С гарантией качества.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contacts')} 
              size="lg"
              className="bg-gold text-black hover:bg-gold-light font-semibold text-lg px-8 py-6"
            >
              Записаться
            </Button>
            <Button 
              onClick={() => scrollToSection('services')} 
              variant="outline" 
              size="lg"
              className="border-gold text-gold hover:bg-gold/10 font-semibold text-lg px-8 py-6"
            >
              Услуги
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="bg-card border-gold/20 hover:border-gold/50 transition-all hover:shadow-lg hover:shadow-gold/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={adv.icon} size={32} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{adv.title}</h3>
                  <p className="text-muted-foreground">{adv.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/0d3193b1-8fe3-4619-abaf-3cbee0c6bc83/files/c624e712-481a-4c48-8b36-ebb8550d685b.jpg"
            alt="BMW"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">Комплексный уход за вашим автомобилем</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="bg-card/90 backdrop-blur border-gold/30 hover:border-gold transition-all group hover:scale-105 duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gold/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                    <Icon name={service.icon} size={28} className="text-gold" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
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

      <section id="prices" className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">Цены</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">Прозрачное ценообразование</p>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-card border-gold/30">
              <CardContent className="p-8">
                {prices.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex justify-between items-center py-4 border-b border-muted last:border-b-0"
                  >
                    <span className="text-lg font-medium">{item.service}</span>
                    <span className="text-2xl font-bold text-gold">{item.price}</span>
                  </div>
                ))}
                <div className="mt-8 text-center">
                  <Button 
                    onClick={() => scrollToSection('contacts')}
                    size="lg"
                    className="bg-gold text-black hover:bg-gold-light font-semibold"
                  >
                    Рассчитать стоимость
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://cdn.poehali.dev/projects/0d3193b1-8fe3-4619-abaf-3cbee0c6bc83/files/65f853f6-2cc8-4236-b9cd-1c45b15cd703.jpg"
            alt="Detailing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-card/90 backdrop-blur border border-gold/30 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-gold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">О нас</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Мы более 10 лет работаем с премиальными автомобилями Mercedes, BMW, Porsche.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Наша цель — качество, доверие и стиль. Каждый автомобиль для нас — это не просто работа, 
                а возможность показать мастерство и внимание к деталям.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Гарантия качества</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/0d3193b1-8fe3-4619-abaf-3cbee0c6bc83/files/9c3781ac-d7cb-4adb-a249-bf68ef40e610.jpg"
                alt="Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">Свяжитесь с нами удобным способом</p>
          <Card className="bg-card border-gold/30">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Телефон</div>
                    <a href="tel:+79686648888" className="text-2xl font-bold hover:text-gold transition-colors">
                      +7 968 664-88-88
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Время работы</div>
                    <div className="text-xl font-semibold">10:00 — 20:00</div>
                  </div>
                </div>
                <div className="pt-6 border-t border-muted">
                  <div className="text-center mb-4 text-muted-foreground">Мессенджеры</div>
                  <div className="flex gap-4 justify-center">
                    <Button 
                      size="lg"
                      className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold"
                      onClick={() => window.open('https://wa.me/79686648888', '_blank')}
                    >
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      WhatsApp
                    </Button>
                    <Button 
                      size="lg"
                      className="bg-[#0088cc] hover:bg-[#006ba8] text-white font-semibold"
                      onClick={() => window.open('https://t.me/propellini', '_blank')}
                    >
                      <Icon name="Send" size={20} className="mr-2" />
                      Telegram
                    </Button>
                    <Button 
                      size="lg"
                      className="bg-[#0077FF] hover:bg-[#0066DD] text-white font-semibold"
                      onClick={() => window.open('https://vk.com/propellini', '_blank')}
                    >
                      <Icon name="Share2" size={20} className="mr-2" />
                      VK
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary/80 border-t border-gold/20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Propellini Premium. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
