import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'pm-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, AfterViewInit {
  private listFilter: string;
  @ViewChild("filterElement") filterElementRef: ElementRef;
  @Input() displayDetail: boolean;
  @Input() hitCount: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.filterElementRef) {
      this.filterElementRef.nativeElement.focus();
    }
  }

}
