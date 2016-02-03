(function ()
{
    var module = angular.module('sampleDevice.feature.snapshot', ['ngAnimate', 'sampleDevice.component.loadingAnimation', 'sampleDevice.feature.settings']); //['dotjem.angular.tree']

    // one constant dictionary per module to keep it clean and verbose
    module.constant('sdevSnapshotConst', {
        dataType: {
            flat: 'flat',
            expanding: 'expanding',
            tiered: 'tiered'
        },
        templateUrls: {
            sampleFlatData: 'data/sample-flat-data.json',
            sampleTieredData: 'data/sample-tiered-data.json',
            sampleHistory: 'data/sample-history.json',
            snapshotDevice: 'features/snapshot/snapshot-device/snapshot-device.tpl.html',
            snapshotExpanding: 'features/snapshot/snapshot-expanding/snapshot-expanding.tpl.html',
            snapshotFlat: 'features/snapshot/snapshot-flat/snapshot-flat.tpl.html',
            snapshotHeader: 'features/snapshot/snapshot-header/snapshot-header.tpl.html',
            snapshotTiered: 'features/snapshot/snapshot-tiered/snapshot-tiered.tpl.html'
        }
    });
    
})();