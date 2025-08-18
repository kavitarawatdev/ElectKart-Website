export const CornerEmojis = ({discount}) => {
    return (
        <>
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl sm:rounded-2xl">
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 text-lg sm:text-xl md:text-2xl animate-bounce">
                        {discount > 0 ? "🥳" : "😔"}
                    </div>
                    <div className="absolute top-2 right-8 sm:top-3 sm:right-12 md:right-16 text-lg sm:text-xl md:text-2xl animate-pulse">
                        {discount > 0 ? "🎊" : "🚫"}
                    </div>
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 text-lg sm:text-xl md:text-2xl animate-bounce" 
                         style={{ animationDelay: '0.5s' }}>
                        {discount > 0 ? "🎉" : "😞"}
                    </div>
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-lg sm:text-xl md:text-2xl animate-pulse" 
                         style={{ animationDelay: '1s' }}>
                        {discount > 0 ? "✨" : "❌"}
                    </div>
            </div>
        </>
    );
};