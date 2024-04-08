import { Component } from '@angular/core';
import { UserLogin } from './models/UserLogin';
import { UserRegister } from './models/UserRegister';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FitnessFE';
  userReg = new UserRegister();
  userLog = new UserLogin();

  constructor(private authService: AuthService){}

  register(user: UserRegister){
    this.authService.register(user).subscribe();
  }

  login(user: UserLogin){
    this.authService.login(user).subscribe();
  }
}
