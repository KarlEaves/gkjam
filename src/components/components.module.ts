import { NgModule } from '@angular/core';
import { SideViewComponent } from './side-view/side-view';
import { TopbarComponent } from './topbar/topbar';
import { HeaderOverlayComponent } from './header-overlay/header-overlay';
import { AboutComponent } from './about/about';
import { FeaturesComponent } from './features/features';
import { ImageSectionComponent } from './image-section/image-section';
import { ContactUsComponent } from './contact-us/contact-us';
@NgModule({
	declarations: [SideViewComponent,
    TopbarComponent,
    HeaderOverlayComponent,
    AboutComponent,
    FeaturesComponent,
    ImageSectionComponent,
    ContactUsComponent,
    ],
	imports: [],
	exports: [SideViewComponent,
    TopbarComponent,
    HeaderOverlayComponent,
    AboutComponent,
    FeaturesComponent,
    ImageSectionComponent,
    ContactUsComponent,
    ]
})
export class ComponentsModule {}
