import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDfrComponent } from './test-dfr.component';

describe('TestDfrComponent', () => {
  let component: TestDfrComponent;
  let fixture: ComponentFixture<TestDfrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDfrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
