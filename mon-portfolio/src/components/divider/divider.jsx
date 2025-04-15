import { cn } from "../../utils/style";

export const Divider=({className, ...rest}) => {
  return (
    <div className={cn(className, "block bg-gray-300 h-0.5 w-full")} {...rest}></div>
  )
}