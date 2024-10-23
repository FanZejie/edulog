export interface User {
  email: string;
  grade: string;
  level: string | null;
  password: string;
  phone: string | null;
  userName: string;
}

type Completion = {
  math: number;
  reading: number;
  writing: number;
};

type Schedule = {
  courseSchedule: {
    math: string[];
    reading: string[];
    writing: string[];
  }; // 根据你的数据结构定义更具体的类型
};

export type HomeData = {
  studyTime: string | null;
  recommendCourse: string;
  completion: Completion;
  studyTimeByMonth: any[]; // 根据你的数据结构定义更具体的类型
  schedule: Schedule;
};
