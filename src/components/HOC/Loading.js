import React from 'react';
import PropTypes from 'prop-types';
import * as ReactDOM from "react-dom";

import '../../styles/HOC/loading.css';

const Loading = Component => {
    return class Loading extends React.PureComponent {
        constructor(props) {
            super(props);

            this.state = {
                width: 0,
                height: 0
            };

        }

        /**
         * Make the overlay as big as the element that is passed
         */
        componentDidMount() {
            if (!this.nodeRef)
                return;

            let el = ReactDOM.findDOMNode(this.nodeRef);
            let rect = el.getBoundingClientRect();
            console.log(el);

            this.setState({
                width: rect.width,
                height: rect.height
            });
        }

        render() {
            const style = {
                width: this.state.width,
                height: this.state.height
            };
            let props = {...this.props};
            delete props.isLoading;

            return (
                this.props.isLoading ?
                    <div className="loading-container">
                        <div className="loading" style={style}>
                            <div className="circle circle-one"/>
                            <div className="circle circle-two"/>
                            <div className="circle circle-three"/>
                        </div>
                        <Component
                            ref={(node) => this.nodeRef = node}
                            {...props}>
                            props.children
                        </Component>
                    </div>
                    ://OR
                    <Component
                        ref={(node) => this.nodeRef = node}
                        {...props}>
                        props.children
                    </Component>)
        }
    }
};


Loading.propTypes = {isLoading: PropTypes.bool};

Loading.defaultProps = {isLoading: 'false'};


export default Loading;