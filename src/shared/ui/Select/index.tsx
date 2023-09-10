import ArrowDownIcon from '@/shared/ui/Icons/ArrowDownIcon';
import useClickOutside from '@/shared/hooks/useClickOutside';

interface IProps {
  id: string;
  options: string[];
  value: string;
  label: string;
  className?: string;
  setValue: (value: string) => void;
}

export default function Select({ options, value, setValue, id, label, className = '' }: IProps) {
  const { ref, isOpen, setOpen } = useClickOutside<HTMLDivElement>();

  const handleOptionClick = (value: string): void => {
    setValue(value);
    setOpen(false);
  };

  return (
    <div className="relative max-w-max">
      <label
        htmlFor={id}
        className="capitalize text-base font-semibold text-teal-200 mb-[2px] italic"
      >
        {label}:
      </label>
      <div
        data-testid="select-btn"
        id={id}
        ref={ref}
        onClick={() => setOpen(!isOpen)}
        className={`h-8 py-1 px-2 bg-white rounded-sm flex items-center justify-between cursor-pointer ${className}`}
      >
        <span className="text-base capitalize" data-testid="select-value">
          {value}
        </span>
        <ArrowDownIcon
          className={`h-6 w-6 text-neutral-400 ${isOpen ? 'rotate-180' : ''} duration-150`}
        />
      </div>
      {isOpen && (
        <div className={`absolute z-10  bg-black/80 w-full rounded-sm`}>
          <ul className="flex flex-col py-1">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`py-1 px-2 text-base capitalize cursor-pointer duration-300 ${
                  value === option ? 'text-teal-400' : 'text-white hover:bg-white/20'
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
