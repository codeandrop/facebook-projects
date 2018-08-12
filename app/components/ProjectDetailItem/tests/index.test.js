import React from 'react';
import { shallow } from 'enzyme';

import ProjectDetailItem from '../index';

describe('<ProjectDetailItem />', () => {
  it('should render the ProjectDetailItem component', () => {
    const renderedComponent = shallow(<ProjectDetailItem />);
    expect(renderedComponent.contains(<div />)).toEqual(true);
  });
});
