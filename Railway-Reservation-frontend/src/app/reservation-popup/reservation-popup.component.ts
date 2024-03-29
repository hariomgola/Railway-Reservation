import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'reservation-popup',
  template: `<div class="component-body">
    <div [ngClass]="{ 'model-main': true, 'model-open': isModelOpen }">
      <div class="model-inner">
        <div class="close-btn" (click)="onModelClose()">×</div>
        <div class="model-wrap">
          <div class="pop-up" [innerHtml]="textMsg"></div>
        </div>
      </div>
      <div class="bg-overlay"></div>
    </div>
  </div> `,
  styles: [
    `
      .component-body {
        font: normal 14px/100% 'Andale Mono', AndaleMono, monospace;
        width: 300px;
        margin: 0 auto;
        display: flex;
        align-items: center;
      }

      .Click-here {
        cursor: pointer;
        background-image: linear-gradient(190deg, #f83600 0%, #fee140 100%);
        color: #fff;
        width: 180px;
        text-align: center;
        font-size: 16px;
        padding: 18px 0;
        margin: 0 auto;
        transition: background-image 3s ease-in-out;
      }

      .Click-here:hover {
        transition: background-image 3s ease-in-out;
        background-image: linear-gradient(90deg, #fee140 0%, #f83600 100%);
      }

      .model-main {
        text-align: center;
        overflow: hidden;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        /* z-index: 1050; */
        -webkit-overflow-scrolling: touch;
        outline: 0;
        opacity: 0;
        -webkit-transition: opacity 0.15s linear, z-index 0.15;
        -o-transition: opacity 0.15s linear, z-index 0.15;
        transition: opacity 0.15s linear, z-index 0.15;
        z-index: -1;
        overflow-x: hidden;
        overflow-y: auto;
      }

      .model-open {
        z-index: 99999;
        opacity: 1;
        overflow: hidden;
      }

      .model-inner {
        -webkit-transform: translate(0, -25%);
        -ms-transform: translate(0, -25%);
        transform: translate(0, -25%);
        -webkit-transition: -webkit-transform 0.3s ease-out;
        -o-transition: -o-transform 0.3s ease-out;
        transition: -webkit-transform 0.3s ease-out;
        -o-transition: transform 0.3s ease-out;
        transition: transform 0.3s ease-out;
        transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
        display: inline-block;
        vertical-align: middle;
        width: 600px;
        margin: 30px auto;
        max-width: 97%;
      }

      .model-wrap {
        display: block;
        width: 100%;
        position: relative;
        background-color: #fff;
        border: 1px solid #999;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 6px;
        -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
        box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
        background-clip: padding-box;
        outline: 0;
        text-align: left;
        padding: 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        max-height: calc(100vh - 70px);
        overflow-y: auto;
      }

      .model-open .model-inner {
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        transform: translate(0, 0);
        position: relative;
        z-index: 999;
      }

      .model-open .bg-overlay {
        background: rgba(0, 0, 0, 0.6);
        z-index: 99;
      }

      .bg-overlay {
        background: rgba(0, 0, 0, 0);
        height: 100vh;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        -webkit-transition: background 0.15s linear;
        -o-transition: background 0.15s linear;
        transition: background 0.15s linear;
      }

      .close-btn {
        position: absolute;
        right: 0;
        top: -30px;
        cursor: pointer;
        z-index: 99;
        font-size: 30px;
        color: #fff;
      }

      @media screen and (min-width: 800px) {
        .model-main:before {
          content: '';
          display: inline-block;
          height: auto;
          vertical-align: middle;
          margin-right: -0px;
          height: 100%;
        }
      }

      @media screen and (max-width: 799px) {
        .model-inner {
          margin-top: 45px;
        }
      }
    `,
  ],
})
export class ReservationPopupComponent implements OnInit {
  @Input() isModelOpen = false;
  @Input() textMsg = '';
  @Output() modelController = new EventEmitter<boolean>();
  constructor() {}
  ngOnInit() {}
  onModelOpen() {
    this.modelController.emit(true);
  }
  onModelClose() {
    this.modelController.emit(false);
  }
}
