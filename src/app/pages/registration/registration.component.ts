import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router service

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationObj: any = {
    "name": "",
    "email": "",
    "phone":"",
    "city": "",
    "linkedInProfile": ""
  };

  constructor(private http: HttpClient, private router: Router) { } // Inject Router service

  onRegister() {
    if (this.registrationObj.name === '') {
      alert('Full Name is required');
      return;
    }

    if (this.registrationObj.email === '' || !this.validateEmail(this.registrationObj.email)) {
      alert('A valid email is required');
      return;
    }

    if (this.registrationObj.phone === '' || !this.validatePhone(this.registrationObj.phone)) {
      alert('A valid phone number is required');
      return;
    }

    if (this.registrationObj.linkedInProfile === '' || !this.validateURL(this.registrationObj.linkedInProfile)) {
      alert('A valid LinkedIn URL is required');
      return;
    }

    this.http.post("https://localhost:7051/api/Admission", this.registrationObj).subscribe((res: any) => {
      console.log(res);
      if (res.id) {
        
        this.router.navigate(['/success']); // Navigate to the success page
      } else {
        alert("Registration Failed");
      }
      
    });
  }

  validateEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  }

  validatePhone(phone: string): boolean {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  }

  validateURL(url: string): boolean {
    const re = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    return re.test(url);
  }
}
