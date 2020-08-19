
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Portfolio from '../pages/Portfolio';
import Creation from '../pages/Creation';
import Coating from '../pages/Coating';
import Contacts from '../pages/ContactUs';

import translate from '../../translation/do-translate';


export const routes = [
    { key: 1, isVisible: true, arroweIcon: "fas fa-angle-double-right", title: translate('home-nuv'), path: "/", component: Home },
    { key: 2, isVisible: true, arroweIcon: "fas fa-angle-double-right", title: translate('about-nuv'), path: "/about", component: AboutUs },
    { key: 3, isVisible: true, arroweIcon: "fas fa-angle-double-right", title: translate('creation-nuv'), path: "/creation", component: Creation },
    { key: 4, isVisible: true, arroweIcon: "fas fa-angle-double-right", title: translate('painting-nuv'), path: "/coating", component: Coating },
    { key: 5, isVisible: true, arroweIcon: "fas fa-angle-double-right", title: translate('portfolio-nuv'), path: "/portfolio", component: Portfolio },
    { key: 6, isVisible: true, arroweIcon: "fas fa-angle-double-right", title: translate('contacts-nuv'), path: "/contactUs", component: Contacts },
]
