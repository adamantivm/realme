# coding=utf-8
import math

stations = [{
    'name': 'Rivadavia',
    'form_code': 'RV',
    'latlong': (-34.5366168, -58.4679607)
},{
    'name': 'Nuñez',
    'form_code': 'NZ',
    'latlong': (-34.5484816, -58.4627379)
},{
    'name': 'Belgrano C',
    'form_code': 'BC',
    'latlong': (-34.5584615, -58.4494815)
},{
    'name': 'Lisandro de La Torre',
    'form_code': 'LT',
    'latlong': (-34.5625621, -58.4367573)
},{
    'name': 'Retiro',
    'form_code': 'RN',
    'latlong': (-34.5906847, -58.3748395)
}]

def find_nearest( latlong):
    nearest = {}
    for station in stations:
        distance = math.sqrt((latlong[0]-station['latlong'][0])**2 + (latlong[1]-station['latlong'][1])**2)
        if 'distance' in nearest and nearest['distance'] < distance:
            continue
        nearest = station
        nearest['distance'] = distance
    return nearest

print find_nearest((-34.5578855, -58.4541829))
