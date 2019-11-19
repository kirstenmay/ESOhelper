import { Component } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  incident: boolean;
  patient: boolean;
  vitals: boolean;
  flowchart: boolean;
  assessment: boolean;
  narrative: boolean;

  title = 'public';

  public constructor (private _httpService: HttpService){}
  ngOnInit(){
    this.incident = false;
    this.patient = false;
    this. vitals = false;
    this.flowchart = false;
    this.assessment = false;
    this.narrative = false;
  }

  renderIncident(){
    this.incident = true;
    this.patient = false;
    this. vitals = false;
    this.flowchart = false;
    this.assessment = false;
    this.narrative = false;
  }

  renderPatient(){
    this.patient = true;
    this.incident = false;
    this. vitals = false;
    this.flowchart = false;
    this.assessment = false;
    this.narrative = false;
  }

  renderVitals(){
    this. vitals = true;
    this.incident = false;
    this.patient = false;
    this.flowchart = false;
    this.assessment = false;
    this.narrative = false;
  }

  renderFlowchart(){
    this.flowchart = true;
    this.incident = false;
    this.patient = false;
    this. vitals = false;
    this.assessment = false;
    this.narrative = false;
  }

  renderAssessment(){
    this.assessment = true;
    this.incident = false;
    this.patient = false;
    this. vitals = false;
    this.flowchart = false;
    this.narrative = false;
  }

  renderNarrative(){
    this.narrative = true;
    this.incident = false;
    this.patient = false;
    this. vitals = false;
    this.flowchart = false;
    this.assessment = false;
  }
}
