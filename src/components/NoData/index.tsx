import BookIcon from '@/shared/ui/Icons/BookIcon';

export default function NoData() {
  return (
    <div className="flex flex-col items-center text-neutral-400">
      <h2 className="text-xl uppercase font-semibold">No data</h2>
      <BookIcon className="w-24 h-24" />
    </div>
  );
}
