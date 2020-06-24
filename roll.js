javascript:(function(){ 
		const dice6logo = "data:image/png;base64,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";
		const dice20logo = "data:image/png;base64,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";
		const dsaLogo = "data:image/png;base64,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";
		const settingsLogo = "data:image/png;base64,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";
		const uploadImg = "data:image/png;base64,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";
		const downloadImg = "data:image/png;base64,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";

		var attributes = ["MU", "KL", "IN", "CH", "FF", "GE", "KO", "KK"];
		

		
		var items = [
			["Körper" , [
									[ "Fliegen", "MU/IN/GE"],
									[ "Gaukeleien", "MU/CH/FF"],
									[ "Klettern" , "MU/GE/KK"],
									[ "Körperberrschung", "GE/GE/KO"],
									[ "Kraftakt", "KO/KK/KK"],
									[ "Reiten", "CH/GE/KK"],
									[ "Schwimmen", "GE/KO/KK"],
									[ "Selbstbeherrschung", "MU/MU/KO"],
									[ "Singen", "KL/CH/KO"],
									[ "Sinnesschärfe", "KL/IN/IN"],
									[ "Tanzen", "KL/CH/GE"],
									[ "Taschendiebstahl", "MU/FF/GE"],
									[ "Verbergen", "MU/IN/GE"],
									[ "Zechen", "KL/KO/KK"]
								]
			],
			["Gesellschaft" , [
									[ "Bekehren & Überzeugen", "MU/KL/CH"],
									[ "Betören", "MU/CH/CH"],
									[ "Einschüchtern", "MU/IN/CH"],
									[ "Etikette", "KL/IN/CH"],
									[ "Gassenwissen", "KL/IN/CH"],
									[ "Menschenkenntnis", "KL/IN/CH"],
									[ "Überreden", "MU/IN/CH"],
									[ "Verkleiden", "IN/CH/GE"],
									[ "Willenskraft", "MU/IN/CH"]
								]
			],
			["Natur" , [
									[ "Fährtensuchen", "MU/IN/GE"],
									[ "Fesseln", "KL/FF/KK"],
									[ "Fischen & Angeln", "FF/GE/KO"],
									[ "Orientierung", "KL/IN/IN"],
									[ "Pflanzenkunde", "KL/FF/KO"],
									[ "Tierkunde", "MU/MU/CH"],
									[ "Wildnisleben", "MU/GE/KO"]
								]
			],
			["Wissen" , [
									[ "Brett- & Glücksspiel", "KL/KL/IN"],
									[ "Geographie", "KL/KL/IN"],
									[ "Geschichtswissen", "KL/KL/IN"],
									[ "Götter & Kulte", "KL/KL/IN"],
									[ "Kriegskunst", "MU/KL/IN"],
									[ "Magiekunde", "KL/KL/IN"],
									[ "Mechanik", "KL/KL/FF"],
									[ "Rechnen", "KL/KL/IN"],
									[ "Rechtskunde", "KL/KL/IN"],
									[ "Sagen & Legenden", "KL/KL/IN"],
									[ "Sphärenkunde", "KL/KL/IN"],
									[ "Sternkunde", "KL/KL/IN"]
								]
			],
			["Handwerk" , [
									[ "Alchimie", "MU/KL/FF"],
									[ "Boote & Schiffe", "FF/GE/KK"],
									[ "Fahrzeuge", "CH/FF/KO"],
									[ "Handel", "KL/IN/CH"],
									[ "Heilkunde Gift", "MU/KL/IN"],
									[ "Heilkunde Krankheiten", "MU/IN/KO"],
									[ "Heilkunde Seele", "IN/CH/KO"],
									[ "Heilkunde Wunden", "KL/FF/FF"],
									[ "Holzbearbeitung", "FF/GE/KK"],
									[ "Lebensmittelbearbeitung", "IN/FF/FF"],
									[ "Lederbearbeitung", "FF/GE/KO"],
									[ "Malen & Zeichnen", "IN/FF/FF"],
									[ "Metallbearbeitung", "FF/KO/KK"],
									[ "Musizieren", "CH/FF/KO"],
									[ "Schlösserknacken", "IN/FF/FF"],
									[ "Steinbearbeitung", "FF/FF/KK"],
									[ "Stoffbearbeitung", "KL/FF/FF"]
								]
			]
		];
		
		var character = {
			"mu": 0,
			"kl": 0,
			"in": 0,
			"ch": 0,
			"ff": 0,
			"ge": 0,
			"ko": 0,
			"kk": 0,
		};

		function init() {
			addButtons();
			addDSATab();
			loadDSAData();
		};
		
		function loadDSAData() {

			var ch = JSON.parse(window.localStorage.getItem('dsa'));
			if (!ch) {
				return;
			}
			
			for(var i = 0; i < attributes.length; i++) {
				var val = ch[attributes[i].toLowerCase()];
				val = $.isNumeric(val) ? val : 0;
				$("#dsa_" + attributes[i].toLowerCase()).val(val);
			}
			
			$(".skill INPUT").each(function() {
				var id = $(this).attr("dice-attr-id");
				var val = ch[id.toLowerCase()];
				val = $.isNumeric(val) ? val : 0;
				$(this).val(val);
			});
			
			$(".skill_subheadline").first().click();
			if (!ch.namemap) {
				ch.namemap = [];
			}
			patchNames(ch.namemap);
			$('.scroller').unbind("DOMSubtreeModified").bind('DOMSubtreeModified', function(){
				patchNames(character.namemap);
				$("DIV[data-v-0e88e150]:contains('Roll ')").addClass("dsa_roll_text");
				$("DIV.dsa_roll_text:contains('failed')").addClass("failed");
			});
		}
		
		function patchNames(map) {
			if (!map) {
				return;
			}
			$.each(map, function(key, element) {
				if (element.length > 0) {
					$("h6[data-v-99efb80e]:contains('" + key + "')").text(element);
				}
			});
		}
		
		function saveDSAData() {
			for(var i = 0; i < attributes.length; i++) {
				var val = $("#dsa_" + attributes[i].toLowerCase()).val();
				val = $.isNumeric(val) ? val : 0;
				character[attributes[i].toLowerCase()] = val;
			}
			
			$(".skill INPUT").each(function() {
				var id = $(this).attr("dice-attr-id");
				var val = $(this).val();
				
				val = $.isNumeric(val) ? val : 0;
				character[id.toLowerCase()] = val;
			});
				
			window.localStorage.setItem('dsa', JSON.stringify(character));
		}
		
		function addDSATab() {
			$(".app-sidebar-tabs__nav UL").append("<li data-v-2e504e82='' class='app-sidebar-tabs__tab'><a data-v-2e504e82='' id='dsa' aria-controls='tab-dsa' data-id='dsa' href='#tab-dsa' role='tab' class='' tabindex='-1'><span data-v-2e504e82='' class='app-sidebar-tabs__tab-icon icon-dsa'></span>DSA</a></li>			");
			
			var styles = "<style type='text/css'>"  +
				".dsa_color_val TD { font-weight: bold; text-align: center; cursor: pointer;} " +
				".dsa_color_val TD.dsa_mu { color: red;} " +
				".dsa_color_val TD.dsa_kl { color: violet;} " +
				".dsa_color_val TD.dsa_in { color: green;} " +
				".dsa_color_val TD.dsa_ch { color: black;} " +
				".dsa_color_val TD.dsa_ff { color: yellow;} " +
				".dsa_color_val TD.dsa_ge { color: blue;} " +
				".dsa_color_val TD.dsa_ko { color: lightgrey;} " +
				".dsa_color_val TD.dsa_kk { color: orange;} " +
				".dsa_attributes TD INPUT{ width: 40px; } " +
				".skill_subheadline { font-weight: bold; cursor:pointer; margin-left: 10px;} " +
				".icon-dsa { background-image: url(" + dsaLogo + ");} " + 
				".dsa_settings { width: 100%;} " + 
				".dsa_settings IMG { float: right; cursor: pointer;} " + 
				".ui-dialog { z-index: 99999;} " + 
				".dsa_roll_text {color: green;} " + 
				".dsa_roll_text.failed {color: red;} " + 
				".dsa_roll_text::before { content: url(" + dice20logo + "); vertical-align: -33%; padding-right: 5px;} " + 
			"</style>";
			$("head").append(styles);
			
			var settings = "<div class='dsa_settings'>" + 
			                 "<img id='dsa_opensettings' src='" + settingsLogo + "'/>" + 
							 "<img id='dsa_download' src='" + downloadImg + "'/>" + 
							 "<img id='dsa_upload' src='" + uploadImg + "'/>" + 
						   "</div>";
			
			var inputs = "<table>" +
				"<tr class='dsa_color_val'>";
				for(var i = 0; i < attributes.length; i++) {
					inputs += "<td class='dsa_" + attributes[i].toLowerCase() + "'>" + attributes[i] + "</td>";
				}
				inputs += "</tr>" + 
				    "<tr class='dsa_attributes'>";
				for(var i = 0; i < attributes.length; i++) {
					inputs += "<td><input type='number' id='dsa_" + attributes[i].toLowerCase() + "' value='0'/>";
				}
					
				inputs += "</tr>" +				
				"</table>" +
				"<table><tr class='dsa_modificator'><td>Modifikator:</td><td><select>";
				for (var i = -3; i < 4; i++) {
					inputs += "<option value='" + i + "' " + (i==0 ? "selected " : "") +">" + i + "</option>";
				}
				
				
				inputs += "</select></td></tr></table>";
				
				inputs += "<table class='dsa_attributes'>" + 
					"<tr class='skill_headline'><td colspan=4>Fertigkeiten:</td></tr>" + 
					"<tr><td colspan=4>";
					for(var j = 0; j < items.length; j++) {
						var category = items[j];
						inputs += "<span class='skill_subheadline' category='" + category[0] + "' >" + category[0] + "</span>";
					}
					inputs += "</td></tr>";
					for(var j = 0; j < items.length; j++) {
						var category = items[j];
						for(var i = 0; i < category[1].length; i++) {
							var item = category[1][i];
							inputs += "<tr class='skill tree_" + category[0] + "'><td>" + item[0] + ":</td><td><input type='number' value='0' dice-attr-id='" + item[0].toLowerCase() + "'/></td><td>" + item[1] + "</td><td><img class='skill_dice' id='skill_dice_" + item[0].toLowerCase() + "' src='" + dice20logo + "' dice-name='" + item[0] + "' dice-attr='" + item[1].toLowerCase() + "'/></td></tr>";
						}
					}
					
					
				inputs += "</table>";
				$(".app-sidebar-tabs__content.app-sidebar-tabs__content--multiple").append("<section data-v-02f177dc='' data-v-5580c196='' id='tab-dsa' aria-labelledby='DSA' tabindex='0' role='tabpanel' style='display:none'>" + settings + inputs + "</section>");
			
			$(".app-sidebar-tabs__tab #participants, .app-sidebar-tabs__tab #projects").click(function() {
				$("#dsa").removeClass("active");
				$(".app-sidebar-tabs__content.app-sidebar-tabs__content--multiple section#tab-dsa").attr("aria-hidden", true).css("display", "none");
			});
			
			$(".skill_subheadline").click(function() {
				var cat = $(this).attr("category");
				$("TR.skill").css("display", "none");
				$("TR.skill.tree_" + cat).css("display", "table-row");
			});
			
			
			
			$(".skill_dice").click(function() {
				var name = $(this).attr("dice-name");
				var attr = $(this).attr("dice-attr");
				var attrs = attr.split("/");
				var qsLeft = $("input[dice-attr-id='" + name.toLowerCase() + "']").val();
				var mod = getModificator();
				if (qsLeft == 'undefined' || qsLeft.length < 1) {
					qsLeft = 0;
				}
				var msg = "Roll '" + name + "(" + qsLeft + ")': ";
				for (var i=0; i < attrs.length; i++) {
					var val = getNumValue($("#dsa_" + attrs[i]));
					var r = rand(20);
					msg += attrs[i].toUpperCase() + "(" + r + "/" + val + (mod != 0 ? " [Mod:" + mod + "]": "") + "), ";
					val = val+mod;
					if (r > val) {
						qsLeft -= (r-val);
					}
				}
				qs = 0;
				if(qsLeft > -1) {
					qs = 1;
				}
				if(qsLeft > 3) {
					qs = 2;
				}
				if(qsLeft > 6) {
					qs = 3;
				}
				if(qsLeft > 9) {
					qs = 4;
				}
				if(qsLeft > 12) {
					qs = 5;
				}
				if(qsLeft > 15) {
					qs = 6;
				}
				
				msg += qsLeft >= 0 ? (" -> FP: " + qsLeft + " = QS:" + qs) : " failed";
				send(msg);
			});
			
		
			$(".dsa_attributes INPUT").change(function() {
				getNumValue($(this));				
				saveDSAData();
			});
			
			$(".skill INPUT").change(function() {
				getNumValue($(this));
				saveDSAData();
			});
		
			$("#dsa").click(function() {
				$(".app-sidebar-tabs__tab .active").removeClass("active");
				$("#dsa").addClass("active");
				$(".app-sidebar-tabs__content.app-sidebar-tabs__content--multiple section").attr("aria-hidden", true).css("display", "none");
				$(".app-sidebar-tabs__content.app-sidebar-tabs__content--multiple section#tab-dsa").attr("aria-hidden", false).css("display", "block");
			}); 
			
			$(".dsa_color_val TD").click(function(){
				var classname = $(this).attr("class").split("_")[1];
				var val = getNumValue($("#dsa_" + classname));
				var mod = getModificator();
				var d = rand(20);
				send("Roll " + classname.toUpperCase() + "(" + val + (mod != 0 ? " [Mod:" + mod + "]": "") + ") with D20: " + d + (d > (val + mod) ? " (failed)" : ""));				
			});
			
			$(".dsa_settings IMG#dsa_opensettings").click(function() {
				showSettings();
			});
			
			$(".dsa_settings IMG#dsa_download").click(function() {
				download();
			});
			
			$(".dsa_settings IMG#dsa_upload").click(function() {
				upload();
			});
			
			$("#dsa").click();
		}
		
		function showSettings() {
			
			var dialog = $(".dsa_settings_dialog");
			if (dialog.length == 0) {
				var character = JSON.parse(window.localStorage.getItem('dsa'));
				console.log(character);
				if (!character.namemap) {
					character.namemap = {};
					window.localStorage.setItem('dsa', JSON.stringify(character));
				}
				var dialog = "<div class='dsa_settings_dialog ui-widget'><table>";
				
				$(".participant-row__user-name").each(function() {
					var character = JSON.parse(window.localStorage.getItem('dsa'));
					var val = character.namemap[$(this).text()];
					val = val ? val: "";
					dialog += "<tr><td>" + $(this).text() +"</td><td><input class='dsa_name_replace' name='" + $(this).text() + "' value='" + val + "'/></td></tr>";
				});
				dialog += "</table></div>";
				$("body").append(dialog);
				$(".dsa_name_replace").change(function() {
					var character = JSON.parse(window.localStorage.getItem('dsa'));
					var name = $(this).attr("name");
					var val = $(this).val();
					character.namemap[name] = val;
					patchNames(character.namemap);
					window.localStorage.setItem('dsa', JSON.stringify(character));
				})
			}
			dialog = $(".dsa_settings_dialog");
			dialog.dialog();
			
		}
		
		function addButtons() {
			$(".new-message-form").append("<img style='cursor:pointer; margin-right: 5px;' id='roll20' src='" + dice20logo + "' />");
			$(".new-message-form").append("<img style='cursor:pointer; margin-right: 5px;' id='roll6' src='" + dice6logo + "' />");
			$("#roll20").click(function() {
				send("Roll D20: " + rand(20));
			});
			$("#roll6").click(function() {
				send("Roll D6: " + rand(6));
			});
		};
		
		
		function getNumValue(elem) {
			var val = elem.val();
			if(!$.isNumeric(val)) {
				elem.val(0);
			}
			return parseInt(elem.val());
		}
		
		function getModificator() {
			return parseInt($(".dsa_modificator Select").val());
		} 
		
		function setInputText(text) {
			$(".new-message-form__advancedinput").append(text + " ");
		};
		function send(text) {
			$.ajax({
			  type: "POST",
			  url: 'https://share.eckcellent-it.de/nextcloud/ocs/v2.php/apps/spreed/api/v1/chat/' + id(),
			  data: {"message": text ,"actorDisplayName": $("head").attr("data-user-displayname")},
			});
		}
		
		function id() {
			var id = window.location.href.split("call/")[1];
			return id;
		}
		
		function rand(max){
			return Math.floor((Math.random() * max) + 1);
		};
		
		function download() {
			var text = window.localStorage.getItem("dsa");
			text = text.replace(/[\u007F-\uFFFF]/g, function(chr) {
				return "\\u"
						+ ("0000" + chr.charCodeAt(0).toString(16)).substr(-4)
			});
			var pom = document.createElement('a');
			pom.setAttribute('href', 'data:text/plain;charset=utf-8,'
					+ encodeURIComponent(text));
			pom.setAttribute('download', "dsa.json");

			if (document.createEvent) {
				var event = document.createEvent('MouseEvents');
				event.initEvent('click', true, true);
				pom.dispatchEvent(event);
			} else {
				pom.click();
			}
		};
		
		function upload() {
			var dialog = $("#dsa_upload_dialog");
			if(!dialog[0]) {
				$("body").append("<div id='dsa_upload_dialog'><h2>Upload DSA-Data</h2><br><input type='file' id='importit'/>");
				dialog = $("#dsa_upload_dialog");
			}
			dialog.dialog();
			var elem = $("#importit");
			elem.unbind("change").on("change", function(evt) {
				var files = evt.target.files;
				if (!files || !files[0]) {
					alert("No files uploaded");
					return;
				}
				var file = files[0];
				var reader = new FileReader();
				reader.onload = (function(theFile) {
						return function(e) {
							console.log(e.target.result);
							try {
								var dsa_tmp = JSON.parse(e.target.result);
								if (dsa_tmp.mu) {
									console.log(dsa_tmp);
									window.localStorage.setItem('dsa', JSON.stringify(dsa_tmp));
									loadDSAData();
								}
							} catch (ex) {
								alert("unable to load");
							}
						};
					})(file);
				reader.readAsText(file);
			});
	
		};
		
		init();
	}
)();




