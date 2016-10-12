import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";

@NgModule({
  imports: [],
  exports: [HeaderComponent, FooterComponent],
  declarations: [HeaderComponent, FooterComponent],
  providers:[]
})
export class LayoutModule { }
