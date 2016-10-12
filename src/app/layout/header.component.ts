import { Component } from "@angular/core";

@Component({
  selector: 'rcg-header',
  template:`
    <ul class="col-sm-12 main-links text-xs-center">
  		<li class="col-sm-12 col-md-3"><a href="/#games" id="games-main-link" class='spalink'>Games</a></li>
		<li class="col-sm-12 col-md-3 "><a href="/#team" class='spalink'>The Team</a></li>
		<li class="col-sm-12 col-md-3 "><a href="/#community" class='spalink'>Community</a></li>
		<li class="col-sm-12 col-md-3 "><a href="http://roaringcatgames.tumblr.com">DevLog</a></li>		
		<li class="col-sm-12  hidden-md-up social">
			<a target="_blank" href="https://www.youtube.com/channel/UCVXIyaWKn9igvfps4APu_AA"><i class="fa fa-youtube-play"></i></a>
			<a target="_blank" href="http://twitter.com/roaringcatgames"><i class="fa fa-twitter"></i></a>
      <a target="_blank" href="https://www.instagram.com/roaringcatgames/"><i class="fa fa-instagram"></i></a>  					  			  				
  		</li>
  	</ul>

	  <div class="col-sm-12 text-center header">  	
      <div class=" col-sm-12 header-img">
      </div>
      <!--
  		<img class="header-img  small-offset-2 small-8 medium-offset-2 medium-8 large-offset-2 large-8" src="images/logo_orange.png" />	  	
  		-->
  		<h1 class="section-footer hidden-sm-down">
  			<a target="_blank" href="http://twitter.com/roaringcatgames"><i class="fa fa-twitter"></i></a>  					
  			<a target="_blank" href="https://www.youtube.com/channel/UCVXIyaWKn9igvfps4APu_AA"><i class="fa fa-youtube-play"></i></a>
        <a target="_blank" href="https://www.instagram.com/roaringcatgames/"><i class="fa fa-instagram"></i></a>  			
  		</h1>
	  </div>
  `  
})
export class HeaderComponent { }