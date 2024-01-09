import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importing components
import { ReservationTicketComponent } from './reservation-ticket/reservation-ticket.component';
import { ReservationBarcodeComponent } from './reservation-barcode/reservation-barcode.component';
import { ReservationSeatComponent } from './reservation-seat/reservation-seat.component';
import { ReservationSearchComponent } from './reservation-search/reservation-search.component';
import { ReservationErrorComponent } from './reservation-error/reservation-error.component';
import { ReservationAnimationComponent } from './reservation-animation/reservation-animation.component';
import { ReservationPopupComponent } from './reservation-popup/reservation-popup.component';

const routes: Routes = [
  { path: '', component: ReservationSearchComponent },
  { path: 'ticket-map', component: ReservationSeatComponent },
  { path: 'ticket-check', component: ReservationTicketComponent },
  { path: '**', component: ReservationErrorComponent },
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
  ReservationErrorComponent,
  ReservationAnimationComponent,
  ReservationPopupComponent,
];
