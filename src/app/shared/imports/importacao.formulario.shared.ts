import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatOptgroup, MatOption } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';

export const ImportacaoFormulario = [
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatOptgroup,
    MatOption,
    MatMenuModule
];
