app_status = {};

function initiate_geolocation() {
	navigator.geolocation.getCurrentPosition(handle_geolocation_query);  
}

function handle_geolocation_query(position) {
	//	Encontrar la estación de tren más cercana a la ubicación actual del usuario
	app_status.nearest = realme.nearest(position.coords.latitude, position.coords.longitude);

    //	Cambiar el texto del botón para indicar que la búsqueda terminó
    $("label .ui-btn-text")[0].textContent = "La más cercana: " + app_status.nearest.name;
    
    //	Si el usuario no tocó la lista de estaciones manualmente, elegirla automáticamente ahora
    if(!('manually_selected' in app_status)) {
    	$("#EstOri").val(app_status.nearest.form_code).selectmenu("refresh");
    }
    
    //	Ya se puede hacer la búsqueda
    $("#buscar").button('enable');
}

$("#index").live('pageinit',function() {
	//	Disparar la búsqueda de ubicación para localizar la estación más cercana 
	initiate_geolocation();
	//	Elegir el tipo de día (hábil, sábado, domingo, etc.) de acuerdo al día que es hoy
	var dayOfWeek = Math.min(((new Date()).getDay()+1) % 7, 2);
	names = ["sabado","domingo","habil"]
	$("#dia-"+names[dayOfWeek]).attr("checked",true).checkboxradio("refresh");
});

$("#select-method-manual").live("change", function() { $("#EstOri").selectmenu('enable'); });
$("#select-method-auto").live("change", function() { $("#EstOri").selectmenu('disable'); });
$("#EstOri").live("focus", function() {
	app_status.manually_selected = true;
});