import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProfileComponent } from 'app/modules/admin/profile/profile.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ProfileComponent
    }
];

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes)
    ]
})
export class ProfileModule
{
}
