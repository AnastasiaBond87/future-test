import Input from '@/shared/ui/Input';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import Button from '@/shared/ui/Button';
import SearchIcon from '@/shared/ui/Icons/SearchIcon';

export default function SearchBar() {
  const [inputVal, setInputVal] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    setInputVal(value.trim());
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="w-[600px] max-w-full flex items-stretch p-3 bg-white/30 rounded-sm gap-2"
      onSubmit={handleSubmit}
    >
      <div className="flex-1 relative flex items-center">
        <Input value={inputVal} onChange={handleChange} className="w-full h-full pr-9" />
        <SearchIcon className="absolute right-2 h-5 w-5 text-neutral-400" />
      </div>
      <Button type="submit" size="md">
        Search
      </Button>
    </form>
  );
}
