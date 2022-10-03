import { Component, OnInit, OnDestroy } from '@angular/core';
import { RutaLongitud } from 'src/app/model/RutaLongitud';
import { CorredorService } from 'src/app/services/corredor.service';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import {  Router } from '@angular/router';


declare var google: any;

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css'],
  providers: [MessageService]
})
export class RutaComponent implements OnInit,OnDestroy {
  private subscription!:Subscription

  show = false

  options: any;

  overlays!: any[];

  dialogVisible!: boolean;

  markerTitle!: string;

  selectedPosition: any;

  infoWindow: any;

  draggable!: boolean;
  paraderos!:any[]



  constructor(public corredorService:CorredorService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
    
   this.subscription=this.corredorService.listaRutas$.subscribe((resp:RutaLongitud[])=>{
      console.log("Escuchando en el componente rutas",resp)
      console.log("las rutas desde el servicio: ",this.corredorService.rutas)
      console.log("nombre ruta: ",this.corredorService.nombreRuta)
      
      this.paraderos =resp.map(obj=>{
          
          return {lat:Number(obj.latitud),lng:Number(obj.longitud),nombre:obj.descripcion}
      })
      this.show=true
      console.log("los paraderos mutados: ",this.paraderos)
      
      this.initOverlays();
      
     
    })

   this.options = {
      center: {lat: -12.04318, lng: -77.02824},
      zoom: 12
  };

  this.infoWindow = new google.maps.InfoWindow();
  


  
  }
  
  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }




  handleMapClick(event:any) {
      this.dialogVisible = true;
      this.selectedPosition = event.latLng;
  }

  handleOverlayClick(event:any) {
      let isMarker = event.overlay.getTitle != undefined;

      if (isMarker) {
          let title = event.overlay.getTitle();
          this.infoWindow.setContent('' + title + '');
          this.infoWindow.open(event.map, event.overlay);
          event.map.setCenter(event.overlay.getPosition());

          this.messageService.add({severity:'info', summary:'Marker Selected', detail: title});
      }
      else {
          this.messageService.add({severity:'info', summary:'Shape Selected', detail: ''});
      }
  }

  addMarker() {
      this.overlays.push(new google.maps.Marker({position:{lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()}, title:this.markerTitle, draggable: this.draggable}));
      this.markerTitle = '';
      this.dialogVisible = false;
  }

  handleDragEnd(event:any) {
      this.messageService.add({severity:'info', summary:'Marker Dragged', detail: event.overlay.getTitle()});
  }

  initOverlays() {
      if (!this.overlays||!this.overlays.length) {
          this.overlays = [
              // new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
              // new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
              //  new google.maps.Marker({position: {lat: -11.967901980719649, lng: -77.08382248878479}, title:"Oldtown"}),
              // new google.maps.Polygon({paths: [
              //     {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
              // ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35
              // }),

            //   new google.maps.Circle({center: {lat: -11.967901980719649, lng: -77.08382248878479}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
              // new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
          ];
           this.paraderos.forEach(element => {
            console.log("el elemet",element)
            this.overlays.push(new google.maps.Marker({position:{lat: element.lat,lng:element.lng}, title:element.nombre}))
          //   this.overlays.push(new google.maps.Polyline({path: element, geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2}))
           })
          console.log("this.overlays",this.overlays)
      }
  }

  zoomIn(map:any) {
      map.setZoom(map.getZoom()+1);
  }

  zoomOut(map:any) {
      map.setZoom(map.getZoom()-1);
  }

  clear() {
      this.overlays = [];
  }


}
