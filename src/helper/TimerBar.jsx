export const TimerBar = () => {
    return (
        <>
            <div className="absolute bottom-4 h-2 w-[85%] overflow-hidden">
                <div className="animate-loadingBar rounded-full h-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            </div>
        </>
    );
};