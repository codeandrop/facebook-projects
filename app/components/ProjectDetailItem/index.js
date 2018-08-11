import React from 'react';
import PropTypes from 'prop-types';

class ProjectDetailItem extends React.Component {
  render() {
    const { item, detailType } = this.props;

    if (detailType === 'contributors') {
      return (
        <div>
          <div>{item.login}</div>
          <div>
            <img width="32" src={item.avatar_url} alt="profile" />{' '}
          </div>
        </div>
      );
    }

    return <div />;
  }
}

ProjectDetailItem.propTypes = {
  item: PropTypes.object,
  detailType: PropTypes.string,
};

export default ProjectDetailItem;
