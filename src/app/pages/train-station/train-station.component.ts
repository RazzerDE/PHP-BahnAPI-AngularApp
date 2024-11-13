import { Component } from '@angular/core';

@Component({
  selector: 'app-train-station',
  standalone: true,
  imports: [],
  templateUrl: './train-station.component.html',
  styleUrl: './train-station.component.css'
})
export class TrainStationComponent {
  public currentTrainStation: string = "Mageburg Hbf";

}
