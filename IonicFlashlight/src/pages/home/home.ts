import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	isOn: boolean = false;


  constructor(private flashlight: Flashlight, public navCtrl: NavController) {

  }

  async isAvailable():Promise<boolean>{
  	try{
  		return await this.flashlight.available();
  	}
  	catch(e){
  		console.log(e);
  	}
  }
  async toggleFlash():Promise<void>{
  	try{
  		let available = await this.isAvailable();
  		if(available){
  			await this.flashlight.toggle();
  			this.isOn = !this.isOn;
  		}
  		else{
  			console.log("Is not available.")
  		}
  	}
  	catch(e){
  		console.log(e);
  	}

  }

  async turnOnFlash():Promise<void>{
  	await this.flashlight.switchOn();
  }

  async turnOffFlash():Promise<void>{
  	await this.flashlight.switchOff();
  }

  async isFlashOn():Promise<void>{
  	return await this.flashlight.isSwitchedOn();
  }


}
