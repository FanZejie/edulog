"use client";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  return (
    <Form layout={"vertical"} form={form}>
      <Form.Item label="Email:">
        <Input placeholder="xxx@xxx.xxx" />
      </Form.Item>
      <Form.Item label="Password:">
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
            router.push("/dashboard/home");
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
