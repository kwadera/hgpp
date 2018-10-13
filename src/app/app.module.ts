import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RestorauntComponent } from './restoraunt/restoraunt.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: 'rooms', component: RoomsComponent },
  { path: 'resturant',      component: RestorauntComponent },
  {
    path: 'gallery',
    component: GalleryComponent,
    data: { title: 'Gallery Screen' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RestorauntComponent,
    GalleryComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    AlertModule.forRoot(),
    BrowserModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
