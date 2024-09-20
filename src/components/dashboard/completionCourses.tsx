
import { Progress } from 'antd';
import type { ProgressProps } from 'antd';

const twoColors: ProgressProps['strokeColor'] = {
    '0%': '#108ee9',
    '100%': '#87d068',
  };

const CompletionCourses = () => {
  return (
    <div className="flex flex-col px-4 pt-4">
      <div className='font-bold text-2xl w-full'>Completion Courses</div>
      <div className='flex flex-row mt-6 pr-16 w-full justify-between'>
        <span className='font-semibold text-xl flex items-center justify-center'>Math</span>
        <Progress type="circle" percent={99} strokeColor={twoColors} size={40}/>
      </div>
      <div className='flex flex-row mt-6 pr-16 w-full justify-between'>
        <span className='font-semibold text-xl flex items-center justify-center'>Reading</span>
        <Progress type="circle" percent={91} strokeColor={twoColors} size={40}/>
      </div>
      <div className='flex flex-row mt-6 pr-16 w-full justify-between'>
        <span className='font-semibold text-xl flex items-center justify-center'>Writing</span>
        <Progress type="circle" percent={25} strokeColor={twoColors} size={40}/>
      </div>
     
    </div>
  )
};

export default CompletionCourses;
