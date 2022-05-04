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
        icon : 'heroicons_outline:collection',
        link : '/hotels'
    },  {
        id   : 'guests',
        title: 'Guests',
        type : 'basic',
        icon : 'heroicons_outline:user-group',
        link : '/guests'
    },
    {
        id   : 'consumption',
        title: 'Consumption',
        type : 'basic',
        icon : 'heroicons_outline:archive',
        link : '/consumption'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/home'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/home'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/home'
    }
];
