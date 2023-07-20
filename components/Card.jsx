export function Card({fullName, jobTitle, photo }) {
    return (
        <section className="flex flex-row gap-[6px] lg:gap-[10px]">
            <div className="flex flex-col gap-[15px]">
                <div className="w-[139px] h-[209px] lg:w-[238px] lg:h-[341px]">
                    <img className="w-full h-full object-cover" src={photo}/>
                </div>

                <p className="font-semibold text-sm lg:text-lg">{fullName}</p> 
            </div>
            
            <p className="font-ptserif text-[10px] lg:text-xs font-normal uppercase [writing-mode:vertical-lr] whitespace-nowrap">{jobTitle}</p>
                
        </section>
    )
}