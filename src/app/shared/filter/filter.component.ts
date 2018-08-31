import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pm-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnChanges, AfterViewInit {

  private listFilter: string;
  @ViewChild("filterElement") filterElementRef: ElementRef;
  @Input() displayDetail: boolean;
  @Input() hitCount: number;
  hitMessage: string;

  private _msgToChild: string;
  public get msgToChild(): string {
    return this._msgToChild;
  }
  @Input()
  public set msgToChild(value: string) {
    this._msgToChild = value;
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.filterElementRef) {
      this.filterElementRef.nativeElement.focus();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
    if (changes['hitCount'] && !changes['hitCount'].currentValue) {
      this.hitMessage = "No matches found";
    } else {
      this.hitMessage = "Hits =" + this.hitCount;
    }
  }

}
