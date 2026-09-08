
interface BackgroundEffectSelectorProps{
    onSelect: (value:any)=>void
}
export default function BackgroundEffectSelector({
    onSelect
}: BackgroundEffectSelectorProps){
    return(
        <div>
            <h3 className='mb-3 text-sm font-semibold'>Background</h3>
        
            <div className='grid grid-cols-2 gap-3'>
                <button
                        key={1}
                        type='button'
                        onClick={()=>onSelect('rain')}
                        className={`
                            overflow-hidden rounded-xl border
                            transition-all duration-200
                            hover:scale-[1.02]
                            
                        `}
                    >
                        <div
                            className="h-20 bg-cover bg-center"
                            // style={{backgroundImage:`url(${opt.value})`}}
                        />
                        <div className="px-3 py-2 text-left">
                            <span className="text-sm font-medium">
                                Rain Drops
                            </span>
                        </div>
                    </button>
            </div>
                
        </div>
    )
}