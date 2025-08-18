export const ServiceCard = ({feature}) => {
    return (
        <>
        <div className="flex-centered flex-col bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-green-50
        shadow-sm shadow-blue-400/30 hover:shadow-lg hover:shadow-blue-400/40
        border border-blue-100 hover:border-blue-200 rounded-xl sm:rounded-2xl 
        transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2
        gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8
        min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px] xl:min-h-[280px]"
            >
              {/* Icon */}
              <div className="icon-md sm:icon-lg text-green-600 group-hover:text-blue-600 
                             transition-colors duration-300 
                             mb-2 sm:mb-3 md:mb-4">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h6 className="heading-6 text-center text-gray-800 group-hover:text-gray-900
                            transition-colors duration-300 
                            mb-2 sm:mb-3 md:mb-4">
                {feature.title}
              </h6>
              
              {/* Description */}
              <p className="para-md text-center text-gray-600 group-hover:text-gray-700
                           transition-colors duration-300 
                           leading-relaxed sm:leading-relaxed md:leading-relaxed
                           line-clamp-3 sm:line-clamp-4">
                {feature.description}
              </p>
            </div>
            
        </>
    );
};