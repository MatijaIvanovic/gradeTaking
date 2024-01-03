import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students:any;
  data:any;
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.getStudentData();
  }

  getStudentData(){
    this.studentService.getData().subscribe(res =>{
      console.log(res);
      this.students = res;
    });
  }
  deleteData(id:any){

      this.studentService.deleteData(id).subscribe(res=>{
      this.data=res;
      Swal.fire('DELETED!', JSON.stringify(this.data.message), 'error');
      this.getStudentData();
    });
  }
}
