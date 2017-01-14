# leaflet-control-mouseposition
>


## Description

leaflet-control-mouseposition is a control that displays geographic coordinates of the mouse pointer, as it is moved about the map and when the map is moved 'under' the mouse

The format of the position changes when the user click on the control

Using [fcoo/leaflet-latlng-format](https://github.com/FCOO/leaflet-latlng-format) and [fcoo/leaflet-mouseposition](https://github.com/FCOO/leaflet-mouseposition)



## Installation
### bower
`bower install https://github.com/FCOO/leaflet-control-mouseposition.git --save`

## Demo
http://FCOO.github.io/leaflet-control-mouseposition/demo/ 

## Usage
	L.Control.mouseposition(options).addTo(map);
or

	var map = L.Map('map', {mousepositionControl: true});


## options
| Id | Type | Default | Description |
| :--: | :--: | :-----: | --- |
| `position` | string | `"bottomleft"` |  The standard Leaflet.Control position parameter |

## Properties and methods
	.outerElement //DOM-element that contains the mouseposition. (Same as `_container`)

	.onClick( func, context ) //Add click-event to the mouseposition. Change style on mouse hover to border and less transparent 


## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/leaflet-control-mouseposition/LICENSE).

Copyright (c) 2016 [FCOO](https://github.com/FCOO)

## Contact information

[Niels Holt](https://github.com/NielsHolt)


## Credits and acknowledgements

[ardhi/Leaflet.MousePosition](https://github.com/ardhi/Leaflet.MousePosition)