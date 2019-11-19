import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpService} from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IncidentComponent } from './incident/incident.component';
import { PatientComponent } from './patient/patient.component';
import { VitalsComponent } from './vitals/vitals.component';
import { FlowchartComponent } from './flowchart/flowchart.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { NarrativeComponent } from './narrative/narrative.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidentComponent,
    PatientComponent,
    VitalsComponent,
    FlowchartComponent,
    AssessmentComponent,
    NarrativeComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
