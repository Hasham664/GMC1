module.exports = 
    {
      MlsBaseURL:'https://api.mlsgrid.com/v2/Property?$top=1000&$expand=Media%2CRooms%2CUnitTypes&$filter=StandardStatus+eq+%27ActiveUnderContract%27',
    //MlsBaseURL:'https://api.mlsgrid.com/v2/Property?$expand=Media%2CRooms%2CUnitTypes&$top=1000&$filter=OriginatingSystemName%20eq%20%27mred%27',

    // MlsBaseURL: 'https://api.mlsgrid.com/v2/Property?$expand=Media%2CRooms%2CUnitTypes&$top=1000&$skip=2000&$filter=OriginatingSystemName%20eq%20\'mred\'%20and%20ModificationTimestamp%20gt%202023-06-01T23%3A59%3A59.99Z',
      //token: 'Bearer 745940025c8f86a088113987814de41031c8ea35',
      MlsBaseURLFeature:'https://api.mlsgrid.com/v2/Property?$expand=Media%2CRooms%2CUnitTypes&$top=1000&$filter=OriginatingSystemName%20eq%20%27mred%27%20and%20ListOfficeMlsId+eq+%27MRD23948%27%20and%20StandardStatus+eq+%27Active%27',
     // MlsBaseURL:"https://api-demo.mlsgrid.com/v2/Property?$filter=OriginatingSystemName%20eq%20%27mred%27%20and%20ModificationTimestamp%20gt%202020-12-30T23:59:59.99Z&$expand=Media,Rooms,UnitTypes",
      token: 'Bearer ba07b677e3a30fd2ba55f50ed7bb491b103eb11f',
      googleMapsApiKey: "AIzaSyDoX_KBzb-Om7WaJqUQaySP95YRGdpllyw",
      MlsMainUrl: 'https://api.mlsgrid.com/v2/',
      adminUrl:'https://admin.gmcrealtor.com/',
      MlsBaseURLs:'https://api.mlsgrid.com/v2/Property?$top=1000&$expand=Media%2CRooms%2CUnitTypes&$filter=OriginatingSystemName%20eq%20%27mred%27%20and%20StandardStatus+eq+%27ComingSoon%27'
    };
