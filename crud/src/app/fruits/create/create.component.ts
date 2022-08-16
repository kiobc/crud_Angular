import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

fruitForm:Fruits={
id:0,
name:'',
edad:0,
fechaday:0,
fecham:0,
fechaa:0,
fechaiday:0,
fechaim:0,
fechaia:0,
cost:0
}

  constructor(private fruitService:FruitsService,
    private route:Router) { }

  ngOnInit(): void {
  }
create(){
this.fruitService.create(this.fruitForm)
.subscribe({
  next:(data)=>{
  this.route.navigate(["/fruits/home"])
  },
  error:(error)=>{
    console.log(error);
  }
})
}
}
