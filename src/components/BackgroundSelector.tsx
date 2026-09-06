import type { BackgroundOption } from '../types/themes'

interface BackgroundSelectorProps{
    options: BackgroundOption[],
    selected: string;
    onSelect: (value:BackgroundOption)=>void
}
export default function BackgroundSelector({
    options,
    selected,
    onSelect
}:BackgroundSelectorProps){
    return(
        <div>
            <h3 className='mb-3 text-sm font-semibold'>Background</h3>
        
            <div className='grid grid-cols-2 gap-3'>
                {options.map((opt)=>(
                    <button
                        key={opt.id}
                        type='button'
                        onClick={()=>onSelect(opt)}
                        className={`
                            overflow-hidden rounded-xl border
                            transition-all duration-200
                            hover:scale-[1.02]
                            ${
                                selected === opt.id
                                ? "border-violet-500 ring-2 ring-violet-500/30"
                                : "border-slate-300"
                            }
                        `}
                    >
                        <div
                            className="h-20 bg-cover bg-center"
                            style={{backgroundImage:`url(${opt.value})`}}
                        />
                        <div className="px-3 py-2 text-left">
                            <span className="text-sm font-medium">
                                {opt.name}
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}