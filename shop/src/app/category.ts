export interface Category {
    id: number;
    name: string;
}

export class Product {
constructor(name: string,
    description: string,
    rating: number,
    image: string,
    price: number,
    link: string,
    categoryId: number,
    productId: number) {}
}
