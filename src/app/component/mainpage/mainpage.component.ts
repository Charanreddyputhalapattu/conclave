import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  ngOnInit() { }

  days: number = 194;
  hours: number = 22;
  mins: number = 14;
  secs: number = 4;

  x = setInterval(() => {
    var futureDate = new Date("Aug 7, 2023 15:34:24").getTime();
    var today = new Date().getTime();
    var distance = futureDate - today;
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((distance % (1000 * 60)) / (1000));
  }, 1000)

}
