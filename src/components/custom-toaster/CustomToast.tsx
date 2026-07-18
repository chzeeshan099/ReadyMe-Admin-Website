// CustomToast.tsx
'use client';
import React from "react";
import Image from "next/image";
import ToastDogImage from "@public/images/toast-dog.svg";
import { toast } from "react-toastify";
import { Text } from "rizzui";

const ToastContent = ({ heading, text }: { heading: string; text: string }) => {
  return (
    <div className="flex items-center gap-2 sm:gap-5">
      <Image src={ToastDogImage} alt="dog" className="h-9 w-12" />
      <div>
        <Text className="text-base font-medium text-black-light">{heading}</Text>
        <Text className="text-gray-1200 text-xs sm:text-sm ">{text}</Text>
      </div>
    </div>
  );
};

export const CustomToast = () => {
  return (heading: string, text: string) => {
    toast.dismiss();
    toast(
      <ToastContent heading={heading} text={text} />,
      {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          backgroundColor: "#ffffff",
          color: "#000000",
          borderRadius: "8px",
          width: "400px",
        },
        closeButton: ({ closeToast }) => (
          <button
            onClick={closeToast}
            className="absolute top-2 right-3 text-black-light text-lg leading-none focus:outline-none"
          >
            ×
          </button>
        ),
      }
    );
  };
};
