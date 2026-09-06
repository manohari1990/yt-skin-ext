interface ColorOption {
  id: string;
  value: string;
}

interface ColorSelectorProps {
  title: string;
  options: ColorOption[];
  selected: string;
  onSelect: (value: string) => void;
}

export default function ColorSelector({
  title,
  options,
  selected,
  onSelect,
}: ColorSelectorProps) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold">
        {title}
      </h3>

      <div className="flex gap-3">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-label={option.id}
            onClick={() => onSelect(option.value)}
            className={`
              h-8 w-8 rounded-full
              border-2
              transition-all duration-200
              hover:scale-110
              ${
                selected === option.value
                  ? "border-white ring-2 ring-violet-500"
                  : "border-transparent"
              }
            `}
            style={{
              background: option.value,
            }}
          />
        ))}
      </div>
    </div>
  );
}