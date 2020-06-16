import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person'
import InboxIcon from '@material-ui/icons/Inbox';
import ListIcon from '@material-ui/icons/List';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const NON_AUTH_ROUTES_ARRAY = [
    { link: '/', title: 'Home', Icon: HomeIcon },
    { link: '/about', title: 'About', Icon: InfoIcon },
    { link: '/contact', title: 'Contact', Icon: PhoneIcon },
    { link: '/sign-in-sign-up', title: 'Sign In / Sign Up', Icon: PersonIcon },
];

export const AUTH_SHIPPER_ROUTES_ARRAY = [
    { link: '/', title: 'Home', Icon: HomeIcon },
    { link: '/about', title: 'About', Icon: InfoIcon },
    { link: '/contact', title: 'Contact', Icon: PhoneIcon },
    { link: '/shipper/dashboard', title: 'Dashboard', Icon: InboxIcon },
    { link: '/shipper/postings', title: 'Postings', Icon: ListIcon }
];

export const AUTH_COURIER_ROUTES_ARRAY = [
    { link: '/', title: 'Home', Icon: HomeIcon },
    { link: '/about', title: 'About', Icon: InfoIcon },
    { link: '/contact', title: 'Contact', Icon: PhoneIcon },
    { link: '/courier/dashboard', title: 'Dashboard', Icon: InboxIcon },
    { link: '/courier/postings', title: 'Postings', Icon: ListIcon }
];