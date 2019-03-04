import { Component, OnInit } from '@angular/core';
import { Courses } from '../courses';
import { COURSES } from '../course-data';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  selectedCourse: Courses;
  courses= COURSES;

  constructor() { 
    
  }


  ngOnInit() {
  }
  onSelect(course:Courses):void{
    this.selectedCourse=course;
  }

}
