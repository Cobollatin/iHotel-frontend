/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'home',
        title: 'Home',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/home'
    },
    {
        id   : 'hotel',
        title: 'Hotels',
        type : 'basic',
        icon : 'heroicons_outline:office-building',
        link : '/hotel'
    },
    {
        id   : 'room',
        title: 'Rooms',
        type : 'basic',
        icon : 'heroicons_outline:tag',
        link : '/room'
    },
    {
        id   : 'guests',
        title: 'Guests',
        type : 'basic',
        icon : 'heroicons_outline:user-group',
        link : '/guest'
    },
    {
        id   : 'consumption',
        title: 'Consumption',
        type : 'basic',
        icon : 'heroicons_outline:shopping-cart',
        link : '/consumption'
    },
    {
        id   : 'service',
        title: 'Service',
        type : 'basic',
        icon : 'heroicons_outline:calculator',
        link : '/service'
    },
    {
        id   : 'employees',
        title: 'Employees',
        type : 'basic',
        icon : 'heroicons_outline:identification',
        link : '/employee'
    },
    {
        id   : 'products',
        title: 'Products',
        type : 'basic',
        icon : 'heroicons_outline:shopping-bag',
        link : '/product'
    },
    {
        id   : 'bills',
        title: 'Bills',
        type : 'basic',
        icon : 'heroicons_outline:credit-card',
        link : '/bill'
    },
    {
        id   : 'docs',
        title: 'Docs',
        type : 'basic',
        icon : 'heroicons_outline:document-report',
        link : '/doc'
    }
];
