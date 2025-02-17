import greenWaveBackGroundImage from "../../../assets/images/greenWaveBackGroundImage.jpg";
interface Iprops {
  className: string;
}
export default function GreenWaveBackGround({ className }: Iprops) {
  return (
    <div>
      <img
        className={className}
        src={greenWaveBackGroundImage}
        alt="greenWaveBackGroundImage"
      />
    </div>
  );
}
