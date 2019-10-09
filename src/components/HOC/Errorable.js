import React from "react";
import PropTypes from 'prop-types';
import '../../styles/HOC/errorable.css';

const Errorable = (Component) => React.forwardRef((props, ref) => {
    return(
    props.errorMessage ?
        <div className="error-box" ref={ref}>
            <h2>Error</h2>
            <div className="error-message">{props.errorMessage}</div>
        </div>
        :
        <Component {...props} ref={ref}>
            {props.children}
        </Component>
)});

Errorable.propTypes = {
    errorMessage: PropTypes.string
};

export default Errorable;