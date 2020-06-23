define([
    'jquery',
    'openlayers',
    'underscore',
    'arches'
//     'gmjs',
//     'map/ol3gm'
], function($, ol, _, arches) {
    var baseLayers = arches.bingLayers;
    var editor = arches.editor;
    _.each(baseLayers, function(layer) {
        layer.layer = new ol.layer.Tile({
            visible: false,
            preload: Infinity,
            source: new ol.source.BingMaps({
                key: arches.bingKey,
                imagerySet: layer.id
            })
        });
    });
    
//     baseLayers.push({
//         id: 'PalestineImagery',
//         name: 'Palestine Imagery',
//         icon: arches.urls.media + 'img/map/Palestine.png',
//         layer: new ol.layer.Tile({
//             visible: false,
//             source: new ol.source.TileWMS({
//                 url: 'http://192.168.123.130/mapserver/mapserv?map=C:/Maps/Map.map',
//                 params: {
//                     'LAYERS': 'grid', 'VERSION':'1.1.1','FORMAT': 'image/png'
//                 },
//                 serverType: 'mapserver',
//                 gutter: 30
//             })
//         })
//     }); 
     
    //set default map style to Aerial
    baseLayers[0].layer.setVisible(true);
    baseLayers.push({
        id: 'GM',
        name: 'Google Hybrid',
        icon: arches.urls.media + 'img/map/Google.png',
        layer: new ol.layer.Tile({
            visible: false,
            source: new ol.source.XYZ({
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga'
            })
        })
    });
    if (editor === true) {

baseLayers.push({
        id: 'Geomolg50cm2018',
        name: 'Geomolg (50cm 2018)',
        icon: arches.urls.media + 'img/map/Geomolg.png',
        layer: new ol.layer.Tile({
            visible: false,
            source: new ol.source.TileArcGISRest({
                url: 'https://orthophotos.geomolg.ps/adaptor/rest/services/Orthophoto_Gaza_Satellite_2018_50cm_ITM_Nov_02/MapServer',
            })
        })
    });
    
    baseLayers.push({
        id: 'Geomolg10cm2018',
        name: 'Geomolg (10cm 2018)',
        icon: arches.urls.media + 'img/map/Geomolg.png',
        layer: new ol.layer.Tile({
            visible: false,
            source: new ol.source.TileArcGISRest({
                url: 'https://orthophotos.geomolg.ps/adaptor/rest/services/Orthophoto_WestBank_Aerial_2018_10cm_ITM_jpg_04/MapServer',
            })
        })
    });


    baseLayers.push({
        id: 'Geomolg10cm2016',
        name: 'Geomolg (10cm 2016)',
        icon: arches.urls.media + 'img/map/Geomolg.png',
        layer: new ol.layer.Tile({
            visible: false,
            source: new ol.source.TileArcGISRest({
                url: 'https://orthophotos.geomolg.ps/adaptor/rest/services/Orthophoto_WestBank_Aerial_2016_10cm_ITM_jpg_12/MapServer',
            })
        })
    });
    baseLayers.push({
        id: 'Geomolg25cm2015',
        name: 'Geomolg (25cm 2015)',
        icon: arches.urls.media + 'img/map/Geomolg.png',
        layer: new ol.layer.Tile({
            visible: false,
            source: new ol.source.TileArcGISRest({
                url: 'https://orthophotos.geomolg.ps/adaptor/rest/services/Orthophoto_WestBank_Aerial_2015_25cm_jpg_02/MapServer',
            })
        })
    });
    baseLayers.push({
        id: 'Geomolg25cm2014',
        name: 'Geomolg (25cm 2014)',
        icon: arches.urls.media + 'img/map/Geomolg.png',
        layer: new ol.layer.Tile({
            visible: false,
            source: new ol.source.TileArcGISRest({
                url: 'https://orthophotos.geomolg.ps/adaptor/rest/services/Orthophoto_WestBank_Aerial_2014_25cm_jpg_03/MapServer',
            })
        })
    });
    baseLayers.push({
        id: 'Geomolg25cm2009',
        name: 'Geomolg (50cm 2009)',
        icon: arches.urls.media + 'img/map/Geomolg.png',
        layer: new ol.layer.Tile({
            visible: false,
            source: new ol.source.TileArcGISRest({
                url: 'https://orthophotos.geomolg.ps/adaptor/rest/services/Orthophoto_WestBank_Aerial_2009_50cm_ITM_jpg_02/MapServer',
            })
        })
    });	
    baseLayers.push({
        id: 'Geomolg50cm2006',
        name: 'Geomolg (50cm 2006)',
        icon: arches.urls.media + 'img/map/Geomolg.png',
        layer: new ol.layer.Tile({
            visible: false,
            source: new ol.source.TileArcGISRest({
                url: 'https://orthophotos.geomolg.ps/adaptor/rest/services/Orthophoto_WestBank_Aerial_2006_50cm_ITM_jpg_02/MapServer',
            })
        })
    });
    
    baseLayers.push({
        id: 'PalestineImagery',
        name: 'Palestine Imagery',
        icon: arches.urls.media + 'img/map/Palestine.png',
        layer: new ol.layer.Tile({
            visible: false,
            source: new ol.source.TileWMS({
                url: 'http://192.168.123.119:8080/service?',
                params: {
                    LAYERS: 'Palestine'
                }
            })
        })
    });

        baseLayers.push({
            id: 'DARE',
            name: 'DARE/Pelagios',
            icon: arches.urls.media + 'img/map/Pelagios.png',
            layer: new ol.layer.Tile({
                visible: false,
                source: new ol.source.XYZ({
                    url: 'http://pelagios.org/tilesets/imperium/{z}/{x}/{y}.png'
                })
            })
        });
    }
        
    return baseLayers;
});