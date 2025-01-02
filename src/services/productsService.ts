export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  category: string;
}

class ProductsService {
  private async fetchProducts(): Promise<Product[]> {
    try {
      const response = await fetch('/data/products.json');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  async getProducts(): Promise<Product[]> {
    return this.fetchProducts();
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    const products = await this.fetchProducts();
    return products.filter(product => product.category === category);
  }

  async searchProducts(query: string): Promise<Product[]> {
    const products = await this.fetchProducts();
    const lowercaseQuery = query.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery)
    );
  }

  async getProductById(id: number): Promise<Product | null> {
    const products = await this.fetchProducts();
    return products.find(product => product.id === id) || null;
  }
}

export const productsService = new ProductsService(); 