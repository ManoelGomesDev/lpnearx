import Link from "next/link"
import { useRouter } from "next/navigation"

interface ButtonCTAProps {
    btnName: string
}

export const ButtonCTATop = ({btnName}: ButtonCTAProps) => {

    const route = useRouter()

    const handleToPlans = () => {
        route.push('/#plan')
    }

    return (
   
   <button onClick={handleToPlans} className="flex justify-center items-center w-[280px] laptop:w-[403px] h-[55px] laptop:h-[92px] bg-primary-default hover:bg-primary-hover font-bold text-white laptop:text-xl text-sm rounded-md -mt-[70px] laptop:-mt-[82px]">{btnName}</button>
   
     
    )
}