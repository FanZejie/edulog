"use client";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        const data = await response.json();
        if(data.code == 1){
          form.resetFields();
          // 登录后保存用户信息
          localStorage.setItem('user', JSON.stringify(data.data));
          router.push("/dashboard/home");
        }else{
          alert('用户名密码错误')
        }
       
      } else {
        console.error("提交失败,后端报错");
      }
    } catch (error) {
      console.error("请求出错:", error);
    }
  };

  return (
    <Form layout={"vertical"} form={form} onFinish={handleSubmit}>
      <Form.Item label="username:" name="userName">
        <Input placeholder="input username" />
      </Form.Item>
      <Form.Item label="Password:" name="password">
        <Input.Password
          placeholder="input password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item className="mt-8">
        <Button
          className="w-full"
          size="large"
          type="primary"
          onClick={() => {
            form.submit(); // 手动触发表单提交
          }}>
          Login
        </Button>
      </Form.Item>

      <div className="text-2xl font-bold w-full justify-center flex items-center text-center py-4">
        Or
      </div>
      <div className="flex flex-row gap-4 py-4">
        <button className="flex flex-row justify-center items-center gap-2 text-xs border border-[#293677] p-2 rounded-lg">
          <Image src={"/google.png"} alt="google" width={20} height={20} /> Sign
          in with Google
        </button>
        <button className="flex flex-row justify-center items-center gap-2 text-xs border border-[#293677] p-2 rounded-lg">
          <Image src={"/facebook.png"} alt="facebook" width={20} height={20} />{" "}
          Sign in with Facebook
        </button>
      </div>
    </Form>
  );
};

export default SignInForm;
