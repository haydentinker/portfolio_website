import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from '../components/Loading';
import './mocks/intersectionObserverMock';
import { toBeInTheDocument, toHaveStyle} from '@testing-library/jest-dom';
describe('Loading Component', () => {
 

  test('renders Loading Component and checks to make sure text is in document', () => {
    const { getByText} = render(<Loading/>);
    
    const textContent = getByText('Loading...');
    expect(textContent).toBeInTheDocument();
  
  });
});
