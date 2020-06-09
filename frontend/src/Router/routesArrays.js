import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person'
import AddIcon from '@material-ui/icons/Add';

export const NON_AUTH_ROUTES_ARRAY = [
    { link: '/', title: 'Home', Icon: HomeIcon },
    { link: '/about', title: 'About', Icon: InfoIcon },
    { link: '/contact', title: 'Contact', Icon: PhoneIcon },
    { link: '/sign-in', title: 'Sign In', Icon: PersonIcon },
    { link: '/sign-up', title: 'Sign Up', Icon: AddIcon }
];