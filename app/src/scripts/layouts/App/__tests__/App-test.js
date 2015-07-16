jest.dontMock('../../spec/support/stubRouterContext');
jest.dontMock('../App');

import React from 'react/addons';

let stubRouterContext = require('../../../spec/support/stubRouterContext');
let App = stubRouterContext(require('../App'));

let { TestUtils } = React.addons;

describe('App', () => {
  it('sets class name', () => {
    let component = TestUtils.renderIntoDocument(<App />);
    let element = TestUtils.findRenderedDOMComponentWithClass(component, 'app');
    expect(element).toBeDefined();
    expect(element.props.className).toEqual('app');
  });
});

