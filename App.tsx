
import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Target, 
  TrendingUp, 
  Video, 
  CheckCircle, 
  Menu, 
  X, 
  Zap, 
  Instagram,
  Send,
  Clapperboard,
  ChevronRight,
  Globe,
  Award,
  Users
} from 'lucide-react';
import AIChat from './components/AIChat';
import { FormStatus } from './types';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus(FormStatus.SUBMITTING);
    setTimeout(() => {
      setFormStatus(FormStatus.SUCCESS);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const testimonials = [
    { name: "Адель Г.", role: "CEO Digital Agency", text: "Команда FlowReels полностью пересмотрела наш подход к рекламе. За месяц мы получили в 3 раза больше лидов при том же бюджете. Однозначно рекомендую!" },
    { name: "Алмаз Б.", role: "Founder E-commerce", text: "Команда FlowReels полностью пересмотрела наш подход к рекламе. За месяц мы получили в 3 раза больше лидов при том же бюджете. Однозначно рекомендую!" },
    { name: "Артем К.", role: "Marketing Director", text: "Команда FlowReels полностью пересмотрела наш подход к рекламе. За месяц мы получили в 3 раза больше лидов при том же бюджете. Однозначно рекомендую!" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Clapperboard className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">Flow<span className="text-indigo-400">Reels</span></span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => handleScroll('services')} className="text-slate-300 hover:text-white transition font-medium">Услуги</button>
              <button onClick={() => handleScroll('process')} className="text-slate-300 hover:text-white transition font-medium">Процесс</button>
              <button onClick={() => handleScroll('reviews')} className="text-slate-300 hover:text-white transition font-medium">Кейсы</button>
              <button 
                onClick={() => handleScroll('contact')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full font-bold transition duration-300 shadow-lg shadow-indigo-600/20 active:scale-95"
              >
                Обсудить проект
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible h-auto p-4' : 'opacity-0 invisible h-0 overflow-hidden'}`}>
          <div className="flex flex-col space-y-4">
            <button onClick={() => handleScroll('services')} className="text-left text-slate-300 py-3 border-b border-slate-800">Услуги</button>
            <button onClick={() => handleScroll('process')} className="text-left text-slate-300 py-3 border-b border-slate-800">Процесс</button>
            <button onClick={() => handleScroll('contact')} className="text-left text-indigo-400 font-bold py-3">Обсудить проект</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-40 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] -z-10"></div>
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-sm font-semibold mb-10 shadow-xl animate-bounce">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
            Свободны для новых проектов
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
            Видео, которое <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">продает.</span><br />
            Таргет, который <span className="underline decoration-indigo-500/50 underline-offset-8">бьет в цель.</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed font-light">
            Мы превращаем внимание в прибыль. Студия полного цикла: от виральных сценариев до системного масштабирования рекламных кампаний.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              onClick={() => handleScroll('contact')}
              className="group relative px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-xl transition-all duration-300 shadow-2xl shadow-indigo-600/40 hover:-translate-y-1 flex items-center gap-3 overflow-hidden"
            >
              <Zap size={24} className="group-hover:animate-pulse" />
              Рассчитать стоимость
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </button>
            <button 
              onClick={() => handleScroll('services')}
              className="px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-xl transition-all duration-300 border border-slate-700 flex items-center gap-3"
            >
              <Play size={24} fill="white" />
              Смотреть шоурил
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black mb-6">Профессиональный <span className="text-indigo-500">Маркетинг-Стек</span></h2>
              <p className="text-slate-400 text-lg">Мы не просто снимаем "красиво". Мы проектируем воронки, где каждый кадр работает на удержание внимания и конверсию.</p>
            </div>
            <button onClick={() => handleScroll('contact')} className="hidden md:flex items-center gap-2 text-indigo-400 font-bold hover:text-white transition text-lg group">
              Все услуги <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-950/50 p-10 rounded-3xl border border-slate-800 hover:border-indigo-500/50 transition duration-500 group relative overflow-hidden">
              <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition duration-500">
                <Video className="text-indigo-500 group-hover:text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Video Production</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">Создаем контент, который невозможно пролистнуть. Reels, Shorts, TikTok and рекламные креативы с CTR выше среднего по рынку.</p>
              <ul className="space-y-4">
                {['Сценарии с триггерами', 'UGC & Lifestyle съемки', 'Профессиональный цветокор'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                    <CheckCircle size={18} className="text-indigo-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950/50 p-10 rounded-3xl border border-slate-800 hover:border-purple-500/50 transition duration-500 group relative overflow-hidden">
              <div className="w-16 h-16 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 transition duration-500">
                <Target className="text-purple-500 group-hover:text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Targeted Ads</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">Техническая настройка и глубокая аналитика. Масштабируем связки, которые приносят окупаемые лиды.</p>
              <ul className="space-y-4">
                {['Медиапланирование', 'A/B тестирование офферов', 'Ретаргетинг на вовлеченных'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                    <CheckCircle size={18} className="text-purple-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950/50 p-10 rounded-3xl border border-slate-800 hover:border-indigo-500/50 transition duration-500 group relative overflow-hidden">
              <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition duration-500">
                <TrendingUp className="text-indigo-500 group-hover:text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Full Strategy</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">Берем на себя всю систему маркетинга: от позиционирования до прибыли в CRM. Ваш рост — наша ответственность.</p>
              <ul className="space-y-4">
                {['Аналитика конкурентов', 'Разработка автоворонок', 'Консалтинг по продажам'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                    <CheckCircle size={18} className="text-indigo-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-indigo-600 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black mb-1">500+</p>
              <p className="text-indigo-200 text-sm font-bold uppercase">Проектов</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black mb-1">$3M+</p>
              <p className="text-indigo-200 text-sm font-bold uppercase">Бюджета</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black mb-1">x4.2</p>
              <p className="text-indigo-200 text-sm font-bold uppercase">Avg. ROAS</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black mb-1">100%</p>
              <p className="text-indigo-200 text-sm font-bold uppercase">Вовлеченность</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6">4 Шага к результату</h2>
            <div className="h-1.5 w-24 bg-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-[50%] left-0 w-full h-0.5 border-t-2 border-dashed border-slate-700 -translate-y-1/2 -z-10"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", icon: <Users size={32} />, title: "Погружение", desc: "Раскапываем ваши смыслы и боли аудитории. Создаем фундамент стратегии." },
                { step: "02", icon: <Clapperboard size={32} />, title: "Создание", desc: "Съемка, которая цепляет, и монтаж, который не дает оторваться." },
                { step: "03", icon: <Globe size={32} />, title: "Запуск", desc: "Точечный посев рекламы и непрерывное A/B тестирование гипотез." },
                { step: "04", icon: <Award size={32} />, title: "Профит", desc: "Анализ ROMI, масштабирование лучших креативов и рост прибыли." }
              ].map((item, index) => (
                <div key={index} className="bg-slate-900 border border-slate-800 p-8 rounded-[40px] hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 relative group">
                  <div className="absolute -top-6 -left-2 text-7xl font-black text-slate-800/30 select-none group-hover:text-indigo-500/20 transition-colors">{item.step}</div>
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Placeholder */}
      <section id="reviews" className="py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-12">Что говорят клиенты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-950 p-8 rounded-3xl border border-slate-800 text-left italic relative">
                 <div className="absolute -top-4 -left-4 text-6xl text-indigo-500 opacity-20">"</div>
                 <p className="text-slate-300 mb-6">"{t.text}"</p>
                 <div className="flex items-center gap-4">
                    <img src={`https://picsum.photos/seed/${t.name}/64/64`} className="w-12 h-12 rounded-full grayscale" alt="Client" />
                    <div>
                      <p className="font-bold not-italic">{t.name}</p>
                      <p className="text-slate-500 text-sm not-italic">{t.role}</p>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -z-10"></div>
         
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Построим <span className="text-indigo-500">будущее</span> вашего бренда?</h2>
               <p className="text-xl text-slate-400 mb-10">Оставьте заявку на бесплатный аудит ваших рекламных кампаний и получите 3 готовых сценария для Reels.</p>
               
               <div className="space-y-6">
                 <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Instagram</p>
                      <p className="font-bold">@flowreels_01</p>
                    </div>
                 </div>
                 <a 
                   href="https://t.me/flowreels_" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex items-center gap-4 text-slate-300 hover:text-indigo-400 transition group"
                 >
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 group-hover:border-indigo-500">
                      <Send size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Telegram</p>
                      <p className="font-bold">@flowreels_01</p>
                    </div>
                 </a>
               </div>
             </div>

             <div className="bg-slate-900 border border-slate-800 rounded-[40px] p-8 md:p-12 shadow-3xl shadow-indigo-600/5 relative">
               {formStatus === FormStatus.SUCCESS ? (
                 <div className="text-center py-20">
                   <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                     <CheckCircle className="text-green-500 w-12 h-12" />
                   </div>
                   <h3 className="text-3xl font-black mb-4">Спасибо!</h3>
                   <p className="text-slate-400 text-lg mb-10">Ваша заявка уже в обработке. Мы перезвоним в течение 15 минут.</p>
                   <button 
                     onClick={() => setFormStatus(FormStatus.IDLE)}
                     className="px-8 py-3 bg-indigo-600 rounded-xl font-bold"
                   >
                     Отправить еще раз
                   </button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="space-y-4">
                     <div>
                       <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Имя</label>
                       <input type="text" required placeholder="Как к вам обращаться?" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition" />
                     </div>
                     <div>
                       <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Контакт</label>
                       <input type="text" required placeholder="Телефон или Telegram" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition" />
                     </div>
                     <div>
                       <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">Проект</label>
                       <textarea rows={3} placeholder="Расскажите вкратце о вашем продукте..." className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"></textarea>
                     </div>
                   </div>
                   
                   <button 
                     type="submit" 
                     disabled={formStatus === FormStatus.SUBMITTING}
                     className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/50 text-white font-black text-lg py-5 rounded-2xl transition-all shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-3 active:scale-95"
                   >
                     {formStatus === FormStatus.SUBMITTING ? <LoaderCircle /> : <><Send size={20} /> Получить аудит</>}
                   </button>
                   <p className="text-[10px] text-center text-slate-500 uppercase tracking-widest font-bold">Нажимая кнопку, вы соглашаетесь с условиями сервиса</p>
                 </form>
               )}
             </div>
           </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-xs">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Clapperboard className="text-white w-5 h-5" />
                </div>
                <span className="font-black text-2xl">Flow<span className="text-indigo-400">Reels</span></span>
              </div>
              <p className="text-slate-500 leading-relaxed font-medium">Создаем контент нового поколения. Мы не просто агентство — мы ваш партнер в достижении сверхприбыли.</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
              <div>
                <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Навигация</h4>
                <ul className="space-y-4 text-slate-500 text-sm font-bold">
                  <li><button onClick={() => handleScroll('services')} className="hover:text-indigo-400 transition">Услуги</button></li>
                  <li><button onClick={() => handleScroll('process')} className="hover:text-indigo-400 transition">Процесс</button></li>
                  <li><button onClick={() => handleScroll('reviews')} className="hover:text-indigo-400 transition">Кейсы</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Соцсети</h4>
                <ul className="space-y-4 text-slate-500 text-sm font-bold">
                  <li><a href="#" className="hover:text-indigo-400 transition">Instagram</a></li>
                  <li><a href="https://t.me/flowreels_" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Telegram</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition">YouTube</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-600 text-xs font-bold uppercase tracking-widest">
            <p>© 2025 FlowReels Production. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant Component */}
      <AIChat />
    </div>
  );
};

const LoaderCircle = () => (
  <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

export default App;
