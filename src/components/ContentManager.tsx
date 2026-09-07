import type { YouTubeTheme } from "../types/themes";

interface ContentManagerProps{
    theme: YouTubeTheme;
    onChange:<K extends keyof YouTubeTheme>(
        key: K,
        value: YouTubeTheme[K]
    )=> void;
}

interface ContentToggleProps{
    label: string;
    enabled: boolean;
    onChange: (enabled:boolean)=>void;
}

export default function ContentManager({
    theme,
    onChange
}:ContentManagerProps){
    
    return (
        <div className="mt-3">
            <div className="mb-4 flex items-start">
                <h3 className="text-sm font-semibold">
                    Manage Page Content
                </h3>
            </div>
            
            <div className="space-y-3">
                {/* Hide Shorts */}
                <ContentToggle label="Hide Shorts" enabled={theme.hideShorts} onChange={(enabled)=> onChange("hideShorts", enabled)} />
                
                {/* Hide Comments */}
                <ContentToggle label="Hide Comments" enabled={theme.hideComments} onChange={(enabled)=> onChange("hideComments", enabled)} />

                {/* Hide Recommendations */}
                <ContentToggle label="Hide Recommendations" enabled={theme.hideRecommendations} onChange={(enabled)=> onChange("hideRecommendations", enabled)} />
            </div>
        </div>
    )
}

function ContentToggle({
    label,
    enabled,
    onChange
}:ContentToggleProps){
    return(
        <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-medium">{label}</span>
            <button
                type="button"
                onClick={() => onChange(!enabled)}
                className={`
                    relative h-6 w-11 rounded-full transition-colors
                    ${enabled ? "bg-violet-600" : "bg-slate-300"}
                `}
                aria-pressed={enabled}
                >
                <span
                    className={`
                    absolute left-1 top-1
                    h-4 w-4 rounded-full bg-white
                    transition-transform duration-200
                    ${enabled ? "translate-x-5" : "translate-x-0"}
                    `}
                />
            </button>
        </div>
    )
}
