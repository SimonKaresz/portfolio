import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material start
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
//Material end

import { HomeComponent } from './components/home/home.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ReferencesComponent } from './components/references/references.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudiesComponent,
    ReferencesComponent,
    SkillsComponent,
    ContactsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Material start
    MatCardModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    //Material end
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
