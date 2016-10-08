import { NgModule } from "@angular/core";

import { GameRoutingModule } from "./game.routing";

import { GameComponent } from "./game.component";

@NgModule({
  imports: [GameRoutingModule],
  exports: [],
  declarations: [GameComponent],
  providers: []
})
export class GameModule {}