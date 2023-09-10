import { screen, render } from '@testing-library/react';
import SearchBar from '@/components/SearchBar';
import userEvent from '@testing-library/user-event';

const onSubmit = vi.fn();
const clearInput = vi.fn();

describe('search bar component', () => {
  beforeEach(() => {
    render(<SearchBar onSubmit={onSubmit} />);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('test component render', () => {
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn.getAttribute('type')).toBe('submit');
  });

  test('test input', async () => {
    const input: HTMLInputElement = screen.getByPlaceholderText(/search/i);
    expect(input.value).toBe('');
    expect(screen.queryByRole('clear-btn')).not.toBeInTheDocument();

    await userEvent.type(input, 'test');
    expect(input.value).toBe('test');

    const clearBtn = screen.getByTestId('clear-btn');
    expect(clearBtn).toBeInTheDocument();

    await userEvent.click(clearBtn);
    clearInput.mock.calls.length === 1;
  });

  test('test submit form', async () => {
    const input: HTMLInputElement = screen.getByPlaceholderText(/search/i);
    const submitBtn: HTMLButtonElement = screen.getByRole('button');

    await userEvent.type(input, 'test');
    await userEvent.click(submitBtn);
    onSubmit.mock.calls.length === 1;
  });
});
