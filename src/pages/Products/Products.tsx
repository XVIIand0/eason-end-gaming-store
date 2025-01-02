import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Input, Select, message } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;
const { Option } = Select;

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  stock: number;
  category: string;
  price: number;
}

const Products: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/data/products.json');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      message.error('無法載入商品資料');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product, 1);
    message.success('已加入購物車');
  };

  const handleCardClick = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(products.map(p => p.category))];

  return (
    <div className="container mx-auto py-24 px-4" style={{ marginBottom: 64, marginTop: 64 }}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">商品列表</h1>
        <div className="flex gap-4 mb-6" style={{ marginTop: '16px', marginBottom: '16px' }}>
          <Search
            placeholder="搜尋商品"
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: 300 }}
          />
          <Select
            defaultValue="all"
            style={{ width: 200 }}
            onChange={setSelectedCategory}
          >
            {categories.map(category => (
              <Option key={category} value={category}>
                {category === 'all' ? '所有分類' : category}
              </Option>
            ))}
          </Select>
        </div>
      </div>

      <Row gutter={[16, 16]}>
        {filteredProducts.map(product => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              onClick={() => handleCardClick(product.id)}
              cover={<img alt={product.name} src={product.image} />}
              actions={[
                <ShoppingCartOutlined 
                  key="add" 
                  onClick={(e) => handleAddToCart(e, product)}
                  className={product.stock > 0 ? 'text-primary-100' : 'text-gray-400'}
                  disabled={product.stock === 0}
                />
              ]}
            >
              <Card.Meta
                title={product.name}
                description={
                  <>
                    <p>{product.description}</p>
                    <p className="text-primary-100 font-bold">NT$ {product.price}</p>
                    <p className="text-gray-500">庫存: {product.stock}</p>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products; 