import { NavLink } from "react-router-dom";

export const Hero = () => {
    return (
        <main>
            <section className="section common-section hero-section">
                <div className="container grid grid-cols-2 gap-5">

                    <div className="hero-left-section flex flex-col gap-5 mx-auto px-3">
                        <p className='highlight-para para-lg'>
                            Welcome to
                        </p>
                        <h1 className='heading-1 font-extrabold tracking-wider text-blue-500'>
                            Elec<span className='text-gray-600'>Kart</span>
                        </h1>
                        <p className='para-lg tracking-wide text-gray-600'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi fugit, cupiditate explicabo dolorum omnis modi ipsa totam itaque. Aperiam nam, libero officiis officia facere quam temporibus perferendis deleniti aliquid numquam.
                        </p>
                        <NavLink to={"/Products"}
                        className='flex-centerd btn common-btn'>
                            Shop Now
                        </NavLink>
                    </div>

                    <div className="hero-right-section">
                        <figure className='flex-centered relative w-full h-auto'>
                            <img src="https://res.cloudinary.com/dwwurx8fo/image/upload/v1752731602/Gemini_Generated_Image_rc79psrc79psrc79_q7zld1.png" 
                            alt="hero image"  className='max-w-90 relative h-auto z-2' />
                        </figure>
                    </div>

                </div>
            </section>
            
        </main>
    );
};