import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
constructor() { }
 ngOnInit():void{
 }
 name : string = "Akshansh";
 greet(): void{
  alert("Hello" + this.name)
 };
}
