import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Row, Col, Typography, Button, InputNumber, message } from 'antd';
import { productsService } from '../../services/productsService';
import type { Product } from '../../services/productsService';
import { useCart } from '../../contexts/CartContext';

const { Title, Paragraph } = Typography;

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productsService.getProductById(Number(id));
        if (data) {
          setProduct(data);
        } else {
          message.error('商品不存在');
        }
      } catch (error) {
        message.error('無法載入商品資訊');
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      message.success('已加入購物車');
    }
  };

  if (!product) {
    return <div>載入中...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Row gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <Card cover={<img alt={product.name} src={product.image} className="object-cover" />}>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Title level={2}>{product.name}</Title>
          <Title level={3} type="danger">NT$ {product.price}</Title>
          <Paragraph className="text-lg mb-4">{product.description}</Paragraph>
          
          <div className="mb-4">
            <span className="mr-4">商品類別：{product.category}</span>
            <span>庫存數量：{product.stock}</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <InputNumber
              min={1}
              max={product.stock}
              value={quantity}
              onChange={(value) => setQuantity(value || 1)}
            />
            <Button 
              type="primary" 
              size="large"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              加入購物車
            </Button>
          </div>

          <Card title="商品特色" className="mb-4">
            <ul className="list-disc pl-4">
              <li>高品質保證</li>
              <li>原廠公司貨</li>
              <li>一年保固服務</li>
              <li>專業技術支援</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail; 