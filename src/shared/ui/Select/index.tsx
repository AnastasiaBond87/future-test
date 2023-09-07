import ArrowDownIcon from '@/shared/ui/Icons/ArrowDownIcon';
import useClickOutside from '@/shared/hooks/useClickOutside';

interface IProps {
  id: string;
  options: string[];
  value: string;
  label: string;
  setValue: (value: string) => void;
}

export default function Select({ options, value, setValue, id, label }: IProps) {
  const { ref, isOpen, setOpen } = useClickOutside<HTMLDivElement>();

  const handleOptionClick = (value: string): void => {
    setValue(value);
    setOpen(false);
  };

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="capitalize text-base font-semibold text-teal-200 mb-[2px] italic"
      >
        {label}:
      </label>
      <div
        id={id}
        ref={ref}
        onClick={() => setOpen(!isOpen)}
        className="w-52 h-8 py-1 px-2 bg-white rounded-sm flex items-center justify-between cursor-pointer"
      >
        <span className="text-base capitalize">{value}</span>
        <ArrowDownIcon
          className={`h-6 w-6 text-neutral-400 ${isOpen ? 'rotate-180' : ''} duration-150`}
        />
      </div>
      <div
        className={`absolute ${
          isOpen ? 'h-auto' : 'h-0'
        } overflow-hidden bg-black/70 w-full rounded-sm`}
      >
        <ul className="flex flex-col gap-1 p-2">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="text-base text-white capitalize cursor-pointer hover:text-teal-400 duration-300"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
