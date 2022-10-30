import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisProyectsComponent } from './mis-proyects.component';

describe('MisProyectsComponent', () => {
  let component: MisProyectsComponent;
  let fixture: ComponentFixture<MisProyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisProyectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
