import React from 'react';
import { Layout, Menu, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const location = useLocation();
  const { items } = useCart();
  
  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const menuItems = [
    {
      key: '/',
      label: <Link to="/" style={{ color: '#fff' }}>首頁</Link>,
    },
    {
      key: '/products',
      label: <Link to="/products" style={{ color: '#fff' }}>商品列表</Link>,
    },
    {
      key: '/site-info',
      label: <Link to="/site-info" style={{ color: '#fff' }}>網站資訊</Link>,
    },
  ];

  return (
    <AntHeader 
      className="fixed w-full top-0" 
      style={{ 
        height: '64px', 
        padding: '0',
        background: '#001529',
        zIndex: 1000,
        borderBottom: '2px solid #B71C1C'
      }}
    >
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <Link 
            to="/" 
            style={{ 
              color: '#B71C1C',
              fontSize: '20px',
              fontWeight: 'bold',
              textDecoration: 'none',
              padding: '0 16px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              background: 'transparent'
            }}
          >
            電競產品專賣店
          </Link>
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            style={{ 
              background: 'transparent',
              border: 'none',
              minWidth: '200px',
              lineHeight: '62px'
            }}
            className="header-menu"
          />
        </div>
        <Link 
          to="/cart" 
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            height: '64px',
            color: '#fff'
          }}
        >
          <Badge 
            count={cartItemsCount} 
            showZero
            style={{
              backgroundColor: '#B71C1C'
            }}
          >
            <ShoppingCartOutlined style={{ fontSize: '24px', color: '#fff' }} />
          </Badge>
        </Link>
      </div>
    </AntHeader>
  );
};

export default Header; 