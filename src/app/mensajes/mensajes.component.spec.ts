import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MensajesComponent } from './mensajes.component';

describe('MensajesComponent', () => {
  let component: MensajesComponent;
  let fixture: ComponentFixture<MensajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
