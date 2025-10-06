import { Component, Input } from '@angular/core';
import { Interfaces } from '../../data/interfaces.export';

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss'
})
export class ExperienceCard {
  @Input() exp!: Interfaces.ExperienceData
  // image = series[RandomIndex()];
}
