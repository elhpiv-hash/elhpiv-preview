(function(){
  "use strict";

  /* Номер счётчика Яндекс Метрики. 0 — счётчик выключен: tag.js не
     загружается ни при каком выборе в уведомлении о cookie. */
  const METRIKA_ID = 0;

  /* ============ I18N DICTIONARY ============ */
  const I18N = {
    ru: {
      doc_title:"elhp.iv — студия разработки сайтов | лендинги и сайты под ключ",
      aria_theme:"Сменить тему", aria_menu:"Открыть меню",
      nav_services:"Услуги", nav_cases:"Кейсы", nav_process:"Процесс",
      nav_pricing:"Цены", nav_faq:"Вопросы", nav_contact:"Обсудить проект",

      hero_eyebrow:"elhp.iv · студия разработки сайтов",
      hero_title:"Сайты, которые вызывают <b>доверие</b> и приводят клиентов",
      hero_subtitle:"Делаю сайты под ключ для специалистов, где решает репутация — от структуры и дизайна до домена, почты и аналитики.",
      hero_cta1:"Смотреть работы", hero_cta2:"Обсудить проект",
      hero_stat1:"Под ключ: домен, хостинг, почта, аналитика",
      hero_stat2:"Чистый код, не конструктор",
      hero_stat3:"Настраиваю так, чтобы приносил заявки",

      services_label:"Услуги", services_title:"Что делаю",
      service1_title:"Лендинг",
      service1_text:"Одностраничный сайт под запуск услуги: ясное сообщение, структура доверия и одно понятное действие — заявка.",
      service2_title:"Многостраничный сайт",
      service2_text:"Цельная структура из нескольких страниц: услуги, о специалисте, кейсы, контакты — всё, что нужно клиенту, чтобы принять решение.",
      service3_title:"Запуск под ключ и доработки",
      service3_text:"Домен, хостинг, SSL, доменная почта, Яндекс.Метрика с целями, реклама, доработки после сдачи. Отдаю не картинку, а работающий инструмент.",
      service4_title:"Посадочные страницы",
      service4_text:"Отдельные страницы под направления и услуги — со своими заголовками, разметкой и целями в Метрике.",
      service5_title:"Яндекс Директ",
      service5_text:"Кампании на поиске: ключевые и минус-слова. Первый месяц контролирую, как работают кампании.",
      service6_title:"Яндекс Бизнес и 2ГИС",
      service6_text:"Заполняю карточки организации: описание, услуги с ценами, фото.",

      cases_label:"Работы", cases_title:"Кейсы и отзывы",
      cases_lead:"Работы, которые уже приносят клиентам заявки.",
      case_open:"Открыть сайт",
      case_done_label:"Что сделано",
      case1_note:"",
      case1_done:"Лендинг, затем страницы «Срочный выезд адвоката» и «Адвокат по делам о мошенничестве». Политика конфиденциальности и согласие на обработку данных, Яндекс Метрика с целями, уведомления о заявках в Telegram.",
      case1_quote:"Иван, большое спасибо за проделанную работу! Разработка сайта заняла достаточно продолжительное время, поскольку для меня было важно получить действительно качественный результат. На протяжении всей работы Иван внимательно относился к каждому пожеланию, спокойно воспринимал замечания, предлагал грамотные решения и оперативно вносил необходимые изменения. Отдельно хочу отметить его профессиональный подход и внимание к деталям. Иван не ограничился технической реализацией сайта, а помог выстроить его структуру, продумать позиционирование, разобраться с регистрацией домена, настройкой хостинга, доменной почты, аналитики и всеми техническими вопросами, возникавшими в процессе запуска. В результате получился современный, профессиональный и удобный сайт, который полностью соответствует моим ожиданиям и тем задачам, которые я ставил перед разработкой. Спасибо за ответственное отношение к работе, терпение и готовность довести проект до действительно качественного результата. С уверенностью могу рекомендовать Ивана как надежного, компетентного и добросовестного специалиста.",
      case1_name:"Иванцов Сергей Анатольевич",
      case1_role:"Адвокат по уголовным делам, Москва",
      case2_note:"",
      case2_done:"",
      case2_quote:"Хочу выразить благодарность Ивану за профессиональную разработку сайта адвоката. Работа была выполнена качественно, в оговоренные сроки и с вниманием ко всем деталям. Иван всегда был на связи и оперативно вносил необходимые изменения. Полностью доволен результатом, рекомендую к сотрудничеству.",
      case2_name:"Силантьев Андрей Анатольевич",
      case2_role:"Адвокат, Москва",
      case3_done:"Сайт, Яндекс Директ, карточки в Яндекс Бизнесе.",
      case3_name:"Дмитриев Александр Николаевич",
      case3_role:"Адвокат, Санкт-Петербург и Великий Новгород",

      lab_label:"Личные работы", lab_title:"Личные работы",
      lab_lead:"Пет-проекты, на которых обкатываю идеи и технологии.",
      lab_tag:"Пет-проект",
      lab_plume_title:"Plume",
      lab_plume_text:"Plume — социальная сеть. Проект в разработке.",

      process_label:"Процесс", process_title:"Как я работаю",
      process_lead:"Прозрачно от заявки до запуска — вы всегда знаете, на каком этапе проект.",
      step1_num:"Шаг 01", step1_title:"Бриф", step1_text:"Обсуждаем задачу, аудиторию и результат. Фиксируем структуру, объём, сроки и стоимость.",
      step2_num:"Шаг 02", step2_title:"Договор и предоплата", step2_text:"Объём, сроки и стоимость закрепляем в договоре. Работаю по предоплате, на каждую оплату — чек самозанятого.",
      step3_num:"Шаг 03", step3_title:"Прототип", step3_text:"Показываю структуру и визуальное решение до кода — на этом этапе правки самые быстрые.",
      step4_num:"Шаг 04", step4_title:"Сборка", step4_text:"Собираю сайт: адаптив, анимации, корректная работа всех блоков и состояний.",
      step5_num:"Шаг 05", step5_title:"Правки и запуск", step5_text:"Вношу правки и помогаю с запуском под ключ: домен, хостинг, доменная почта, аналитика.",
      step6_num:"Шаг 06", step6_title:"После запуска", step6_text:"Проверяю сайт после публикации: заявки, уведомления, цели Метрики. Присылаю отчёт, найденные ошибки исправляю бесплатно.",

      pricing_label:"Цены", pricing_title:"Сколько это стоит",
      pricing_lead:"Ориентир по стоимости. Точную цену называю после короткого брифа — зависит от объёма.",
      price1_tier:"Лендинг", price1_value:"от 35 000 ₽",
      price1_desc:"Одностраничный сайт под запуск услуги.",
      price1_li1:"1 страница, адаптив", price1_li2:"Структура доверия и заявка", price1_li3:"Готовый код на руки",
      price_badge:"Чаще всего берут",
      price2_tier:"Многостраничный сайт", price2_value:"от 50 000 ₽",
      price2_desc:"Сайт из нескольких страниц с цельной структурой.",
      price2_li1:"Несколько страниц", price2_li2:"Адаптив + анимации", price2_li3:"Локализация по запросу",
      extras_title:"Дополнительно",
      extra1_name:"Дополнительная страница", extra1_value:"от 4 000 ₽",
      extra2_name:"Настройка Яндекс Директа", extra2_value:"от 5 000 ₽",
      extra3_name:"Карточки в Яндекс Бизнесе и 2ГИС", extra3_value:"от 5 000 ₽",
      faq_label:"Вопросы", faq_title:"Частые вопросы",
      faq1_q:"Что входит в работу под ключ?",
      faq1_a:"Полный цикл: позиционирование, структура, дизайн и вёрстка, регистрация домена, хостинг, SSL, доменная почта, Яндекс.Метрика с целями и запуск. На выходе — работающий сайт, а не просто макет.",
      faq2_q:"Помогаете с доменом и хостингом?",
      faq2_a:"Да. Помогаю подобрать и зарегистрировать домен, настроить хостинг и SSL, поднять доменную почту вида имя@вашсайт.ru. Всё оформляется на вас — доступы остаются у вас.",
      faq3_q:"Сколько стоит и от чего зависит цена?",
      faq3_a:"Ориентиры — в блоке «Цены» выше: лендинг от 35 000 ₽, многостраничник от 50 000 ₽. Финальная сумма зависит от числа страниц, объёма контента и задач по запуску. Точную цифру называю после короткого брифа.",
      faq4_q:"Какие сроки?",
      faq4_a:"Лендинг — от нескольких дней. Многостраничный сайт — дольше, зависит от объёма. Точный срок фиксируем после брифа и держим на связи на каждом этапе.",
      faq5_q:"Смогу ли редактировать сам и будет ли поддержка?",
      faq5_a:"Код чистый и понятный, без тяжёлых систем управления. По запросу объясню, как вносить простые правки самому. Дальнейшие доработки и поддержку веду отдельно — обсуждаем по задаче.",
      faq6_q:"Нужно ли мне писать тексты самому?",
      faq6_a:"Тексты о вашей работе лучше готовите вы: профессиональные и юридические формулировки я не переписываю. Помогаю со структурой страницы, заголовками и SEO-параметрами.",
      faq7_q:"Как оформляется оплата?",
      faq7_a:"Работаю по договору как самозанятый. На каждую оплату выдаю чек.",

      contact_label:"Контакты", contact_title:"Расскажите про проект",
      contact_lead:"Опишите задачу в паре предложений — отвечу, предложу решение и сроки. Без обязательств.",
      contact_tg_label:"Telegram", contact_channel_label:"Канал с работами",
      contact_channel_value:"Открыть в Telegram", contact_email_label:"Email",
      contact_note:"Самозанятый, работаю по договору, чек на каждую оплату.",

      footer_text:"© 2026 elhp.iv · студия разработки сайтов",
      footer_policy:"Политика конфиденциальности", footer_cookie:"Настройки cookie",

      cookie_title:"Файлы cookie",
      cookie_text:"Яндекс Метрика помогает понять, как посетители пользуются сайтом. Её cookie появятся только после «Принять», отказ ничего не ограничивает. <a href=\"/elhpiv-preview/policy/#cookie\">Подробнее</a>",
      cookie_accept:"Принять", cookie_decline:"Только необходимые",
      cookie_close:"Закрыть и оставить только необходимые cookie"
    },
    en: {
      doc_title:"elhp.iv — web studio | landing pages & turnkey sites",
      aria_theme:"Toggle theme", aria_menu:"Open menu",
      nav_services:"Services", nav_cases:"Cases", nav_process:"Process",
      nav_pricing:"Pricing", nav_faq:"FAQ", nav_contact:"Start a project",

      hero_eyebrow:"elhp.iv · web development studio",
      hero_title:"Sites that build <b>trust</b> and bring clients",
      hero_subtitle:"I build turnkey sites for specialists whose reputation matters — from structure and design to domain, email and analytics.",
      hero_cta1:"See the work", hero_cta2:"Discuss your project",
      hero_stat1:"Turnkey: domain, hosting, email, analytics",
      hero_stat2:"Clean code, not a website builder",
      hero_stat3:"Tuned to bring in leads",

      services_label:"Services", services_title:"What I do",
      service1_title:"Landing page",
      service1_text:"A one-page site for launching a service: a clear message, a structure that builds trust and one obvious action — the enquiry.",
      service2_title:"Multi-page site",
      service2_text:"A cohesive structure across several pages: services, about, cases, contacts — everything a client needs to make a decision.",
      service3_title:"Turnkey launch & revisions",
      service3_text:"Domain, hosting, SSL, custom email, Yandex.Metrica with goals, ads, revisions after delivery. I hand over a working tool, not just a picture.",
      service4_title:"Dedicated landing pages",
      service4_text:"Separate pages for each line of work or service — with their own headings, markup and Metrica goals.",
      service5_title:"Yandex Direct",
      service5_text:"Search campaigns: keywords and negative keywords. For the first month I keep an eye on how the campaigns perform.",
      service6_title:"Yandex Business & 2GIS",
      service6_text:"I fill in your business listings: description, services with prices, photos.",

      cases_label:"Work", cases_title:"Cases & reviews",
      cases_lead:"Work that already brings clients enquiries.",
      case_open:"Open the site",
      case_done_label:"What was done",
      case1_note:"Translated from Russian",
      case1_done:"A landing page, then the “Urgent lawyer call-out” and “Fraud cases lawyer” pages. Privacy policy and data-processing consent, Yandex Metrica with goals, Telegram notifications about new enquiries.",
      case1_quote:"Ivan, thank you very much for your work! Development took quite a long time, because getting a truly high-quality result mattered to me. Throughout the work Ivan paid careful attention to every wish, took feedback calmly, offered sound solutions and promptly made the necessary changes. I especially want to note his professional approach and attention to detail. Ivan didn't limit himself to the technical implementation — he helped shape the structure, think through the positioning, and sort out domain registration, hosting setup, custom email, analytics and every technical question that came up during launch. The result is a modern, professional and convenient site that fully meets my expectations and the goals I set for the project. Thank you for your responsible attitude, patience and willingness to see the project through to a genuinely high-quality result. I can confidently recommend Ivan as a reliable, competent and conscientious specialist.",
      case1_name:"Sergey Anatolyevich Ivantsov",
      case1_role:"Criminal defense lawyer, Moscow",
      case2_note:"Translated from Russian",
      case2_done:"",
      case2_quote:"I want to thank Ivan for the professional development of a lawyer's website. The work was done to a high standard, within the agreed timeframe and with attention to every detail. Ivan was always in touch and promptly made the necessary changes. I'm fully satisfied with the result and recommend working with him.",
      case2_name:"Andrey Anatolyevich Silantyev",
      case2_role:"Lawyer, Moscow",
      case3_done:"Website, Yandex Direct, Yandex Business listings.",
      case3_name:"Alexander Nikolaevich Dmitriev",
      case3_role:"Lawyer, Saint Petersburg and Veliky Novgorod",

      lab_label:"Personal work", lab_title:"Personal work",
      lab_lead:"Pet projects where I test out ideas and technologies.",
      lab_tag:"Pet project",
      lab_plume_title:"Plume",
      lab_plume_text:"Plume — a social network. Currently in development.",

      process_label:"Process", process_title:"How I work",
      process_lead:"Transparent from request to launch — you always know where the project stands.",
      step1_num:"Step 01", step1_title:"Brief", step1_text:"We discuss the task, audience and outcome. We lock the structure, scope, timeline and price.",
      step2_num:"Step 02", step2_title:"Contract & prepayment", step2_text:"We fix the scope, timeline and price in a contract. I work on prepayment and issue a self-employed receipt for every payment.",
      step3_num:"Step 03", step3_title:"Prototype", step3_text:"I show structure and visual direction before code — changes are fastest at this stage.",
      step4_num:"Step 04", step4_title:"Build", step4_text:"I build the site: responsiveness, animations, all blocks and states working correctly.",
      step5_num:"Step 05", step5_title:"Revisions & launch", step5_text:"I apply your feedback and help with the turnkey launch: domain, hosting, custom email, analytics.",
      step6_num:"Step 06", step6_title:"After launch", step6_text:"After publishing I check the site: enquiries, notifications, Metrica goals. I send you a report and fix any bugs found free of charge.",

      pricing_label:"Pricing", pricing_title:"What it costs",
      pricing_lead:"Ballpark figures. I give an exact price after a short brief — it depends on scope.",
      price1_tier:"Landing page", price1_value:"from 35 000 ₽",
      price1_desc:"A one-page site for launching a service.",
      price1_li1:"1 page, responsive", price1_li2:"Trust structure & enquiry", price1_li3:"Source code delivered",
      price_badge:"Most popular",
      price2_tier:"Multi-page site", price2_value:"from 50 000 ₽",
      price2_desc:"A few pages with a cohesive structure.",
      price2_li1:"Several pages", price2_li2:"Responsive + animations", price2_li3:"Localization on request",
      extras_title:"Add-ons",
      extra1_name:"Additional page", extra1_value:"from 4 000 ₽",
      extra2_name:"Yandex Direct setup", extra2_value:"from 5 000 ₽",
      extra3_name:"Yandex Business & 2GIS listings", extra3_value:"from 5 000 ₽",
      faq_label:"FAQ", faq_title:"Frequently asked",
      faq1_q:"What's included in turnkey work?",
      faq1_a:"The full cycle: positioning, structure, design and markup, domain registration, hosting, SSL, custom email, Yandex.Metrica with goals and launch. You get a working site, not just a mockup.",
      faq2_q:"Do you help with the domain and hosting?",
      faq2_a:"Yes. I help pick and register a domain, set up hosting and SSL, and get custom email like name@yoursite.ru running. Everything is registered in your name — the access stays with you.",
      faq3_q:"How much does it cost and what affects the price?",
      faq3_a:"Ballpark figures are in the Pricing section above: a landing page from 35 000 ₽, a multi-page site from 50 000 ₽. The final number depends on the number of pages, the amount of content and the launch tasks. I give an exact figure after a short brief.",
      faq4_q:"What are the timelines?",
      faq4_a:"A landing page — from a few days. A multi-page site — longer, depending on scope. We lock the exact timeline after a brief and stay in touch at every step.",
      faq5_q:"Can I edit it myself, and is there support?",
      faq5_a:"The code is clean and readable, with no heavy CMS. On request I'll explain how to make simple edits yourself. Further revisions and support I handle separately — we agree on it per task.",
      faq6_q:"Do I need to write the texts myself?",
      faq6_a:"It's best if you prepare the texts about your work: I don't rewrite professional or legal wording. I help with page structure, headings and SEO settings.",
      faq7_q:"How is payment arranged?",
      faq7_a:"I work under a contract as a self-employed professional and issue a receipt for every payment.",

      contact_label:"Contact", contact_title:"Tell me about your project",
      contact_lead:"Describe the task in a couple of sentences — I'll reply with a solution and timeline. No commitment.",
      contact_tg_label:"Telegram", contact_channel_label:"Work channel",
      contact_channel_value:"Open in Telegram", contact_email_label:"Email",
      contact_note:"Self-employed: I work under a contract and issue a receipt for every payment.",

      footer_text:"© 2026 elhp.iv · web development studio",
      footer_policy:"Privacy policy (in Russian)", footer_cookie:"Cookie settings",

      cookie_title:"Cookies",
      cookie_text:"Yandex Metrica helps me understand how visitors use the site. Its cookies are set only after you click “Accept”; declining doesn't limit anything. <a href=\"/elhpiv-preview/policy/#cookie\">Learn more</a>",
      cookie_accept:"Accept", cookie_decline:"Necessary only",
      cookie_close:"Close and keep only necessary cookies"
    }
  };

  /* ============ PAGE ============ */
  // Скрипт подключён и на служебных страницах (/policy/): там нет меню и
  // переключателя языка, поэтому каждый блок ниже проверяет свои элементы.
  // data-lang="ru" на <body> — язык страницы закреплён и не переключается.
  window.elhpReady=true;
  const page=document.body.dataset.page||'';
  const fixedLang=document.body.dataset.lang||'';

  /* ============ HEADER / NAV ============ */
  const header=document.getElementById('header');
  const navToggle=document.getElementById('navToggle');
  const navMenu=document.getElementById('navMenu');

  if(header){
    const updateHeader=()=>header.classList.toggle('header--scrolled',window.scrollY>8);
    window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
  }

  if(navToggle&&navMenu){
    navToggle.addEventListener('click',()=>{
      const open=navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded',open);
      document.body.style.overflow=open?'hidden':'';
    });
    navMenu.querySelectorAll('.nav__link').forEach(l=>l.addEventListener('click',()=>{
      navMenu.classList.remove('active');navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded','false');document.body.style.overflow='';
    }));
  }

  /* ============ REVEAL ON SCROLL ============ */
  if('IntersectionObserver' in window){
    const obs=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(!e.isIntersecting)return;
        const sibs=e.target.parentElement?e.target.parentElement.querySelectorAll(':scope > .fade-in'):[];
        const i=Array.from(sibs).indexOf(e.target);
        e.target.style.transitionDelay=`${i*0.07}s`;
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      });
    },{threshold:.12,rootMargin:'0px 0px -32px 0px'});
    document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));
  }else{
    document.querySelectorAll('.fade-in').forEach(el=>el.classList.add('visible'));
  }

  /* ============ SMOOTH ANCHORS ============ */
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',ev=>{
    const id=a.getAttribute('href');if(!id||id==='#')return;
    const t=document.querySelector(id);if(!t)return;
    ev.preventDefault();
    const top=t.getBoundingClientRect().top+window.scrollY-(header?header.offsetHeight:0)-12;
    window.scrollTo({top,behavior:'smooth'});
  }));

  /* ============ THEME ============ */
  const sun="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z";
  const moon="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z";
  const toggle=document.getElementById('theme-toggle');
  const icon=document.getElementById('themeIcon');
  const setIcon=d=>{if(icon)icon.innerHTML=`<path d="${d}"/>`;};
  setIcon(moon);
  let storedTheme=null; try{storedTheme=localStorage.getItem('theme');}catch(e){}
  if(storedTheme==='dark'){document.body.classList.add('dark');setIcon(sun);}
  if(toggle){
    toggle.addEventListener('click',()=>{
      const dark=document.body.classList.toggle('dark');
      setIcon(dark?sun:moon);
      try{localStorage.setItem('theme',dark?'dark':'light');}catch(e){}
    });
  }

  /* ============ FAQ ACCORDION ============ */
  function closeFaq(item){
    item.classList.remove('active');
    item.querySelector('.faq__question').setAttribute('aria-expanded','false');
    item.querySelector('.faq__answer').style.maxHeight=null;
  }
  document.querySelectorAll('.faq__item').forEach(item=>{
    const q=item.querySelector('.faq__question');
    const a=item.querySelector('.faq__answer');
    q.addEventListener('click',()=>{
      const active=item.classList.contains('active');
      document.querySelectorAll('.faq__item.active').forEach(o=>{if(o!==item)closeFaq(o);});
      item.classList.toggle('active',!active);
      q.setAttribute('aria-expanded',String(!active));
      a.style.maxHeight=!active?`${a.scrollHeight}px`:null;
    });
  });

  /* ============ I18N ============ */
  let lang=fixedLang&&I18N[fixedLang]?fixedLang:'ru';
  if(!fixedLang){try{const s=localStorage.getItem('lang');if(s&&I18N[s])lang=s;}catch(e){}}

  // «Что сделано» в карточке кейса показывается, только если текст есть
  function syncCaseDone(){
    document.querySelectorAll('.case__done').forEach(w=>{
      const t=w.querySelector('.case__done-text');
      w.hidden=!t||!t.textContent.trim();
    });
  }

  function applyLang(l){
    lang=l;
    const d=I18N[l]||I18N.ru;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const v=d[el.dataset.i18n]; if(v!==undefined) el.textContent=v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el=>{
      const v=d[el.dataset.i18nHtml]; if(v!==undefined) el.innerHTML=v;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el=>{
      const v=d[el.dataset.i18nAria]; if(v!==undefined) el.setAttribute('aria-label',v);
    });
    if(d.doc_title&&page==='home') document.title=d.doc_title;
    document.documentElement.lang=l;
    document.querySelectorAll('.lang-seg button').forEach(b=>b.classList.toggle('active',b.dataset.lang===l));
    // recalc any open FAQ height after text length changes
    document.querySelectorAll('.faq__item.active').forEach(item=>{
      const a=item.querySelector('.faq__answer'); a.style.maxHeight=`${a.scrollHeight}px`;
    });
    syncCaseDone();
    if(!fixedLang){try{localStorage.setItem('lang',l);}catch(e){}}
  }
  document.querySelectorAll('.lang-seg button').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.lang)));
  applyLang(lang);

  /* ============ YANDEX METRIKA ============
     Счётчик запускается только после «Принять» в уведомлении о cookie.
     До этого tag.js не загружается вовсе: ни запросов к mc.yandex.ru, ни
     cookie Метрики. Вебвизор выключен. Цели без согласия молча не
     отправляются — кнопки и ссылки работают как обычно. */
  let metrikaStarted=false;
  function initMetrika(){
    if(!METRIKA_ID||metrikaStarted)return;
    metrikaStarted=true;
    window.ym=window.ym||function(){(window.ym.a=window.ym.a||[]).push(arguments);};
    window.ym.l=Date.now();
    const s=document.createElement('script');
    s.async=true;s.src='https://mc.yandex.ru/metrika/tag.js?id='+METRIKA_ID;
    document.head.appendChild(s);
    // Параметры — из кода счётчика в кабинете Метрики, кроме Вебвизора:
    // он выключен (так сказано в политике), ecommerce сайту не нужен
    window.ym(METRIKA_ID,'init',{ssr:true,webvisor:false,clickmap:true,referrer:document.referrer,url:location.href,
      accurateTrackBounce:true,trackLinks:true});
  }

  function reachGoal(goal,params){
    if(!goal||!METRIKA_ID||typeof window.ym!=='function')return;
    if(params)window.ym(METRIKA_ID,'reachGoal',goal,params);
    else window.ym(METRIKA_ID,'reachGoal',goal);
  }

  /* Цели — по атрибуту data-goal на ссылке:
       telegram_click (place: contacts | channel) · whatsapp_click ·
       max_click · email_click · case_click (site: адрес сайта кейса)
     Параметры — только место на странице и адрес кейса, без личных данных. */
  function onGoalClick(e){
    if(e.type==='auxclick'&&e.button!==1)return;
    const el=e.target.closest('[data-goal]');if(!el)return;
    const params={};
    if(el.dataset.goalSite)params.site=el.dataset.goalSite;
    if(el.dataset.goalPlace)params.place=el.dataset.goalPlace;
    reachGoal(el.dataset.goal,Object.keys(params).length?params:undefined);
  }
  document.addEventListener('click',onGoalClick);
  document.addEventListener('auxclick',onGoalClick);

  /* ============ COOKIE CONSENT ============
     «Только необходимые», крестик и Escape равнозначны: плашка
     закрывается, аналитика не включается. Выбор хранится в localStorage
     с версией: при изменении состава cookie поднять COOKIE_VERSION, и
     вопрос появится снова. Поменять выбор — «Настройки cookie» в подвале;
     при отзыве согласия cookie Метрики удаляются, страница перезагружается. */
  const COOKIE_KEY='cookie_consent';
  const COOKIE_VERSION=1;

  function readConsent(){
    try{
      const v=JSON.parse(localStorage.getItem(COOKIE_KEY)||'null');
      if(v&&(v.value==='accepted'||v.value==='necessary'))return v;
    }catch(e){}
    return null;
  }
  function saveConsent(value){
    try{localStorage.setItem(COOKIE_KEY,JSON.stringify({value:value,version:COOKIE_VERSION,date:new Date().toISOString()}));}catch(e){}
  }
  function clearMetrikaCookies(){
    const parts=location.hostname.split('.');const hosts=[];
    for(let i=0;i<parts.length-1;i+=1){hosts.push(parts.slice(i).join('.'));hosts.push('.'+parts.slice(i).join('.'));}
    document.cookie.split(';').forEach(pair=>{
      const name=pair.split('=')[0].trim();
      if(!name||(name.indexOf('_ym')!==0&&name!=='gdpr'))return;
      const dead=name+'=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      document.cookie=dead;
      hosts.forEach(h=>{document.cookie=dead+'; domain='+h;});
    });
    try{Object.keys(localStorage).filter(k=>k.indexOf('_ym')===0).forEach(k=>localStorage.removeItem(k));}catch(e){}
  }

  (function initConsent(){
    const stored=readConsent();
    const decided=Boolean(stored)&&stored.version===COOKIE_VERSION;
    if(stored&&stored.value==='accepted')initMetrika();

    const banner=document.getElementById('cookie-banner');
    const settings=document.getElementById('cookie-settings');
    if(!banner)return;
    if(settings)settings.hidden=false;

    let lastFocused=null;
    const onKey=e=>{if(e.key==='Escape')decline();};
    const hide=()=>{
      banner.hidden=true;
      document.removeEventListener('keydown',onKey);
      if(lastFocused&&typeof lastFocused.focus==='function')lastFocused.focus();
      lastFocused=null;
    };
    const show=()=>{
      if(!banner.hidden)return;
      lastFocused=document.activeElement;
      banner.hidden=false;
      document.addEventListener('keydown',onKey);
      banner.focus({preventScroll:true});
    };
    const isAccepted=()=>{const c=readConsent();return Boolean(c)&&c.value==='accepted';};

    function accept(){
      const was=isAccepted();
      saveConsent('accepted');hide();
      if(!was)initMetrika();
    }
    function decline(){
      const was=isAccepted();
      saveConsent('necessary');hide();
      if(was){clearMetrikaCookies();location.reload();}
    }

    document.getElementById('cookie-accept').addEventListener('click',accept);
    document.getElementById('cookie-decline').addEventListener('click',decline);
    const close=document.getElementById('cookie-close');
    if(close)close.addEventListener('click',decline);
    if(settings)settings.addEventListener('click',show);
    if(!decided)show();
  })();
})();
