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
import {mouseoverHighlight} from './directives/uiDirectives/mouseoverReaction.directive';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ReportPanelComponent } from './report-panel/report-panel.component';
import {challengeListing} from './models/challengeListing.model';
import { CommentPanelComponent } from './comment-panel/comment-panel.component';
import { HamburgerOnClickDirective } from './directives/uiDirectives/hamburger-on-click.directive';
import {StandardComsService} from './services/ui/standard-coms.service';
import {commentListing} from './models/comment-listing.model';
import { DropdownOnClickDirective } from './directives/uiDirectives/dropdown-on-click.directive';


const pathMap: Routes=
[
	{path:'', component:HomeComponent},
  {path:'comment', component:CommentPanelComponent},
	{path:'yesterday', component:YesterdayChallengeMainComponent},
	{path:'today', component:TodayChallengeMainComponent},
  {path:'home', component:HomeComponent},
	{path:'tommorow', component:TommorowChallengeMainComponent},
	{path:'Archive', component:ArchiveComponent},
  {path:'newChallenge', component:AddChallengeComponent},
  {path:'tommorow/:id/report', component:ReportPanelComponent},
  {path:'today/:id/edit', component:AddChallengeComponent},
	{path:'not_found', component:PageNotFoundComponentComponent},
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
    mouseoverHighlight,
    PageNotFoundComponentComponent,
    ReportPanelComponent,
    CommentPanelComponent,
    HamburgerOnClickDirective,
    DropdownOnClickDirective
 


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(pathMap)
  ],
  providers: [challengeListing,StandardComsService,commentListing],
  bootstrap: [AppComponent]
})
export class AppModule { }
