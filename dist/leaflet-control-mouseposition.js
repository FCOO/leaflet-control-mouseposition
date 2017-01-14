/****************************************************************************
    leaflet-control-mouseposition.js,

    (c) 2016, FCOO

    https://github.com/FCOO/leaflet-control-mouseposition
    https://github.com/FCOO

****************************************************************************/
(function (L/*, window, document, undefined*/) {
    "use strict";

    L.Control.Mouseposition = L.Control.extend({
        options: {
            VERSION : "0.3.3",
            position: 'bottomleft',
            title   : 'Click to change format'
        },

        onAdd: function (map) {
            this._container = L.DomUtil.create('div', 'leaflet-control-mouseposition empty');
            this._container.title = this.options.title;
            L.DomEvent.disableClickPropagation(this._container);

            map.on('mouseposition', this._onMouseposition, this);
            L.DomEvent.on(this._container, 'click', this._onClick, this);

            return this._container;
        },

        onRemove: function (map) {
            map.off('mouseposition', this._onMouseposition);
        },

        _onMouseposition: function ( mouseEvent ) {
            if ((this.mouseEvent ? this.mouseEvent.latlng : null) != (mouseEvent ? mouseEvent.latlng : null)){
                if (mouseEvent && mouseEvent.latlng)
                    L.DomUtil.removeClass( this._container, 'empty');
                else
                    L.DomUtil.addClass( this._container, 'empty');

            }
            this.mouseEvent = mouseEvent;
            if (mouseEvent && mouseEvent.latlng)
                this._container.innerHTML = mouseEvent.latlng.format().join('&nbsp;&nbsp;&nbsp;');
        },

        _onClick: function () {
            L.LatLng.changeFormat( this._map );
            this._onMouseposition( this.mouseEvent );
        }


    });

    //Extend the options for Leaflet Map
    L.Map.mergeOptions({
    mousepositionControl: false
    });

    L.Map.addInitHook(function () {
        if (this.options.mousepositionControl) {
            this.mousepositionControl = new L.Control.Mouseposition();
            this.addControl(this.mousepositionControl);
    }
    });




    L.control.mouseposition = function (options) {
    return new L.Control.Mouseposition(options);
    };

}(L, this, document));



