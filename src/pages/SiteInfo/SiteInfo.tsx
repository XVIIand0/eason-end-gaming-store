import { Typography, Card, Collapse } from 'antd';
import { siteConfig } from '../../config/siteConfig';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const SiteInfo = () => {
  return (
    <div className="p-6" style={{ margin: 'auto', width: 750, marginBottom: 64, marginTop: 64 }}>
      <Title level={2} className="mb-6">網站資訊</Title>

      <Card className="mb-6">
        <Title level={3}>關於我們</Title>
        <Paragraph>
          {siteConfig.company.name}成立於{siteConfig.company.foundedYear}年，我們致力於提供最優質的電競周邊產品，
          讓玩家能夠享受極致的遊戲體驗。我們的產品均經過嚴格的品質把關，
          確保每一件商品都能滿足玩家的需求。
        </Paragraph>
      </Card>

      <Collapse defaultActiveKey={['1']} className="mb-6">
        <Panel header="購物須知" key="1">
          <Paragraph>
            <ul className="list-disc pl-6">
              <li>商品皆為全新公司貨，享有原廠保固。</li>
              <li>訂單確認後 1-3 個工作天內出貨。</li>
              <li>超商取貨付款，全家、7-11 皆可。</li>
              <li>貨到付款，需額外支付 30 元手續費。</li>
              <li>商品售出後，如需退換貨請保持商品完整性。</li>
            </ul>
          </Paragraph>
        </Panel>

        <Panel header="退換貨政策" key="2">
          <Paragraph>
            <ul className="list-disc pl-6">
              <li>商品到貨後請立即檢查商品是否完整。</li>
              <li>如有瑕疵或故障，請於 7 天內聯繫客服。</li>
              <li>退換貨商品必須為全新未使用狀態。</li>
              <li>退換貨運費由買方負擔。</li>
              <li>特價商品一律不接受退換貨。</li>
            </ul>
          </Paragraph>
        </Panel>

        <Panel header="隱私權政策" key="3">
          <Paragraph>
            本網站非常重視您的隱私權保護，以下說明我們如何蒐集和使用您的個人資料：
          </Paragraph>
          <Paragraph>
            <ul className="list-disc pl-6">
              <li>我們只會蒐集必要的個人資料，如姓名、電話、地址等。</li>
              <li>您的個人資料僅用於訂單處理和商品配送。</li>
              <li>我們不會將您的個人資料提供給第三方使用。</li>
              <li>我們使用安全的加密技術保護您的個人資料。</li>
              <li>您可以隨時要求查詢或刪除您的個人資料。</li>
            </ul>
          </Paragraph>
        </Panel>

        <Panel header="常見問題" key="4">
          <Paragraph>
            <ul className="list-disc pl-6">
              <li>
                <strong>Q: 如何查詢訂單狀態？</strong>
                <br />
                A: 請提供訂單編號給客服人員，我們會立即為您查詢。
              </li>
              <li>
                <strong>Q: 商品保固期限是多久？</strong>
                <br />
                A: 所有商品皆享有原廠保固，保固期限依商品不同而異，詳情請見商品說明。
              </li>
              <li>
                <strong>Q: 是否提供分期付款？</strong>
                <br />
                A: 目前僅提供貨到付款服務，暫不提供分期付款。
              </li>
              <li>
                <strong>Q: 如何取消訂單？</strong>
                <br />
                A: 請在出貨前聯繫客服人員，我們會協助您取消訂單。
              </li>
            </ul>
          </Paragraph>
        </Panel>
      </Collapse>
    </div>
  );
};

export default SiteInfo; 