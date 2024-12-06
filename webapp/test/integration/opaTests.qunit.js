sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'supplier/test/integration/FirstJourney',
		'supplier/test/integration/pages/SupplierList',
		'supplier/test/integration/pages/SupplierObjectPage'
    ],
    function(JourneyRunner, opaJourney, SupplierList, SupplierObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('supplier') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSupplierList: SupplierList,
					onTheSupplierObjectPage: SupplierObjectPage
                }
            },
            opaJourney.run
        );
    }
);