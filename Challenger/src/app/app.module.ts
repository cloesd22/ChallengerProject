import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { YesterdayChallengeMainComponent } from './yesterday-challenge-main/yesterday-challenge-main.component';
import { TodayChallengeMainComponent } from './today-challenge-main/today-challenge-main.component';
import { TommorowChallengeMainComponent } from './tommorow-challenge-main/tommorow-challenge-main.component';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { ChallengeResponseComponent } from './challenge-response/challenge-response.component';
import { AddChallengeComponent } from './add-challenge/add-challenge.component';
import {mouseoverHighlight} from './challenge-response/directiveChallenge/mouseoverReaction.directive';


const pathMap: Routes=
[
	{path:'', component:HomeComponent},
	{path:'yesterday', component:YesterdayChallengeMainComponent},
	{path:'today', component:TodayChallengeMainComponent},
	{path:'tommorow', component:TommorowChallengeMainComponent},
	{path:'Archive', component:ArchiveComponent},
  {path:'newChallenge', component:AddChallengeComponent},
	{path:'not_found', component:HomeComponent},
	{path:'**', redirectTo:'/not_found'}
];

@NgModule({
  declarations: [
    AppComponent,
    YesterdayChallengeMainComponent,
    TodayChallengeMainComponent,
    TommorowChallengeMainComponent,
    HomeComponent,
    ArchiveComponent,
    ChallengeResponseComponent,
    AddChallengeComponent,
    mouseoverHighlight


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(pathMap)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
