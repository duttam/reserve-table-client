import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  courses:{};
  selectedCourse: {};

  constructor() { }

  ngOnInit() {
    this.courses=[
      {name:"Algo", prof :"phillips"} ,
      {name:"system programming", prof :"Tang"} 

    ]
  }
  onSelect(course){
    this.selectedCourse=course;
  }


}
