/* eslint-disable */
export let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {
    id: 'DefaultId',
    name: 'DefaultName',
    email: 'Default@iHotel.tk',
    company: 'iHotel',
    avatar: 'assets/images/avatars/user.jpg',
    status: 'online'
};
