import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { WebIcon, CircuitIcon, NetworkIcon, IoTIcon, AutomaIcon } from './icons.jsx';
import './style.css';

const Services = [
  {
    title: "Desarollo Web",
    description: "Desarrollamos sitios web a medida, con un diseño único y personalizado, adaptado a tus necesidades.",
    Icon: WebIcon,
    syles: "bg-orange-100 text-orange-500 hover:bg-orange-500"
  },
  {
    title: "Diseño de circuitos",
    description: "Diseñamos circuitos impresos para tus proyectos electrónicos, con la mejor calidad y al mejor precio.",
    Icon: CircuitIcon,
    syles: "bg-teal-100 text-teal-500 hover:bg-teal-500"
  },
  {
    title: "Telemetría y redes",
    description: "Diseñamos y desarrollamos sistemas de telemetría y redes para la comunicación de tus dispositivos.",
    Icon: NetworkIcon,
    syles: "bg-indigo-100 text-indigo-500 hover:bg-indigo-500"
  },
  {
    title: "Internet de las cosas",
    description: "Desarrollamos sistemas de IoT para la automatización de tus dispositivos y la recolección de datos.",
    Icon: IoTIcon,
    syles: "bg-pink-100 text-pink-500 hover:bg-pink-500"
  },
  {
    title: "Automatización",
    description: "Automatizamos tus procesos para que puedas dedicar tu tiempo a lo que realmente importa.",
    Icon: AutomaIcon,
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
              <div className="group bg-white dark:bg-gray-800 border border-solid border-gray-300 dark:border-gray-600 rounded-xl p-6 transition-all duration-500  h-96 hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
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
