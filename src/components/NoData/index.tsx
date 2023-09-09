import BookIcon from '@/shared/ui/Icons/BookIcon';

interface IProps {
  message: string;
}

export default function NoData({ message }: IProps) {
  return (
    <div className="flex flex-col items-center text-neutral-400">
      <h2 className="text-xl uppercase font-semibold">{message}</h2>
      <BookIcon className="w-24 h-24" />
    </div>
  );
}
