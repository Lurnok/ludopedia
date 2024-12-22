import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Jeu } from './models/jeu.model';

@Injectable({
  providedIn: 'root'
})
export class JeuService {
  private dbPath = '/jeux';
  jeuxRef: AngularFirestoreCollection<Jeu>;

  constructor(
    private db: AngularFirestore
  ) { this.jeuxRef = db.collection(this.dbPath) }

  getAll() : Observable<Jeu[]> {
    return this.jeuxRef.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Jeu;
          data.id =  a.payload.doc.id;
          return data;
        })
      )
    )
  }

  saveNewJeu(jeu: Jeu): Promise<void> {
    const id = this.db.createId(); 
    let newJeu = new Jeu();
    return this.jeuxRef.doc(id).set({
      id: id, 
      title: jeu.title,
      age: jeu.age,
      duration: jeu.duration,
      imageurl: jeu.imageurl,
      nbplayers: jeu.nbplayers,
      price: jeu.price,
      description: jeu.description,
    } as Jeu);
  }

  get(id: any): Observable<Jeu | undefined> {
    return this.jeuxRef.doc(id).snapshotChanges().pipe(
      map(snapshot => {
        const data = snapshot.payload.data() as Jeu;;
        if (data) {
          data.id =  snapshot.payload.id;
          return data; 
        }
        return undefined;
      })
    );
  }

  update(jeu : Jeu) : Promise<void> {
    return this.jeuxRef.doc(jeu.id.toString()).update({
      title: jeu.title,
      age: jeu.age,
      duration: jeu.duration,
      imageurl: jeu.imageurl,
      nbplayers: jeu.nbplayers,
      price: jeu.price,
      description: jeu.description,
    });
  }

  delete(id : any) {
    return this.jeuxRef.doc(id).delete();
  }
}
