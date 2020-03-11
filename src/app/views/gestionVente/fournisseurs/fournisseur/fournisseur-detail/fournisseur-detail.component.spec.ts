import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurDetailComponent } from './fournisseur-detail.component';

describe('FournisseurDetailComponent', () => {
  let component: FournisseurDetailComponent;
  let fixture: ComponentFixture<FournisseurDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournisseurDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
