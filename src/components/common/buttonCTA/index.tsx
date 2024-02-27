import Link from "next/link"

interface ButtonCTAProps {
    btnName: string
}

export const ButtonCTA = ({btnName}: ButtonCTAProps) => {
    return (
        <Link href={"/#plan"} className="flex justify-center items-center w-[280px] h-[55px] laptop:h-[65px] bg-primary-default hover:bg-primary-hover font-bold text-white laptop:text-xl text-sm rounded-md ">{btnName}</Link>
    )
}