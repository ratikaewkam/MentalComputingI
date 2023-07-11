import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExportData } from './exportdata';
import { timer } from 'rxjs';

@Component({
  selector: 'app-compute',
  templateUrl: './compute.component.html',
  styleUrls: ['./compute.component.scss']
})

export class ComputeComponent {
  constructor(private http: HttpClient) { }

  exportData: ExportData[] = [];


  poScore: number = 0;
  negScore: number = 0;
  mentalData: string = '';

  dataForm = new FormGroup({
    nameForm: new FormControl(null, Validators.required),
    characterForm: new FormControl(null, Validators.required),
    managementForm: new FormControl(null, Validators.required),
    lifeForm: new FormControl(null, Validators.required),
    lessonForm: new FormControl(null, Validators.required),
    shareForm: new FormControl(null, Validators.required)
  });

  onSubmit() {
    this.http.get('LINK', {
      headers: this.headers,
      params: new HttpParams().set('text', String(this.dataForm.value.characterForm))
    }).subscribe(res => {
      let temp = Object.entries(res);
      let data = temp[0][1];
      if (data == 'POSITIVE') {
        this.poScore = this.poScore + 1;
      } else {
        this.negScore = this.negScore + 1;
      }
    });

    this.http.get('LINK', {
      headers: this.headers,
      params: new HttpParams().set('text', String(this.dataForm.value.managementForm))
    }).subscribe(res => {
      let temp = Object.entries(res);
      let data = temp[0][1];
      if (data == 'POSITIVE') {
        this.poScore = this.poScore + 1;
      } else {
        this.negScore = this.negScore + 1;
      }
    });

    this.http.get('LINK', {
      headers: this.headers,
      params: new HttpParams().set('text', String(this.dataForm.value.lifeForm))
    }).subscribe(res => {
      let temp = Object.entries(res);
      let data = temp[0][1];
      if (data == 'POSITIVE') {
        this.poScore = this.poScore + 1;
      } else {
        this.negScore = this.negScore + 1;
      }
    });

    this.http.get('LINK', {
      headers: this.headers,
      params: new HttpParams().set('text', String(this.dataForm.value.lessonForm))
    }).subscribe(res => {
      let temp = Object.entries(res);
      let data = temp[0][1];
      if (data == 'POSITIVE') {
        this.poScore = this.poScore + 1;
      } else {
        this.negScore = this.negScore + 1;
      }
    });

    this.http.get('LINK', {
      headers: this.headers,
      params: new HttpParams().set('text', String(this.dataForm.value.shareForm))
    }).subscribe(res => {
      let temp = Object.entries(res);
      let data = temp[0][1];
      if (data == 'POSITIVE') {
        this.poScore = this.poScore + 1;
      } else {
        this.negScore = this.negScore + 1;
      }
    });

    alert('Please wait a moment');

    timer(3000).subscribe(x => {
      if (this.poScore > this.negScore) {
        this.mentalData = 'POSITIVE';
        let myObj = [{ name: String(this.dataForm.value.nameForm), mental: this.mentalData }]
        this.exportData = myObj;
      } else if (this.poScore < this.negScore) {
        this.mentalData = 'NEGATIVE';
        let myObj = [{ name: String(this.dataForm.value.nameForm), mental: this.mentalData }]
        this.exportData = myObj;
      }

      this.poScore = 0;
      this.negScore = 0;
    })
  }

  headers = new HttpHeaders({
    'X-RapidAPI-Key': 'YOUR-KEY',
    'X-RapidAPI-Host': 'LINK'
  });
}