import { render, screen } from '@testing-library/react';
import App from './App';

test('Se renderiza el titulo Tareas', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tareas/i);
  expect(linkElement).toBeInTheDocument();
});
