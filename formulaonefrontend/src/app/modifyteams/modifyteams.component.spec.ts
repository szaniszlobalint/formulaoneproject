import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyteamsComponent } from './modifyteams.component';

describe('ModifyteamsComponent', () => {
  let component: ModifyteamsComponent;
  let fixture: ComponentFixture<ModifyteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyteamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
