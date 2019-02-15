import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TestApp = (props) => {
    return (
        <div>
            <h1>{props.str}</h1>
            <h1>{(props.bool?'Hi':'Hello')}</h1>
            <h1>{props.strOrNum}</h1>
            <div>
                {
                    props.ary.map((val) => {
                        return (<li key={val}>{val}</li>)
                    })
                }
            </div>
            <div>
                {
                    props.aryOfObj.map((val) => {
                        return (<li key={val.age}>{val.name}</li>)
                    })
                }
            </div>
        </div>
    )
}

TestApp.propTypes = {
    str:PropTypes.string,
    bool:PropTypes.bool,
    strOrNum:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ary:PropTypes.arrayOf(PropTypes.number),
    aryOfObj:PropTypes.arrayOf(PropTypes.shape(
        {
            name:PropTypes.string,
            age:PropTypes.number
        }
    ))
}

export default TestApp;