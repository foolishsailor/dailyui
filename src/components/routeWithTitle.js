import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const RouteWithTitle = ({ title, ...rest }) => {
  useEffect(() => {
    document.title = title;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  return <Route {...rest} />;
};

RouteWithTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RouteWithTitle;
