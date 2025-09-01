import { NavLink } from "react-router-dom"; 

export const Hero = () => {
    return (
        <main>
            <section className="section common-section hero-section">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">

                    {/* Hero Left Section */}
                    <div className="hero-left-section flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 mx-auto lg:mx-0 px-2 sm:px-3 md:px-4 lg:px-0 text-center lg:text-left order-2 lg:order-1">
                        <p className='highlight-para para-lg'>
                            Welcome to
                        </p>
                        <h1 className='heading-1 font-extrabold tracking-wider text-blue-500 leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight'>
                            Elec<span className='text-gray-600'>Kart</span>
                        </h1>
                        <p className='para-lg tracking-wide text-gray-600 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed max-w-full sm:max-w-lg md:max-w-xl lg:max-w-full mx-auto lg:mx-0'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi fugit, cupiditate explicabo dolorum omnis modi ipsa totam itaque. Aperiam nam, libero officiis officia facere quam temporibus perferendis deleniti aliquid numquam.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <NavLink to={"/Products"}
                            className='flex-centered btn common-btn'> {/* Fixed typo: flex-centerd → flex-centered */}
                                Shop Now
                            </NavLink>
                        </div>
                    </div>

                    {/* Hero Right Section */}
                    <div className="hero-right-section order-1 lg:order-2">
                        <figure className='flex-centered relative w-full h-auto'>
                            <img 
                                src="https://res.cloudinary.com/dwwurx8fo/image/upload/v1752731602/Gemini_Generated_Image_rc79psrc79psrc79_q7zld1.png" 
                                alt="hero image"  
                                loading="lazy"
                                className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto object-contain relative z-10 drop-shadow-lg' 
                            />
                        </figure>
                    </div>

                </div>
            </section>
        </main>
    );
};