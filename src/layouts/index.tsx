import { Outlet } from 'umi';
import { Layout as LayoutCom, Menu } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = LayoutCom;

const headerItems = [
  {
    label: '首页',
    key: '/',
  },
];

export default function Layout() {
  const onSelect = (e: any) => {
    console.log(e);
  };

  return (
    <LayoutCom>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={headerItems}
          onSelect={onSelect}
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
          marginTop: 64,
          minHeight: 'calc(100vh - 112px)',
        }}
      >
        <div className="site-layout-background" style={{ padding: 24 }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}></Footer>
    </LayoutCom>
  );
}
