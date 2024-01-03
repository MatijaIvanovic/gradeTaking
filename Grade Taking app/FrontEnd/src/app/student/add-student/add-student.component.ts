import { Component, OnInit } from '@angular/core';

import { StudentService } from 'src/app/service/student.service';
import Swal from 'sweetalert2'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent implements OnInit {
  form:FormGroup;
  submitted=false;
  data: any;
  constructor(private studentService: StudentService, private formBuilder: FormBuilder,private router:Router) { }



  createForm(){
   this.form=this.formBuilder.group({
     name: ['', Validators.required],
     studentID: ['', Validators.required],
     grade: ['', Validators.required],
   });
  }


  ngOnInit(): void {
    this.createForm();
  }

  get f(){
    return this.form.controls;
  }

  insertData(){
    this.submitted=true;
    if(this.form.invalid){
      return;
    }
    this.studentService.insertData(this.form.value).subscribe(res=>{
      this.data=res;
      Swal.fire('All done!','Student added Succesfully!', 'success');

      this.router.navigateByUrl('/');
    });
  }


}
