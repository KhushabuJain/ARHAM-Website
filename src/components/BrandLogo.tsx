
interface BrandLogoProps {
  variant?: "horizontal" | "stacked" | "icon-only";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({
  variant = "horizontal",
  className = "",
  size = "md",
}: BrandLogoProps) {
 const logoSizes = {
  sm: "w-[115px] sm:w-[130px]",
  md: "w-[130px] sm:w-[145px]",
  lg: "w-[140px] sm:w-[155px] lg:w-[165px]",
};
  if (variant === "icon-only") {
    return (
      <img
        src="/arham-logo.png"
        alt="ARHAM"
        loading="eager"
        decoding="async"
        className={`h-12 w-auto shrink-0 object-contain ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex ${
        variant === "stacked"
          ? "flex-col items-center"
          : "flex-row items-center"
      } ${className}`}
    >
      <img
        src="/arham-logo.png"
        alt="ARHAM Engineering & Construction"
        loading="eager"
        decoding="async"
        className={`${logoSizes[size]} h-auto max-h-18 shrink-0 object-contain`}
      />
    </div>
  );
}
