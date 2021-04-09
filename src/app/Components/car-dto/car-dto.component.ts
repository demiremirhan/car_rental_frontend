import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CardtoService } from 'src/app/services/cardto.service';

@Component({
  selector: 'app-car-dto',
  templateUrl: './car-dto.component.html',
  styleUrls: ['./car-dto.component.css']
})
export class CarDtoComponent implements OnInit {
carDtos : CarDto[] = [];
dataLoaded=false;
  constructor(private carDtoService: CardtoService,
              private activatedRoute : ActivatedRoute
             ) { }

  ngOnInit(): void {
          
    }
}