import { DecorativeEle } from "../decorative components/DecorativeElement";
import { why_choose_us } from "../data/why-choose-us-data";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <section className="section common-section bg-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
        
        {/* heading */}
        <div className="text-center md:text-left order-2 md:order-1 
                        px-2 sm:px-4 md:px-0">
          <h2 className="heading-2 mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
            About <span className="text-blue-600">ElecKart</span>
          </h2>
          
          {/* text content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7">
            <p className="para-lg leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed 
                         text-gray-700 max-w-full md:max-w-none">
              ElecKart is your one-stop shop for cutting-edge electronics. From the latest smartphones and smartwatches to powerful laptops and sleek accessories, we bring top brands under one digital roof.
            </p>
            
            <p className="para-lg leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed 
                         text-gray-700 max-w-full md:max-w-none">
              Founded with a passion for technology and a commitment to customer satisfaction, ElecKart partners with trusted companies like Apple, Samsung, HP, Sony, and more. We ensure fast delivery, secure payments, and genuine products at competitive prices.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 
                          mt-6 sm:mt-7 md:mt-8 lg:mt-10 
                          justify-center md:justify-start">
            <NavLink to={"/products"} className="common-btn bg-blue-600 hover:bg-blue-700">
              Shop Now
            </NavLink>
            <button className="common-btn bg-transparent border-2 border-blue-600 text-blue-600 
                             hover:bg-blue-600 hover:text-white shadow-none hover:shadow-md">
              Learn More
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 
                          mt-8 sm:mt-10 md:mt-12 lg:mt-16 
                          pt-6 sm:pt-8 md:pt-10 lg:pt-12 
                          border-t border-gray-200">
            <div className="text-center md:text-left">
              <div className="heading-3 text-blue-600 font-bold mb-1 sm:mb-2">1000+</div>
              <div className="para-sm text-gray-600">Products</div>
            </div>
            <div className="text-center md:text-left">
              <div className="heading-3 text-blue-600 font-bold mb-1 sm:mb-2">50+</div>
              <div className="para-sm text-gray-600">Brands</div>
            </div>
            <div className="text-center md:text-left col-span-2 sm:col-span-1">
              <div className="heading-3 text-blue-600 font-bold mb-1 sm:mb-2">10K+</div>
              <div className="para-sm text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative group">
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl 
                           shadow-lg hover:shadow-xl transition-shadow duration-300
                           bg-gradient-to-br from-blue-50 to-gray-50 
                           p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
              <img
                src="https://res.cloudinary.com/dwwurx8fo/image/upload/v1752573522/elecKart-logo_rpipm2.png"
                alt="About ElecKart - Your trusted electronics partner"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
                         h-auto object-contain 
                        common-effect"
                loading="lazy"
              />
            </div>

            {/* Decorative Elements */}
            <DecorativeEle/>

            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 opacity-5">
              <div className="absolute top-1/4 left-1/4 w-24 sm:w-32 md:w-40 
                             h-24 sm:h-32 md:h-40 
                             bg-blue-300 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-20 sm:w-28 md:w-36 
                             h-20 sm:h-28 md:h-36 
                             bg-gray-300 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Additional Content Section */}
      <div className="container mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32">
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 
                        rounded-xl sm:rounded-2xl 
                        p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 
                        text-center">
          <h3 className="heading-3 mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-gray-800">
            Why Choose ElecKart?
          </h3>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 
                          gap-4 sm:gap-6 md:gap-8 lg:gap-10">

            {why_choose_us.map((data,idx)=>{
             
              return(
                <WhyChooseUs key={idx} data={data}/>
              )
            })}
          </div>
        </div>
      </div>

    </section>
  );
};
