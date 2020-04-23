import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Etiquetas } from './../pages/Models/etiquetas.interface';
import { MessageI } from './../pages/Models/message.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  private contactCollection: AngularFirestoreCollection<MessageI>;
  private habitacionalCollection: AngularFirestoreCollection<Etiquetas>;

  constructor(afs: AngularFirestore) {
    this.contactCollection = afs.collection<MessageI>('contacts');
    this.habitacionalCollection = afs.collection<Etiquetas>('habitacional');
  }

  saveMessage(newContact: MessageI): void {
    this.contactCollection.add(newContact);
  }
  saveEtiqueta(newHabitacional: Etiquetas): void {
    this.habitacionalCollection.add(newHabitacional);
  }

}


  

   

  

  
