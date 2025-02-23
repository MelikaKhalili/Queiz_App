import React from "react";

interface StarBorderProps {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children: React.ReactNode;
}

const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "4s",
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative inline-block py-[1px] overflow-hidden rounded-[20px] ${className}`}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute w-[350%] h-[100%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0 "
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="relative z-10 bg-gradient-to-b from-[#006400] to-green-400 border-2 border-gray-900 text-white font-bold text-center text-[16px] py-[16px] px-[26px] rounded-[20px]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
