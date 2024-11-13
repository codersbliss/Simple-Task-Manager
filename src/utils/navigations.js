// Navigation.js
import PlanIcon from '/public/plan-list-svgrepo-com.svg';
import TaskListIcon from '/public/task-svgrepo-com.svg';
import BinIcon from '/public/bin-delete-remove-trash-svgrepo-com.svg';
import PendingIcon from '/public/shifts-pending-svgrepo-com.svg';
import UpcommingIcon from '/public/watch-square-minimalistic-svgrepo-com.svg';

const navigationItems = [
  {
    name: 'Plan',
    icon: PlanIcon,
    href: '#',
    classNames: 'bg-yellow-200 text-yellow-900',
  },
  {
    name: 'Task List',
    icon: TaskListIcon,
    href: '#',
    classNames: 'text-gray-900 hover:bg-yellow-50',
  },
  {
    name: 'Overdue Tasks',
    icon: PendingIcon,
    href: '#',
    classNames: 'text-gray-900 hover:bg-yellow-50',
  },
  {
    name: 'Upcomming Tasks',
    icon: UpcommingIcon,
    href: '#',
    classNames: 'text-gray-900 hover:bg-yellow-50',
  },
  {
    name: 'Trash',
    icon: BinIcon,
    href: '#',
    classNames: 'text-gray-900 hover:bg-yellow-50',
  },
];

export default navigationItems;
