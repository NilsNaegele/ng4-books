import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { ShoppingModule } from './shopping/shopping.module';
import { AnimateModule } from './animate/animate.module';
import { CoreModule } from './core/core.module';

import { environment } from '../environments/environment';

import { AuthenticationGuard } from './shared/services/authentication-guard.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    SharedModule,
    AdminModule,
    ShoppingModule,
    AnimateModule,
    CoreModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/welcome', pathMatch: 'full'}
    ])
  ],
  providers: [ AuthenticationGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
