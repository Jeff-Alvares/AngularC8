import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.page.html',
  styleUrls: ['./docentes.page.scss'],
})
export class DocentesPage implements OnInit {

  constructor(private actionSheetController: ActionSheetController) {}
 ngOnInit() {}
 onClick() {
 this.presentActionSheet();
 }
 async presentActionSheet() {
 const actionSheet = await this.actionSheetController.create({
 header: 'Opciones',
 cssClass: 'my-custom-class',
 backdropDismiss: false,
 buttons: [
 {
 text: 'Eliminar',
 role: 'destructive',
 icon: 'trash',
 handler: () => {
 console.log('Delete clicked');
 },
 },
 {
 text: 'Compartir',
 icon: 'share',
 handler: () => {
 console.log('Share clicked');
 },
 },
 {
 text: 'Favoritos',
 icon: 'heart',
 handler: () => {
 console.log('Favorite clicked');
 },
 },
 {
 text: 'Cancelar',
 icon: 'close',
 role: 'cancel',
 handler: () => {
 console.log('Cancel clicked');
 },
 },
 ],
 });

 await actionSheet.present();
 const { role } = await actionSheet.onDidDismiss();
 console.log('onDidDismiss resolved with role', role);
 }
}