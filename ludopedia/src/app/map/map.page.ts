import { Component, OnInit } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  coords: { lat: number; lng: number } = { lat: 51.505, lng: -0.09 };
  intervalId: any;

  constructor() { }

  async ngOnInit() {
    await this.refreshCoords();

    this.startPeriodicRefresh();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  async refreshCoords(){
    const position = await Geolocation.getCurrentPosition();
    this.coords = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    console.log('Position:', this.coords);
  }

  startPeriodicRefresh() {
    this.intervalId = setInterval(async () => {
      await this.refreshCoords();
    }, 10000); 
  }

}
