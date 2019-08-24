import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddcategoryComponent } from './user-profile/addcategory/addcategory.component';
import {ViewcategoryComponent} from './user-profile/viewcategory/viewcategory.component';
import {EditcategoryComponent} from './user-profile/editcategory/editcategory.component';
import {AddfoodComponent} from './user-profile/addfood/addfood.component';
import { ViewfoodComponent} from './user-profile/viewfood/viewfood.component';
import { EditfoodComponent } from './user-profile/editfood/editfood.component';
import { AddquestionComponent} from './user-profile/addquestion/addquestion.component';
import { ViewquestionComponent} from './user-profile/viewquestion/viewquestion.component';
import { ViewuserComponent} from './user-profile/viewuser/viewuser.component';
import { ResultComponent} from './user-profile/result/result.component';
import { ResdetailComponent} from './user-profile/resdetail/resdetail.component';
import {EditquestionComponent} from './user-profile/editquestion/editquestion.component';

import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard],
        children: [{ path: 'AddCategory', component: AddcategoryComponent  },
        { path: 'ViewCategory', component: ViewcategoryComponent },
        { path: 'EditCategory/:id', component : EditcategoryComponent},
        { path: 'AddFood', component: AddfoodComponent},
        { path: 'ViewFood', component: ViewfoodComponent},
        { path: 'EditFood', component: EditfoodComponent },
        { path: 'Addq' , component : AddquestionComponent},
        { path: 'Viewq' , component : ViewquestionComponent},
        { path: 'viewuser' , component : ViewuserComponent},
        { path: 'result' , component : ResultComponent},
        { path: 'resdetail' , component: ResdetailComponent},
        { path : 'Editq/:id' , component : EditquestionComponent}
    ]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
