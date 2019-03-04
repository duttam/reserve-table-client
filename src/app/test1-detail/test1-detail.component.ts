import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test1-detail',
  templateUrl: './test1-detail.component.html',
  styleUrls: ['./test1-detail.component.css']
})
export class Test1DetailComponent implements OnInit {
  @Input() course:{};

  constructor() { }

  ngOnInit() {
  }

}
