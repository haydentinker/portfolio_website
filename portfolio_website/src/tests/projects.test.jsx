import {render,screen} from '@testing-library/react';
import { describe,test} from 'vitest';
import { Projects } from '../components/Projects';
import 'intersection-observer';
import '@testing-library/jest-dom';

describe('Projects Component', () => {
 

  test('renders Projects Component and checks to make sure projects element is in document', async() => {
    const { container,getByText}  = render(<Projects/>);
    
    const textContent = getByText('Projects');
    await expect(textContent).toBeInTheDocument();
    const grid=container.querySelectorAll('.MuiGrid-container');
    await expect(grid.length==1);

    const cards=container.querySelectorAll('.MuiCard-root');
    cards.forEach( async(card) => {
        await expect(card).toBeInTheDocument();
        const contentSection = card.querySelector('.MuiCardContent-root');
        const headerSection = card.querySelector('.MuiTypography-h5'); 
        const textSection = card.querySelector('.MuiTypography-body1'); 
    
        await expect(contentSection).toBeInTheDocument();
        await expect(textSection).toBeInTheDocument();
        await expect(headerSection).toBeInTheDocument();
      });
  });
});
