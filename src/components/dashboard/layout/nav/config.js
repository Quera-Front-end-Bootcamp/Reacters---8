import { FiBook, FiUser, FiBookOpen } from 'react-icons/fi';
import { BiNews} from 'react-icons/bi';


const navConfig = [
  {
    title: 'courses',
    path: '/dashboard/courses',
    icon: <FiBook />,
  },
  {
    title: 'students',
    path: '/dashboard/students',
    icon: <FiUser />,
  },
  {
    title: 'lessons',
    path: '/dashboard/lessons',
    icon: <FiBookOpen />,
  },
  {
    title: 'news',
    path: '/dashboard/news',
    icon: <BiNews />,
  },
];

export default navConfig;
