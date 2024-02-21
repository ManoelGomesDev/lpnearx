interface Props {
    title: string;
    info: string;
    font: string
}

export const CardSmall = ({font,info, title}:Props) => {
    return (
        <div>
      <div className="w-[250px] h-[150px] px-4   py-6 gap-2  bg-card-static flex flex-col items-center justify-center rounded-md border-gray-500 border-[1px]">
            <p className="text-white text-sm font-bold">{title}</p>
            <p className="text-primary-default text-xl font-bold ">{info}</p>
            <p><span className="text-text-fontInfo text-xs">fonte:</span><a href={`https://${font}`} target="_blank" className="text-text-fontInfo text-xs">{font}</a></p>
        </div>
        </div>
  
    )
}

