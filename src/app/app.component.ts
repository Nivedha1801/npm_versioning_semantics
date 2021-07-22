import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  environmentName = '';
  url = '';
  title = 'test';
  constructor() {
    this.environmentName = environment.name;
    this.url = environment.apiUrl ;
  }
a:number=20;
 b:number=0;

 addition(a:number,b:number){
    return a+b;
}
 subtraction(a:number,b:number){
    return a-b;
}
 multiplication(a:number,b:number){
    return a*b;
}
 division(a:number,b:number){
    return a/b;
}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log("Sum is:-"+this.addition(this.a,this.b));
console.log("Difference is:-"+this.subtraction(this.a,this.b));
console.log("Product is:-"+this.multiplication(this.a,this.b));
console.log("Division is:-"+this.division(this.a,this.b));
}
}
