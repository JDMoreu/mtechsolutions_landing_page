import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import {WebIcon, CircuitIcon, NetworkIcon, IoTIcon, AutomaIcon} from './icons.jsx'

import './style.css';

const Services = [
	{
	  title: "Desarollo Web",
	  description:"Desarrollamos sitios web a medida, con un diseño único y personalizado, adaptado a tus necesidades.",
	  Icon: WebIcon,
	  syles: "bg-orange-100 text-orange-500 hover:bg-orange-500"
  },
	{
	  title: "Diseño de circuitos",
	  description:"Diseñamos circuitos impresos para tus proyectos electrónicos, con la mejor calidad y al mejor precio.",
	  Icon: CircuitIcon,
	  syles: "bg-teal-100 text-teal-500 hover:bg-teal-500"
  },
	{
	  title: "Telemetría y redes",
	  description:"Diseñamos y desarrollamos sistemas de telemetría y redes para la comunicación de tus dispositivos.",
	  Icon: NetworkIcon,
	  syles: "bg-indigo-100 text-indigo-500 hover:bg-indigo-500"
  },
	{
	  title: "Internet de las cosas",
	  description:"Desarrollamos sistemas de IoT para la automatización de tus dispositivos y la recolección de datos.",
	  Icon: IoTIcon,
	  syles: "bg-pink-100 text-pink-500 hover:bg-pink-500"
  },
	{
	  title: "Automatización",
	  description:"Automatizamos tus procesos para que puedas dedicar tu tiempo a lo que realmente importa.",
	  Icon: AutomaIcon,
    syles: "bg-blue-100 text-blue-500 hover:bg-blue-500"
  }
  ]





  



const App = () => {
    return (
      <section id="servicios" className="py-24 lg:mb-40 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
            <div className="w-full lg:w-2/5">
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-4 block">Servicios</span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-200 leading-[3.25rem]">
                Soluciones e infractura{' '}
                <span className="text-transparent bg-clip-text bg-blue-600">
                  Tecnologica
                </span>
              </h2>
              <div className=" hidden lg:flex items-center justify-center lg:justify-start gap-10">
                <button
                  id="slider-button-left"
                  className="swiper-button-prev group flex justify-center items-center border border-solid border-blue-600 w-12 h-12 transition-all duration-500 rounded-lg hover:bg-blue-600"
                  data-carousel-prev
                >
                  <svg
                    className="h-6 w-6 text-blue-600 group-hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  id="slider-button-right"
                  className="swiper-button-next group flex justify-center items-center border border-solid border-blue-600 w-12 h-12 transition-all duration-500 rounded-lg hover:bg-blue-600"
                  data-carousel-next
                >
                  <svg
                    className="h-6 w-6 text-blue-600 group-hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-3/5">
              <Swiper
                slidesPerView={2}
                spaceBetween={28}
                centeredSlides={false}
                loop={true}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    centeredSlides: false,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                    centeredSlides: false,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                  },
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                {Services.map(({ title, description, Icon, syles }, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-slide group bg-white dark:bg-gray-800 border border-solid border-gray-300 dark:border-gray-600 rounded-2xl
                     max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-blue-600 dark:hover:border-blue-600|">
                      <div className="flex items-center justify-center mb-4 ">
                        <span 
                        className={`flex items-center justify-center ${syles} transition-all duration-500 hover:text-white w-20 h-20 rounded-lg`}>
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
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    );
  };


  export default App;