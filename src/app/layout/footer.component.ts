import { Component } from "@angular/core";

@Component({
  selector: 'rcg-footer',
  template:`
    <footer class="col-sm-12 ">
      <div class="col-sm-12 col-md-4 ">
        <h3>Roaring Cat Games</h3>
        <a href="/#games" class='col-sm-12  spalink'>Games</a>
        <a href="/#team" class='col-sm-12  spalink'>The Team</a>
        <a href="/#community" class='col-sm-12  spalink'>Community</a>
        <a href="/#friends" class='col-sm-12  spalink'>Friends</a>
      </div>			
      <div class="col-sm-12 col-md-4 ">
        <h3>Community</h3>
        <a class="col-sm-12 " target="_blank" href="http://gamedevlou.org">GameDevLou</a>
        <a class="col-sm-12 " target="_blank" href="http://runjumpdev.org">Run Jump Dev</a>
        <a class="col-sm-12 " target="_blank" href="http://lvl1.org">LVL1 Hackerspace</a>			
      </div>			
      <div class="col-sm-12 col-md-4 ">
        <h3>Friends</h3>
        <a class="col-sm-12 " target="_blank" href="http://twoscoopgames.com">Two Scoop Games</a>
        <a class="col-sm-12 " target="_blank" href="http://mintchipleaf.com">Mint</a>
        <a class="col-sm-12 " target="_blank" href="http://supersoul.co/">Super Soul</a>			
        <a class="col-sm-12 " target="_blank" href="http://www.mommysbestgames.com/">Mommy's Best Games</a>
      </div>			
    </footer>
  `
})
export class FooterComponent { }