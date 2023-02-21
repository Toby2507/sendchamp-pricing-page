import { atom } from "recoil";
import { footerColInterface } from "../Utils/interfaces";

export const footerColAtom = atom<footerColInterface[]>({
  key: "footerColState",
  default: [
    {
      title: "Products",
      items: [
        "Channels / Router",
        "Verification",
        "No-Code Tools"
      ]
    },
    {
      title: "Solutions",
      items: [
        "Onboard",
        "Engage",
        "Support",
        "Retain"
      ]
    },
    {
      title: "Resources",
      items: [
        "Developers",
        "API Reference",
        "Guides",
        "SDKs/Libraries",
        "Community",
        "Status Page",
        "Pricing"
      ]
    },
    {
      title: "Company",
      items: [
        "About Us",
        "Our Stories",
        "Careers",
        "Contact",
        "Terms of Use",
        "Privacy"
      ]
    },
    {
      title: "Follow us",
      items: [
        "Twitter",
        "LinkedIn",
        "Facebook",
        "Instagram"
      ]
    },
    {
      title: "Contact us",
      items: [
        "+234(0)18880261",
        "sales@sendchamp.com",
        "help@sendchamp.com"
      ]
    }
  ]
});