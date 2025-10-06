import { Component } from '@angular/core';
import { CertificateCard } from "../certificate-card/certificate-card";
import { Header } from "../header/header";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-blogs',
  imports: [CertificateCard, Header, TranslatePipe],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss'
})
export class Blogs {

}
