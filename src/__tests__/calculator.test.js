import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

describe('Calculator snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Calculator funuctionality', () => {
  test('Displays number 1 when button', () => {
    render(<Calculator />);

    const btnOne = screen.getByText('1');
    const input = screen.getByPlaceholderText('0');
    fireEvent.click(btnOne);

    expect(input.value).toBe('1');
  });

  test('Displays second number after operator', () => {
    render(<Calculator />);

    const btnOne = screen.getByText('1');
    const btnTwo = screen.getByText('2');
    const btnPlus = screen.getByText('+');
    const input = screen.getByPlaceholderText('0');
    fireEvent.click(btnOne);
    fireEvent.click(btnPlus);
    fireEvent.click(btnTwo);

    expect(input.value).toBe('2');
  });
});
