import { screen, render } from '@testing-library/react';
import Select from '@/shared/ui/Select';
import userEvent from '@testing-library/user-event';

const sortBy = ['relevance', 'newest'];

const props = {
  id: '1',
  label: 'Order by',
  value: sortBy[0],
  options: sortBy,
  setValue: vi.fn(),
};

const onSelectClick = vi.fn();
const onOptionClick = vi.fn();

describe('test select ui component', () => {
  beforeEach(() => {
    render(<Select {...props} />);
    vi.clearAllMocks();
  });

  test('test component render', () => {
    expect(screen.getByText(/order by/i)).toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  test('test dropdown menu', async () => {
    const btn = screen.getByTestId('select-btn');
    await userEvent.click(btn);

    onSelectClick.mock.calls.length === 1;
    const menu: HTMLUListElement = screen.getByRole('list');
    const selectedValue: HTMLSpanElement = screen.getByTestId('select-value');
    expect(menu).toBeInTheDocument();
    expect(selectedValue).toBeInTheDocument();
    expect(selectedValue.innerHTML).toBe('relevance');

    await userEvent.click(menu.children[1]);
    onOptionClick.mock.calls.length === 1;
    expect(menu).not.toBeInTheDocument();
  });
});
