import { servicesData } from "../data/services-data";

export const Services = () => {
  return (
    <section className="section common-section">
      <div className="container flex flex-col items-center gap-5">
        <h2 className="common-heading">
          Our Customer-Centric Services
        </h2>
        <p className="common-para">
          At ElecKart, we offer a range of customer-centric services designed to enhance your shopping experience. Our services are built to deliver convenience, trust, and satisfaction at every step.
        </p>

        <div className="grid grid-cols-4 gap-10">
          {servicesData.map((feature, index) => (
            <div
              key={index}
              className="flex-centered flex-col shadow-sm shadow-green-400 rounded-2xl transition duration-300 gap-2 p-4"
            >
              <div className="icon-lg">{feature.icon}</div>
              <h6 className="heading-6">
                {feature.title}
              </h6>
              <p className="para-md text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};