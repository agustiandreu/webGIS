var wms_layers = [];

var format_LIMITES_0 = new ol.format.GeoJSON();
var features_LIMITES_0 = format_LIMITES_0.readFeatures(json_LIMITES_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITES_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITES_0.addFeatures(features_LIMITES_0);
var lyr_LIMITES_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITES_0, 
                style: style_LIMITES_0,
                interactive: true,
                title: '<img src="styles/legend/LIMITES_0.png" /> LIMITES'
            });
var format_ELEMPUN_1 = new ol.format.GeoJSON();
var features_ELEMPUN_1 = format_ELEMPUN_1.readFeatures(json_ELEMPUN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ELEMPUN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELEMPUN_1.addFeatures(features_ELEMPUN_1);
var lyr_ELEMPUN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ELEMPUN_1, 
                style: style_ELEMPUN_1,
                interactive: true,
                title: '<img src="styles/legend/ELEMPUN_1.png" /> ELEMPUN'
            });
var format_ELEMLIN_2 = new ol.format.GeoJSON();
var features_ELEMLIN_2 = format_ELEMLIN_2.readFeatures(json_ELEMLIN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ELEMLIN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELEMLIN_2.addFeatures(features_ELEMLIN_2);
var lyr_ELEMLIN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ELEMLIN_2, 
                style: style_ELEMLIN_2,
                interactive: true,
                title: '<img src="styles/legend/ELEMLIN_2.png" /> ELEMLIN'
            });

lyr_LIMITES_0.setVisible(true);lyr_ELEMPUN_1.setVisible(true);lyr_ELEMLIN_2.setVisible(true);
var layersList = [lyr_LIMITES_0,lyr_ELEMPUN_1,lyr_ELEMLIN_2];
lyr_LIMITES_0.set('fieldAliases', {'MAPA': 'MAPA', 'TTGGSS': 'TTGGSS', 'NUMSYMBOL': 'NUMSYMBOL', 'FECHAALTA': 'FECHAALTA', 'FECHABAJA': 'FECHABAJA', 'NINTERNO': 'NINTERNO', 'REFCAT': 'REFCAT', });
lyr_ELEMPUN_1.set('fieldAliases', {'MAPA': 'MAPA', 'TTGGSS': 'TTGGSS', 'ATRIBUTO': 'ATRIBUTO', 'NUMSYMBOL': 'NUMSYMBOL', 'FECHAALTA': 'FECHAALTA', 'FECHABAJA': 'FECHABAJA', 'NINTERNO': 'NINTERNO', 'REFCAT': 'REFCAT', });
lyr_ELEMLIN_2.set('fieldAliases', {'MAPA': 'MAPA', 'TTGGSS': 'TTGGSS', 'VIA': 'VIA', 'NUMSYMBOL': 'NUMSYMBOL', 'FECHAALTA': 'FECHAALTA', 'FECHABAJA': 'FECHABAJA', 'NINTERNO': 'NINTERNO', 'REFCAT': 'REFCAT', });
lyr_LIMITES_0.set('fieldImages', {'MAPA': '', 'TTGGSS': '', 'NUMSYMBOL': '', 'FECHAALTA': '', 'FECHABAJA': '', 'NINTERNO': '', 'REFCAT': '', });
lyr_ELEMPUN_1.set('fieldImages', {'MAPA': '', 'TTGGSS': '', 'ATRIBUTO': '', 'NUMSYMBOL': '', 'FECHAALTA': '', 'FECHABAJA': '', 'NINTERNO': '', 'REFCAT': '', });
lyr_ELEMLIN_2.set('fieldImages', {'MAPA': '', 'TTGGSS': '', 'VIA': '', 'NUMSYMBOL': '', 'FECHAALTA': '', 'FECHABAJA': '', 'NINTERNO': '', 'REFCAT': '', });
lyr_LIMITES_0.set('fieldLabels', {'MAPA': 'no label', 'TTGGSS': 'no label', 'NUMSYMBOL': 'no label', 'FECHAALTA': 'no label', 'FECHABAJA': 'no label', 'NINTERNO': 'no label', 'REFCAT': 'no label', });
lyr_ELEMPUN_1.set('fieldLabels', {'MAPA': 'no label', 'TTGGSS': 'no label', 'ATRIBUTO': 'no label', 'NUMSYMBOL': 'no label', 'FECHAALTA': 'no label', 'FECHABAJA': 'no label', 'NINTERNO': 'no label', 'REFCAT': 'no label', });
lyr_ELEMLIN_2.set('fieldLabels', {'MAPA': 'no label', 'TTGGSS': 'no label', 'VIA': 'no label', 'NUMSYMBOL': 'no label', 'FECHAALTA': 'no label', 'FECHABAJA': 'no label', 'NINTERNO': 'no label', 'REFCAT': 'no label', });
lyr_ELEMLIN_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});