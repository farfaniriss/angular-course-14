import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MapEditComponent } from './map-edit.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat = 51.678418;
  lng = 7.809007;

  markers: Marker[] = [];

  constructor(public snackBar: MatSnackBar,
              public dialog: MatDialog) { 
    if (localStorage.getItem('markers')){
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  ngOnInit() {
  }

  addMarker(event) {
    console.log(event);
    const coords : {lat:number, lng:number} = event.coords;

    const newMarker = new Marker(coords.lat, coords.lng);
    this.markers.push(newMarker);
    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
    this.snackBar.open('Marker added', 'Close', { duration: 3000 });
  }

  deleteMarker(i:number) {
    this.markers.splice(i, 1);
    this.saveStorage();
    this.snackBar.open('Marker deleted', 'Close', { duration: 3000 });
  }

  editMarker( marker: Marker) {
    const dialogRef = this.dialog.open(MapEditComponent, {
      width: '250px',
      data: { title: marker.title, desc: marker.desc }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        marker.title = result.title;
        marker.desc = result.desc;
        this.saveStorage();
        this.snackBar.open('Marker updated', 'Close', { duration: 3000 });
      }
    });
 
  }
}
