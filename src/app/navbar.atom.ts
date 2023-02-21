import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineBookOpen, HiOutlineNewspaper, HiOutlineStar } from "react-icons/hi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { RiCheckboxMultipleLine, RiMailSendLine, RiWhatsappLine } from "react-icons/ri";
import { TbMessage2, TbMessage2Code } from "react-icons/tb";
import { TfiRulerPencil } from "react-icons/tfi";
import { atom } from "recoil";
import { NavItemInterface } from "../Utils/interfaces";

export const navbarMenuAtom = atom<NavItemInterface[]>({
  key: "navbarItemState",
  default: [
    {
      title: "Products", submenus: [
        {
          title: "Channels", items: [
            { title: "SMS", icon: TbMessage2, desc: "Send SMS seamlessly at the best rate via the best routes to your customers" },
            { title: "Email", icon: RiMailSendLine, desc: "Send emails to your customers with high deliverability" },
            { title: "Whatsapp", icon: RiWhatsappLine, desc: "Engage your customers via whatsapp at ease" },
            { title: "Voice", icon: FiPhoneCall, desc: "Add voice capabilities to any app or communication system" }
          ]
        },
        {
          title: "Services", items: [
            { title: "MARKETING", icon: HiOutlineStar, desc: "Easy to use customer engagement platform to engage and retain customers" },
            { title: "VERIFICATION", icon: IoIosCheckmarkCircleOutline, desc: "Quick solution to sent OTP via sms, whatsapp, email and voice" }
          ]
        },
        {
          title: "No-code Tools", items: [
            { title: "VERIFICATION POP-UP" },
            { title: "SIMULATORS" },
            { title: "FORM", notAvailable: true },
          ]
        }
      ]
    },
    {
      title: "Developers", submenus: [
        {
          title: "Developers", items: [
            { title: "API Reference", icon: TbMessage2Code },
            { title: "Tutorial", icon: TfiRulerPencil },
            { title: "Guides", icon: HiOutlineNewspaper },
            { title: "SDKs/Libraries", icon: FiPhoneCall },
            { title: "Community", icon: HiOutlineBookOpen },
            { title: "Status Page", icon: RiCheckboxMultipleLine }
          ]
        }
      ]
    },
    {
      title: "Company", submenus: [
        {
          title: "Company", items: [
            { title: "About Sendchamp" },
            { title: "Customers" },
            { title: "Our Blog" },
            { title: "Careers" },
            { title: "Contact" },
            { title: "Support" }
          ]
        }
      ]
    },
    {
      title: "Use Cases", submenus: [
        {
          title: "Company", items: [
            { title: "For Developers" },
            { title: "For Marketers" },
            { title: "For Creators" },
            { title: "For Startups" },
            { title: "For Enterprise" }
          ]
        }
      ]
    },
    { title: "Pricing" }
  ]
});