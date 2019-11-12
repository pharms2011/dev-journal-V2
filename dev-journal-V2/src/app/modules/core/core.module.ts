import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LeftNavComponent, WelcomeComponent],
  exports: [
    HeaderComponent,
    MatSidenavModule,
    LeftNavComponent,
    FooterComponent
  ],
    imports: [
      MatSidenavModule,
      MatButtonModule,
      RouterModule,
      MatIconModule,
      MatMenuModule,
      MatToolbarModule,
      MatCardModule,
      MatListModule,
      MatFormFieldModule,
      MatTableModule,
      MatInputModule
    ]
  }
  )
export class CoreModule {}
