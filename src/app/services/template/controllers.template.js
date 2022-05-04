import { Request, Response, NextFunction } from "express";
import { ProductServices } from "./services.template";

const services = new ProductServices();

export class TemplateController {
	async getTemplate(req, res, next) {
		try {
		} catch (error) {
			next(error);
		}
	}
	// async getProduct(req: Request, res: Response, next: NextFunction) {
	//     try {
	//         const result = await services.getProduct();
	//         res.json(result);
	//     } catch (error) {
	//         next(error);
	//     }
	// }

	// async getProductById(req: Request, res: Response, next: NextFunction) {
	//     try {
	//         const result = await services.getProductById(+req.params.id);
	//         res.json(result);
	//     } catch (error) {
	//         next(error);
	//     }
	// }

	// async insertProduct(req: Request, res: Response, next: NextFunction) {
	//     try {
	//         const result = await services.insertProduct({
	//             id: 10,
	//             name: 'Product #10',
	//             price: 3000,
	//         });
	//         res.json(result);
	//     } catch (error) {
	//         next(error);
	//     }
	// }

	// async deleteProduct(req: Request, res: Response, next: NextFunction) {
	//     try {
	//         const result = await services.deleteProduct(+req.params.id);
	//         res.json(result);
	//     } catch (error) {
	//         next(error);
	//     }
	// }

	// async updateProductById(req: Request, res: Response, next: NextFunction) {
	//     try {
	//         const result = await services.updateProductById(+req.params.id, {
	//             name: 'Product #10',
	//             price: 3000,
	//         });
	//         res.json(result);
	//     } catch (error) {
	//         next(error);
	//     }
	// }
}

