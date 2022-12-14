import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DialogoConfirmacionComponent } from 'src/app/components/dialogo-confirmacion/dialogo-confirmacion.component';
import Place from 'src/app/Models/place';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-create-place-page',
  templateUrl: './create-place-page.component.html',
  styleUrls: ['./create-place-page.component.scss']
})
export class CreatePlacePageComponent {

  place: FormGroup;
  direction: string = "";
  title: string = "";
  description: string = "";
  image: SafeResourceUrl = '';
  typeImg: string = '';
  dataImg: File = new File([''], "oldImage.");

  isCreated: boolean = false;

  constructor(private placeService: PlaceService, public dialogo: MatDialog, private router: Router) {
    this.place = new FormGroup({
      image: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      direction: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required]),
    });
  }

  get titlePlace() { return this.place.get('title'); }
  get directionPlace() { return this.place.get('direction'); }
  get descriptionPlace() { return this.place.get('description'); }

  onSubmit() {
    if (this.isCreated == false) {
      this.isCreated = true;
      this.dialogo
        .open(DialogoConfirmacionComponent, {
          data: `Confirm changes?`
        })
        .afterClosed()
        .subscribe((confirmado: Boolean) => {
          if (confirmado) {
            let placeData: Place = { title: this.place.value.title, direction: this.place.value.direction, description: this.place.value.description, image: '' }
            this.placeService.createPlace(placeData, this.dataImg);
            alert("Changes done succesfully");
            this.router.navigateByUrl("/adminPlaces")
          } else {
            this.isCreated = false;
          }
        });
    }
    else { }
  }

  file(event: any) {
    const file = event.target.files[0];
    this.dataImg = file;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let base64Data = (reader.result as string).split(';');
      let typeImage = base64Data[0].split(':');
      let base64 = base64Data[1].split(',')
      this.image = base64[1];
      this.typeImg = typeImage[1];
    };
  }

}
