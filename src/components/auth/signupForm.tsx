"use client";
import { Button, Form, Input, Select, Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import {
  UserAddOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

const onChange: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const SignupForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  return (
    <Form layout={"vertical"} form={form}>
      <div className="flex flex-row gap-4">
        <Form.Item label="Name:">
          <Input placeholder="Name" className="" />
        </Form.Item>
        <Form.Item label="Grade:">
          <Select className=" min-w-[150px]">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
      </div>
      <Form.Item label="Difficulty:">
        <Select className="w-full">
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
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

      <div className="text-2xl font-bold w-full justify-center flex items-center text-center">
        Or
      </div>
      <div className="flex flex-row gap-4 py-4">
        <button className="flex flex-row justify-center items-center gap-2 text-xs border border-[#293677] p-2 rounded-lg">
          <Image src={"/google.png"} alt="google" width={20} height={20} /> Sign
          up with Google
        </button>
        <button className="flex flex-row justify-center items-center gap-2 text-xs border border-[#293677] p-2 rounded-lg">
          <Image src={"/facebook.png"} alt="facebook" width={20} height={20} />{" "}
          Sign up with Facebook
        </button>
      </div>
      <Form.Item>
        <Checkbox
          onChange={onChange}
          className=" items-center text-xs font-bold">
          I AGREE to the Terms of Service and Privacy Policy
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          onClick={() => {
            router.push("/dashboard/home");
          }}
          className="w-full"
          size="large"
          type="primary"
          icon={<UserAddOutlined />}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
