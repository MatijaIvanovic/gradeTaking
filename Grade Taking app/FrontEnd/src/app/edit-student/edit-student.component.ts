import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { StudentService } from '../service/student.service';
import { Student } from '../model/student.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
student= new Student;
id:any;
data:any;
  constructor(private studentService:StudentService, private  route: ActivatedRoute,private router:Router) { }

  form= new FormGroup({
    name: new FormControl(''),
    studentID: new FormControl(''),
    grade: new FormControl('')
  });
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.getData();
  }
  getData(){
    this.studentService.getDataById(this.id).subscribe(res=>{
      this.data=res;
      this.student =this.data;
      this.form = new FormGroup({
      name: new FormControl(this.student.name),
      studentID: new FormControl(this.student.studentID),
      grade: new FormControl(this.student.grade)
      })
    })
  }
  updateData(){
    this.studentService.updateData(this.id, this.form.value).subscribe(res=>{
      this.data=res;
      Swal.fire('All done!', 'Information about student '+this.form.value.name+' have been updated succesfully!', 'success');
      this.router.navigateByUrl('/');
    })
  }

}
