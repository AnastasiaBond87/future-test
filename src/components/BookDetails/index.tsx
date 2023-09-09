import { IBook } from '@/shared/types/api.types';
import ImageIcon from '../../shared/ui/Icons/ImageIcon';

type TProps = Pick<IBook, 'volumeInfo'>;

export default function BookDetails({ volumeInfo }: TProps) {
  const { title, categories, description, authors, imageLinks } = volumeInfo;

  return (
    <div className="self-stretch flex w-full flex-col sm:flex-row">
      <div className="bg-neutral-100 grow-0 shrink-0 basis-1/3 px-5 xs:px-9 py-9 flex justify-center items-start">
        {imageLinks && imageLinks.small ? (
          <img
            alt="title"
            src={imageLinks.small ?? imageLinks.medium}
            className="w-[21rem] max-w-full"
          />
        ) : (
          <ImageIcon className="w-36 h-36 text-neutral-400" />
        )}
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
