import {NgModule} from '@angular/core';
//import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Routes,RouterModule} from "@angular/router";
import {LoginModule} from '../login-app/login.module';
import {TestModule} from '../test-app/test.module';
import{AppModule} from '../root-app/root.module';

const appRoutes : Routes=[
{path:'user', 
    loadChildren:'app/test-app/test.module#TestModule'
},
{path:'', 
loadChildren:'app/root-app/root.module#AppModule'
}
];
@NgModule({
    imports: [

        RouterModule.forRoot(appRoutes,{useHash: false}),
        
       
    ],
    exports:[RouterModule]
})

export class AppRootRoutingModule{



}