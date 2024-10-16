import images from "./images";
import {
  FaEdit,
  FaRocket,
  FaAward,
  FaFileAlt,
  FaPhoneAlt,
  FaHandsHelping,
  FaEnvelopeOpen,
  FaMapMarkerAlt,
  FaBookReader,
} from "react-icons/fa";
import { ImMagicWand } from "react-icons/im";
import { AiOutlineReload } from "react-icons/ai";

const gradient = "url(#blue-gradient)";

const services = [
  {
    id: 1,
    icon: <FaBookReader style={{ fill: gradient }} />,
    title: "Заняття індивідуальні і групові",
    text: " Індивідуальні та групові уроки з математики, адаптовані до рівня підготовки кожного учня. Індивідуальні заняття забезпечують персональний підхід, а групові створюють можливість для обміну знаннями  та командної роботи."
   
    ,
  },
  {
    id: 2,
    icon: <FaHandsHelping style={{ fill: gradient }} />,
    title: "Урок-знайомство",
    text: "Урок-знайомство – це можливість познайомитися з викладачем, визначити рівень знань та обговорити індивідуальні цілі навчання. Це перший крок до ефективної та успішної співпраці.",
  },
  {
    id: 3,
    icon: <FaRocket style={{ fill: gradient }} />,
    title: "Робота зі шкільною програмою",
    text: "Всі теми шкільної програми розбираємо в деталях, допомога у виконанні домашніх завдань, підготовка до контрольних робіт.",
  },
  {
    id: 4,
    icon: <FaEdit style={{ fill: gradient }} />,
    title: "Підготовка до ДПА і НМТ",
    text: "Грунтовна програма навчання дозволяє без проблем успішно складати важливі тести.",
  },
  {
    id: 5,
    icon: <ImMagicWand style={{ fill: gradient }} />,
    title: "Підготовка до вступу в закордонні ВИШі",
    text: "Моя методика навчання вже допомогла багатьом учням стати успішними студентами закордонних ВИШів.",
  },
  {
    id: 6,
    icon: <FaAward style={{ fill: gradient }} />,
    title: "Консультаційні послуги",
    text: "Докладна і професійна допомога з однієї теми, проведу окрему консультацію.",
  },
];

const about = [
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor",
  },
];

const qualities = [
  {
    id: 8,
    icon: <FaFileAlt style={{ fill: gradient }} />,
    title: "Ідеї та плани",
    text: "Я завжди шукаю нові ідеї та підходи, щоб зробити вивчення математики більш цікавим та ефективним для кожного учня. Від інтерактивних методів до використання сучасних технологій – моє завдання полягає в тому, щоб математика стала доступною й зрозумілою для всіх. Постійно оновлюю свої програми, щоб відповідати вимогам часу та потребам учнів.",
  },
  {
    id: 9,
    icon: <AiOutlineReload style={{ fill: gradient }} />,
    title: "Швидкі стратегії",
    text: "Моя методика базується на швидких стратегіях, які допомагають учням оволодіти математикою в стислі терміни. Я акцентую увагу на спрощенні складних тем за допомогою логічних схем та покрокових пояснень. Це дозволяє учням не лише глибше зрозуміти матеріал, але й впевнено почуватися на уроках і скласти іспити на високі бали. Запрошую долучитися до мого курсу!",
  },
];

const features = [
  {
    id: 10,
    title: "Індивідуальні і групові заняття з математики ",
    text: (
      <p>
        Групові заняття проводяться для учнів одного рівня (2-4 учасники) і
        доступні лише в онлайн-форматі. Вартість заняття для кожного учасника
        становить 300 грн, тривалість уроку – 1 година. <br />
        Індивідуальні заняття можливі як онлайн, так і офлайн (у викладача), з вартістю 500
        грн за урок.
      </p>
    ),
  },
  {
    id: 11,
    title: "Урок-знайомство",
    text: (
      <p>
        План уроку-знайомства: Перевірка рівня знань – тестування (30 хв), щоб
        оцінити поточний рівень учня.
        <br /> Аналіз результатів і створення навчального плану – розбір
        ситуації та обговорення індивідуальних цілей (30 хв). <br />
        Вартість уроку – 300 грн.
      </p>
    ),
  },
  {
    id: 12,
    title: "Робота зі шкільною програмою",
    text: (
      <p>
       Заповнення прогалин в знаннях та освоєнні шкільної програми
        з математики легко і зрозуміло. <br /> Допомога у виконанні домашніх
        завдань.Індивідуальний підхід гарантує прогрес та успішність у навчанні.
      </p>
    ),
  },
  {
    id: 13,
    title: "Підготовка до ДПА і НМТ",
    text: (
      <p>
        Підготуємось разом з Вами до важливих тестів! Індивідуальний підхід та
        систематична робота допоможуть Вам успішно скласти ЗНО, НМТ та інші
        іспити. Гарантую підтримку та чіткий план підготовки!
      </p>
    ),
  },
  {
    id: 14,
    title: "Підготовка до вступу в закордонні ВИШі",
    text: (
      <p>
        Разом з Вами підготуємось до вступу в Університет Вашої мрії за
        кордоном. Спільними зусиллями учня та репетитора досягнемо потрібного
        рівня, щоб скласти іспити й тести з математики.
      </p>
    ),
  },
  {
    id: 15,
    title: "Консультаційні послуги",
    text: (
      <p>
        Бувають ситуації, коли регулярні заняття не потрібні, але необхідна
        допомога з якоїсь однієї теми. На цей випадок можна скористатись окремою
        консультацією.
        <br /> Дуже докладно розберемо окрему тему. <br /> Вартість 600 грн/год.
      </p>
    ),
  },
];

const portfolio = [
  {
    id: 16,
    title: "Індивідуальний підхід",
    text: "Врахування рівня знань кожного учня для ефективного навчання",
    image: images.portfolio_img_1,
  },
  {
    id: 17,
    title: "Інтерактивні методи",
    text: "Залучення учнів через ігри та практичні завдання",
    image: images.portfolio_img_2,
  },
  {
    id: 18,
    title: "Мотивація та підтримка ",
    text: "Створення сприятливої атмосфери для досягнення успіху.",
    image: images.portfolio_img_3,
  },
];

const testimonials = [
  {
    id: 19,
    name: "Іван, 8 клас",
    text: "Катерина - найкращий учитель математики, з яким я коли-небудь займався. Вона пояснює все просто і доступно, завжди допомагає розібратися зі складними темами. Оцінки зросли, а математика стала улюбленим предметом!",
    // image: images.customer_img_1,
    rating: 5,
  },
  {
    id: 20,
    name: "Андрій, 10 клас",
    text: "Уроки з Катериною – це завжди цікаво та пізнавально. Вона вміє донести матеріал до кожного учня, не залишаючи нерозкритих тем. Дякую за допомогу у підготовці до іспитів, я пройшов на відмінно!",
    // image: images.customer_img_2,
    rating: 5,
  },
  {
    id: 21,
    name: "Ілля, студент",
    text: "Дякую Катерині за підготовку до вступу в закордонний університет! Уроки були надзвичайно корисними, допомогли розібратись зі складними темами. Математика на іспиті не здалась такою страшною, і я успішно пройшов відбір!",
    // image: images.customer_img_3,
    rating: 5,
  },
  {
    id: 22,
    name: "Карина, 10 клас",
    text: "Заняття завжди проходять на позитиві, з прикладами, які зрозумілі навіть тим, хто не любить математику. За короткий час я змогла зрозуміти багато нового і впевнено почуваю себе на уроках!",
    // image: images.customer_img_4,
    rating: 4,
  },
  {
    id: 23,
    name: "Іван, студент",
    text: "Завдяки цим урокам я зміг отримати високі бали на вступних іспитах в університет за кордоном. Катерина чудово пояснює, як вирішувати складні задачі, дає чітку стратегію для іспитів. Моя мрія навчатись за кордоном стала реальністю!",
    // image: images.customer_img_5,
    rating: 5,
  },
  {
    id: 24,
    name: "Діана, студентка",
    text: "Моя підготовка до іспитів у закордонний ВНЗ пройшла ідеально! Катерина не лише допомогла з математикою, але й надала цінні поради щодо підходів до задач. Результат на іспиті перевищив усі мої очікування, тепер я студентка університету мрії!",
    // image: images.customer_img_6,
    rating: 5,
  },
];

const contact = [
  {
    id: 25,
    icon: <FaPhoneAlt style={{ fill: gradient }} />,
    info: "+38-099-383-26-24",
    // text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 26,
    icon: <FaEnvelopeOpen style={{ fill: gradient }} />,
    info: "constaha1208@gmail.com",
    // text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 27,
    icon: <FaMapMarkerAlt style={{ fill: gradient }} />,
    info: "Київ, Україна",
    // text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
];

const sections = {
  services,
  about,
  qualities,
  features,
  portfolio,
  testimonials,
  contact,
};

export default sections;
