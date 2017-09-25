import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploadModule } from 'angular2-image-upload';
import { ModalModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AddChallengeComponent } from './add-challenge/add-challenge.component';
import { AppComponent } from './app.component';
import { ArchiveComponent } from './archive/archive.component';
import { ChallengeResponseComponent } from './challenge-response/challenge-response.component';
import { CommentPanelComponent } from './comment-panel/comment-panel.component';
import { DropdownOnClickDirective } from './directives/uiDirectives/dropdown-on-click.directive';
import { HamburgerOnClickDirective } from './directives/uiDirectives/hamburger-on-click.directive';
import { mouseoverHighlight } from './directives/uiDirectives/mouseoverReaction.directive';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { challengeListing } from './models/challengeListing.model';
import { commentListing } from './models/comment-listing.model';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ReportPanelComponent } from './report-panel/report-panel.component';
import { FirebaseCommService } from './services/httpComm/firebase-comm.service';
import { StandardComsService } from './services/ui/standard-coms.service';
import { TodayChallengeMainComponent } from './today-challenge-main/today-challenge-main.component';
import { TommorowChallengeMainComponent } from './tommorow-challenge-main/tommorow-challenge-main.component';
import { YesterdayChallengeMainComponent } from './yesterday-challenge-main/yesterday-challenge-main.component';
import { HeaderComponent } from './header/header.component';
import { TestComponentComponent } from './test-component/test-component.component';


const pathMap: Routes =
	[
		{ path: '', component: HomeComponent },
		{ path: 'comment', component: CommentPanelComponent },
		{ path: 'yesterday', component: YesterdayChallengeMainComponent },
		{ path: 'today', component: TodayChallengeMainComponent },
		{ path: 'home', component: HomeComponent },
		{ path: 'tommorow', component: TommorowChallengeMainComponent },
		{ path: 'Archive', component: ArchiveComponent },
		{ path: 'newChallenge', component: AddChallengeComponent },
		{ path: 'tommorow/:id/report', component: ReportPanelComponent },
		{ path: 'today/:id/edit', component: AddChallengeComponent },
		{ path: 'not_found', component: PageNotFoundComponentComponent },
		{path: 'testdanger', component: TestComponentComponent},
		{ path: '**', redirectTo: '/not_found' },
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
		DropdownOnClickDirective,
		FooterComponent,
		HeaderComponent,
		TestComponentComponent,

	],

	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(pathMap),
		PopoverModule.forRoot(),
		ModalModule.forRoot(),
		ImageUploadModule.forRoot(),
		ReactiveFormsModule
	],
	providers: [FirebaseCommService, challengeListing, StandardComsService, commentListing],
	bootstrap: [AppComponent]
})
export class AppModule { }
