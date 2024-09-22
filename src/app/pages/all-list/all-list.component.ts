import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router service

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.css']
})
export class AllListComponent implements OnInit {

  list: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getAllRegistration();
  }

  getAllRegistration() {
    this.http.get("https://localhost:7051/api/Admission").subscribe((res: any) => {
      console.log(res);
      this.list = res;
    });
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.http.delete(`https://localhost:7051/api/Admission/${id}`).subscribe(() => {
        this.list = this.list.filter(student => student.id !== id); // Update the list after deletion
      }, error => {
        console.error('Delete failed', error);
        alert('Error deleting student');
      });
    }
  }

  editStudent(id: number) {
    
    this.router.navigate(['/edit', id]);
  }
}
