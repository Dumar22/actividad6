import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  email:string = "pepito@gmail.com"
  password:string = ""
  datos:any[] = []

  ngOnInit(): void {
    
  }

iniciar(){
 
  this.datos.push(this.email)
 localStorage.setItem('datos',JSON.stringify(this.datos))
}

Eliminar(position:number){
console.log(position)
this.datos.splice(position,1)
localStorage.setItem('datos',JSON.stringify(this.datos))
}

}
