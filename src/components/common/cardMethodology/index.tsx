import Image from "next/image";


interface CardMethodologyProps {
    icon: string;
    title: string;
    text: string;
}

export const CardMethodology = ({icon, title, text}: CardMethodologyProps) => {
    return (
        <div className="flex flex-col items-center justify-between gap-4">
            <div className="flex justify-center items-center">
            <Image src={`https://nearxschool.s3.us-east-2.amazonaws.com/lp/${icon}.png`} alt="" height={58} width={54} />
            </div>
           <div className="flex flex-col items-center justify-center  h-full gap-2">
            <div className="flex justify-center items-center ">
            <h4 className="text-white text-lg h-8 flex justify-center items-center laptop:text-2xl font-bold">{title}</h4>
            </div>
        
         <div className="flex h-full justify-center items-center">
         <p className="text-text-netraul text-sm  text-center w-[280px] laptop:text-lg ">{text}</p>
         </div>

           </div>
          
         
  
        </div>
    )
}