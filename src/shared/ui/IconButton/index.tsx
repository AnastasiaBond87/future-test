import { ButtonHTMLAttributes } from 'react';

interface IProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  icon: JSX.Element;
  className?: string;
  size: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export default function IconButton({ type = 'button', icon, className, size, onClick }: IProps) {
  const classList = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} ${classList[size]} rounded-sm text-neutral-400 hover:text-neutral-500 duration-300`}
    >
      {icon}
    </button>
  );
}
