import {render,screen} from '@testing-library/react';
import { describe,test} from 'vitest';
import { Loading } from '../components/Loading';
import '@testing-library/jest-dom'
describe('Loading Component', () => {
 

  test('renders Loading Component and checks to make sure text is in document', () => {
    const { getByText} = render(<Loading/>);
    
    const textContent = getByText('Loading...');
    expect(textContent).toBeInTheDocument();
  
  });
});
