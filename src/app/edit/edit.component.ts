import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  student: any = {
    name: '',
    email: '',
    phone: '',
    city: '',
    linkedInProfile: ''
  };
  studentId!: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['id'];
    this.http.get(`https://localhost:7051/api/Admission/${this.studentId}`).subscribe(
      (res: any) => {
        this.student = res;
        console.log('Student data:', this.student);
      },
      error => {
        console.error('Error fetching student data', error);
        alert('Error loading student details');
      }
    );
  }

  onUpdate() {
    this.http.put(`https://localhost:7051/api/Admission/${this.studentId}`, this.student).subscribe(() => {
      this.router.navigate(['/list']); // Navigate back to the list after updating
    }, error => {
      console.error('Update failed', error);
      alert('Error updating student');
    });
  }
}
