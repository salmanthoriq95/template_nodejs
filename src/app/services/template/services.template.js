// export interface ProductInterface {
//     name: string;
//     price: number;
// }
// export interface ProductInterfaceFull extends ProductInterface {
//     id: number;
// }
// export interface ProductInterface {
// 	name: string;
// 	price: number;
// }
// export interface ProductInterfaceFull extends ProductInterface {
// 	id: number;
// }

export class ProductServices {
	// data: ProductInterfaceFull[];
	// constructor() {
	//     this.data = [
	//         {
	//             id: 1,
	//             name: 'Product #1',
	//             price: 1000,
	//         },
	//         {
	//             id: 2,
	//             name: 'Product #2',
	//             price: 500,
	//         },
	//     ];
	// }
	// /**
	//  * Get all Product data
	//  */
	// getProduct() {
	//     return this.data;
	// }
	// /**
	//  * Get Product data by id
	//  * @param id
	//  */
	// getProductById(id: number) {
	//     return this.data.find((v: ProductInterfaceFull) => v.id === id);
	// }
	// /**
	//  * Insert Product
	//  * @param data
	//  */
	// insertProduct(data: ProductInterfaceFull) {
	//     return this.data.push(data);
	// }
	// /**
	//  * @param id
	//  */
	// deleteProduct(id: number) {
	//     return this.data.filter((v: ProductInterfaceFull) => v.id !== id);
	// }
	// /**
	//  * Update Product by id
	//  * @param id
	//  * @param updatedData
	//  */
	// updateProductById(id: number, updatedData: ProductInterface) {
	//     this.data = this.data.map((v: ProductInterfaceFull) => {
	//         if (v.id === id) {
	//             return {
	//                 ...v,
	//                 name: updatedData.name,
	//                 price: updatedData.price,
	//             };
	//         }
	//         return v;
	//     });
	//     return this.data.find((v: ProductInterfaceFull) => v.id === id);
	// }
}

