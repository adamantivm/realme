realme = {
	stations: [{
	    'name': 'Rivadavia',
	    'form_code': 'RV',
	    ramal: 'tigre',
	    'latlong': [-34.5366168, -58.4679607]
	},{
	    'name': 'Nuñez',
	    'form_code': 'NZ',
	    ramal: 'tigre',
	    'latlong': [-34.5484816, -58.4627379]
	},{
	    'name': 'Belgrano C',
	    'form_code': 'BC',
	    ramal: 'tigre',
	    'latlong': [-34.5584615, -58.4494815]
	},{
	    'name': 'Lisandro de La Torre',
	    'form_code': 'LT',
	    ramal: 'tigre',
	    'latlong': [-34.5625621, -58.4367573]
	},{
	    'name': 'Retiro',
	    'form_code': 'RN',
	    ramal: 'tigre',
	    'latlong': [-34.5906847, -58.3748395]
	}],
	
	nearest: function realme_nearest( lat, long) {
		//	TODO: Sanity checks
	    var cercana = undefined;
	    $.each( realme.stations, function( i, station) {
	    	distance = Math.sqrt(Math.pow(lat - station.latlong[0],2)+Math.pow(long - station.latlong[1],2));
	    	if(cercana && cercana.distance <= distance) {
	    		//	Do nothing
	    	} else {
	    		cercana = station;
	    		cercana.distance = distance;
	    	}
	    });
	    return cercana;
	}
};