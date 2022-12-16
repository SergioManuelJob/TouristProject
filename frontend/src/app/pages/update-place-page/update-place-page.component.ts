import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import Place from 'src/app/Models/place';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-update-place-page',
  templateUrl: './update-place-page.component.html',
  styleUrls: ['./update-place-page.component.scss']
})
export class UpdatePlacePageComponent {

  placeModel: Place;
  place: FormGroup;
  direction: string = "";
  title: string = "";
  description: string = "";
  image: SafeResourceUrl = '';
  typeImg: string = '';
  dataImg: File = new File([''], "oldImage.");
  id: any;

  constructor(private placeService: PlaceService, private router: Router, private activatedRoute: ActivatedRoute){
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.placeModel = {title: "", description: "", direction: "", image: ""}
    this.place = new FormGroup({
      image: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      direction: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required]),
    });
    this.fillPlace()
  }

  fillPlace(){
    this.placeService.getOnePlace(this.id).subscribe(data =>{  
      this.placeModel = data; 
      console.log(data)
      console.log(this.placeModel)
      this.direction = this.placeModel.direction
      this.title = this.placeModel.title
      this.description = this.placeModel.description
      this.image = this.placeModel.image
      this.typeImg = this.placeModel.typeImg!
    })
  }

  onSubmit(){
    this.placeModel.direction = this.direction
    this.placeModel.title = this.title
    this.placeModel.description = this.description
    this.placeModel.image = this.image
    this.placeModel.typeImg! = this.typeImg
    this.placeService.updatePlace(this.id, this.placeModel, this.dataImg)
    window.location.href = "adminPlaces"
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
