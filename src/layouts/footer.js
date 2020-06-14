import React, {Fragment} from 'react';
import {Layout, Icon} from 'antd';

const {Footer} = Layout;
const FooterView = ({links = []}) => {
  return (
    <Footer style={{padding: 0}}>
      <footer className="cbd-footer">
        {links && (
          <div className="cbd-links">
            {links.map(link => (
              <a
                key={link.key}
                title={link.key}
                target={link.blankTarget ? '_blank' : '_self'}
                href={link.href}
              >
                {link.title}
              </a>
            ))}
          </div>
        )}
        Copyright <Icon type="copyright"/> 2020 云仰科技出品
      </footer>
    </Footer>
  );
}
export default FooterView;
