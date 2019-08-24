// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { CategoryService } from './shared/category.service';
import { QuestionService } from './shared/question.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './nav/home/home.component';
import { AboutComponent } from './nav/about/about.component';
import { CategoryComponent } from './user-profile/category/category.component';
import { QuestionComponent } from './user-profile/question/question.component';
import { QuesubmitComponent } from './user-profile/question/quesubmit/quesubmit.component';
import { UpdateprofileComponent } from './user-profile/updateprofile/updateprofile.component';
import { ResultdetailComponent } from './user-profile/resultdetail/resultdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    CategoryComponent,
    QuestionComponent,
    QuesubmitComponent,
    UpdateprofileComponent,
    ResultdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, UserService , CategoryService , QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
