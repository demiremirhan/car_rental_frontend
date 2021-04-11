import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { ToastrService } from 'ngx-toastr';
import { CardtoService } from 'src/app/services/cardto.service';
import { CarDto } from 'src/app/models/carDto';
import { CartServiceService } from 'src/app/services/cart.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {
  cars: Car[] = [];
  carId: number;
  CarDto : CarDto;
  carImages: CarImage[] = [];
  imageUrl: string = "https://localhost:44356"
  dataLoaded = false;
  constructor(private carService: CarService, private activatedRoute: ActivatedRoute, private carImagesService: CarimageService, private toastrService:ToastrService
    , private cartService:CartServiceService,
    private cardtoservice : CardtoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarById(params['carId']);
      this.getImagesByCarId(params['carId'])
    })
  }

  getImagesByCarId(carId: number) {
    this.carImagesService.getImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  } 

  getCarById(carId: number) {
    this.cardtoservice.getCarDetails(carId).subscribe((response) => {
      this.CarDto = response.data;
      this.dataLoaded = true;
    })
  }
  addToCart(car: Car) {
    this.toastrService.success("Sepete eklendi.",car.description)
    this.cartService.addToCart(car);
  }
}