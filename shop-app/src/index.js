import {Router} from '@vaadin/router';
import './views/layout';

const routes = [
    {
        path: '/',
        component: 'shop-app-layout',
        children: [
            {
                path: '',
                component: 'shop-home',
                action: async () => {
                  await import('./views/home');
                }
            },
            {
                path: 'category/:id',
                component: 'shop-category',
                action: async () => {
                    await import('./views/category');
                }
            },
            {
                path: 'cart',
                component: 'shop-cart',
                action: async () => {
                    await import('./views/cart');
                }
            },
            {
                path: '(.*)',
                component: 'not-found',
                action: async () => { 
                    await import('./views/notfound')
                }
            }
        ]
    }
];

const rootContainer = document.getElementById('root');
export const router = new Router(rootContainer);
router.setRoutes(routes);
