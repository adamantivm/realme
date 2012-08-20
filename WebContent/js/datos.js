realme = {
	stations: [{
	    'name': 'José León Suarez',
	    'id': 'JL',
	    'latlong': [-34.534469, -58.576336]
	},{
	    'name': 'Chilavert',
	    'id': 'CH',
	    'latlong': [-34.5424894, -58.5665786]
	},{
	    'name': 'Villa Ballester',
	    'id': 'BL',
	    'latlong': [-34.5509783, -58.5560387]
	},{
	    'name': 'Malaver',
	    'id': 'MA',
	    'latlong': [-34.557419, -58.5478521]
	},{
	    'name': 'San Andrés',
	    'id': 'SA',
	    'latlong': [-34.5640359, -58.5402869]
	},{
	    'name': 'San Martín',
	    'id': 'SM',
	    'latlong': [-34.5737235, -58.5316008]
	},{
	    'name': 'Miguelete',
	    'id': 'MG',
	    'latlong': [-34.5810983, -58.5170213]
	},{
	    'name': 'Pueyrredón',
	    'id': 'PY',
	    'latlong': [-34.5804871, -58.5017123]
	},{
	    'name': 'Urquiza',
	    'id': 'UZ',
	    'latlong': [-34.5747237, -58.4878402]
	},{
	    'name': 'Luis María Drago',
	    'id': 'DD',
	    'latlong': [-34.5683001, -58.4787086]
	},{
	    'name': 'Bartolomé Mitre',
	    'id': 'BM',
	    'latlong': [-34.51484, -58.4890349]
	},{
	    'name': 'Cetrángolo',
	    'id': 'CG',
	    'latlong': [-34.523132, -58.4941069]
	},{
	    'name': 'Florida',
	    'id': 'FD',
	    'latlong': [-34.5301475, -58.4943934]
	},{
	    'name': 'Juan B Justo',
	    'id': 'BJ',
	    'latlong': [-34.5425158, -58.494678]
	},{
	    'name': 'Luis María Saavedra',
	    'id': 'DR',
	    'latlong': [-34.553805, -58.4871537]
	},{
	    'name': 'Coghlan',
	    'id': 'CI',
	    'latlong': [-34.5653549, -58.475151]
	},{
	    'name': 'Belgrano R',
	    'id': 'NR',
	    'latlong': [-34.5678212, -58.46248]
	},{
	    'name': 'Colegiales',
	    'id': 'AL',
	    'latlong': [-34.5730079, -58.4482125]
	},{
	    'name': 'Ministro Carranza',
	    'id': 'MZ',
	    'latlong': [-34.5755991, -58.4349262]
	},{
	    'name': '3 de Febrero',
	    'id': 'TF',
	    'latlong': [-34.5719195, -58.4251949]
	},{
	    'name': 'Tigre',
	    'id': 'T',
	    'latlong': [-34.4236537, -58.5817056]
	},{
	    'name': 'Carupá',
	    'id': 'CU',
	    'latlong': [-34.4377801, -58.5671095]
	},{
	    'name': 'San Fernando',
	    'id': 'FB',
	    'latlong': [-34.4439883, -58.5590113]
	},{
	    'name': 'Virreyes',
	    'id': 'VY',
	    'latlong': [-34.4503114, -58.5511139]
	},{
	    'name': 'Victoria',
	    'id': 'Z',
	    'latlong': [-34.4561763, -58.5409617]
	},{
	    'name': 'Beccar',
	    'id': 'BE',
	    'latlong': [-34.4608717, -58.5263406]
	},{
	    'name': 'San Isidro',
	    'id': 'SW',
	    'latlong': [-34.4719327, -58.5135795]
	},{
	    'name': 'Acassuso',
	    'id': 'AS',
	    'latlong': [-34.479833, -58.504009]
	},{
	    'name': 'Martinez',
	    'id': 'N',
	    'latlong': [-34.4882749, -58.4967306]
	},{
	    'name': 'La Lucila',
	    'id': 'LL',
	    'latlong': [-34.4975817, -58.4883682]
	},{
	    'name': 'Olivos',
	    'id': 'OL',
	    'latlong': [-34.5078538, -58.4804762]
	},{
	    'name': 'Vicente Lopez',
	    'id': 'VZ',
	    'latlong': [-34.5247161, -58.472709]
	},{
	    'name': 'Rivadavia',
	    'id': 'RV',
	    'latlong': [-34.5366168, -58.4679607]
	},{
	    'name': 'Nuñez',
	    'id': 'NZ',
	    'latlong': [-34.5484816, -58.4627379]
	},{
	    'name': 'Belgrano C',
	    'id': 'BC',
	    'latlong': [-34.5584615, -58.4494815]
	},{
	    'name': 'Lisandro de La Torre',
	    'id': 'LT',
	    'latlong': [-34.5625621, -58.4367573]
	},{
	    'name': 'Retiro',
	    'id': 'RN',
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