// Component completed
import { Component } from '@angular/core';

@Component({
  selector: 'reservation-animation',
  template: `<div class="component-body">
    <div class="toy-train">
      <div class="engine">
        <div class="window">
          <div class="engine-main">
            <div class="smokes">
              <span></span>
            </div>
          </div>
        </div>
        <div class="engine-body">
          <div class="wheels">
            <div class="big-wheel"></div>
            <div class="normal-wheel"></div>
          </div>
        </div>
      </div>
      <div class="locomotive">
        <div class="trash"></div>
        <div class="wheels">
          <div class="normal-wheel"></div>
          <div class="normal-wheel"></div>
        </div>
      </div>
      <div class="tracks">
        <span></span>
        <span></span>
      </div>
    </div>
  </div> `,
  styles: [
    `
      .component-body {
        padding: 20px 30px;
      }

      .toy-train {
        position: relative;
        width: 160px;
      }

      .engine {
        float: right;
        position: relative;
      }

      .window {
        height: 38px;
        width: 40px;
        background-color: #194488;
        position: relative;
        border: 4px solid #000;
      }

      .window:before,
      .window:after {
        content: '';
        position: absolute;
        left: 50%;
        border: 4px solid #000;
      }

      .window:before {
        height: 10px;
        background-color: #f82510;
        width: 60px;
        margin-top: -18px;
        margin-left: -33px;
        border-radius: 10px;
      }

      .window:after {
        margin-left: -10px;
        margin-top: 4px;
        border-radius: 50%;
        height: 15px;
        width: 15px;
        background-color: #fff;
      }

      .engine-main {
        height: 13px;
        width: 50px;
        border: 4px solid #000;
        background-color: #3d9a01;
        position: absolute;
        border-radius: 0 10px 10px 0;
        right: -60px;
        bottom: -4px;
      }

      .engine-main:before {
        content: '';
        height: 13px;
        width: 10px;
        background-color: #000;
        position: absolute;
        top: -15px;
        left: 5px;
        transform: rotate(180deg);
        border-radius: 50% 50% 50% 50% / 90% 90% 40% 40%;
      }

      .engine-main:after {
        content: '';
        height: 2.5pxw;
        width: 10px;
        position: absolute;
        display: block;
        right: 7px;
        top: -2.2px;
        border-radius: 50% 50% 50% 50% / 90% 90% 40% 40%;
        transform: rotate(180deg);
        z-index: -1;
        background-color: #194488;
        border: 4px solid #000;
      }

      .engine-body {
        height: 25px;
        width: 110px;
        position: absolute;
        left: -2px;
        top: 45px;
        background-color: #f69f00;
        border: 4px solid #000;
        border-radius: 7px;
      }

      .engine-body .big-wheel {
        top: 4px;
        left: 2px;
      }

      .engine-body .normal-wheel {
        left: 60px;
        top: 7px;
      }

      .engine-body:before {
        content: '';
        position: absolute;
        height: 7px;
        width: 7px;
        left: -2px;
        bottom: 2px;
        z-index: -1;
        background-color: #fff;
        border-radius: 50%;
        border: 4px solid #000;
      }

      .wheels > div {
        position: absolute;
        background-color: #f82510;
        border-radius: 50%;
        border: 4px solid #000;
        animation: wheel-rotate 1s linear infinite;
      }

      .wheels > div:before {
        content: '';
        position: absolute;
        width: 100%;
        border-bottom: 1.2px solid #000;
        top: 50%;
        margin-top: -1.2px;
      }

      .wheels > div:after {
        content: '';
        height: 10px;
        width: 10px;
        position: absolute;
        background-color: #000;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        margin-left: -5.9px;
        margin-top: -5.9px;
      }

      .wheels .big-wheel {
        width: 35px;
        height: 35px;
        animation-delay: -0.3s;
      }

      .wheels .normal-wheel {
        height: 30px;
        width: 30px;
        animation-delay: -0.6s;
      }

      .locomotive {
        height: 50px;
        width: 90px;
        border: 4px solid #000;
        background-color: #f69f00;
        border-radius: 7px;
        position: relative;
        float: left;
        margin-top: 19px;
      }

      .locomotive:before {
        content: '';
        width: 100%;
        background: linear-gradient(
          to right,
          #000000 0%,
          #000000 8%,
          #f69f00 8%,
          #f69f00 15%,
          #000000 15%,
          #000000 28%,
          #000000 34%,
          #f69f00 34%,
          #f69f00 65%,
          #000000 65%,
          #000000 65%,
          #000000 100%
        );
        height: 4px;
        position: absolute;
        top: 10px;
        left: 0;
      }

      .locomotive:after {
        content: '';
        width: 100%;
        background: linear-gradient(
          to right,
          #000000 0%,
          #000000 24%,
          #f69f00 24%,
          #f69f00 65%,
          #f69f00 65%,
          #000000 65%,
          #000000 85%,
          #f69f00 85%,
          #f69f00 90%,
          #000000 90%,
          #000000 100%
        );
        height: 4px;
        position: absolute;
        top: 20px;
        left: 0;
      }

      .locomotive .wheels > div {
        top: 35px;
        animation-delay: -0.6s;
      }

      .locomotive .wheels > div:first-child {
        animation-delay: -0.9s;
      }

      .locomotive .normal-wheel:first-of-type {
        left: 2px;
      }

      .locomotive .normal-wheel:last-of-type {
        right: 2px;
      }

      .locomotive .trash {
        height: 50px;
        width: 9px;
        position: absolute;
        top: -20px;
        border: 4px solid #000;
        background-color: #3d9a01;
        border-radius: 50%;
        left: 2px;
        z-index: -1;
      }

      .tracks {
        position: relative;
        width: 300px;
        bottom: -15px;
        overflow: hidden;
        height: 4px;
      }

      .tracks span {
        display: inline;
        height: 4px;
        width: 300px;
        position: absolute;
        left: 300px;
        background: linear-gradient(
          to right,
          black 0%,
          black 30%,
          transparent 30%,
          transparent 39%,
          black 39%,
          black 61%,
          black 65%,
          transparent 65%,
          transparent 70%,
          black 71%,
          black 100%
        );
        animation: track 2s linear infinite;
        animation-fill-mode: forwards;
      }

      .tracks span:nth-child(2) {
        animation-delay: -1s;
      }

      .smokes:before,
      .smokes:after,
      .smokes span:before {
        display: block;
        content: '';
        height: 10px;
        width: 10px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        right: 10px;
        top: 1.5vw;
        z-index: -1;
      }

      .smokes:before {
        animation: smoke 1s linear infinite;
      }

      .smokes span:before {
        animation: smoke 1s linear infinite;
        animation-delay: -0.6s;
      }

      .smokes:after {
        animation: smoke 1s linear infinite;
        animation-delay: -0.3s;
      }

      @keyframes smoke {
        100% {
          top: -5vw;
          opacity: 0.5;
        }
      }

      @keyframes wheel-rotate {
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes track {
        100% {
          left: -300px;
        }
      }
    `,
  ],
})
export class ReservationAnimationComponent {}
