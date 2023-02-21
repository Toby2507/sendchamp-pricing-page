import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { RiVoiceprintFill, RiWhatsappLine } from "react-icons/ri";
import { TbMessage2 } from "react-icons/tb";
import { atom } from "recoil";
import { SingleProductInterface } from "../Utils/interfaces";

export const productListAtom = atom<SingleProductInterface[]>({
  key: 'productListState',
  default: [
    {
      id: 1,
      icon: TbMessage2,
      title: "SMS",
      sendDesc: "To Send SMS",
      recieveDesc: "To Receive SMS",
      priceUnit: "sms",
      sendPrice: 3.0870,
      extraDetail: true
    },
    {
      id: 2,
      icon: RiVoiceprintFill,
      title: "Voice",
      sendDesc: "To Make Calls",
      recieveDesc: "To Receive Calls",
      priceUnit: "sec",
      sendPrice: 84.0000,
      extraDetail: false
    },
    {
      id: 3,
      icon: IoMailOutline,
      title: "Email",
      sendDesc: "Price Per Mail",
      priceUnit: "email",
      sendPrice: 0.7000,
      extraDetail: false
    },
    {
      id: 4,
      icon: RiWhatsappLine,
      title: "Whatsapp",
      sendDesc: "To Send Message",
      recieveDesc: "To Receive Message",
      priceUnit: "msg",
      sendPrice: 3.5000,
      extraDetail: true
    },
    {
      id: 5,
      icon: IoIosCheckmarkCircleOutline,
      title: "Verification",
      sendDesc: "To Send OTP",
      recieveDesc: "To Receive OTP",
      priceUnit: "OTP",
      sendPrice: 3.0870,
      extraDetail: false
    },
  ]
});