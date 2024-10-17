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

  const handleSubmit = async (values: any) => {
    console.log('values',values)
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("成功提交:", data);
        form.resetFields();
        router.push("/dashboard/home");
      } else {
        console.error("提交失败");
      }
    } catch (error) {
      console.error("请求出错:", error);
    }
  };


  return (
    <Form layout={"vertical"} form={form} onFinish={handleSubmit}>
      <div className="flex flex-row gap-4">
        <Form.Item label="Name:" name="userName">
          <Input placeholder="Name" className="" />
        </Form.Item>
        <Form.Item label="Grade:" name="grade">
          <Select className=" min-w-[150px]">
            <Select.Option value="Grade1">Grade1</Select.Option>
            <Select.Option value="Grade2">Grade2</Select.Option>
            <Select.Option value="Grade3">Grade3</Select.Option>
          </Select>
        </Form.Item>
      </div>
      <Form.Item label="Difficulty:" name="level">
        <Select className="w-full">
          <Select.Option value="1">easy</Select.Option>
          <Select.Option value="2">medium</Select.Option>
          <Select.Option value="3">hard</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Email:" name="email">
        <Input placeholder="xxx@xxx.xxx" />
      </Form.Item>
      <Form.Item label="Password:" name="password">
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
            form.submit(); // 手动触发表单提交
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
