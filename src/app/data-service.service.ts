import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor() { }
  getemployees() {
    return [
      {
        firstName: 'sathish',
        lastName: 'reddy m',
        email:'sathish@gmail.com'
      },
      {
        firstName: 'sai kiran',
        lastName: 'martin reddy',
        email:'saikiranreddy@gmail.com'
      },
      {
        firstName: 'jeevitha ',
        lastName: 'reddy marri',
        email:'jeevithareddy@gmail.com'
      },
      {
        firstName: 'Madhu sudhan ',
        lastName: 'Reddy marri',
        email:'madhureddy@gmail.com'
      },
    ]}
}
