import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
    import storeConfig from './store/storeConfig';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
const store = storeConfig();

    test('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    });
