import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard'
import { environment } from '../environments/environment';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { HomePage } from './home/home.page';


@NgModule({
	declarations: [AppComponent, LoginComponent, HomePage, MensajesComponent],
	entryComponents: [],
	imports: [
	BrowserModule, 
	IonicModule.forRoot(), 
	AppRoutingModule, 
	FormsModule,
	ReactiveFormsModule,
	AngularFireModule.initializeApp(environment.firebaseConfig), 
	AngularFirestoreModule, 
	AngularFireAuthModule,
	AngularFireStorageModule,
	AngularFireAuthGuardModule,
	],
	providers: [
		StatusBar,
		SplashScreen,
		Vibration,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
