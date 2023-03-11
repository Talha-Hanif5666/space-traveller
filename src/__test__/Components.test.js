import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Layout from '../components/Layout';
import MyRockets from '../components/MyRockets';
import Navbar from '../components/Navbar';
import Rocket from '../components/Rocket';

describe('Layout tests', () => {
  test('to render Layout with an error: ', () => {
    const mockedStatus = [
      {
        error: 'An error message',
        loading: false,
      },
    ];
    const layout = render(
      <Provider store={store}>
        <BrowserRouter>
          <Layout status={mockedStatus} />
        </BrowserRouter>
      </Provider>,
    );
    expect(layout).toMatchSnapshot();
  });
  test('to render Layout when loading and no error: ', () => {
    const mockedStatus = [
      {
        error: '',
        loading: true,
      },
    ];
    const layout = render(
      <Provider store={store}>
        <BrowserRouter>
          <Layout status={mockedStatus} />
        </BrowserRouter>
      </Provider>,
    );
    expect(layout).toMatchSnapshot();
  });
});

describe('MyRockets tests', () => {
  test('to render MyRockets with all rockets booked: ', () => {
    const mockedRockets = [
      {
        id: 'rocket1',
        name: 'Rocket 1',
        desc: 'A rocket description',
        img: 'rocket1.jpg',
        booked: true,
      },
      {
        id: 'rocket2',
        name: 'Rocket 2',
        desc: 'A rocket description',
        img: 'rocket2.jpg',
        booked: true,
      },
    ];
    const myRockets = render(
      <Provider store={store}>
        <BrowserRouter>
          <MyRockets myRockets={mockedRockets} />
        </BrowserRouter>
      </Provider>,
    );
    expect(myRockets).toMatchSnapshot();
  });

  it('renders Calculator and test if key pressed updates value of calculator display', () => {
    const mockedRockets = [];
    render(<MyRockets myRockets={mockedRockets} />);
    expect(screen.getByRole('status')).toHaveTextContent('No rockets yet');
  });
});

describe('Navbar tests', () => {
  test('to render errors: ', () => {
    const mockedError = 'An error message';
    const mockedLoading = false;
    const navbar = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar error={mockedError} loading={mockedLoading} />
        </BrowserRouter>
      </Provider>,
    );
    expect(navbar.getByRole('log')).toHaveTextContent('An error message');
  });

  test('to render loading: ', () => {
    const mockedError = '';
    const mockedLoading = true;
    const navbar = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar error={mockedError} loading={mockedLoading} />
        </BrowserRouter>
      </Provider>,
    );
    expect(navbar.getByRole('status')).toHaveTextContent('Loading...');
  });
});

describe('Rocket element tests', () => {
  test('to render rocket element: ', () => {
    const mockedRocket = {
      id: 'rocket1',
      name: 'Rocket 1',
      desc: 'A rocket description',
      img: 'rocket1.jpg',
      booked: false,
    };

    const rocket = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rocket rocket={mockedRocket} />
        </BrowserRouter>
      </Provider>,
    );
    expect(rocket).toMatchSnapshot();
  });

  test('to render button as available for booking: ', () => {
    const mockedRocket = {
      id: 'rocket1',
      name: 'Rocket 1',
      desc: 'A rocket description',
      img: 'rocket1.jpg',
      booked: false,
    };

    const rocket = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rocket rocket={mockedRocket} />
        </BrowserRouter>
      </Provider>,
    );
    expect(rocket.getByRole('button')).toHaveTextContent('Reserve rocket');
    expect(rocket.getByRole('status')).toHaveTextContent('Available');
  });

  test('to render button as available for booking: ', () => {
    const mockedRocket = {
      id: 'rocket1',
      name: 'Rocket 1',
      desc: 'A rocket description',
      img: 'rocket1.jpg',
      booked: true,
    };

    const rocket = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rocket rocket={mockedRocket} />
        </BrowserRouter>
      </Provider>,
    );
    expect(rocket.getByRole('button')).toHaveTextContent('Cancel reservation');
    expect(rocket.getByRole('status')).toHaveTextContent('Reserved');
  });
});
