import {render, screen} from '@testing-library/react';
import App from './App';

test('should have correct button color', () => {
  render(<App/>)

  const button = screen.getByRole('button', {name: 'Change to yellow'});

  const expectedButtonStyle = {backgroundColor: 'blue'};

  expect(button).toHaveStyle(expectedButtonStyle)
});
