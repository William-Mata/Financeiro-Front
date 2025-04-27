import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstornarDespesaComponent } from './estornar-despesa.component';

describe('EstornarDespesaComponent', () => {
  let component: EstornarDespesaComponent;
  let fixture: ComponentFixture<EstornarDespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstornarDespesaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstornarDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
