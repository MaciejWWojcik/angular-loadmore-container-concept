import { Component, VERSION, OnInit } from "@angular/core";
import { NamesService } from "./names.service";
import { ChunkedData } from "./chunked-data";


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  names: ChunkedData<string> = new ChunkedData<string>();

  constructor(private namesService: NamesService) {}

  ngOnInit() {
    const data = this.namesService.getNames(5);
    this.names.set(data);
  }

  loadMore() {
    const data = this.namesService.getNames(10);
    this.names.push(data);
  }
}
