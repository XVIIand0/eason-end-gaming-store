import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';
import './styles/global.css';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <CartProvider>
      <Layout className="min-h-screen">
        <Header />
        <Content className="mt-16 site-content">
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </CartProvider>
  );
};

export default App; 