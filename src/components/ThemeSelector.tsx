import type { YouTubeTheme } from "../types/themes";

interface ThemeSelectorProps {
  themes: YouTubeTheme[];
  selectedTheme: string | null;
  onSelect: (theme: YouTubeTheme) => void;
}

export default function ThemeSelector({
  themes,
  selectedTheme,
  onSelect,
}: ThemeSelectorProps) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold">
        Themes
      </h3>

      <div className="grid grid-cols-3 gap-3">
        {themes.map((theme) => (
          <button
            key={theme.id}
            type="button"
            onClick={() => onSelect(theme)}
            className={`
              overflow-hidden rounded-xl border text-left
              transition-all duration-200
              hover:scale-[1.02]
              ${
                selectedTheme && selectedTheme === theme.id
                  ? "border-violet-500 ring-2 ring-violet-500/30"
                  : "border-slate-300 dark:border-neutral-700"
              }
            `}
          >
            <div
              className="h-16"
              style={{
                background: theme.backgroundColor,
              }}
            />

            <div className="px-3 py-2">
              <span className="text-sm font-medium">
                {theme.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}