
    const questions = [
        {
            title: 'На какую сумму Роспотребнадзор оштрафовал продуктовую сеть «Вкусвилл»?',
            options: [
                {
                    text: '6,3 млн рублей',
                    description: '<span class="bold">Верно.</span> Проверка <a href="https://vc.ru/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley" target="_blank" class="link">обнаружила </a>просроченные продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.',
                    valid: true
                },
                {
                    text: '1 млн рублей',
                    description: '<span class="bold">Нет, немного больше: 6,3 млн рублей.</span> Проверка <a href="https://vc.ru/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley" target="_blank" class="link">обнаружила </a>просроченные продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.',
                    valid: false
                },
                {
                    text: '50 млн рублей',
                    description: '<span class="bold">Нет, гораздо меньше: 6,3 млн рублей.</span> Проверка <a href="https://vc.ru/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley" target="_blank" class="link">обнаружила </a>просроченные продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.',
                    valid: false
                },
                {
                    text: 'Не оштрафовал, а объявил выговор',
                    description: '<span class="bold">Нет, всё же оштрафовал на 6,3 млн рублей.</span> Проверка <a href="https://vc.ru/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley" target="_blank" class="link">обнаружила </a>просроченные продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.',
                    valid: false
                },
            ]
        },
        {
            title: 'Почему бутылку воды «Святой источник» в форме футбольного мяча сняли с продажи?',
            options: [
                {
                    text: 'Она оказалась огнеопасной',
                    description: 'Да, бутылка благодаря своей форме призмы фокусировала свет так, что он <a href="https://vc.ru/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha" target="_blank" class="link">воспламенял </a>окружающие предметы.',
                    valid: true
                },
                {
                    text: 'Дети играли ею в футбол и разбивали окна',
                    description: 'Нет, дело в её форме призмы — она фокусировала свет так, что он <a href="https://vc.ru/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha" target="_blank" class="link">воспламенял </a>окружающие предметы.',
                    valid: false
                },
                {
                    text: 'Она постоянно скатывалась с полок',
                    description: 'Бутылка была довольно устойчивая, но благодаря своей форме призмы фокусировала свет так, что он <a href="https://vc.ru/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha" target="_blank" class="link">воспламенял </a>окружающие предметы.',
                    valid: false
                },
                {
                    text: 'Её никто не покупал',
                    description: 'Её покупали, но бутылка благодаря своей форме призмы фокусировала свет так, что он <a href="https://vc.ru/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha" target="_blank" class="link">воспламенял </a>окружающие предметы.',
                    valid: false
                },
            ]
        },
        {
            title: 'Сколько денег потеряли основатели WhatsApp после ухода из Facebook?',
            options: [
                {
                    text: 'Они лишились акций на $1,3 млрд',
                    description: 'Ян Кум и Брайан Эктон действительно могли получить акции на эту сумму, если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за <a href="https://vc.ru/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii" target="_blank" class="link">конфликта </a>с руководством.',
                    valid: true
                },
                {
                    text: 'Они не только лишились акций на $1,3 млрд и выплатили штрафы на $100 млн',
                    description: 'Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за <a href="https://vc.ru/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii" target="_blank" class="link">конфликта </a>с руководством, но штрафы никто не выплачивал.',
                    valid: false
                },
                {
                    text: 'Ничего не лишились, к моменту ухода они уже получили всё вознаграждение',
                    description: 'Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за <a href="https://vc.ru/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii" target="_blank" class="link">конфликта </a>с руководством.',
                    valid: false
                },
                {
                    text: 'Ничего не лишились, но получили иски за нарушение коммерческой тайны',
                    description: 'Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за <a href="https://vc.ru/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii" target="_blank" class="link">конфликта </a>с руководством — но коммерческую тайну пока никто не нарушил.',
                    valid: false
                },
            ]
        },
        {
            title: 'В какой скандал угодила компания «Газелькин» в июне 2018 года?',
            options: [
                {
                    text: 'Предложила клиентам вызвать «водителей-славян» за дополнительную плату',
                    description: 'Компания дала клиентам <a href="https://vc.ru/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu" target="_blank" class="link">возможность </a>выбрать водителя славянской внешности и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык».',
                    valid: true
                },
                {
                    text: 'Её «Газели» постоянно застревали под мостом с надписью «Газель не проедет»',
                    description: 'Было пару раз, <a href="https://twitter.com/foolsbridge/status/986935782287003649" target="_blank" class="link">но не в июне. </a>На самом деле компания дала клиентам <a href="https://vc.ru/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu" target="_blank" class="link">возможность </a>выбрать водителя славянской внешности и российского гражданства. После она переименовала услугу в «идеальный русский язык».',
                    valid: false
                },
                {
                    text: 'Грузчики разбили антикварный шкаф стоимостью 163 млн рублей',
                    description: 'О таком случае не сообщалось, но зато компания дала клиентам <a href="https://vc.ru/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu" target="_blank" class="link">возможность </a>выбрать водителя славянской внешности и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык».',
                    valid: false
                },
                {
                    text: 'Выложила персональные данные клиентов — телефоны, адреса, почты — в открытый доступ',
                    description: 'О таком случае не сообщалось, но зато компания дала клиентам <a href="https://vc.ru/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu" target="_blank" class="link">возможность </a>выбрать водителя славянской внешности и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык».',
                    valid: false
                },
            ]
        },
        {
            title: 'Простой вопрос для передышки. До какого порога правительство собирается повысить НДС?',
            options: [
                {
                    text: '20%',
                    description: 'Да, НДС <a href="https://vc.ru/40001-medvedev-anonsiroval-povyshenie-nds-do-20" target="_blank" class="link">собираются </a>повысить с 18% до 20%. Кстати, <a href="https://vc.ru/38891-nds-20" target="_blank" class="link">вот чем </a>это грозит',
                    valid: true
                },
                {
                    text: '19%',
                    description: 'Нет, всё же именно НДС <a href="https://vc.ru/40001-medvedev-anonsiroval-povyshenie-nds-do-20" target="_blank" class="link">собираются </a>повысить с 18% до 20%. Кстати, <a href="https://vc.ru/38891-nds-20" target="_blank" class="link">вот чем </a>это грозит',
                    valid: false
                },
                {
                    text: '21%',
                    description: 'Нет, НДС <a href="https://vc.ru/40001-medvedev-anonsiroval-povyshenie-nds-do-20" target="_blank" class="link">собираются </a>повысить с 18% до 20%. Кстати, <a href="https://vc.ru/38891-nds-20" target="_blank" class="link">вот чем </a>это грозит',
                    valid: false
                },
                {
                    text: 'Никто не собирается повышать НДС, зато повысят НДФЛ',
                    description: 'Нет, всё же именно НДС <a href="https://vc.ru/40001-medvedev-anonsiroval-povyshenie-nds-do-20" target="_blank" class="link">собираются </a>повысить с 18% до 20%. Кстати, <a href="https://vc.ru/38891-nds-20" target="_blank" class="link">вот чем </a>это грозит',
                    valid: false
                },

            ]
        },
        {
            title: 'Чем займётся Герман Клименко после ухода с поста советника президента по интернету?',
            options: [
                {
                    text: 'Проектами в сфере цифровой медицины',
                    description: '<a href="https://vc.ru/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu" target="_blank" class="link">Верно</a>',
                    valid: true
                },
                {
                    text: 'Станет разрабатывать собственный мессенджер',
                    description: 'Это вполне возможно, но сперва он <a href="https://vc.ru/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu" target="_blank" class="link">планирует </a>заниматься проектами в сфере цифровой медицины.',
                    valid: false
                },
                {
                    text: 'Будет советником по медицине',
                    description: 'Нет, он <a href="https://vc.ru/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu" target="_blank" class="link">планирует </a>заниматься собственными проектами в сфере цифровой медицины.',
                    valid: false
                },
                {
                    text: 'Отправится в кругосветное путешествие',
                    description: 'Он <a href="https://vc.ru/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu" target="_blank" class="link">планирует </a>заниматься собственными проектами в сфере цифровой медицины.',
                    valid: false
                },
            ]
        },
        {
            title: 'Какую услугу запустила «Студия Артемия Лебедева» на волне успеха «Экспресс-дизайна»?',
            options: [
                {
                    text: 'Экспресс-дизайн не логотипов, а предметов — за 300 тысяч рублей',
                    description: 'Да, и заказчик точно так же <a href="https://vc.ru/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley" target="_blank" class="link">обязан </a>принять первый предложенный вариант.',
                    valid: true
                },
                {
                    text: 'Сервис экспресс-маркетинга: за 500 тысяч рублей Артемий Лебедев лично весь месяц будет вести ваш блог',
                    description: 'Речь об экспресс-дизайне предметов, и заказчик точно так же <a href="https://vc.ru/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley" target="_blank" class="link">обязан </a>принять первый предложенный вариант.',
                    valid: false
                },
                {
                    text: 'Экспресс-доставку обедов в офис',
                    description: 'Речь об экспресс-дизайне предметов, и заказчик точно так же <a href="https://vc.ru/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley" target="_blank" class="link">обязан </a>принять первый предложенный вариант.',
                    valid: false
                },
                {
                    text: 'Создание визиток за 50 тысяч рублей',
                    description: 'Речь об экспресс-дизайне предметов, и заказчик точно так же <a href="https://vc.ru/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley" target="_blank" class="link">обязан </a>принять первый предложенный вариант.',
                    valid: false
                },
            ]
        },
        {
            title: 'Что сказал Олег Тиньков в интервью Владимиру Познеру в рамках ПМЭФ-2018?',
            options: [
                {
                    text: 'Это стыдно — нанимать людей, которыми нужно управлять',
                    description: 'Вопрос был с подвохом: все эти фразы прозвучали в <a href="https://vc.ru/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat" target="_blank" class="link">интервью</a>.',
                    valid: true
                },
                {
                    text: 'Я бы хотел, чтобы на моей гробовой доске было написано слово «Предприниматель»',
                    description: 'Вопрос был с подвохом: все эти фразы прозвучали в <a href="https://vc.ru/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat" target="_blank" class="link">интервью</a>.',
                    valid: false
                },
                {
                    text: 'Чтобы быть предпринимателем, не нужно никакого образования',
                    description: 'Вопрос был с подвохом: все эти фразы прозвучали в <a href="https://vc.ru/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat" target="_blank" class="link">интервью</a>.',
                    valid: false
                },
                {
                    text: 'Предприниматели должны быть звёздами и элитой общества',
                    description: 'Вопрос был с подвохом: все эти фразы прозвучали в <a href="https://vc.ru/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat" target="_blank" class="link">интервью</a>.',
                    valid: false
                },
            ]
        },
    ]

    const results = [
        {
            title: 'Мне больше интересен футбол',
            img: 'imgAnswer1'
        },
        {
            title: 'Читаю vc.ru с экрана попутчика в метро',
            img: 'imgAnswer2'
        },
        {
            title: 'Бизнес это интересно, но где взять столько времени?',
            img: 'imgAnswer3'
        },
        {
            title: 'Читаю vc.ru каждый день, но работать тоже нужно',
            img: 'imgAnswer4'
        },
        {
            title: 'Я работаю в редакции vc.ru',
            img: 'imgAnswer5'
        },
    ]
