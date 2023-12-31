import {render,screen,fireEvent} from '@testing-library/react';
import { describe,test} from 'vitest';
import {userEvent} from '@testing-library/user-event';
import { About } from '../components/About';
import '@testing-library/jest-dom';
import 'intersection-observer'
import { toBeInTheDocument, toHaveStyle} from '@testing-library/jest-dom';

describe('About Component', () => {
 

  test('renders About component and checks to make sure text and images are there', async () => {
    const { container,getByText, getByAltText } = render(<About />);
    const heading = getByText(/About Me/i);
    await expect(heading).toBeInTheDocument();
  
    const textContent = getByText(/Future owner of The World's First Pug Army/i);
    await expect(textContent).toBeInTheDocument();
  
    const pugsImage = getByAltText('Pugs');
    await expect(pugsImage).toHaveStyle('filter:grayscale(100%)');
    fireEvent.mouseEnter(pugsImage);
    await expect(pugsImage).toHaveStyle('filter:none');

    fireEvent.mouseLeave(pugsImage);
    await expect(pugsImage).toHaveStyle('filter:grayscale(100%)');
  });
});
