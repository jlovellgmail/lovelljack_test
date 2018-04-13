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
		var image_folder = "images/page_images/";
		contentlist.drawings = ""


			+ img(image_folder + "Flowers_1500.jpg")
			+ spacer
			+ img(image_folder + "Bent_Shape_1000.jpg")
			+ spacer
			+ img(image_folder + "torso_900.jpg")



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
			,"Digital Marketing Campaigns"
			,"emailmarketing"
			,"Digital Marketing Campaigns"
			,""
			,contentlist.drawings
		);
	}

}
