import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { RentalModule } from './components/rental/rental.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
@NgModule({
	declarations: [
		AppComponent,
		ChildComponent,
		ParentComponent,
		HeaderComponent,
  LoginComponent,
  RegisterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RentalModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
