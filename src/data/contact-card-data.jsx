import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

export const contact_card=[
    {
        icon:<BsEnvelopeAtFill/>,
        label:"Customer Support",
        detail:"support@eleckart.com",
        color:"blue"
    },
    {
        icon:<FaPhoneAlt/>,
        label:"Phone",
        detail:"+91 98765 43210",
        color:"green",
        link:"tel:+919876543210"
    },
    {
        icon:<IoLocation/>,
        label:"Address",
        detail:"ElecKart HQ, Tech Valley Park, Bangalore, India – 560001",
        color:"purple"
    }
]

export const socialMedia=[
    {
        label:"instagram",
        icon:<FaInstagram/>,
    },
    {
        label:"twitter",
        icon: <FaTwitter/>,
    },
    {
        label:"facebook",
        icon:<FaFacebookF/>,
    },
    {
        label:"youtube",
        icon: <FaYoutube/>,
    },
]