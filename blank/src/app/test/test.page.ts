import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  data: Observable<any>;
  elements = [];
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData = () => {
    var url = "http://localhost:8000/test";
    this.data = this.http.get(url);
    this.data.subscribe(data=>{
      for(let i = 0; i < data.length; i++){
        this.elements.push(data[i]);
      }
      console.log(data);
    })
  }
  
}
