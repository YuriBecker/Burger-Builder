import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.css';

const Layout = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <div>Toolbar, SideDrawer, Backdrop </div>
      <main className={styles.content}>{children}</main>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
