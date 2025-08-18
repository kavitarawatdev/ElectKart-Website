import { useAuth0 } from "@auth0/auth0-react";
import { useForm, ValidationError } from "@formspree/react";
import { BsFillSendCheckFill } from "react-icons/bs";

export const ContactForm = () => {
    const [state, handleSubmit] = useForm("manbzovg");
    const { isAuthenticated, user } = useAuth0();
    console.log(state);
    const handleFormSubmit = () => {
        handleSubmit();
    }

    return (
        <>
            <div className="order-1 lg:order-2 w-full">
                <form onSubmit={handleFormSubmit} action={"https://formspree.io/f/xkgzabjr"} method="POST"
                    className="common-shadow bg-white p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 
                rounded-xl sm:rounded-2xl flex flex-col gap-4 sm:gap-5 md:gap-6 
                border border-gray-100">

                    {/* Form Header */}
                    <div className="text-center pb-2 sm:pb-3 md:pb-4 border-b border-gray-100">
                        <h3 className="heading-4 text-gray-800 mb-1 sm:mb-2">Send us a Message</h3>
                        <p className="para-sm text-gray-500">We'll get back to you within 24 hours</p>
                    </div>

                    {/* Name Field */}
                    <div className='flex flex-col gap-1.5 sm:gap-2'>
                        <label htmlFor="name" className="para-lg font-medium text-gray-700">
                            Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            required
                            className="common-input-field capitalize"
                        />
                    </div>

                    {/* Email Field */}
                    <div className='flex flex-col gap-1.5 sm:gap-2'>
                        <label htmlFor="email" className="para-lg font-medium text-gray-700">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                            className="common-input-field"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    {/* Message Field */}
                    <div className='flex flex-col gap-1.5 sm:gap-2'>
                        <label htmlFor="message" className="para-lg font-medium text-gray-700">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            type="message"
                            name="message"
                            rows="4"
                            placeholder="Tell us how we can help you..."
                            required
                            className="common-input-field resize-none min-h-[100px] sm:min-h-[120px] md:min-h-[140px]"
                        ></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="common-btn flex-centered gap-5 w-full"
                    >
                        <span>Send Message</span>
                        <span className="icon-sm">
                            <BsFillSendCheckFill />
                        </span>
                    </button>

                    {/* Auth Status */}
                    {isAuthenticated && (
                        <div className="flex items-center gap-2 text-green-600 para-sm 
                             bg-green-50 p-2 sm:p-3 rounded-lg border border-green-200">
                            <span className="text-base">✅</span>
                            <span>Logged in as {user.name} - Your details are pre-filled</span>
                        </div>
                    )}
                </form>
            </div>

        </>
    );
};