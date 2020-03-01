import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTestimonialSlideComponent } from './home-testimonial-slide.component';

describe('HomeTestimonialSlideComponent', () => {
  let component: HomeTestimonialSlideComponent;
  let fixture: ComponentFixture<HomeTestimonialSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTestimonialSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTestimonialSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
