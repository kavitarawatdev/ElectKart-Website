export const  DecorativeEle = () => {
    return (
        <>
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 
                           w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 
                           bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 
                           w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 
                           bg-gray-400 rounded-full opacity-15 animate-pulse 
                           [animation-delay:1s]"></div>
        </>
    );
};