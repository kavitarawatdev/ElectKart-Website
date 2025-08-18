import { ContactCard } from "../cards/ContactCard";
import { contact_card } from "../data/contact-card-data";
import { faq_data } from "../data/faq-data";
import { ContactForm } from "../components/ContactForm";

export const Contact = () => {


    return (
        <>
            <section className="section common-section bg-gradient-to-br from-gray-50 to-white">
                <div className="container flex flex-col items-center gap-4">
                    
                    {/* Header Section */}
                    <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 text-center max-w-4xl mx-auto">
                        <h2 className="common-heading">Contact Us</h2>
                        <p className="common-para">
                            Have a question, suggestion, or need support? We'd love to hear from you.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 
                                    gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-14
                                    items-start lg:items-center 
                                    p-2 sm:p-4 md:p-6 lg:p-8">

                        {/* Contact Info */}
                        <div className="order-2 lg:order-1 space-y-2 md:space-y-4 lg:space-y-6">
                            
                            {/* Contact Cards */}
                            {
                                contact_card.map((currVal,idx)=>{
                                    return <ContactCard key={idx} data={currVal}/>
                                })
                            }

                            {/* Business Hours */}
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 
                                           rounded-xl sm:rounded-2xl 
                                           p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 
                                           border border-blue-100">
                                <h6 className="heading-6 text-gray-800 mb-3 sm:mb-4">Business Hours</h6>
                                <div className="space-y-1 sm:space-y-2">
                                    <div className="flex justify-between items-center para-md">
                                        <span className="text-gray-600">Monday - Friday:</span>
                                        <span className="text-gray-800 font-medium">9:00 AM - 8:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center para-md">
                                        <span className="text-gray-600">Saturday:</span>
                                        <span className="text-gray-800 font-medium">10:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center para-md">
                                        <span className="text-gray-600">Sunday:</span>
                                        <span className="text-red-600 font-medium">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <ContactForm/>

                    </div>

                    {/* FAQ Section */}
                    <div className="w-full mt-8 sm:mt-10 lg:mt-15 
                                    bg-white rounded-xl sm:rounded-2xl 
                                    p-6 sm:p-8 md:p-10 lg:p-12 
                                    shadow-sm border border-gray-100">
                        <h3 className="heading-3 text-center text-gray-800 mb-6 sm:mb-8 md:mb-10">
                            Frequently Asked Questions
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                            {faq_data.map((data, idx)=>{
                            const {qstn, ans}=data;
                            return(
                                <div key={idx}
                                 className="p-4 sm:p-5 md:p-6 bg-gray-50 rounded-lg sm:rounded-xl">
                                    <h4 className="heading-6 text-gray-800 mb-2 sm:mb-3">{qstn}</h4>
                                    <p className="para-md text-gray-600">{ans}</p>
                            </div>
                            )
                            })}                        
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};
