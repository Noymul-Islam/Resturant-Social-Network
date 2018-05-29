import {NgModule} from '@angular/core';
import {Routes,RouterModule} from "@angular/router";
import {LoginModule} from '../login-app/login.module'
import {LoginComponent} from '../login-app/Components/login-component/login.component'
import {TestComponent} from '../test-app/test.component'

const appRoutes : Routes=[
    {path:'user', component: TestComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes,{useHash: true}),
    ]
})

export class AppRoutingModule{

}