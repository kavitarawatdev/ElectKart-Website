import { FaStar, FaTruck  } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbShieldCheckFilled } from "react-icons/tb";

export const service_card_data = [
  {
    icon: <TbShieldCheckFilled className="text-green-600" />,
    title: "100% Genuine Products",
    description: "We provide only original, top-quality products from trusted brands.",
  },
  {
    icon: <FaTruck className="text-blue-600" />,
    title: "Fast & Free Delivery",
    description: "Quick delivery across India on all orders above ₹499.",
  },
  {
    icon: <RiSecurePaymentLine className="text-purple-600" />,
    title: "Secure Payment",
    description: "Multiple payment options with end-to-end encryption.",
  },
  {
    icon: <FaStar className="text-yellow-500" />,
    title: "Trusted by 10k+ Customers",
    description: "Rated 4.8/5 by thousands of happy shoppers.",
  },
];
