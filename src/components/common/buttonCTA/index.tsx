
interface ButtonCTAProps {
    btnName: string
}

export const ButtonCTA = ({btnName}: ButtonCTAProps) => {
    return (
        <button className="w-[280px] h-[55px] laptop:h-[65px] bg-primary-default hover:bg-primary-hover font-bold text-white laptop:text-xl text-sm rounded-md ">{btnName}</button>
    )
}