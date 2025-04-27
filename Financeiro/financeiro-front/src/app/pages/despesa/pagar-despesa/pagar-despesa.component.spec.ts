import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarDespesaComponent } from './pagar-despesa.component';

describe('PagarDespesaComponent', () => {
  let component: PagarDespesaComponent;
  let fixture: ComponentFixture<PagarDespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagarDespesaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagarDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
