import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarDespesaComponent } from './deletar-despesa.component';

describe('DeletarDespesaComponent', () => {
  let component: DeletarDespesaComponent;
  let fixture: ComponentFixture<DeletarDespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletarDespesaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
