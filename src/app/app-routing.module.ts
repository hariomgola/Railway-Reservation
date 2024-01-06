import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importing components
import { ReservationTicketComponent } from './reservation-ticket/reservation-ticket.component';
import { ReservationBarcodeComponent } from './reservation-barcode/reservation-barcode.component';

const routes: Routes = [
  { path: 'ticket-check', component: ReservationTicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const ApplicationRoutingModule = [
  ReservationTicketComponent,
  ReservationBarcodeComponent,
];
