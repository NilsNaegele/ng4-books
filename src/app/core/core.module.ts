import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: '/welcome', pathMatch: 'full'},
      { path: '', component: WelcomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'chat', component: ChatComponent},
      { path: 'login', component: LoginComponent },
      { path: '**', component: WelcomeComponent }
    ])
  ],
  declarations: [
    NavigationBarComponent,
    FooterComponent,
    WelcomeComponent,
    LoginComponent,
    AboutComponent,
    ChatComponent
  ],
  exports: [
    NavigationBarComponent, FooterComponent
  ]
})
export class CoreModule { }
