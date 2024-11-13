// Navigation.js
import PlanIcon from '/plan-list-svgrepo-com.svg';
import TaskListIcon from '/task-svgrepo-com.svg';
import BinIcon from '/bin-delete-remove-trash-svgrepo-com.svg';
import PendingIcon from '/shifts-pending-svgrepo-com.svg';
import UpcommingIcon from '/watch-square-minimalistic-svgrepo-com.svg';
import completedicon from '/tick-success-svgrepo-com.svg';

const navigationItems = [
  // {
  //   name: 'Plan',
  //   icon: PlanIcon,
  //   href: '#',
  //   classNames: 'bg-yellow-200 text-yellow-900',
  // },
  {
    name: 'Today\'s',
    icon: TaskListIcon,
    href: '/',
    classNames: 'text-gray-900 hover:bg-yellow-50',
  },
  {
    name: 'Overdue Tasks',
    icon: PendingIcon,
    href: '/overdue',
    classNames: 'text-gray-900 hover:bg-yellow-50',
  },
  {
    name: 'Upcomming Tasks',
    icon: UpcommingIcon,
    href: '/upcomming',
    classNames: 'text-gray-900 hover:bg-yellow-50',
  },
  {
    name: 'completed Tasks',
    icon: completedicon,
    href: '/completed',
    classNames: 'text-gray-900 hover:bg-yellow-50',
  },
  {
    name: 'Trash',
    icon: BinIcon,
    href: '/trash',
    classNames: 'text-gray-900 hover:bg-yellow-50',
  },
];

export default navigationItems;
