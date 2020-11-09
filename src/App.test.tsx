import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import MockAdapter from 'axios-mock-adapter';
import { waitForComponentToPaint, mountUrl, findElementByTestId } from './utils/testUtils';
import api from './services/api';
import store from './store';
import App from './App';
import CartItem from './components/CartItem';

const apiMock = new MockAdapter(api);

describe('<App />', () => {
  beforeEach(() => {
    apiMock.reset();
    jest.restoreAllMocks();
  });

  it('should render the list of products', async () => {
    const productsResponseMock = [
      {
        "id": 1,
        "title": "Casaco maneiro",
        "price": 290.90
      },
      {
        "id": 2,
        "title": "Óculos barato",
        "price": 20.90
      },
    ];
    apiMock.onGet(mountUrl('products')).reply(200, productsResponseMock);

    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitForComponentToPaint(wrapper);

    const catalogItems = wrapper.find(CartItem);
    catalogItems.forEach((catalogItem, index) => {
      const catalogItemName = catalogItem.find('strong').text();
      expect(catalogItemName).toBe(productsResponseMock[index].title);

      const catalogItemPrice = catalogItem.find('span').text();
      expect(catalogItemPrice).toBe(productsResponseMock[index].price.toString());
    });
  });

  it('should to able to add product to cart successfully', async () => {
    const productsResponseMock = [
      {
        "id": 1,
        "title": "Casaco maneiro",
        "price": 290.90
      },
      {
        "id": 2,
        "title": "Óculos barato",
        "price": 20.90
      },
    ];
    const stockResponseMock = [
      {
        "id": 1,
        "quantity": 3
      },
      {
        "id": 2,
        "quantity": 0
      },
    ];
    apiMock.onGet(mountUrl('products')).reply(200, productsResponseMock);
    apiMock.onGet(mountUrl('stock')).reply(200, stockResponseMock);

    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitForComponentToPaint(wrapper);

    // click on the first catalog product to add to cart
    const firstCatalogItem = wrapper.find(CartItem).at(0);
    const catalogItemName = firstCatalogItem.find('button');
    catalogItemName.simulate('click');

    await waitForComponentToPaint(wrapper);

    // check the product was added to cart with valid values
    const cartItemValues = findElementByTestId(wrapper, 'cart-item').find('th');
    const name = cartItemValues.at(0).text();
    const price = +cartItemValues.at(1).text();
    const quantity = +cartItemValues.at(2).text();
    const subTotal = +cartItemValues.at(3).text();

    expect(name).toBe(productsResponseMock[0].title);
    expect(price).toBe(productsResponseMock[0].price);
    expect(quantity).toBe(1);
    expect(subTotal).toBe(productsResponseMock[0].price);
  });
});
