import Image from "next/image"
import logoImg from "../../../public/assets/logo.png"

export const Header = () => {
return (
    <header className="flex justify-center ">
        <Image src={logoImg} alt="" width={239} height={56} />
      
    </header>
)
}