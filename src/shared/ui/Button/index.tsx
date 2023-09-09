import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children: ReactNode;
  className?: string;
  size: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export default function Button({ type = 'button', children, className, size, onClick }: IProps) {
  const classList = {
    sm: 'p-1 text-sm',
    md: 'py-2 px-3 text-base',
    lg: 'py-3 px-4 text-lg',
  };
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} font-semibold text-neutral-50 uppercase leading-none ${classList[size]} rounded-sm bg-teal-400 hover:bg-teal-300 hover:text-white hover:shadow-md active:text-white active:bg-neutral-300 duration-300`}
    >
      {children}
    </button>
  );
}
