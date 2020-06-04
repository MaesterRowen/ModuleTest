import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCorComponent } from './test-cor.component';

describe('TestCorComponent', () => {
  let component: TestCorComponent;
  let fixture: ComponentFixture<TestCorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
