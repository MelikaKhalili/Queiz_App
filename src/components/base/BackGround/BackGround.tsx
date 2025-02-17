import backGround from "../../../assets/svgs/BackgroundQueizApp.svg";

interface Iprops {
  className: string;
  children: React.ReactNode;
}

export default function BackGround({ className, children }: Iprops) {
  return (
    <div className={className}>
      <img
        className="w-full h-full object-cover rounded-2xl"
        src={backGround}
        alt="BackGround_Queiz_App"
      />
      <div className="absolute z-50">{children}</div>
    </div>
  );
}
