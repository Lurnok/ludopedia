import { AfterViewInit, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as Leaf from 'leaflet';
import axios from 'axios';

Leaf.Icon.Default.mergeOptions({
  iconRetinaUrl: 'assets/marker-icon-2x.png',
  iconUrl: 'assets/marker-icon.png',
  shadowUrl: 'assets/marker-shadow.png',
});

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnInit {
  @Input() position!: { lat: number, lng: number };
  private map!: Leaf.Map;
  private marker!: Leaf.Marker;

  constructor() { }

  ngOnInit() {
    this.initMap();

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['position'] && this.map) {
      const newPos = changes['position'].currentValue;
      this.updateMapPosition(newPos.lat, newPos.lng);
      this.fetchAndDisplayShops();
    }
  }

  private initMap(): void {
    this.map = Leaf.map('map').setView([this.position.lat, this.position.lng], 13);

    Leaf.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.marker = Leaf.marker([this.position.lat, this.position.lng]).addTo(this.map);
    
  }

  private updateMapPosition(lat: number, lng: number): void {
    this.map.setView([lat, lng], 13);

    this.marker.setLatLng([lat, lng]);
  }

  private async fetchAndDisplayShops() {
    const overpassQuery = `
      [out:json];
      node[amenity=shop](around:500,${this.position.lat},${this.position.lng});
      out;
    `;
  
    try {
      const response = await axios.post('https://overpass-api.de/api/interpreter', overpassQuery, {
        headers: { 'Content-Type': 'text/plain' },
      });
  
      const shops = response.data.elements;
      shops.forEach((shop: any) => {
        console.log("found")
        if (shop.lat && shop.lon) {
          Leaf.marker([shop.lat, shop.lon])
            .addTo(this.map)
            .bindPopup(`<b>${shop.tags.name || 'Unnamed Shop'}</b>`);
        }
      });
    } catch (error) {
      console.error('Error fetching shops:', error);
    }
  }
  
}