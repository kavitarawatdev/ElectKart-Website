import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaFacebook } from 'react-icons/fa';

const brands = [
  { name: 'Apple', icon: <FaApple className="text-gray-700 text-4xl" /> },
  { name: 'Google', icon: <FaGoogle className="text-gray-700 text-4xl" /> },
  { name: 'Amazon', icon: <FaAmazon className="text-gray-700 text-4xl" /> },
  { name: 'Microsoft', icon: <FaMicrosoft className="text-gray-700 text-4xl" /> },
  { name: 'Meta', icon: <FaFacebook className="text-gray-700 text-4xl" /> },
];

export const OurPartners = () => {
  return (
    <section className="section common-section text-center">
      <div className="container flex flex-col items-center gap-5">
        <h2 className="heading-2 common-heading ">
          Trusted by These Amazing Brands
        </h2>
        <p className="common-para">
          We’re proud to collaborate with industry-leading companies worldwide.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform hover:scale-110 duration-300"
            >
              {brand.icon}
              <span className="mt-2 para-sm text-gray-600">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

