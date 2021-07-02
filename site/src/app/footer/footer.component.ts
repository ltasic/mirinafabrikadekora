import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'
import { TranslateConfigService } from '../services/translate-config.service'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  constructor(private translateConfigService: TranslateConfigService) {
  }

  ngOnInit(): void {
  }

}
