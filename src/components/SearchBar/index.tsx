import Input from '@/shared/ui/Input';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import Button from '@/shared/ui/Button';
import SearchIcon from '@/shared/ui/Icons/SearchIcon';
import IconButton from '../../shared/ui/IconButton';
import ClearIcon from '../../shared/ui/Icons/ClearIcon';

interface IProps {
  onSubmit: (value: string) => void;
}

export default function SearchBar({ onSubmit }: IProps) {
  const [value, setValue] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (value.trim()) {
      onSubmit(value);
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const clearInput = (): void => {
    setValue('');
  };

  return (
    <form
      className="w-full flex items-stretch p-3 bg-white/30 rounded-sm gap-2"
      onSubmit={handleSubmit}
    >
      <div className="flex-1 relative flex items-center">
        <SearchIcon className="absolute left-2 h-5 w-5 text-neutral-400" />
        <Input
          value={value}
          onChange={handleChange}
          className="w-full h-full px-9"
          placeholder="Search..."
        />
        {value.trim() && (
          <IconButton
            icon={<ClearIcon />}
            size="sm"
            className="absolute right-2"
            onClick={clearInput}
          />
        )}
      </div>
      <Button type="submit" size="md">
        Search
      </Button>
    </form>
  );
}
