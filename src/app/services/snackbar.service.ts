import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar:MatSnackBar) { }

  openSnackBar(message:string){
    this.snackbar.open(message,'',{
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000
    })
  }

}
