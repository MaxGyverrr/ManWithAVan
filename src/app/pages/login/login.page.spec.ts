import { ComponentFixture, TestBed ,waitForAsync} from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(LoginPage);
    imports: [
      IonicModule.forRoot(),
      AppRoutingModule
    ]
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  router = TestBed.get(Router);

  it('should go to home page on login', () => {
    spyOn(router, 'navigate');
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['home']); //call the home page
  })

  it('should go to register page on register', () => {
    spyOn(router, 'navigate');
    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['register']); //call the register page
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
