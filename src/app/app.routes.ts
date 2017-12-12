import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';

/** OEE */
import { OeeListComponent }    from './oee/oee-list.component';
import { OeeDetailComponent }    from './oee/oee-detail.component';
/** PLANNED */
import { PLannedDetailComponent }    from './oee/planned/planned-detail.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'oee', component: OeeListComponent },
  { path: 'oee/:id/:name', component: OeeListComponent },
  { path: 'oee/:id', component: OeeDetailComponent },
  { path: 'planned/:id/:name', component: PLannedDetailComponent },
  { path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  },
  { path: 'contact', component: ContactComponent }
];

