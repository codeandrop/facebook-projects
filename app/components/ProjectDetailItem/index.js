import React from 'react';
import PropTypes from 'prop-types';
import './ProjectDetailItem.css';

class ProjectDetailItem extends React.Component {
  render() {
    const { item, detailType } = this.props;

    if (detailType === 'contributors') {
      return (
        <div className="ProjectDetailItem">
          <div>{item.login}</div>
          <div>
            <img width="48" src={item.avatar_url} alt="profile" />
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
