import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';

interface IProps {
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
  className?: string;
  placeholder: InputHTMLAttributes<HTMLInputElement>['placeholder'];
}

export default function Input({
  type = 'text',
  value,
  onChange,
  className = '',
  placeholder,
}: IProps) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className={`${className} text-base rounded-sm px-3 py-2 focus:outline-none border-2 focus:border-teal-400 placeholder:italic`}
    />
  );
}
