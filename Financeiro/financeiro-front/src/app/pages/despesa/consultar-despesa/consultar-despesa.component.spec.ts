import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDespesaComponent } from './consultar-despesa.component';

describe('TabelaDespesaComponent', () => {
  let component: TabelaDespesaComponent;
  let fixture: ComponentFixture<TabelaDespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaDespesaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
