import { NgModule } from '@angular/core';
import { SideViewComponent } from './side-view/side-view';
import { TopbarComponent } from './topbar/topbar';
@NgModule({
	declarations: [SideViewComponent,
    TopbarComponent,
    ],
	imports: [],
	exports: [SideViewComponent,
    TopbarComponent,
    ]
})
export class ComponentsModule {}
