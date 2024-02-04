import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';



@NgModule({
  declarations: [
    AddCharacterComponent,
    ListComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
