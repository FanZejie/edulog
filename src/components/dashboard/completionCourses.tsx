
import { Progress } from 'antd';
import type { ProgressProps } from 'antd';
import { HomeData } from '@/lib/type';
const twoColors: ProgressProps['strokeColor'] = {
    '0%': '#108ee9',
    '100%': '#87d068',
  };

  type CompletionCoursesProps = {
    homeData: HomeData; // 接收整个 homeData 对象
  };

const CompletionCourses = ({homeData} : CompletionCoursesProps) => {
  return (
    <div className="flex flex-col px-4 pt-4">
      <div className='font-bold text-2xl w-full'>Completion Courses</div>
      <div className='flex flex-row mt-6 pr-16 w-full justify-between'>
        <span className='font-semibold text-xl flex items-center justify-center'>Math</span>
        <Progress type="circle" percent={homeData.completion.math} strokeColor={twoColors} size={40}/>
      </div>
      <div className='flex flex-row mt-6 pr-16 w-full justify-between'>
        <span className='font-semibold text-xl flex items-center justify-center'>Reading</span>
        <Progress type="circle" percent={homeData.completion.reading} strokeColor={twoColors} size={40}/>
      </div>
      <div className='flex flex-row mt-6 pr-16 w-full justify-between'>
        <span className='font-semibold text-xl flex items-center justify-center'>Writing</span>
        <Progress type="circle" percent={homeData.completion.writing} strokeColor={twoColors} size={40}/>
      </div>
     
    </div>
  )
};

export default CompletionCourses;
