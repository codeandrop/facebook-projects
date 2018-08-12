import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from '../index';

describe('<ErrorMessage />', () => {
  it('should render the ErrorMessage component', () => {
    const renderedComponent = shallow(<ErrorMessage />);
    expect(
      renderedComponent.contains('There was an error loading the info'),
    ).toEqual(true);
  });
});
