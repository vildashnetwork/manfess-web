import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListIcon from '@mui/icons-material/List';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import TableChartIcon from '@mui/icons-material/TableChart';
export const  SidebarData = [
    {
    title:"Dashboard",
    icon: <DashboardIcon/>,
    link:"/"
    },
    {
    title:"Teachers",
    icon: <PeopleIcon/>,
    link:"/teachers"
    },
    {
    title:"Students",
    icon: <SchoolIcon />,
    link:"/students"
    },
    // {
    // title:"Attendance",
    // icon: <DateRangeIcon/>,
    // link:"/attendance"
    // },
    {
    title:"Marks",
    icon: <ImportContactsIcon/>,
    link:"/marks"
    },
    {
    title:"Reports",
    icon: <SignalCellularAltIcon/>,
    link:"/reports"
    },
    {
    title:"Time Tables",
    icon: <TableChartIcon/>,
    link:"/timetables"
    },
    {
    title:"Settings",
    icon: <SettingsIcon/>,
    link:"/settings"
    },
]