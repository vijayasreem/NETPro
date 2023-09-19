import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      cvvCode: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      ePayment: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  saveCustomerData(): void {
    if (this.customerForm.valid) {
      // Implement API call to securely store customer data
    }
  }
}