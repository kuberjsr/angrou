import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const router : Routes =[
   // {path : '', component : AppComponent},
    //{path : 'home', component : AppComponent},
    {path : 'about-us', component : AboutUsComponent},
    {path : 'contact-us', component : ContactUsComponent},
];

export const routes : ModuleWithProviders= RouterModule.forRoot(router);