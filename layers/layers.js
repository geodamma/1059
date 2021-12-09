ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3825").setExtent([179969.582684, 2702526.584330, 181815.552681, 2703780.317399]);
var wms_layers = [];


        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google 衛星影像',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_1975_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "後浦1975",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1975_1.png",
    attributions: ' ',
                                projection: 'EPSG:3825',
                                alwaysInRange: true,
                                imageExtent: [180034.877242, 2702633.827561, 181628.833190, 2703656.104246]
                            })
                        });
var format_Brickhopu_2 = new ol.format.GeoJSON();
var features_Brickhopu_2 = format_Brickhopu_2.readFeatures(json_Brickhopu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_Brickhopu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brickhopu_2.addFeatures(features_Brickhopu_2);
var lyr_Brickhopu_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Brickhopu_2, 
                style: style_Brickhopu_2,
                interactive: true,
                title: '<img src="styles/legend/Brickhopu_2.png" /> Brick hopu'
            });
var format_1_3 = new ol.format.GeoJSON();
var features_1_3 = format_1_3.readFeatures(json_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_3.addFeatures(features_1_3);
var lyr_1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_3, 
                style: style_1_3,
                interactive: true,
                title: '<img src="styles/legend/1_3.png" /> 1后浦磚造建築'
            });

lyr_Google_0.setVisible(true);lyr_1975_1.setVisible(true);lyr_Brickhopu_2.setVisible(true);lyr_1_3.setVisible(true);
var layersList = [lyr_Google_0,lyr_1975_1,lyr_Brickhopu_2,lyr_1_3];
lyr_Brickhopu_2.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr_1_3.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr_Brickhopu_2.set('fieldImages', {'Build_STR': '', 'Build_NO': '', });
lyr_1_3.set('fieldImages', {'Build_STR': '', 'Build_NO': '', });
lyr_Brickhopu_2.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', });
lyr_1_3.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', });
lyr_1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});