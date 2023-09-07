import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';

interface IProps {
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
  className?: string;
}

export default function Input({ type = 'text', value, onChange, className = '' }: IProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`${className} rounded-sm px-2 py-1 focus:outline-none border-2 focus:border-teal-400`}
    />
  );
}
