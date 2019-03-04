import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  id: string;
  @Input() aboutDesc;
  @Output() delete= new EventEmitter();
  constructor(private route:ActivatedRoute) {
    
    
   }

  ngOnInit() {
    this.route.params.subscribe((param)=>{
      this.id=param['id'];

    });
    
  }

  onDelete(){
   
    this.delete.emit("desc is clicked");
  }
}
