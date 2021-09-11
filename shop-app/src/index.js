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
                component: 'shop-category-products',
                action: async () => {
                    await import('./views/category');
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
