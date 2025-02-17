export default function BackGroundTheme({ className, children }: any) {
  return (
    <div className={className}>
      <div className="w-full h-full object-cover rounded-2xl bg-green-300"></div>
      <div className="absolute z-50">{children}</div>
    </div>
  );
}
