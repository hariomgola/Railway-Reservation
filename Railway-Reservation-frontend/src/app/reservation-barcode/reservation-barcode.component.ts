// Component completed
import { Component } from '@angular/core';

@Component({
  selector: 'reservation-barcode',
  template: `<ng-container>
    <img class="qrCode" src="../../assets/qr-code.png" alt="QR code" />
  </ng-container>`,
  styles: [
    `
      .qrCode {
        height: 100px;
        width: 100px;
      }
    `,
  ],
})
export class ReservationBarcodeComponent {}
