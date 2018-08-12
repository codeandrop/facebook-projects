import React from 'react';
import { shallow } from 'enzyme';

import ProjectListItem from '../index';

describe('<ProjectListItem />', () => {
  it('should render the ProjectListItem component', () => {
    const sampleProject = {
      name: 'Test',
      full_name: 'Test',
    };
    const renderedComponent = shallow(
      <ProjectListItem project={sampleProject} />,
    );
    expect(renderedComponent.contains('Project:')).toEqual(true);
  });
});
