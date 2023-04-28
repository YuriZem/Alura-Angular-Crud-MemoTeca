import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPesansamentoComponent } from './criar-pesansamento.component';

describe('CriarPesansamentoComponent', () => {
  let component: CriarPesansamentoComponent;
  let fixture: ComponentFixture<CriarPesansamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPesansamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPesansamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
