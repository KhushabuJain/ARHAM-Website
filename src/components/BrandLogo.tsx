
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
    sm: "w-[125px] sm:w-[145px]",
    md: "w-[145px] sm:w-[165px]",
    lg: "w-[155px] sm:w-[180px] lg:w-[190px]",
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
        className={`${logoSizes[size]} h-auto max-h-28 shrink-0 object-contain`}
      />
    </div>
  );
}
