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
        width: 11vw;
      }

      .engine {
        float: right;
        position: relative;
      }

      .window {
        height: 2.8vw;
        width: 3vw;
        background-color: #194488;
        position: relative;
        border: 0.3vw solid #000;
      }

      .window:before,
      .window:after {
        content: '';
        position: absolute;
        left: 50%;
        border: 0.3vw solid #000;
      }

      .window:before {
        height: 0.7vw;
        background-color: #f82510;
        width: 4.5vw;
        margin-top: -1.3vw;
        margin-left: -2.6vw;
        border-radius: 0.8vw;
      }

      .window:after {
        margin-left: -0.8vw;
        margin-top: 0.3vw;
        border-radius: 50%;
        height: 1.1vw;
        width: 1.1vw;
        background-color: #fff;
      }

      .engine-main {
        height: 1vw;
        width: 3.5vw;
        border: 0.3vw solid #000;
        background-color: #3d9a01;
        position: absolute;
        border-radius: 0 0.8vw 0.8vw 0;
        right: -4.1vw;
        bottom: -0.3vw;
      }

      .engine-main:before {
        content: '';
        height: 1vw;
        width: 0.8vw;
        background-color: #000;
        position: absolute;
        top: -1.1vw;
        left: 0.4vw;
        transform: rotate(180deg);
        border-radius: 50% 50% 50% 50% / 90% 90% 40% 40%;
      }

      .engine-main:after {
        content: '';
        height: 1.2vw;
        width: 0.8vw;
        position: absolute;
        display: block;
        right: 0.5vw;
        top: -1.8vw;
        border-radius: 50% 50% 50% 50% / 90% 90% 40% 40%;
        transform: rotate(180deg);
        z-index: -1;
        background-color: #194488;
        border: 0.3vw solid #000;
      }

      .engine-body {
        height: 1.7vw;
        width: 7.5vw;
        position: absolute;
        left: -0.2vw;
        top: 3vw;
        background-color: #f69f00;
        border: 0.3vw solid #000;
        border-radius: 0.5vw;
      }

      .engine-body .big-wheel {
        top: 0.3vw;
        left: 0.2vw;
      }

      .engine-body .normal-wheel {
        left: 4.5vw;
        top: 0.5vw;
      }

      .engine-body:before {
        content: '';
        position: absolute;
        height: 0.5vw;
        width: 0.5vw;
        left: -1.1vw;
        bottom: 0.2vw;
        z-index: -1;
        background-color: #fff;
        border-radius: 50%;
        border: 0.3vw solid #000;
      }

      .wheels > div {
        position: absolute;
        background-color: #f82510;
        border-radius: 50%;
        border: 0.3vw solid #000;
        animation: wheel-rotate 1s linear infinite;
      }

      .wheels > div:before {
        content: '';
        position: absolute;
        width: 100%;
        border-bottom: 0.1vw solid #000;
        top: 50%;
        margin-top: -0.1vw;
      }

      .wheels > div:after {
        content: '';
        height: 0.8vw;
        width: 0.8vw;
        position: absolute;
        background-color: #000;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        margin-left: -0.4vw;
        margin-top: -0.4vw;
      }

      .wheels .big-wheel {
        width: 2.2vw;
        height: 2.2vw;
        animation-delay: -0.3s;
      }

      .wheels .normal-wheel {
        height: 2vw;
        width: 2vw;
        animation-delay: -0.6s;
      }

      .locomotive {
        height: 3.5vw;
        width: 6vw;
        border: 0.3vw solid #000;
        background-color: #f69f00;
        border-radius: 0.5vw;
        position: relative;
        float: left;
        margin-top: 1.3vw;
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
        height: 0.3vw;
        position: absolute;
        top: 0.6vw;
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
        height: 0.3vw;
        position: absolute;
        top: 1.4vw;
        left: 0;
      }

      .locomotive .wheels > div {
        top: 2.2vw;
        animation-delay: -0.6s;
      }

      .locomotive .wheels > div:first-child {
        animation-delay: -0.9s;
      }

      .locomotive .normal-wheel:first-of-type {
        left: 0.2vw;
      }

      .locomotive .normal-wheel:last-of-type {
        right: 0.2vw;
      }

      .locomotive .trash {
        height: 3.5vw;
        width: 5vw;
        position: absolute;
        top: -1.8vw;
        border: 0.3vw solid #000;
        background-color: #3d9a01;
        border-radius: 50%;
        left: 0.2vw;
        z-index: -1;
      }

      .tracks {
        position: relative;
        width: 20vw;
        bottom: -1vw;
        overflow: hidden;
        height: 0.3vw;
      }

      .tracks span {
        display: inline;
        height: 0.3vw;
        width: 20vw;
        position: absolute;
        left: 20vw;
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
        height: 0.8vw;
        width: 0.8vw;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        right: 0.8vw;
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
          left: -20vw;
        }
      }
    `,
  ],
})
export class ReservationAnimationComponent {}
