import Link from "next/link"

interface ButtonCTAProps {
    btnName: string
}

export const ButtonCTATop = ({btnName}: ButtonCTAProps) => {
    return (
   
   <Link href={"/#plan"} className="flex justify-center items-center w-[280px] laptop:w-[403px] h-[55px] laptop:h-[92px] bg-primary-default hover:bg-primary-hover font-bold text-white laptop:text-xl text-sm rounded-md -mt-[70px] laptop:-mt-[82px]">{btnName}</Link>
   
     
    )
}