import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){

  }
  title = 'app';
}
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'C:\Users\Tazmane\Desktop\ImmersionTalentAssessment\src\assets\Employees.json/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: any;
constructor(public http : Http){
  this.users = http.get('C:\Users\Tazmane\Desktop\ImmersionTalentAssessment\src\assets\Employees.json').map(results => results.json());
  setTimeout(()=>{
this.users.subscribe(res=>{

  console.log(res[0].id);
  
})
  },1000);
}

}