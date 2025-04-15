import { cn } from "../../utils/style";

export const Text=({color = "foreground",
  size = "base",
  weight = "normal",
  align = "left",
  children,
  className,
  ...rest}) =>{

  const style = cn(
    className,
    {
      "text-primary": color === "primary",
      "text-stone-400": color === "gray",

      "text-sm": size === "sm",
      "text-base": size === "base",
      "text-lg": size === "lg",
      "text-xl": size === "xl",
      "text-2xl": size === "2xl",
      "text-3xl": size === "3xl",
      "text-4xl": size === "4xl",
      "text-5xl": size === "5xl",

      "font-normal": weight === "normal",
      "font-medium": weight === "medium",
      "font-semibold": weight === "semibold",
      "font-bold": weight === "bold",

      "text-left": align === "left",
      "text-center": align === "center",
      "text-right": align === "right"
    }
  );

  return <p className={style} {...rest}>{children}</p>;
}