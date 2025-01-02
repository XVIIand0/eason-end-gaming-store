import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card, Typography, Row, Col, message } from 'antd';
import { useCart } from '../../contexts/CartContext';

const { Title } = Typography;

interface CheckoutForm {
  name: string;
  phone: string;
  email: string;
  address: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      message.warning('購物車是空的，請先加入商品');
      navigate('/cart');
    }
  }, [items, navigate]);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const onFinish = async (values: CheckoutForm) => {
    setLoading(true);
    try {
      // 在實際應用中，這裡會發送訂單到後端
      const order = {
        ...values,
        items: items,
        total,
        orderDate: new Date().toISOString(),
        status: 'pending',
      };

      // 模擬 API 請求
      await new Promise((resolve, reject) => {
        if (total > 0) {
          setTimeout(resolve, 1000);
        } else {
          reject(new Error('訂單金額必須大於 0'));
        }
      });

      // 清空購物車
      clearCart();
      message.success('訂單已成功送出！我們會盡快處理您的訂單');
      navigate('/');
    } catch (error) {
      message.error(error instanceof Error ? error.message : '訂單送出失敗，請稍後再試');
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="p-6">
      <Title level={2} className="mb-6">結帳</Title>
      <Row gutter={24}>
        <Col xs={24} lg={16}>
          <Card title="收件資訊">
            <Form
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
              validateTrigger="onBlur"
            >
              <Form.Item
                label="姓名"
                name="name"
                rules={[
                  { required: true, message: '請輸入姓名' },
                  { min: 2, message: '姓名至少需要 2 個字' }
                ]}
              >
                <Input placeholder="請輸入真實姓名" />
              </Form.Item>

              <Form.Item
                label="手機"
                name="phone"
                rules={[
                  { required: true, message: '請輸入手機號碼' },
                  { pattern: /^09\d{8}$/, message: '請輸入正確的台灣手機號碼格式（例：0912345678）' }
                ]}
              >
                <Input placeholder="例：0912345678" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: '請輸入 Email' },
                  { type: 'email', message: '請輸入正確的 Email 格式' }
                ]}
              >
                <Input placeholder="example@email.com" />
              </Form.Item>

              <Form.Item
                label="收件地址"
                name="address"
                rules={[
                  { required: true, message: '請輸入收件地址' },
                  { min: 10, message: '請輸入完整的收件地址' }
                ]}
              >
                <Input.TextArea 
                  rows={3} 
                  placeholder="請輸入完整的收件地址（包含郵遞區號）"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  loading={loading}
                  block
                >
                  確認送出訂單 (NT$ {total.toLocaleString()})
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card title="訂單摘要" className="sticky top-6">
            {items.map(item => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>NT$ {(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between font-bold">
                <span>總計</span>
                <span>NT$ {total.toLocaleString()}</span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Checkout; 