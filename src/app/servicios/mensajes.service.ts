import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private firestore: AngularFirestore) { }

  traerTodos(){
  	return  this.firestore.collection('salaDeChat').doc('subcolecciones').collection('mensajes', ref=> ref.orderBy('fecha','asc')).snapshotChanges();
  }

  crear(mensaje, sala, usuario){
  	let data: any = {
  		usuario: usuario,
  		mensaje: mensaje,
  		sala: sala,
  		fecha: Date.now()
  	}
  	return this.firestore.collection('salaDeChat').doc('subcolecciones').collection('mensajes').add(data);
  }


}
