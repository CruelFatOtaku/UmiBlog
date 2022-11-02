import { Form, message, Input, Button } from 'antd';
import { history } from 'umi';

// import styles from './index.less';

export default function Page() {
  async function register(values: any) {
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          name: values.name,
          avatarUrl: '',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status !== 200) {
        console.error(await res.text());
        return;
      }
      // const data = await res.json();
      history.push('/posts/create');
    } catch (err) {
      console.error(err);
    }
  }

  const onFinish = (values: any) => {
    console.log(values);
    register(values).then(() => {
      message.success('注册成功' + values.name, 1, () => {
        history.push('/posts/create');
      });
    });
  };

  const onFinishFailed = () => {
    message.error('请确认输入');
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="name"
        name="name"
        rules={[{ required: true, message: '请输入昵称' }]}
      >
        <Input placeholder="昵称" />
      </Form.Item>
      <Form.Item
        label="email"
        name="email"
        rules={[
          { required: true, message: '请输入邮箱' },
          { type: 'email', message: '邮箱格式错误' },
        ]}
      >
        <Input placeholder="邮箱" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: '请输入密码' },
          {
            pattern:
              /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[._~!@#$^&*])[A-Za-z0-9._~!@#$^&*]{8,20}$/,
            message:
              '1.密码必须由字母、数字、特殊符号组成，区分大小写2.特殊符号包含（. _ ~ ! @ # $ ^ & *）3.密码长度为8-20位',
          },
        ]}
      >
        <Input.Password placeholder="请输入密码" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
}
