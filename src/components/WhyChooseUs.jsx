export const WhyChooseUs = ({ data }) => {
  const { color, detail, icon, label, } = data

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16  bg-${color}-100 rounded-full flex items-center justify-center 
                text-${color}-600 icon-sm sm:icon-md`}>
        {icon}
      </div>
      <h4 className="heading-6 text-gray-800">{label}</h4>
      <p className="para-sm text-gray-600">{detail}</p>
    </div>
  );
};