import {Routes, RouterModule} from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { LudusHomeComponent } from './ludusHome/ludusHome.component';
import { EmpereurHomeComponent } from './empereurHome/empereurHome.component';
import { CombatsListComponent } from './combats/list/combats-list.component';
import { CombatsNewComponent } from './combats/new/combats-new.component';
import { CombatsEditComponent } from './combats/edit/combats-edit.component';
import { NotFoundComponent } from './404/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: 'accueil', component: AccueilComponent},
    { path: 'empereur', component: EmpereurHomeComponent},
    { path: 'ludus', component: LudusHomeComponent},
    { path: 'ludus/combats/list', component: CombatsListComponent},
    { path: 'ludus/combats/new', component: CombatsNewComponent},
    { path: 'empereur/combats/:id/edit', component: CombatsEditComponent},
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }
];

export const routing = RouterModule.forRoot(routes);
