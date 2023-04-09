import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, NgxChartsModule],
})
export class Tab1Page {

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#00d687']

  };

  data = [
    {
      name: 'green',
      series: [
        {
          name: 'Mon',
          value: 8000,
        },
        {
          name: 'Tue',
          value: 10000,
        },
        {
          name: 'Wed',
          value: 3000,
        },
        {
          name: 'Thu',
          value: 7000,
        },
        {
          name: 'Fri',
          value: 5000,
        },
        {
          name: 'Sat',
          value: 40000,
        },
        {
          name: 'Sun',
          value: 30000,
        },
      ],
    },
  ];
}
