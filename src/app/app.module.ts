import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';

/** OEE */
import { OeeListComponent } from './oee/oee-list.component';
import { OeeDetailComponent } from './oee/oee-detail.component';
import { OeeFilterPipe } from './oee/oee-filter.pipe';
import { OeeService } from './oee/oee.service';

/** PLANNED */
import { PLannedDetailComponent } from './oee/planned/planned-detail.component';
import { PlannedService } from './oee/planned/planned.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    ContactComponent,
    OeeListComponent,
    OeeDetailComponent,
    OeeFilterPipe,
    PLannedDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    GithubService,
    OeeService,
    PlannedService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
