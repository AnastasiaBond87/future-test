import { IBook } from '@/shared/types/api.types';
import ImageIcon from '@/shared/ui/Icons/ImageIcon';
import { useNavigate } from 'react-router-dom';

interface IProps {
  book: IBook;
}

export default function BookItem({ book }: IProps) {
  const navigate = useNavigate();

  const {
    id,
    volumeInfo: { title, categories, authors, imageLinks },
  } = book;

  const handleClick = (): void => {
    navigate(`/books/${id}`);
  };

  return (
    <li
      className="bg-neutral-100 p-10 flex flex-col justify-between shadow-md border cursor-pointer"
      onClick={handleClick}
      data-testid="book-card"
    >
      {imageLinks && imageLinks.thumbnail ? (
        <div className="shadow-[4px_6px_8px_0px_rgba(34,60,80,0.2)] mb-6 w-28 self-center">
          <img
            alt={title}
            src={imageLinks.thumbnail}
            className="max-w-full"
            data-testid="card-image"
          />
        </div>
      ) : (
        <div className="min-w-full flex justify-center">
          <ImageIcon className="w-20 h-20 text-neutral-400" />
        </div>
      )}
      <div className="flex flex-col gap-2 text-base">
        {categories && (
          <span className="text-neutral-500 capitalize underline font-semibold">
            {categories[0]}
          </span>
        )}
        {title && <span className="font-bold">{title}</span>}
        {authors && <span className="text-neutral-500 font-semibold">{authors.join(', ')}</span>}
      </div>
    </li>
  );
}
