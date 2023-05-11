import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(LoaderPage);
    imports: [
      IonicModule.forRoot(),
      AppRoutingModule
    ]
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  router = TestBed.get(Router);

  it('should go to loginpage after load', fakeAsync(() =>{
    spyOn(router, 'navigate');
    component.ngOnInit();
    tick(1500);
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  }))

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
