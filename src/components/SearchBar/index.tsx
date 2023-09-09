import Input from '@/shared/ui/Input';
import { ChangeEventHandler, FormEventHandler } from 'react';
import Button from '@/shared/ui/Button';
import SearchIcon from '@/shared/ui/Icons/SearchIcon';

interface IProps {
  onSubmit: () => void;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export default function SearchBar({ onSubmit, onChange, value }: IProps) {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form
      className="w-full flex items-stretch p-3 bg-white/30 rounded-sm gap-2"
      onSubmit={handleSubmit}
    >
      <div className="flex-1 relative flex items-center">
        <Input
          value={value}
          onChange={onChange}
          className="w-full h-full pr-9"
          placeholder="Search..."
        />
        <SearchIcon className="absolute right-2 h-5 w-5 text-neutral-400" />
      </div>
      <Button type="submit" size="md">
        Search
      </Button>
    </form>
  );
}
