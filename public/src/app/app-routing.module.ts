import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentComponent } from './assessment/assessment.component';
import { FlowchartComponent } from './flowchart/flowchart.component';
import { IncidentComponent } from './incident/incident.component';
import { NarrativeComponent } from './narrative/narrative.component';
import { PatientComponent } from './patient/patient.component';
import { VitalsComponent } from './vitals/vitals.component';
import {HomeComponent} from './home/home.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'assessment/:id', component: AssessmentComponent},
  {path: 'flowchart/:id', component: FlowchartComponent},
  {path: 'incident/:id', component: IncidentComponent},
  {path: 'narrative/:id', component: NarrativeComponent},
  {path: 'patient/:id', component: PatientComponent},
  {path: 'vitals/:id', component: VitalsComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
