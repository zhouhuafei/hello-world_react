import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from './index';

test('test HelloWorld component', () => {
  render(<Index />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
