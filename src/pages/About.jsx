export const About = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="heading-2 mb-6">
            About <span className="text-blue-600">ElecKart</span>
          </h2>
          <p className="para-lg mb-6">
            ElecKart is your one-stop shop for cutting-edge electronics. From the latest smartphones and smartwatches to powerful laptops and sleek accessories, we bring top brands under one digital roof.
          </p>
          <p className="para-lg">
            Founded with a passion for technology and a commitment to customer satisfaction, ElecKart partners with trusted companies like Apple, Samsung, HP, Sony, and more. We ensure fast delivery, secure payments, and genuine products at competitive prices.
          </p>
        </div>

        {/* Image or Illustration */}
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dwwurx8fo/image/upload/v1752573522/elecKart-logo_rpipm2.png"
            alt="About ElecKart"
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

