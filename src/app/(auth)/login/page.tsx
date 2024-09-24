import Image from "next/image";
import { ConfigProvider } from "antd";
import Link from "next/link"; // Import the Link component
import SignInForm from "@/components/auth/signInForm";

// 也可以设置为四边相等的数组
const verticalLabelPadding:
  | import("csstype").Property.Padding<string | number>
  | undefined = 0;

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className=" bg-white rounded-lg shadow-md flex flex-row">
        <div className=" relative bg-[url('/homebg.png')] w-[230px]  bg-cover bg-center">
          <Image
            src="/signupImg.png"
            alt="people"
            height={402}
            width={200}
            className="absolute bottom-2 left-2"
          />
        </div>
        <div className="w-[440px] flex flex-col  items-center">
          <div className="flex flex-row justify-center items-center pt-4 relative w-full">
            <div className="text-2xl font-bold ">Sign In</div>
            <Link href={'/'} className="text-sm text-[#293677] font-bold absolute right-2 top-6">{`< back`}</Link>
          </div>
          <div className="px-8 flex flex-row justify-center items-center mt-8">
          <ConfigProvider
              theme={{
                components: {
                  Form: {
                    itemMarginBottom: 12,
                    verticalLabelPadding: verticalLabelPadding,
                  },
                  Checkbox: {
                    controlInteractiveSize:24
                  }
                },
              }}>
                <SignInForm/>
            </ConfigProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
