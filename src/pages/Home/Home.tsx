import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Card, Row, Col, Typography } from 'antd';
import type { Product } from '../../services/productsService';
import { productsService } from '../../services/productsService';

const { Title } = Typography;

const bannerStyle: React.CSSProperties = {
  height: '400px',
  color: 'var(--bg-100)',
  lineHeight: '400px',
  textAlign: 'center',
  background: 'var(--primary-100)',
};

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      const products = await productsService.getProducts();
      setFeaturedProducts(products.slice(0, 4));
    };

    loadFeaturedProducts();
  }, []);

  return (
    <div className="pt-16" style={{ backgroundColor: 'var(--bg-200)' }}>
      <Carousel autoplay>
        <div>
          <div style={bannerStyle}>
            <h2 style={{ color: 'var(--bg-100)' }}>最新電競螢幕，360Hz 極致體驗</h2>
          </div>
        </div>
        <div>
          <div style={bannerStyle}>
            <h2 style={{ color: 'var(--bg-100)' }}>機械式鍵盤，專業玩家首選</h2>
          </div>
        </div>
        <div>
          <div style={bannerStyle}>
            <h2 style={{ color: 'var(--bg-100)' }}>超輕量電競滑鼠，精準掌控</h2>
          </div>
        </div>
      </Carousel>

      <div className="py-8" style={{ margin: '2rem 0' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-100)' }}>
          熱門商品
        </Title>
        <Row gutter={[16, 16]} style={{ padding: '0 2rem' }}>
          {featuredProducts.map(product => (
            <Col key={product.id} xs={24} sm={12} md={6}>
              <Link to={`/products/${product.id}`}>
                <Card
                  hoverable
                  cover={<img alt={product.name} src={product.image} />}
                  style={{ 
                    height: '100%',
                    backgroundColor: 'var(--bg-100)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  <Card.Meta
                    title={<span style={{ color: 'var(--text-100)' }}>{product.name}</span>}
                    description={
                      <div>
                        <p style={{ color: 'var(--text-200)' }}>{product.description}</p>
                        <p style={{ color: 'var(--primary-100)', fontWeight: 'bold', marginTop: '0.5rem' }}>
                          NT$ {product.price.toLocaleString()}
                        </p>
                      </div>
                    }
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home; 