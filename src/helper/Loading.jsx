export const Loading = ({message}) => {
  return (
    <div className="container common-section flex-centered flex-col bg-white min-h-[60vh] sm:min-h-[50vh] md:min-h-[40vh]">
      
      {/* Brand Logo with Pulse Animation */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 
                     font-bold text-blue-600 tracking-wide 
                     mb-4 sm:mb-5 md:mb-6 lg:mb-8 
                     animate-pulse">
        Elec<span className="text-gray-700">Kart</span>
      </h1>
      
      {/* Loading Animation Dots */}
      <div className="flex items-end space-x-1.5 sm:space-x-2 md:space-x-2.5 mb-6 sm:mb-7 md:mb-8 lg:mb-10">
        <div className="w-1.5 h-6 sm:w-2 sm:h-7 md:w-2.5 md:h-8 lg:w-3 lg:h-9 xl:w-3 xl:h-10 
                        bg-blue-500 rounded-full 
                        animate-bounce [animation-delay:-0.3s] [animation-duration:0.6s]"></div>
        <div className="w-1.5 h-6 sm:w-2 sm:h-7 md:w-2.5 md:h-8 lg:w-3 lg:h-9 xl:w-3 xl:h-10 
                        bg-blue-500 rounded-full 
                        animate-bounce [animation-delay:-0.15s] [animation-duration:0.6s]"></div>
        <div className="w-1.5 h-6 sm:w-2 sm:h-7 md:w-2.5 md:h-8 lg:w-3 lg:h-9 xl:w-3 xl:h-10 
                        bg-blue-500 rounded-full 
                        animate-bounce [animation-duration:0.6s]"></div>
      </div>
      
      {/* Loading Message */}
      <p className="para-lg text-gray-500 text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
                     px-4 sm:px-6 md:px-8 
                     leading-relaxed">
        {message || "Loading..."}
      </p>
      
      {/* Optional Spinner Ring */}
      <div className="mt-4 sm:mt-5 md:mt-6">
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                        border-2 sm:border-3 md:border-4 
                        border-blue-200 border-t-blue-500 
                        rounded-full animate-spin"></div>
      </div>
      
      {/* Background Pattern - Optional */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 
                        bg-blue-300 rounded-full blur-xl"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 
                        bg-gray-300 rounded-full blur-xl"></div>
      </div>
      
    </div>
  );
};