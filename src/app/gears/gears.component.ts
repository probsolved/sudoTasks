import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gears',
  templateUrl: './gears.component.html',
  styleUrls: ['./gears.component.css']
})
export class GearsComponent implements OnInit {

  public dropDownValue = "";
      SetDropDownValue(drpValue : any) {
        this.dropDownValue = drpValue.target.value;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
