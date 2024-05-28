import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { WebIcon, CircuitIcon, NetworkIcon, IoTIcon, AutomaIcon, SupportIcon } from './icons.jsx';
import './style.css';

const Services = [
  {
    title: "Desarollo Web",
    description: "Creamos sitios web a medida con un diseño único y personalizado que se adapta perfectamente a tus necesidades. Nuestro enfoque incluye una interfaz de usuario intuitiva, optimización para motores de búsqueda (SEO) y compatibilidad con dispositivos móviles para garantizar una experiencia de usuario excepcional.",
    Icon: WebIcon,
    syles: "bg-orange-100 text-orange-500 hover:bg-orange-500"
  },
  {
    title: "Diseño de Circuitos",
    description: "Ofrecemos diseño de circuitos impresos (PCB) de alta calidad para tus proyectos electrónicos. Nuestros diseños son precisos y eficientes, utilizando las mejores prácticas de la industria para garantizar rendimiento y fiabilidad, todo a un costo competitivo.",
    Icon: CircuitIcon,
    syles: "bg-teal-100 text-teal-500 hover:bg-teal-500"
  },
  {
    title: "Telemetría y Redes",
    description: "Desarrollamos sistemas avanzados de telemetría y redes para asegurar la comunicación efectiva entre tus dispositivos. Nuestros servicios incluyen la integración de tecnologías inalámbricas y cableadas, garantizando la transmisión de datos en tiempo real y la máxima seguridad.",
    Icon: NetworkIcon,
    syles: "bg-pink-100 text-pink-500 hover:bg-pink-500"
  },
  {
    title: "Internet de las Cosas (IoT)",
    description: "Especializados en el desarrollo de soluciones IoT, facilitamos la automatización de dispositivos y la recolección de datos en tiempo real. Nuestras soluciones permiten la monitorización y control remoto de tus sistemas, optimizando procesos y mejorando la eficiencia operativa.",
    Icon: IoTIcon,
    syles: "bg-indigo-100 text-indigo-500 hover:bg-indigo-500"
  },
  {
    title: "Automatización",
    description: "Proveemos soluciones de automatización para optimizar tus procesos operativos, permitiéndote concentrar tus recursos en actividades estratégicas. Implementamos tecnología avanzada para incrementar la productividad y reducir costos operativos.",
    Icon: AutomaIcon,
    syles:  "bg-red-100 text-red-500 hover:bg-red-500"
  },
  {
    title: "Soporte Técnico",
    description: "Ofrecemos soporte técnico integral para tus dispositivos y sistemas, asegurando que puedas operar sin interrupciones. Nuestro equipo de expertos está disponible para resolver cualquier problema técnico, garantizando un funcionamiento continuo y eficiente.",
    Icon: SupportIcon,
    syles: "bg-blue-100 text-blue-500 hover:bg-blue-500"
  }
];

const App = () => {
  return (
    <section id='servicios' className="py-24 mb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 ">
          <span className=" text-xs lg:text-sm text-gray-500 dark:text-gray-400 font-medium lg:mb-4 block">Soluciones tecnológicas</span>
          <h2 className=" text-2xl lg:text-4xl font-bold text-gray-900 dark:text-gray-200 leading-[3.25rem]">
            Catálogo de{' '}
            <span className="text-transparent bg-clip-text bg-blue-600">
              Servicios
            </span>
          </h2>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={32}
          loop={true}
          centeredSlides={true}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 32,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {Services.map(({ title, description, Icon, syles }, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white dark:bg-gray-800 border border-solid border-gray-100 dark:border-gray-800 rounded-xl p-6 transition-all duration-500  h-96 hover:border-blue-600 hover:shadow-sm slide_active:border-blue-600">
                <div className="flex items-center justify-center mb-4">
                  <span className={`flex items-center justify-center ${syles} transition-all duration-500 hover:text-white w-20 h-20 rounded-lg`}>
                    <Icon />
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center transition-all duration-500">
                  <h1 className="font-semibold dark:text-gray-200 mb-4">{title}</h1>
                  <p className="text-sm text-pretty text-center text-gray-500 dark:text-gray-400 leading-6 transition-all duration-500 min-h-24 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                    {description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default App;
