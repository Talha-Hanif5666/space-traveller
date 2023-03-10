import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Rockets from '../routes/Rockets';

describe('Mission test', () => {
  test('to render all missions: ', () => {
    const mockedRockets = [
      {
        id: 'rocket1',
        name: 'Rocket 1',
        desc: 'A rocket description',
        img: 'rocket1.jpg',
        booked: false,
      },
      {
        id: 'rocket2',
        name: 'Rocket 2',
        desc: 'A rocket description',
        img: 'rocket2.jpg',
        booked: false,
      },
    ];
    const rockets = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rockets rockets={mockedRockets} />
        </BrowserRouter>
      </Provider>,
    );
    expect(rockets).toMatchSnapshot();
  });
});

// import React from 'react';
// import renderer from 'react-test-renderer';
// // import {
// //   render, fireEvent, screen,
// // } from '@testing-library/react';
// import Rocket from '../components/Rocket';
// import '@testing-library/jest-dom';

// describe('calculate tests for different button inputs', () => {
//   it('renders Home element correctly', () => {
//     const rocket = {
//       id:'rocket1',
//       name: 'Mock rocket',
//       desc: 'Something about it',
//       img: 'test.jpg',
//       booked: false
//     }
//     const tree = renderer
//       .create(<Rocket rocket={rocket}/>)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   // it('renders Quote element correctly', () => {
//   //   const tree = renderer
//   //     .create(<Quote />)
//   //     .toJSON();
//   //   expect(tree).toMatchSnapshot();
//   // });

//   // it('renders Calculator element correctly', () => {
//   //   const tree = renderer
//   //     .create(<Calculator />)
//   //     .toJSON();
//   //   expect(tree).toMatchSnapshot();
//   // });
// });
