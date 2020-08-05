import { Component, VERSION, OnInit } from "@angular/core";
import { NamesService } from "./names.service";

class ChunkedData<T> {
  private data: T[][] = [];

  get chunks(): T[][] {
    return this.data;
  }

  // calc amount of chunks
  get length(): number {
    return this.data.length;
  }

  // calc amount of all items in all chunks
  get totalLength(): number {
    return this.data.reduce((acc, curr) => acc + curr.length, 0);
  }

  set(chunk: T[]) {
    this.data = [chunk];
  }

  push(chunk: T[]) {
    this.data.push(chunk);
  }
}

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
