import { Component, OnInit } from '@angular/core';
import* as firebase from '@ionic-native/firebase';
import { Router } from '@angular/router';
//import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  db = firebase.firestor
  username: string=""
  password: string=""
  constructor(
    private router: Router
   
  ) {}


  ngOnInit() {
  }

 
  Login(){
    const {username,password}=this
    firebase.auth().signInWithEmailAndPassword(username, password).then((result) => {
      
      console.log("Logged in succesful")
      this.router.navigateByUrl('/main-page');
  }).catch((error) => {
    console.log("User not found")
     let errorCode = error.code;
     let errorMessage = error.message;
 
  });

  }



}
