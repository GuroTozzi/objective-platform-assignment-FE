import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BeersService } from './beers.service';
import { BeersComponent } from './beers/beers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BeerComponent } from './beer/beer.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'users',
    pathMatch: 'full',
    component: UserComponent
  },
  {
    path: 'users/new',
    component: UserComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    BeerComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
