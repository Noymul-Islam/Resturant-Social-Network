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
{path:'login', 
loadChildren:'app/login-app/login.module#LoginModule'
}
];
@NgModule({
    imports: [

        RouterModule.forRoot(appRoutes,{useHash: true})
      
       
    ],
    exports:[RouterModule]
})

export class AppRootRoutingModule{



}