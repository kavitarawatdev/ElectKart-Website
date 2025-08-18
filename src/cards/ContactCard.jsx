export const ContactCard = ({ data }) => {
    const { icon, label, detail, color, link } = data;
    return (
        <div
            className={`bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 
                        p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 border-${color}-100 border-1`}
        >
            <div className='flex items-start gap-3 sm:gap-4 md:gap-5'>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center 
                                text-blue-600 icon-sm sm:icon-md flex-shrink-0  
                                bg-${color}-100 text-${color}-600`}
                >
                    {icon}
                </div>
                <div className='flex flex-col gap-1 sm:gap-2'>
                    <h6 className="heading-6 text-gray-800">{label}</h6>
                    <p className={`para-lg text-${color}-600 hover:text-${color}-700 transition-colors`}>

                        {link ?<a href={link} >{detail}</a>: detail }
                    </p>
                </div>
            </div>
        </div>
    );
};