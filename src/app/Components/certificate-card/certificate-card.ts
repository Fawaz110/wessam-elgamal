import { Component } from '@angular/core';
import { RandomIndex, series } from '../../data/data';

@Component({
  selector: 'app-certificate-card',
  imports: [],
  templateUrl: './certificate-card.html',
  styleUrl: './certificate-card.scss'
})
export class CertificateCard {
  image = series[RandomIndex()];
}
