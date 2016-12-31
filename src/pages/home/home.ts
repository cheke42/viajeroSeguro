import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationTracker } from '../../providers/location-tracker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public positionCollection;
 
  constructor(public navCtrl: NavController, public locationTracker: LocationTracker) {
    this.positionCollection = this.locationTracker.positionCollection;
}
 
  start(){
    this.locationTracker.startTracking();
  }
 
  stop(){
    this.locationTracker.stopTracking();
    this.positionCollection = this.locationTracker.positionCollection;
  }
 
}