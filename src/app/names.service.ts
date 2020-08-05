import { Injectable } from "@angular/core";

import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals
} from "unique-names-generator";

const customConfig: Config = {
  dictionaries: [adjectives, colors],
  separator: " ",
  length: 2
};

@Injectable({
  providedIn: "root"
})
export class NamesService {
  getNames(take: number): string[] {
    return Array(take)
      .fill("")
      .map(e => uniqueNamesGenerator(customConfig));
  }
}
