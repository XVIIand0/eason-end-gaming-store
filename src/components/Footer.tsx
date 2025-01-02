import React from 'react';
import { Layout } from 'antd';
import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined
} from '@ant-design/icons';
import { siteConfig } from '../config/siteConfig';
import '../styles/Footer.css';

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => {
  return (
    <AntFooter className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <h3 className="footer-section-title">
                聯絡資訊
              </h3>
              <div className="contact-list">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <EnvironmentOutlined className="contact-icon" />
                  <span>{siteConfig.contact.address}</span>
                </a>
                <a href={`tel:+886${siteConfig.contact.phone.replace(/[()-\s]/g, '')}`} className="contact-item">
                  <PhoneOutlined className="contact-icon" />
                  <span>電話：{siteConfig.contact.phone}</span>
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="contact-item">
                  <MailOutlined className="contact-icon" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-section-title">
                營業時間
              </h3>
              <div className="contact-list">
                <div className="contact-item">
                  <p>{siteConfig.businessHours.detail.monday_friday}</p>
                </div>
                <div className="contact-item">
                  <p>{siteConfig.businessHours.detail.saturday_sunday}</p>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-section-title">
                關注我們
              </h3>
              <div className="social-links">
                <a href={siteConfig.social.facebook} className="social-link">
                  <FacebookOutlined className="social-icon social-icon-facebook" />
                </a>
                <a href={siteConfig.social.instagram} className="social-link">
                  <InstagramOutlined className="social-icon social-icon-instagram" />
                </a>
                <a href={siteConfig.social.twitter} className="social-link">
                  <TwitterOutlined className="social-icon social-icon-twitter" />
                </a>
                <a href={siteConfig.social.youtube} className="social-link">
                  <YoutubeOutlined className="social-icon social-icon-youtube" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              &copy; {siteConfig.company.copyright}
            </p>
          </div>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer; 