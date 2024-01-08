import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importing components
import { ReservationTicketComponent } from './reservation-ticket/reservation-ticket.component';
import { ReservationBarcodeComponent } from './reservation-barcode/reservation-barcode.component';
import { ReservationSeatComponent } from './reservation-seat/reservation-seat.component';
import { ReservationSearchComponent } from './reservation-search/reservation-search.component';

const routes: Routes = [
  { path: 'ticket-check', component: ReservationTicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const ApplicationRoutingModule = [
  ReservationSeatComponent,
  ReservationSearchComponent,
  ReservationTicketComponent,
  ReservationBarcodeComponent,
];
