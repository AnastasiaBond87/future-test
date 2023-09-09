import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children: ReactNode;
  className?: string;
  size: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export default function TextButton({
  type = 'button',
  children,
  className = '',
  size,
  onClick,
}: IProps) {
  const classList = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} bg-none font-semibold text-teal-400 hover:text-teal-300 active:text-neutral-300 uppercase leading-none ${classList[size]} duration-300`}
    >
      {children}
    </button>
  );
}
