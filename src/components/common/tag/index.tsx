interface TagProps {
    text: string
}


export const Tag = ({text}: TagProps) => {
    return (
        <div className="w-[100px]">
 <p className="text-white bg-primary-default px-4 py-2 rounded-full text-center">{text}</p>
        </div>
       
    )
}