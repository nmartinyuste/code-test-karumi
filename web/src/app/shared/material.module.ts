import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatInputModule, MatSnackBarModule],
  exports: [MatButtonModule, MatInputModule, MatSnackBarModule],
  providers: [{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 } }],
})
export class MaterialModule {}
