import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;
  private timer: any;
  private date= new Date();
  public show: boolean= true;
  public disabled: boolean = false;
  public animate: boolean = false;
  @ViewChild("idAudio") idAudio?: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  increment(type: "H" | "M" | "S"){
    if(type === "H"){
      if (this.hours >= 99) return;
      this.hours += 1;
    }
    else if(type === "M"){
      if(this.minutes >= 59) return;
      this.minutes += 1;
    }else{
      if(this.seconds >= 59) return;
      this.seconds += 1;
    }
  }

  decrement(type: "H" | "M" | "S"){
    if(type === "H"){
      if (this.hours <= 0) return;
      this.hours -= 1;
    }
    else if(type === "M"){
      if(this.minutes <= 0) return;
      this.minutes -= 1;
    }else{
      if(this.seconds <= 0) return;
      this.seconds -= 1;
    }
  }

}
