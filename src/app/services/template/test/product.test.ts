import { ProductServices } from '../services.product';

const product = new ProductServices();

test('Product > Get Product', () => {
    expect(product.getProduct()).toBeTruthy();
});

test('Product > Get ID Product', () => {
    expect(product.getProductById(2)).toEqual({
        id: 2,
        name: 'Product #2',
        price: 500,
    });
});

test('Product > Insert Product', () => {
    expect(
        product.insertProduct({
            id: 10,
            name: 'Product #10',
            price: 3000,
        }),
    ).toBeTruthy();
});

test('Product > Update Product', () => {
    expect(product.updateProductById(1, { name: 'Change', price: 200 })).toEqual({
        id: 1,
        name: 'Change',
        price: 200,
    });
});

test('Product > Delete Product', () => {
    expect(product.deleteProduct(2)).toBeTruthy();
});
