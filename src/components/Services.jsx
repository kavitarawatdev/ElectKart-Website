import { service_card_data } from "../data/service-card-data";
import { TrustIndicator } from "../helper/TrustIndicator";
import { ServiceCard } from "../cards/ServiceCard";

export const Services = () => {
  return (
    <section className="section common-section bg-gradient-to-br from-gray-50 to-white">
      <div className="container flex flex-col items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 text-center max-w-4xl mx-auto">
          <h2 className="common-heading">
            Our Customer-Centric Services
          </h2>
          <p className="common-para">
            At ElecKart, we offer a range of customer-centric services designed to enhance your shopping experience. Our services are built to deliver convenience, trust, and satisfaction at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                        gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 
                        w-full max-w-7xl mx-auto">
          {service_card_data.map((feature, index) => (
            <ServiceCard feature={feature} key={index}/>
          ))}
        </div>

        {/* Optional Call-to-Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 
                        mt-6 sm:mt-8 md:mt-10 lg:mt-12 
                        p-4 sm:p-6 md:p-8 
                        bg-gradient-to-r from-blue-50 to-green-50 
                        rounded-xl sm:rounded-2xl 
                        border border-blue-100 
                        w-full max-w-2xl mx-auto">
          <div className="text-center sm:text-left">
            <h3 className="heading-5 text-gray-800 mb-1 sm:mb-2">
              Need Help?
            </h3>
            <p className="para-md text-gray-600">
              Our customer service team is here to assist you 24/7
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button className="common-btn bg-blue-600 hover:bg-blue-700">
              Contact Support
            </button>
            <button className="common-btn bg-green-600 hover:bg-green-700">
              Live Chat
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <TrustIndicator/>
      </div>
    </section>
  );
};
