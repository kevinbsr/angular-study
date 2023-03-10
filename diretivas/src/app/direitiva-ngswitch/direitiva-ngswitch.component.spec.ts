import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireitivaNgswitchComponent } from './direitiva-ngswitch.component';

describe('DireitivaNgswitchComponent', () => {
  let component: DireitivaNgswitchComponent;
  let fixture: ComponentFixture<DireitivaNgswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireitivaNgswitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DireitivaNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
