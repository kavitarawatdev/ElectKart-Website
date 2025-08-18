import { brandLogos } from "../data/partnersData";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const OurPartners = () => {
  return (
    <section className="section common-section bg-gray-50">
      <div className="container flex flex-col items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 text-center">
          <h2 className="common-heading">Our Trusted Partners</h2>
          <p className="common-para">Proud to be associated with top brands in electronics</p>
        </div>

        {/* Partners Carousel */}
        <div className="flex-centered w-full px-2 sm:px-4 md:px-6 lg:px-8">
          <Swiper
            // Responsive slides per view
            slidesPerView={2}
            spaceBetween={15}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            grabCursor={true}
            breakpoints={{
              // Mobile (320px+)
              320: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              // Small (640px+)
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              // Medium (768px+)
              768: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              // Large (1024px+)
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              // Extra Large (1280px+)
              1280: {
                slidesPerView: 6,
                spaceBetween: 35,
              },
              // 2XL (1536px+)
              1536: {
                slidesPerView: 7,
                spaceBetween: 40,
              },
              // 3XL (1920px+)
              1920: {
                slidesPerView: 8,
                spaceBetween: 45,
              }
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-full max-w-7xl mx-auto"
          >
            {brandLogos.map((brand, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <div className="flex-centered p-2 sm:p-3 md:p-4 lg:p-5 
                               hover:scale-110 hover:bg-white hover:shadow-lg 
                               transition-all duration-300 ease-in-out 
                               rounded-lg sm:rounded-xl 
                               bg-white/50 backdrop-blur-sm
                               w-full h-14 xs:h-16 sm:h-18 md:h-20 lg:h-22 xl:h-24">
                  <img
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    className="h-full object-contain 
                               filter grayscale hover:grayscale-0 
                               transition-all duration-300 ease-in-out
                               opacity-70 hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Optional: Partnership Stats */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 
                        mt-4 sm:mt-6 md:mt-8 lg:mt-10
                        text-center">
          <div className="flex flex-col items-center">
            <span className="heading-4 text-blue-600 font-bold">{brandLogos.length}+</span>
            <span className="para-sm text-gray-600">Trusted Partners</span>
          </div>
          <div className="w-px h-8 bg-gray-300 hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <span className="heading-4 text-blue-600 font-bold">100%</span>
            <span className="para-sm text-gray-600">Quality Assured</span>
          </div>
          <div className="w-px h-8 bg-gray-300 hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <span className="heading-4 text-blue-600 font-bold">5★</span>
            <span className="para-sm text-gray-600">Partner Rating</span>
          </div>
        </div>

        {/* Mobile Scroll Hint */}
        <div className="sm:hidden flex items-center gap-2 text-gray-500">
          <span className="para-sm">Swipe to see more</span>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
        </div>

      </div>
    </section>
  );
};
