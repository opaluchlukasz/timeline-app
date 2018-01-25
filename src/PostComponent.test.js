import React from 'react';
import ReactDOM from 'react-dom';
import PostComponent from './PostComponent';
import moment from "moment";

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PostComponent author="foo" date={moment().format()} content="bar"/>, div);
});

test('validates that author is required property', () => {
    testPropTypes(PostComponent, 'author', null, {content: 'foo', date: moment().format()});
});

test('validates that content is required property', () => {
    testPropTypes(PostComponent, 'content', null, {author: 'foo', date: moment().format()});
});

test('validates that author is required property', () => {
    testPropTypes(PostComponent, 'date', null, {content: 'foo', author: 'bar'});
});

const testPropTypes = (component, propName, value, otherProps) => {
    console.error = jest.fn();
    console.error.mockClear();
    React.createElement(component, {...otherProps, [propName]: value});
    expect(console.error).toHaveBeenCalledTimes(1);
};