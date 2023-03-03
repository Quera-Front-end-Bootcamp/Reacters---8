import { FiBook, FiUser, FiBookOpen } from 'react-icons/fi';
import { BiNews} from 'react-icons/bi';


const navConfig = [
  {
    title: 'دوره ها',
    path: '/dashboard/courses',
    icon: <FiBook />,
  },
  {
    title: 'دانش آموزان',
    path: '/dashboard/students',
    icon: <FiUser />,
  },
  {
    title: 'دروس',
    path: '/dashboard/lessons',
    icon: <FiBookOpen />,
  },
  {
    title: 'اخبار',
    path: '/dashboard/news',
    icon: <BiNews />,
  },
];

export default navConfig;
