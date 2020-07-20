import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatInputModule],
  exports: [MatButtonModule, MatInputModule],
})
export class MaterialModule {}
