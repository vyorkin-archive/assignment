jest.dontMock('../Notification');

import React from 'react/addons';
const { TestUtils } = React.addons;
const Notification = require('../Notification');

describe('Notification', () => {
  it('sets class name', () => {
    const component = TestUtils.renderIntoDocument(<Notification>test</Notification>);
    const element = TestUtils.findRenderedDOMComponentWithClass(component, 'notification__content');

    expect(element.getDOMNode().textContent).toEqual('test');
  });
});
