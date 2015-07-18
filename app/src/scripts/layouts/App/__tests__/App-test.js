jest.dontMock('../App');

import React from 'react/addons';
const { TestUtils } = React.addons;

const stubRouterContext = require('../../../spec/support/stubRouterContext');
const App = stubRouterContext(require('../App'));

describe('App', () => {
  it('sets class name', () => {
    const component = TestUtils.renderIntoDocument(<App />);
    const element = TestUtils.findRenderedDOMComponentWithClass(component, 'app');

    expect(element).toBeDefined();
    expect(element.props.className).toEqual('app');
  });
});

