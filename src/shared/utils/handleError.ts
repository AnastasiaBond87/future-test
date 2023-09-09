import { toast } from 'react-toastify';
import { IError } from '@/shared/types/api.types';

const handleError = (error: unknown) => {
  const err = error as IError;

  if (err.error.message) {
    toast.error(err.error.message);
  } else {
    toast.error('UNKNOWN ERROR');
  }
};

export { handleError };
