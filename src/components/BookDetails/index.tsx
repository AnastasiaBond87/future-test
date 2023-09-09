import { IBook } from '@/shared/types/api.types';

interface IProps {
  book: IBook;
}

export default function BookDetails({ book }: IProps) {
  const { title, categories, description, authors, imageLinks } = book.volumeInfo;

  return (
    <div className="self-stretch flex w-full">
      <div className="bg-neutral-100 grow-0 shrink-0 basis-1/3 px-5 xs:px-9 py-9 flex justify-center items-start">
        {imageLinks && imageLinks.small && <img alt="title" src={imageLinks.small} />}
      </div>
      <div className="px-5 xs:px-9 py-9 flex flex-col gap-5">
        {categories && <p className="text-neutral-500 text-base">{categories.join('/')}</p>}
        {title && <p className="text-2xl font-bold">{title}</p>}
        {authors && <p className="underline text-neutral-400">{authors.join(', ')}</p>}
        <p
          dangerouslySetInnerHTML={{ __html: description ?? 'No description' }}
          className="border p-3 min-h-[20rem]"
        />
      </div>
    </div>
  );
}
