import { useNavigate } from 'react-router-dom';
import { Table, Button, InputNumber, Empty, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DeleteOutlined } from '@ant-design/icons';
import { useCart } from '../../contexts/CartContext';

const { Title } = Typography;

interface CartItemType {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, total } = useCart();

  const columns: ColumnsType<CartItemType> = [
    {
      title: '商品名稱',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '單價',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => `NT$ ${price.toLocaleString()}`,
    },
    {
      title: '數量',
      key: 'quantity',
      render: (_, record) => (
        <InputNumber
          min={1}
          max={99}
          value={record.quantity}
          onChange={(value) => value && updateQuantity(record.id, value)}
        />
      ),
    },
    {
      title: '小計',
      key: 'subtotal',
      render: (_, record) => `NT$ ${(record.price * record.quantity).toLocaleString()}`,
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => removeFromCart(record.id)}
        >
          刪除
        </Button>
      ),
    },
  ];

  if (items.length === 0) {
    return (
      <div className="p-6 text-center">
        <Empty
          description="購物車是空的"
          className="mb-4"
        />
        <Button type="primary" onClick={() => navigate('/products')}>
          去購物
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Title level={2} className="mb-6">購物車</Title>
      <Table
        columns={columns}
        dataSource={items}
        rowKey="id"
        pagination={false}
        className="mb-6"
      />
      <div className="flex justify-end items-center gap-4">
        <Title level={4} className="mb-0">
          總計: NT$ {total.toLocaleString()}
        </Title>
        <Button
          type="primary"
          size="large"
          onClick={() => navigate('/checkout')}
        >
          前往結帳
        </Button>
      </div>
    </div>
  );
};

export default Cart; 