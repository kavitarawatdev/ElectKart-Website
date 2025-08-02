export const Contact = () => {
    return (
        <>
            <section className="section">
                <div className="container flex flex-col items-center gap-5">
                    <h2 className="common-heading">Contact Us</h2>
                    <p className="common-para">
                        Have a question, suggestion, or need support? We'd love to hear from you.
                    </p>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-5">

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className='flex flex-col gap-1'>
                                <h5 className="heading-5">Customer Support</h5>
                                <p className="para-lg">support@eleckart.com</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h5 className="heading-5">Phone</h5>
                                <p className="para-lg">+91 98765 43210</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h5 className="heading-5">Address</h5>
                                <p className="para-lg">
                                    ElecKart HQ, Tech Valley Park, Bangalore, India – 560001
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="bg-white p-8 shadow-sm shadow-green-400 rounded-lg flex flex-col gap-4">
                            <div className='flex flex-col gap-1.5'>
                                <label htmlFor="name" className="para-lg">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="common-input-field"
                                />
                            </div>

                            <div className='flex flex-col gap-1.5'>
                                <label htmlFor="email" className="para-lg">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="common-input-field"
                                />
                            </div>

                            <div className='flex flex-col gap-1.5'>
                                <label htmlFor="message" className="para-lg">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    required
                                    className="common-input-field"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="common-btn"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    );
};