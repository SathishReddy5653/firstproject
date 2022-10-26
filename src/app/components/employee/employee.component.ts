import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  MaxLengthValidator,
  Validators,
} from '@angular/forms';
import { DataServiceService } from 'src/app/data-service.service';
import { Details } from 'src/app/models/details';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeArr: Details[] = [];
  
  employeeForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  submitted: boolean = false;
  isShowing: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataServiceService
  ) {}

  ngOnInit(): void {
    this.employeeArr = this.dataService.getemployees();
    this.employeeForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.employeeForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.employeeForm.value, null, 2));
    
  }


  onReset(): void {
    this.submitted = false;
    this.employeeForm.reset();
  }
}
