import { Routes } from '@angular/router';
import {StartMainComponent} from "./pages/start-main/start-main.component";
import {TrainStationComponent} from "./pages/train-station/train-station.component";
import {StatisticsComponent} from "./pages/statistics/statistics.component";

export const routes: Routes = [
  { path: '', component: StartMainComponent },
  { path: 'train-station', component: TrainStationComponent },
  { path: 'statistics', component: StatisticsComponent }
];
