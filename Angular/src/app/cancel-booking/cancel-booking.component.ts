import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'path/to/api.service';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {
  bookingForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      cancelDate: ['', Validators.required]
    }, { validator: this.dateValidator });
  }

  dateValidator(group: FormGroup) {
    const checkInDate = group.get('checkInDate').value;
    const cancelDate = group.get('cancelDate').value;

    if (checkInDate && cancelDate) {
      const diffInDays = Math.floor((Date.parse(checkInDate) - Date.parse(cancelDate)) / (1000 * 60 * 60 * 24));
      if (diffInDays < 1) {
        group.get('cancelDate').setErrors({ minimumDuration: true });
      }
    }
  }

  cancelBooking() {
    if (this.bookingForm.valid) {
      // Call API to cancel booking using this.bookingForm.value
      this.apiService.cancelBooking(this.bookingForm.value).subscribe(
        (response) => {
          // Handle success response
        },
        (error) => {
          // Handle error response
        }
      );
    }
  }
}