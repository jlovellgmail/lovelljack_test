var data = [];
window.data = data;
makedata();
function makedata(){

	// html content for pages
	var contentlist = {};
	make_content_list();
	function make_content_list(){
		function img(s, classes, style){
			if(!classes) return  "<img src='"+s+"' onclick='blowup(this.src)'>";
			else if(!style) return "<img class='"+classes+"' src='"+s+"' onclick='blowup(this.src)'>";
			else return "<img class='"+classes+"' style='"+style+"' src='"+s+"' onclick='blowup(this.src)'>";
		}
		function text(s, classes, style){

			/*
			if(classes != undefined)
				return "<p class='"+classes+"''>"+s+"</p>";
			else
				return "<p>"+s+"</p>";

			*/
			if(!classes) return  "<p>"+s+"</p>";
			else if(!style) return "<p class='"+classes+"'>"+s+"</p>";
			else return "<p class='"+classes+"' style='"+style+"'>"+s+"</p>";


		}
		function caption(s){
			return text(s, "caption");
		}
		function div(classes, contents){
			if(!contents) return "<div class='"+classes+"'></div>";
			else return "<div class='"+classes+"'>"+contents+"</div>";
		}
		var spacer = div("spacer");
		var spacermedium = div("spacermedium");
		var spacersmall = div("spacersmall");
		var spacerextrasmall = div("spacerextrasmall");
		var image_folder = "/images/page_images/";
		contentlist.webdesign = ""


			+ img(image_folder + "visual_20171221_Tech_DigitalLastMinuteDeals.jpg")


			+ spacer
			+ img(image_folder + "visual_20171203_lifestyle_7DaysofGifting_Day1.jpg")
			+ spacerextrasmall
			+ img(image_folder + "visual_20171204_lifestyle_7DaysofGifting_Day2.jpg")



			+ spacer
			+ img(image_folder + "visual_20171211_lifestyle_GreenMonday_PM_SiteWide_00.jpg")
			+ spacerextrasmall
			+ img(image_folder + "visual_20171211_lifestyle_GreenMonday_PM_SiteWide_01.jpg")
			+ spacerextrasmall
			+ img(image_folder + "visual_20171211_lifestyle_GreenMonday_PM_SiteWide_03.jpg")
			+ spacerextrasmall
			+ img(image_folder + "visual_20171212_lifestyle_GreenMonday_DailyDeals.jpg")


			+ spacer
			+ img(image_folder + "visual_20171113_lifestyle_doorbusters_day_1.jpg")


			+ spacer
			+ img(image_folder + "visual_20171122_lifestyle_black_friday_sitewide.jpg")



			+ spacer
			+ img(image_folder + "visual_20171201_Lifestyle_cyber_week.gif")
			+ spacer
			+ img(image_folder + "visual_20171202_Lifestyle_cyber_week.jpg")



			+ spacer
			+ img(image_folder + "visual_20171221_Lifestyle_DigitalLastMinuteDeals.jpg", " ", "filter:brightness(.97);")
			+ spacer
			+ img(image_folder + "visual_20171221_Academy_DigitalLastMinuteDeals.gif")


			+ spacer
			+ img(image_folder + "visual_20171219_Lifestyle_BestOf2017.jpg")
			+ spacer
			+ img(image_folder + "visual_20171219_Academy_BestOf2017.jpg")



			+ spacer
			+ img(image_folder + "visual_20171127_PM_Academy_cyber_monday.jpg")



			+ spacer
			//+ div("containImage", img(image_folder + "visual_marketing_email.jpg", "dropshadow", "width:69%"))
			+ div("", img(image_folder + "visual_marketing_email.jpg", " ", "width:69%;"))


			/*
			+ spacer
			+ img(image_folder + "web_landing-page_1800.jpg", "dropshadow")
			+ caption("Landing page, Virgil James")
			+ spacer
			+ img(image_folder + "icons.jpg", "darkenImage")
			+ caption("App icons, Illumina BaseSpace app store")
			+ spacer
			+ '<div class="aspectratio otl"><iframe src="https://player.vimeo.com/video/231601293?autoplay=1&loop=1&autopause=0" width="640" height="382" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
			+ div("caption", "Flash website for the film <span class='titleofwork'>Outside The Law</span>")
			+ spacer
			+ img(image_folder + "developer-stats.jpg", "dropshadow")
			+ caption("Analytics dashboard, Illumina BaseSpace")
			+ spacer
			+ '<div class="aspectratio piechart"><iframe src="https://player.vimeo.com/video/168895922?autoplay=1&loop=1&autopause=0" width="640" height="470" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
			+ caption("Piechart animations, Illumina BaseSpace")
			*/


			;
		contentlist.titleist = ""
			+ img(image_folder + "titleist.jpg")
			;
		contentlist.flowers = ""
			+ img(image_folder + "flowers_1600.jpg")
			+ text("2017, colored pencil on paper")
			;
		contentlist.drawings = ""
			+ img(image_folder + "flowers_1600.jpg")
			+ caption("Colored pencil on paper")
			+ spacer
			+ img(image_folder + "smith.jpg")
			+ "<p class='caption'>Rendering executed for an artist<br>Graphite on paper, 56 x 52.6 inches</p>"
			+ spacer
			+ img(image_folder + "fallingwater.jpg")
			+ "<p class='caption'>Rendering executed for an artist<br>Ballpoint pen on paper, 48.3 x 39.9 inches</p>"
			+ spacer
			+ img(image_folder + "fayum.jpg")
			+ img(image_folder + "fayum_1800.jpg")
			+ "<p class='caption'>Scientific Illustration published by The American Museum of Natural History, NYC<br>Pencil and digital editing</p>"
			//+ caption("Scientific Illustration published by The American Museum of Natural History, NYC")

			/*
			+ spacer
			+ img(image_folder + "bentshape.jpg")
			+ caption("Charcoal on paper")
			+ spacer
			+ img(image_folder + "torso.jpg")
			+ caption("Ink and graphite on paper")
			*/
			/*
			+ spacer
			+ img(image_folder + "parabola.jpg")
			+ caption("Charcoal on paper, 24.7 x 40 inches")
			*/
			;
		contentlist.gp = ""
			+ img(image_folder + "gp_eye-170912.jpg")
			+ spacer
			+ '<div class="aspectratio horses"><iframe src="https://player.vimeo.com/video/231226964?autoplay=1&loop=1&autopause=0" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
			+ spacer

			/*
			+ '<img class="darkenImage" style="width:600px;" src="images/page_images/gp_targethorse.jpg" onclick="blowup(this.src)">'
			*/
			+ img(image_folder + "gp_horse-170912.jpg")
			+ spacermedium
			+ img(image_folder + "gp_targethorse.jpg", "darkenImage", "width:100%;")
			+ spacermedium
			+ text("Stochastic process", "heading")
			+ text("Say we have a photo we want to render called the \"target image\". Genetic computer programs seek to replicate this target image through self-generated experimentation. The program process begins by casting random lines across the digital canvas. Most lines don't come even close to the target, but those that come closest are retained by the program and those which don't are discarded. Now we have a new \"generation\" of information and, based on that information, the program refines its aim to more and more accurately reproduce the target image.")
			+ text("Just as in nature, creating a rendering of a photograph with this process involves many generations where individuals, and in this case \"lines\", mate to see if they can create an improved offspring. Literally billions of organisms go extinct and only rarely does a beneficial mutation appear. But unlike nature, the computer can do this very quickly.")
			+ spacermedium
			+ img(image_folder + "gp_cat-170912.jpg")
			+ spacermedium

			/*
			+ '<div class="aspectratio hand"><iframe src="https://player.vimeo.com/video/169456761?autoplay=1&loop=1&autopause=0" width="640" height="760" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><div class="movieOverlay"></div></div>'
			*/

			+ img(image_folder + "gp_hand-170912.jpg")
			/*
			+ spacer
			+ img(image_folder + "gp_woman.jpg")
			*/

			+ spacer
			+ img(image_folder + "gp_camera-170912.jpg")
			+ spacer
			
			/*
			+ img(image_folder + "gp_triangles.png")
			+ spacer
			*/

			+ img(image_folder + "gp_1211080-230.best.1009.fullscreen_crop_945.jpg")
			+ spacer
			+ img(image_folder + "gp_1211080-230.best.1009.fullscreen_target_945.jpg")
			+ spacer
			+ '<div class="aspectratio gpshapes"><iframe src="https://player.vimeo.com/video/104474094?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0" width="640" height="384" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><div class="movieOverlay"></div></div>'
			+ caption("Casting lines with genetic programs")
			+ spacer
			;
		contentlist.ads = ""

			+ text("My role:", " ", "font-weight:bold;")
			+ text("Art Direction. I took finalized headline and body copy, and designed and executed all visual aspects including photo selection, visual treatment and typography. I worked closely with the copywriter and creative director to ensure the ads stayed on-strategy and spoke in the intended voice.", " ", "margin-top:2px;")

			+ spacersmall
			//+ "<span style='font-weight:bold'>Copywriter:</span> <a target='_blank' href='https://www.jessbrophy.com/#/health-warrior/'>Jessica Brophy</a>"
			+ "<span style='font-weight:bold'>Copywriter:</span> Jessica Brophy"

			+ spacer
			
			+ img(image_folder + "ad_set.jpg")
			+ spacer
			+ img(image_folder + "ad_startsmart.jpg")
			+ spacer
			+ img(image_folder + "ad_secondwind.jpg")
			+ spacer
			+ img(image_folder + "ad_theonly.jpg")
			+ spacer
			+ img(image_folder + "ad_onlysit.jpg")
			+ spacer
			+ img(image_folder + "ad_earlycomp1.jpg")
			+ spacer
			+ img(image_folder + "ad_headlines_1500.jpg")
			+ caption("Exploring line break variations")
			;
		contentlist.bags = ""
			+ text("My role:", " ", "font-weight:bold;")
			+ text("Designed and executed all aspects including lighting, styling, photography and retouching.", " ", "margin-top:2px;")

			+ spacer
			
			//+ img(image_folder + "bags_SF-Overnight---2017-01-27-18.31.41---thumbnail_repositioned_1800.jpg")
			+ img(image_folder + "bags_SF-Overnight---2017-01-27-18.31.41---thumbnail-v2_1800.jpg")

			+ spacer
			
			// + img(image_folder + "bags_SF-Satchel---2017-01-24-23.35.12---thumbnail_repositioned_1800b.jpg")
			+ img(image_folder + "bags_SF-Satchel---2017-01-24-23.35.12---thumbnail-v1b_1800.jpg")
			
			// + spacer
			// + img(image_folder + "bags_SFclutch_1800.jpg")
			//+ img(image_folder + "bags_SF-Clutch-v2_1800.jpg")

			+ spacer
			+ img(image_folder + "bags_grid.jpg", "darkenImage")
			/*
			+ spacer
			+ img(image_folder + "bags_IMG_8892_1200.jpg")
			+ spacer
			+ img(image_folder + "bags_2016-12-08-13.04.20_rt2_50_q9_1200.jpg")
			+ spacer
			+ img(image_folder + "bags_2016-11-28-13.21.43---drawstring-top-edge_1200.jpg")
			*/
			;
		contentlist.event = ""

			+ text("Hershey's BlogHer Conference Suites 2010", "heading")
			+ text("Floor-to-ceiling environmental graphics.")
			+ spacermedium
			+ img(image_folder + "smores2.jpg")
			+ spacer
			+ img(image_folder + "event_forest.jpg")
			//-------------------------
			+ spacer
			+ text("Hershey's Easter Event", "heading")
			+ text("Step and repeat, kiosks and stage backdrop.")
			+ spacermedium
			+ img(image_folder + "hersheys_double.jpg")
			+ spacer
			+ img(image_folder + "hersheys_stage.jpg")
			//-------------------------
			+ spacer
			+ text("Aramark Guest Chef Event", "heading")
			+ text("Entrance and sponsor banners.")
			+ spacermedium
			+ img(image_folder + "event_aramark.jpg")
			//-------------------------

			/*
			+ spacer
			+ text("Hershey's BlogHer Conference Suites 2012", "heading")
			+ text("Floor-to-ceiling environmental graphics.")
			+ spacermedium
			+ img(image_folder + "event_perspectivethreewalls.png")
			+ spacer
			+ img(image_folder + "event_rightwall.jpg")
			+ spacer
			+ img(image_folder + "event_wallgraphic_door.jpg")
			+ spacer
			+ img(image_folder + "event_wall_beach.jpg")
			+ spacer
			+ img(image_folder + "event_blogher2012_wallD_2000.jpg")
			+ spacer
			+ img(image_folder + "event_blogher2012_wallD_detail_1500.jpg")
			+ spacer
			+ img(image_folder + "event_blogher2012_wallE_2000.jpg")
			*/


			;
		contentlist.oysters = ""
			+ text("The problem: ", "heading")
			+ text("Oyster farming is a large industry in Rhode Island, but a deadly bacteria periodically kills off oyster populations by up to 90%. However there is one strain of oyster that is immune to the infection, and biologists at The University of Rhode Island are working to discover what makes these oysters different. I had the opportunity to work closely with these researchers to design and build visualization software tools enabling custom explorations of the genetic data produced by their experiments.")
			+ text("Challenges: ", "heading")
			
			/*
			+ text("When we project data into a readable form, it can look very different depending on how we view it.  For example, one might wish to look at the interrelatedness of specific genes and/or the timing of when certain genes express themselves in the developing oyster. We have to choose a good visual and conceptual projection in order to see features in the data that matter to us.")
			*/
			+ text("The first major challenge was the size of the data to be visualized. In these networks a node represents a slice of the genome, and an edge represents a relationship between those two slices. The shear interconnectedness of the network, with over 50,000 edges, was so dense that it appeared to be a solid mass.")

			+ spacermedium
			+ img(image_folder + "oysters_network-1.jpg")
			/*
			+ img(image_folder + "oysters_network-2.jpg")
			*/
			+ spacer
			+ "<p>The first version of the tool was named <span style='font-style:italic;'>Permissive</span> because of the extreme number of connections - we chose to use the most permissive thresholds in generating the network. The task was then to create interactive tools that allowed the researchers to \"dissolve\" edges in order to isolate small structures within the network that persisted under certain conditions. These structures would signify a special evolutionary relationship shared by a group of genes.</p>"
			+ spacer
			+ '<div class="aspectratio permissive"><iframe src="https://player.vimeo.com/video/233454716?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0" width="640" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
			+ spacermedium
			+ img(image_folder + "oysters_network-2_crop-1.jpg")

			



			/*
			+ img(image_folder + "oysters_perspectives.jpg")
			+ div("caption credit", 'Credit: Emok via <a href="https://commons.wikimedia.org/wiki/File%3AFirst_angle_projection.svg">Wikimedia Commons</a>')
			*/
			/*
			+ text("Solution:", "heading")
			+ text('Software that enabled the researchers to visualize genes as networks of "nodes and edges". The visualization allowed scientists to test their assumptions by "playing" with the networks, in order to reveal structure in the data. The software had to be flexible enough to accommodate yet-unknown forms of data, as the scientists continually restructured their material. As a major benefit, the programs have made it much easier to describe and share the progress of this research in educational settings, with colleagues, across disciplines, and in the scientific literature.')
			*/

			+ spacer
			//+ img(image_folder + "oysters_slider.gif")
			//+ '<iframe src="https://player.vimeo.com/video/170709062?autoplay=1&amp;loop=1&amp;autopause=0" width="640" height="88" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
			+ img(image_folder + "oysters_oysters - Screen shot 2012-09-10 at 3.53.03 AM.jpg")
			+ spacermedium
			+ img(image_folder + "oysters2.jpg")
			+ spacermedium
			+ img(image_folder + "oysters1.jpg")
			+ spacermedium
			+ img(image_folder + "oysters_2.jpg")
			;
		contentlist.other = ""
			+ img(image_folder + "raytrace.jpg")
			+ caption("Raytracer written from scratch in C++. Capabilities include soft focus / depth of field blurring, recursive reflections, refraction within transparent objects, texture mapping and antialiasing with spheres and polygons.")

			/*
			+ spacer
			+ img(image_folder + "shirt_front.jpg")
			+ caption("MAGA")
			*/
			
			;
		contentlist.rd = ""
			+ img(image_folder + "keyart_vegucated.jpg")
			+ "<p class='caption'>Key art for the documentary film <span style='font-style:italic;'>Vegucated</span></p>"
			+ spacer
			+ img(image_folder + "keyart_rd_1600.jpg")
			+ "<p class='caption'>Key art for the documentary film <span style='font-style:italic;'>Racing Dreams</span></p>"
			/*
			+ spacer
			+ img(image_folder + "keyart_skinnydip.jpg")
			+ "<p class='caption'>Key art for the film <span style='font-style:italic;'>Skinny Dip</span></p>"
			*/
			;
	}

	// create list of items
	make_items_list();
	function make_items_list(){
		function add(image, blurb, query, title, subtitle, content){
			var object = {
				image: image
				,blurb: blurb
				,query: query
				,title: title
				,subtitle: subtitle
				,content: content
			}
			data.push(object);
		}
		//------------------------------------
		add(
			"th_itsfinallyhere.jpg"
			,"Email Design"
			,"emailmarketing"
			,"Email Design"
			,""
			,contentlist.webdesign
		);
		add(
			
			// "th_bags.jpg"
			"th_bags_v2.jpg"

			,"Product Photography"
			,"bags"
			,"Product Photography"
			,"Leather handbags"
			,contentlist.bags
		);
		add(
			"ad_th.jpg"
			,"Ad Campaign"
			,"ad"
			,"Ad Campaign"
			,"Spec ads for Health Warrior"
			,contentlist.ads
		);
		add(
			
			//"hersheys_th.jpg"
			"th_smores.jpg"
			
			,"Event Graphics"
			,"event"
			,"Event Graphics"
			,""
			,contentlist.event
		);
		/*
		add(
			"titleist_th.jpg"
			,"Brochure"
			,"titleist"
			,"Brochure"
			,"Titleist"
			,contentlist.titleist
		);
		*/
		add(
			
			//"gp_th.jpg"
			"th_gp_camera.jpg"

			,"Experimental Rendering"
			,"gp"
			,"Experimental Digital Rendering"
			,"Using simulations of evolution to draw pictures"
			,contentlist.gp
		);
		add(
			"flowers_th.jpg"
			,"Drawings"
			,"drawings"
			,"Drawings"
			,""
			,contentlist.drawings
		);
		add(
			
			//"rd_th.jpg"
			"th_vegucated.jpg"

			,"Key Art"
			,"rd"
			,"Key Art"
			,"Film branding"
			,contentlist.rd
		);
		add(
			
			//"oysters_th.jpg"
			"th_oysters_gray.jpg"

			,"Data Visualization"
			,"oysters"
			,"Data Visualization"
			,"Collaboration with researchers at the University of Rhode Island Department of Oceanography"
			,contentlist.oysters
		);
		add(
			
			// "th_tshirt.jpg"
			"th_raytrace.jpg"

			,"Other Projects"
			,"raytrace"
			,"Other Projects"
			,""
			,contentlist.other
		);
	}

}
