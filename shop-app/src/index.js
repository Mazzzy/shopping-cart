import {Router} from '@vaadin/router';
import './views/home';

const routes = [
    {
        path: '/',
        component: 'shop-home',
        children: [],
    },
    {
        path: '(.*)',
        component: 'not-found',
        action: async () => { 
            await import('./views/notfound')
        },
    },
];

const rootContainer = document.getElementById('root');
export const router = new Router(rootContainer);
router.setRoutes(routes);
