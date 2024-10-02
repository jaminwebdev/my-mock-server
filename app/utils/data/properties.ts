import { z } from "zod";

export const properties = [
  {
      "address": "630 NW 110th St, Kansas City, MO 64155",
      "beds": 3,
      "baths": 3,
      "area": 1444,
      "imgSrc": "https://photos.zillowstatic.com/fp/fed3ec5de052423fb4825a50aedffe57-p_e.jpg",
      "price": "$240,000",
      "priceLabel": "$240K",
      "latLong": {
          "latitude": 39.294163,
          "longitude": -94.58732
      },
      "listingType": "",
      "communityName": "",
      "uid": "6895ba43-e0c7-40e3-b8ef-75ed83d3105f",
      "date": "2024-02-02T22:52:09.509Z"
  },
  {
      "address": "12100 E 61st Ter, Kansas City, MO 64133",
      "beds": 3,
      "baths": 3,
      "area": 3690,
      "imgSrc": "https://photos.zillowstatic.com/fp/69a9075e255e8174e14e0704945f9e1b-p_e.jpg",
      "price": "$250,000",
      "priceLabel": "$250K",
      "latLong": {
          "latitude": 39.010117,
          "longitude": -94.43867
      },
      "listingType": "",
      "communityName": "",
      "uid": "3f21cc4c-3de7-4511-a69e-d99c10fc335f",
      "date": "2024-10-02T08:15:15.022Z"
  },
  {
      "address": "4509 E Red Bridge Rd, Kansas City, MO 64137",
      "beds": 3,
      "baths": 3,
      "area": 1732,
      "imgSrc": "https://photos.zillowstatic.com/fp/a94ee85741189c2b5af64491e526cab3-p_e.jpg",
      "price": "$265,000",
      "priceLabel": "$265K",
      "latLong": {
          "latitude": 38.92379,
          "longitude": -94.53741
      },
      "listingType": "",
      "communityName": "",
      "uid": "2abbf388-b42d-4823-a560-e5acc4bf6c05",
      "date": "2023-10-30T09:03:40.435Z"
  },
  {
      "address": "3009 E 55th St, Kansas City, MO 64130",
      "beds": 3,
      "baths": 3,
      "area": 2150,
      "imgSrc": "https://photos.zillowstatic.com/fp/8d55066ee1fa938829d472972906afe7-p_e.jpg",
      "price": "$255,000",
      "priceLabel": "$255K",
      "latLong": {
          "latitude": 39.02612,
          "longitude": -94.55033
      },
      "listingType": "",
      "communityName": "",
      "uid": "4fbfe3fc-b66b-429d-9e29-ddbeff7d9cf3",
      "date": "2023-10-07T08:41:36.915Z"
  },
  {
      "address": "6206 Agnes Ave, Kansas City, MO 64130",
      "beds": 3,
      "baths": 2,
      "area": 1740,
      "imgSrc": "https://photos.zillowstatic.com/fp/7b81a2baa529bc4829bee63330f35285-p_e.jpg",
      "price": "$206,900",
      "priceLabel": "$207K",
      "latLong": {
          "latitude": 39.013695,
          "longitude": -94.55179
      },
      "listingType": "",
      "communityName": "",
      "uid": "bf6c63aa-881c-4d40-a7e3-64894e622bab",
      "date": "2024-09-26T05:35:43.722Z"
  },
  {
      "address": "507 Spruce Ave, Kansas City, MO 64124",
      "beds": 3,
      "baths": 2,
      "area": 1556,
      "imgSrc": "https://photos.zillowstatic.com/fp/939e7b1298b623792c0ce034ac5dd5c1-p_e.jpg",
      "price": "$249,000",
      "priceLabel": "$249K",
      "latLong": {
          "latitude": 39.107147,
          "longitude": -94.53146
      },
      "listingType": "",
      "communityName": "",
      "uid": "44374c81-541a-48b0-b95d-f4137ff59061",
      "date": "2024-02-03T09:17:26.224Z"
  },
  {
      "address": "6344 NE Pleasant Valley Rd, Kansas City, MO 64119",
      "beds": 3,
      "baths": 2,
      "area": 1400,
      "imgSrc": "https://photos.zillowstatic.com/fp/3be14b7e7619b6677f2114b41bf6d4c1-p_e.jpg",
      "price": "$269,000",
      "priceLabel": "$269K",
      "latLong": {
          "latitude": 39.21685,
          "longitude": -94.50504
      },
      "listingType": "",
      "communityName": "",
      "uid": "91417e72-1d29-441c-b251-743466ce2778",
      "date": "2024-10-02T15:11:39.278Z"
  },
  {
      "address": "12216 N Pomona Ln, Kansas City, MO 64163",
      "beds": 3,
      "baths": 2,
      "area": 1408,
      "imgSrc": "https://photos.zillowstatic.com/fp/d1067a5bbf1283eab05755400d9627b3-p_e.jpg",
      "price": "$280,000",
      "priceLabel": "$280K",
      "latLong": {
          "latitude": 39.315624,
          "longitude": -94.671616
      },
      "listingType": "",
      "communityName": "",
      "uid": "a5edcef3-e36b-454a-8583-ffc906f7cafa",
      "date": "2024-10-02T08:54:30.255Z"
  },
  {
      "address": "611 E 42nd St, Kansas City, MO 64110",
      "beds": 2,
      "baths": 2,
      "area": 1422,
      "imgSrc": "https://photos.zillowstatic.com/fp/9c9f63075c1f725f3a3518e8bb5d010e-p_e.jpg",
      "price": "$225,000",
      "priceLabel": "$225K",
      "latLong": {
          "latitude": 39.050674,
          "longitude": -94.57763
      },
      "listingType": "",
      "communityName": "",
      "uid": "bb1aac23-1437-4b29-b8a4-f6eee94b2a65",
      "date": "2024-02-27T21:25:46.057Z"
  },
  {
      "address": "2249 Blue Ridge Blvd, Kansas City, MO 64126",
      "beds": 3,
      "baths": 4,
      "area": 1494,
      "imgSrc": "https://photos.zillowstatic.com/fp/c5ec3ba70958cafbc36ae75a0a3180ee-p_e.jpg",
      "price": "$49K",
      "priceLabel": "$49K",
      "latLong": {
          "latitude": 39.08177,
          "longitude": -94.47056
      },
      "listingType": "",
      "communityName": "",
      "uid": "c3b952bb-246f-4fd6-a60d-4ea5813a5207",
      "date": "2024-10-02T15:11:07.504Z"
  },
  {
      "address": "7416 NW Park Forest Ln, Kansas City, MO 64152",
      "beds": 4,
      "baths": 2,
      "area": 1216,
      "imgSrc": "https://photos.zillowstatic.com/fp/4947ae8b9b1f7a1a3d5eb7c213564c1a-p_e.jpg",
      "price": "$230,000",
      "priceLabel": "$230K",
      "latLong": {
          "latitude": 39.23,
          "longitude": -94.662346
      },
      "listingType": "",
      "communityName": "",
      "uid": "86b51a38-92cb-455c-8d15-ea5c687e0618",
      "date": "2024-10-01T18:47:43.543Z"
  },
  {
      "address": "4401 Harrison St, Kansas City, MO 64110",
      "beds": 5,
      "baths": 4,
      "area": 3455,
      "imgSrc": "https://photos.zillowstatic.com/fp/e9a62539fc97384a28f04180b71d4657-p_e.jpg",
      "price": "$499,900",
      "priceLabel": "$500K",
      "latLong": {
          "latitude": 39.04699,
          "longitude": -94.57349
      },
      "listingType": "",
      "communityName": "",
      "uid": "340915f1-2d04-42fe-bc09-858bc0f5ab81",
      "date": "2024-08-22T14:13:23.387Z"
  },
  {
      "address": "2229 E 69th St, Kansas City, MO 64132",
      "beds": 4,
      "baths": 3,
      "area": 2105,
      "imgSrc": "https://photos.zillowstatic.com/fp/ca531c18a7915a59f237bd10f52aedfc-p_e.jpg",
      "price": "$220,000",
      "priceLabel": "$220K",
      "latLong": {
          "latitude": 39.00064,
          "longitude": -94.55997
      },
      "listingType": "",
      "communityName": "",
      "uid": "f1975abf-bb86-4974-9b81-e95cc8498756",
      "date": "2024-08-30T07:04:51.766Z"
  },
  {
      "address": "3920 Vineyard Rd, Kansas City, MO 64130",
      "beds": 3,
      "baths": 1,
      "area": 1607,
      "imgSrc": "https://photos.zillowstatic.com/fp/d41e4265bfa0c97e659cd562ec8c7459-p_e.jpg",
      "price": "$100,000",
      "priceLabel": "$100K",
      "latLong": {
          "latitude": 39.05406,
          "longitude": -94.5259
      },
      "listingType": "",
      "communityName": "",
      "uid": "a9d7cda2-b9c2-4f82-aa64-a21a56c7a6e1",
      "date": "2024-07-23T00:09:42.538Z"
  },
  {
      "address": "6624 N Camden Ave, Kansas City, MO 64151",
      "beds": 4,
      "baths": 4,
      "area": 2890,
      "imgSrc": "https://photos.zillowstatic.com/fp/614284b4248dc969ec4d223ddfac63ec-p_e.jpg",
      "price": "$400,000",
      "priceLabel": "$400K",
      "latLong": {
          "latitude": 39.21515,
          "longitude": -94.635666
      },
      "listingType": "",
      "communityName": "",
      "uid": "02011438-71fe-4421-b0d6-952b7b6663bc",
      "date": "2024-09-15T15:49:31.549Z"
  },
  {
      "address": "401 E 36th St, Kansas City, MO 64109",
      "beds": 5,
      "baths": 5,
      "area": 7665,
      "imgSrc": "https://photos.zillowstatic.com/fp/e0d4fec0e8613fe6be4384eda425975d-p_e.jpg",
      "price": "$1,075,000",
      "priceLabel": "$1.08M",
      "latLong": {
          "latitude": 39.061554,
          "longitude": -94.58079
      },
      "listingType": "",
      "communityName": "",
      "uid": "29da85b5-142f-409f-ad9b-04da44a2790a",
      "date": "2024-02-05T04:28:48.664Z"
  },
  {
      "address": "4235 E 54th Ter, Kansas City, MO 64130",
      "beds": 5,
      "baths": 4,
      "area": 2500,
      "imgSrc": "https://photos.zillowstatic.com/fp/a708b5eb2131356c416baedd28b6678a-p_e.jpg",
      "price": "$249,900",
      "priceLabel": "$250K",
      "latLong": {
          "latitude": 39.026463,
          "longitude": -94.53499
      },
      "listingType": "",
      "communityName": "",
      "uid": "bc4b9126-70f3-48f3-8d0d-e044e2a651ed",
      "date": "2024-01-04T21:28:36.310Z"
  },
  {
      "address": "12100 E 59th St, Kansas City, MO 64133",
      "beds": 3,
      "baths": 2,
      "area": 1588,
      "imgSrc": "https://photos.zillowstatic.com/fp/67d684252c13680cd085d41b757ca887-p_e.jpg",
      "price": "$175,000",
      "priceLabel": "$175K",
      "latLong": {
          "latitude": 39.015,
          "longitude": -94.438515
      },
      "listingType": "",
      "communityName": "",
      "uid": "8bfef509-602c-438f-afc0-edd17c36c7d5",
      "date": "2024-10-02T13:21:38.651Z"
  },
  {
      "address": "9048 E 51st Ter, Kansas City, MO 64133",
      "beds": 4,
      "baths": 4,
      "area": 2342,
      "imgSrc": "https://photos.zillowstatic.com/fp/d53c8d984ebca9159e78befd2e1d41a2-p_e.jpg",
      "price": "$258,900",
      "priceLabel": "$259K",
      "latLong": {
          "latitude": 39.029697,
          "longitude": -94.47504
      },
      "listingType": "",
      "communityName": "",
      "uid": "07534ab6-1716-45e6-9b96-c6980d8b7f54",
      "date": "2024-07-01T19:02:10.088Z"
  },
  {
      "address": "11715 E 60th St, Kansas City, MO 64133",
      "beds": 3,
      "baths": 3,
      "area": 1693,
      "imgSrc": "https://photos.zillowstatic.com/fp/2a3a4da8744aaa4c96c1c0c71f8a23c6-p_e.jpg",
      "price": "$179,900",
      "priceLabel": "$180K",
      "latLong": {
          "latitude": 39.012913,
          "longitude": -94.44271
      },
      "listingType": "",
      "communityName": "",
      "uid": "da203ba2-196e-412d-9d18-ba729bf2b502",
      "date": "2023-10-29T00:09:22.046Z"
  },
  {
      "address": "3930 Indiana Ave, Kansas City, MO 64130",
      "beds": 2,
      "baths": 1,
      "area": 2300,
      "imgSrc": "https://photos.zillowstatic.com/fp/c93c987762f3844823b2acf6f873c0cd-p_e.jpg",
      "price": "$85,000",
      "priceLabel": "$85K",
      "latLong": {
          "latitude": 39.200592,
          "longitude": -94.625565
      },
      "listingType": "",
      "communityName": "",
      "uid": "c4a4979c-7454-42e4-b064-0ca336517a3c",
      "date": "2024-02-18T07:08:41.725Z"
  },
  {
      "address": "8009 E 100th St, Kansas City, MO 64134",
      "beds": 3,
      "baths": 2,
      "area": 2650,
      "imgSrc": "https://photos.zillowstatic.com/fp/6801da5f7b36e06493e7a4ed5ef16a9b-p_e.jpg",
      "price": "$249,999",
      "priceLabel": "$250K",
      "latLong": {
          "latitude": 38.942028,
          "longitude": -94.4963
      },
      "listingType": "",
      "communityName": "",
      "uid": "b90eda62-9793-400e-9183-6a38a4f84e65",
      "date": "2024-10-02T14:17:14.407Z"
  },
  {
      "address": "3805 E Red Bridge Rd, Kansas City, MO 64137",
      "beds": 5,
      "baths": 2,
      "area": 1681,
      "imgSrc": "https://photos.zillowstatic.com/fp/769315d02ec0e8de0ee099c86f3213c4-p_e.jpg",
      "price": "$200,000",
      "priceLabel": "$200K",
      "latLong": {
          "latitude": 38.92412,
          "longitude": -94.545395
      },
      "listingType": "",
      "communityName": "",
      "uid": "12cb39c1-bb9e-4d51-8980-3c73b51046f3",
      "date": "2024-01-04T21:09:02.310Z"
  },
  {
      "address": "3633 N Walrond Ave, Kansas City, MO 64117",
      "beds": 3,
      "baths": 2,
      "area": 1440,
      "imgSrc": "https://photos.zillowstatic.com/fp/939e9863f2f1f9fffb53abba10318218-p_e.jpg",
      "price": "$209,900",
      "priceLabel": "$210K",
      "latLong": {
          "latitude": 39.159954,
          "longitude": -94.54273
      },
      "listingType": "",
      "communityName": "",
      "uid": "95ddb865-e50d-4f58-b0b4-1b310dc830c7",
      "date": "2024-10-02T12:40:21.589Z"
  },
  {
      "address": "9105 Washington St, Kansas City, MO 64114",
      "beds": 3,
      "baths": 2,
      "area": 1800,
      "imgSrc": "https://photos.zillowstatic.com/fp/900d07173708ac907a57f27a35159c59-p_e.jpg",
      "price": "$320,000",
      "priceLabel": "$320K",
      "latLong": {
          "latitude": 38.96316,
          "longitude": -94.59665
      },
      "listingType": "",
      "communityName": "",
      "uid": "97f25542-3492-4ed9-b1c1-2992fc64bcfa",
      "date": "2024-06-15T05:30:43.245Z"
  },
  {
      "address": "1605 NE 52nd Ter, Kansas City, MO 64118",
      "beds": 3,
      "baths": 2,
      "area": 1612,
      "imgSrc": "https://photos.zillowstatic.com/fp/4d46346c4192a7aee2094beb99d24571-p_e.jpg",
      "price": "$260,000",
      "priceLabel": "$260K",
      "latLong": {
          "latitude": 39.18848,
          "longitude": -94.55971
      },
      "listingType": "",
      "communityName": "",
      "uid": "6c157890-e61c-4212-a384-b6b4b00cb60b",
      "date": "2024-08-17T06:36:47.590Z"
  },
  {
      "address": "8934 NE 111th St, Kansas City, MO 64157",
      "beds": 4,
      "baths": 3,
      "area": 2304,
      "imgSrc": "https://photos.zillowstatic.com/fp/3fb5492356ff61822179930cfecebdfc-p_e.jpg",
      "price": "$358,000",
      "priceLabel": "$358K",
      "latLong": {
          "latitude": 39.29344,
          "longitude": -94.46794
      },
      "listingType": "",
      "communityName": "",
      "uid": "1addddfd-9961-4379-8368-9e684b61013c",
      "date": "2024-10-02T01:45:11.253Z"
  },
  {
      "address": "13760 Lookout Dr, Kansas City, MO 64139",
      "beds": 4,
      "baths": 3,
      "area": 2300,
      "imgSrc": "https://photos.zillowstatic.com/fp/13523e4020be26eb0b6bb34b9fe3c4a8-p_e.jpg",
      "price": "$380,000",
      "priceLabel": "$380K",
      "latLong": {
          "latitude": 38.95327,
          "longitude": -94.42113
      },
      "listingType": "",
      "communityName": "",
      "uid": "df9cb043-e223-4b9a-82c3-baeda0806d23",
      "date": "2024-10-02T04:19:31.415Z"
  },
  {
      "address": "806 NE 114th Ter, Kansas City, MO 64155",
      "beds": 5,
      "baths": 4,
      "area": 2050,
      "imgSrc": "https://photos.zillowstatic.com/fp/6a77f371b49459472a5faf62b6314d54-p_e.jpg",
      "price": "$299,000",
      "priceLabel": "$299K",
      "latLong": {
          "latitude": 39.3001,
          "longitude": -94.56873
      },
      "listingType": "",
      "communityName": "",
      "uid": "21b9ba7e-1f1a-4dc2-a671-9604527ba67f",
      "date": "2024-10-02T15:04:10.880Z"
  },
  {
      "address": "11001 N Lewis Ave, Kansas City, MO 64157",
      "beds": 3,
      "baths": 3,
      "area": 1628,
      "imgSrc": "https://photos.zillowstatic.com/fp/62e9d8b910ecdefbbc6e18ba74b24e59-p_e.jpg",
      "price": "$299,000",
      "priceLabel": "$299K",
      "latLong": {
          "latitude": 39.291527,
          "longitude": -94.474365
      },
      "listingType": "",
      "communityName": "",
      "uid": "ff772c08-5e5f-4003-9475-fdd7b4b18401",
      "date": "2024-03-05T14:01:22.424Z"
  },
  {
      "address": "7401 N Amoret Ave, Kansas City, MO 64151",
      "beds": 5,
      "baths": 3,
      "area": 3638,
      "imgSrc": "https://photos.zillowstatic.com/fp/e926af1ea863f5dd338c1e3e9e5c0009-p_e.jpg",
      "price": "$460,000",
      "priceLabel": "$460K",
      "latLong": {
          "latitude": 39.228256,
          "longitude": -94.62749
      },
      "listingType": "",
      "communityName": "",
      "uid": "fa557af3-b34f-49a9-8517-73291aa2737a",
      "date": "2024-01-17T18:14:32.119Z"
  },
  {
      "address": "3800 Chestnut Ave, Kansas City, MO 64128",
      "beds": 3,
      "baths": 1,
      "area": 1460,
      "imgSrc": "https://photos.zillowstatic.com/fp/343546fb219ef87dfc9f34d8334e6eea-p_e.jpg",
      "price": "$79,000",
      "priceLabel": "$79K",
      "latLong": {
          "latitude": 39.05706,
          "longitude": -94.55152
      },
      "listingType": "",
      "communityName": "",
      "uid": "52bcf224-7bbb-4d65-8d22-860244c869a6",
      "date": "2023-12-16T23:51:30.079Z"
  },
  {
      "address": "609 W 86th St, Kansas City, MO 64114",
      "beds": 2,
      "baths": 1,
      "area": 752,
      "imgSrc": "https://photos.zillowstatic.com/fp/0ce3cc4b4284636dd7663c421815b3b7-p_e.jpg",
      "price": "$200,000",
      "priceLabel": "$200K",
      "latLong": {
          "latitude": 38.972523,
          "longitude": -94.59889
      },
      "listingType": "",
      "communityName": "",
      "uid": "0404d791-91f2-4721-b420-b77af01d150b",
      "date": "2024-10-01T20:48:31.311Z"
  },
  {
      "address": "21 E Concord Ave, Kansas City, MO 64112",
      "beds": 6,
      "baths": 5,
      "area": 4535,
      "imgSrc": "https://photos.zillowstatic.com/fp/6ce91e3e6c8b455b8f6491aeee6c1c08-p_e.jpg",
      "price": "$1,349,999",
      "priceLabel": "$1.35M",
      "latLong": {
          "latitude": 39.031525,
          "longitude": -94.58638
      },
      "listingType": "",
      "communityName": "",
      "uid": "23f95fd2-a47f-40ee-b31b-37624af1ad1b",
      "date": "2024-02-20T05:32:09.189Z"
  },
  {
      "address": "3869 Charlotte St, Kansas City, MO 64109",
      "beds": 5,
      "baths": 3,
      "area": 2716,
      "imgSrc": "https://photos.zillowstatic.com/fp/49ee3b949cd39bc112d4291feb9a7abc-p_e.jpg",
      "price": "$624,900",
      "priceLabel": "$625K",
      "latLong": {
          "latitude": 39.05633,
          "longitude": -94.57527
      },
      "listingType": "",
      "communityName": "",
      "uid": "7d8b53b9-c12c-4c14-8602-05f3e7bf2c5b",
      "date": "2024-09-12T18:12:26.140Z"
  },
  {
      "address": "6021 Locust St, Kansas City, MO 64110",
      "beds": 3,
      "baths": 2,
      "area": 1367,
      "imgSrc": "https://photos.zillowstatic.com/fp/d6006bfaa4298a85457295c78660a34b-p_e.jpg",
      "price": "$299,900",
      "priceLabel": "$300K",
      "latLong": {
          "latitude": 39.01775,
          "longitude": -94.58209
      },
      "listingType": "",
      "communityName": "",
      "uid": "aa5c82a3-bde8-4283-8abf-f77e38a436e8",
      "date": "2023-10-18T02:51:48.438Z"
  },
  {
      "address": "7732 Jefferson St, Kansas City, MO 64114",
      "beds": 2,
      "baths": 1,
      "area": 792,
      "imgSrc": "https://photos.zillowstatic.com/fp/fba3d3573ea1f4930d80f31579b041d3-p_e.jpg",
      "price": "$235,000",
      "priceLabel": "$235K",
      "latLong": {
          "latitude": 38.98759,
          "longitude": -94.59792
      },
      "listingType": "",
      "communityName": "",
      "uid": "f51b6102-f43e-444c-a307-04306f740523",
      "date": "2024-09-07T12:53:38.000Z"
  },
  {
      "address": "4535 N Hardesty Ave, Kansas City, MO 64117",
      "beds": 5,
      "baths": 2,
      "area": 2160,
      "imgSrc": "https://photos.zillowstatic.com/fp/9b22d09c2d760f0c9cf71d04419a3a54-p_e.jpg",
      "price": "$91,500",
      "priceLabel": "$92K",
      "latLong": {
          "latitude": 39.176716,
          "longitude": -94.51644
      },
      "listingType": "",
      "communityName": "",
      "uid": "2d0e874e-59d3-49e3-bf02-a92702bc11a2",
      "date": "2024-10-02T08:12:12.270Z"
  },
  {
      "address": "39 W 70th Ter, Kansas City, MO 64113",
      "beds": 3,
      "baths": 2,
      "area": 2728,
      "imgSrc": "https://photos.zillowstatic.com/fp/00367774bdae8203e8818fa997cdf0ba-p_e.jpg",
      "price": "$365,000",
      "priceLabel": "$365K",
      "latLong": {
          "latitude": 39.000015,
          "longitude": -94.590965
      },
      "listingType": "",
      "communityName": "",
      "uid": "8ddb6ff6-1543-4dfe-bb8d-c11c3cc15a0a",
      "date": "2024-07-24T07:58:58.033Z"
  },
  {
      "address": "428 W 70th Ter, Kansas City, MO 64113",
      "beds": 3,
      "baths": 2,
      "area": 1781,
      "imgSrc": "https://photos.zillowstatic.com/fp/cbf7f77f787d9b9fe6bc8cbfdce7e6ff-p_e.jpg",
      "price": "$449,500",
      "priceLabel": "$450K",
      "latLong": {
          "latitude": 39.000786,
          "longitude": -94.59528
      },
      "listingType": "",
      "communityName": "",
      "uid": "b924cb5e-13f8-4271-8fc5-74af4d6816d1",
      "date": "2024-01-08T08:21:44.422Z"
  },
  {
      "address": "5730 NE 44th St, Kansas City, MO 64117",
      "beds": 8,
      "baths": 3,
      "area": 3490,
      "imgSrc": "https://photos.zillowstatic.com/fp/cfd91147ea1b8901a619c2b70ab9d392-p_e.jpg",
      "price": "$480,000",
      "priceLabel": "$480K",
      "latLong": {
          "latitude": 39.173904,
          "longitude": -94.51326
      },
      "listingType": "",
      "communityName": "",
      "uid": "80cb33e0-2ceb-49ed-9909-fa261e6127ed",
      "date": "2024-01-05T05:42:26.050Z"
  },
  {
      "address": "6326 Oak St, Kansas City, MO 64113",
      "beds": 4,
      "baths": 3,
      "area": 2008,
      "imgSrc": "https://photos.zillowstatic.com/fp/8f65add23da7a4b821430f0ab7548d42-p_e.jpg",
      "price": "$415,000",
      "priceLabel": "$415K",
      "latLong": {
          "latitude": 39.012737,
          "longitude": -94.584175
      },
      "listingType": "",
      "communityName": "",
      "uid": "5ea2a704-6d2f-464f-9565-eaae8eb2121c",
      "date": "2024-03-02T02:26:20.269Z"
  },
  {
      "address": "7303 Campbell St, Kansas City, MO 64131",
      "beds": 3,
      "baths": 3,
      "area": 2475,
      "imgSrc": "https://photos.zillowstatic.com/fp/3a35958131910ecffacd4bafa54dc62e-p_e.jpg",
      "price": "$350,000",
      "priceLabel": "$350K",
      "latLong": {
          "latitude": 38.995132,
          "longitude": -94.5775
      },
      "listingType": "",
      "communityName": "",
      "uid": "ed54d3ee-e3eb-49ca-95c4-76b38d50d59f",
      "date": "2024-04-02T16:49:07.083Z"
  },
  {
      "address": "5605 Wornall Rd, Kansas City, MO 64113",
      "beds": 3,
      "baths": 3,
      "area": 2208,
      "imgSrc": "https://photos.zillowstatic.com/fp/b783c78eff762370a4e84f1991ebf518-p_e.jpg",
      "price": "$575,000",
      "priceLabel": "$575K",
      "latLong": {
          "latitude": 39.026196,
          "longitude": -94.59212
      },
      "listingType": "",
      "communityName": "",
      "uid": "4725ef80-ed6f-49a2-9229-b19473144ac4",
      "date": "2024-05-02T20:31:34.881Z"
  },
  {
      "address": "5535 NW 80th Ter, Kansas City, MO 64151",
      "beds": 4,
      "baths": 4,
      "area": 3849,
      "imgSrc": "https://photos.zillowstatic.com/fp/e24efe14839a687410e42eb63e7fe59d-p_e.jpg",
      "price": "$525,000",
      "priceLabel": "$525K",
      "latLong": {
          "latitude": 39.240196,
          "longitude": -94.64454
      },
      "listingType": "",
      "communityName": "",
      "uid": "66ec01c8-a01e-4707-8789-741a6905d398",
      "date": "2024-10-01T22:28:03.139Z"
  },
  {
      "address": "33 E 53rd Ter, Kansas City, MO 64112",
      "beds": 3,
      "baths": 2,
      "area": 2110,
      "imgSrc": "https://photos.zillowstatic.com/fp/18a0d70edbe04cc54498799155c39d37-p_e.jpg",
      "price": "$499,000",
      "priceLabel": "$499K",
      "latLong": {
          "latitude": 39.029827,
          "longitude": -94.586006
      },
      "listingType": "",
      "communityName": "",
      "uid": "5d05a846-93da-4ef9-95be-a21a283428f9",
      "date": "2024-09-27T15:19:35.242Z"
  },
  {
      "address": "5315 N Troost Ave, Kansas City, MO 64118",
      "beds": 4,
      "baths": 2,
      "area": 2850,
      "imgSrc": "https://photos.zillowstatic.com/fp/a11403dd09751b463c54bdb143688b4e-p_e.jpg",
      "price": "$334,500",
      "priceLabel": "$335K",
      "latLong": {
          "latitude": 39.19132,
          "longitude": -94.5668
      },
      "listingType": "",
      "communityName": "",
      "uid": "807235bd-7718-4eca-a20b-3cdda3b9dae9",
      "date": "2024-08-04T02:07:25.058Z"
  },
  {
      "address": "3941 N Grand Ave, Kansas City, MO 64116",
      "beds": 3,
      "baths": 3,
      "area": 2320,
      "imgSrc": "https://photos.zillowstatic.com/fp/aa3768aa70e6b3e3941c51d80840b29b-p_e.jpg",
      "price": "$399,000",
      "priceLabel": "$399K",
      "latLong": {
          "latitude": 39.16596,
          "longitude": -94.57879
      },
      "listingType": "",
      "communityName": "",
      "uid": "1851d176-5059-4dc4-809c-563c2a13004c",
      "date": "2024-10-02T02:09:13.649Z"
  },
  {
      "address": "648 W 61st Ter, Kansas City, MO 64113",
      "beds": 4,
      "baths": 3,
      "area": 2994,
      "imgSrc": "https://photos.zillowstatic.com/fp/d0e35a949942918b479f8810961b2d76-p_e.jpg",
      "price": "$525,000",
      "priceLabel": "$525K",
      "latLong": {
          "latitude": 39.01672,
          "longitude": -94.59778
      },
      "listingType": "",
      "communityName": "",
      "uid": "75ed55f7-1824-40d8-b0e0-1ea679e77ce6",
      "date": "2024-01-10T15:19:26.150Z"
  },
  {
      "address": "2329 Jarboe St, Kansas City, MO 64108",
      "beds": 0,
      "baths": 1,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/e5bb383b56947f155bc5ca1bb5ef2f76-p_e.jpg",
      "price": "$334,900",
      "priceLabel": "$335K",
      "latLong": {
          "latitude": 39.08487,
          "longitude": -94.59698
      },
      "listingType": "",
      "communityName": "",
      "uid": "44e5a495-73c9-453c-83cd-0775a1d4385b",
      "date": "2024-10-02T05:22:34.417Z"
  },
  {
      "address": "804 NE 100th Ter, Kansas City, MO 64155",
      "beds": 3,
      "baths": 4,
      "area": 3085,
      "imgSrc": "https://photos.zillowstatic.com/fp/6b3f6ce803e33e2c7d6906654d16a891-p_e.jpg",
      "price": "$375,000",
      "priceLabel": "$375K",
      "latLong": {
          "latitude": 39.276703,
          "longitude": -94.57006
      },
      "listingType": "",
      "communityName": "",
      "uid": "baa94da5-e712-4d02-be19-9d954a579414",
      "date": "2024-03-01T14:59:20.944Z"
  },
  {
      "address": "8426 N Bales Ave, Kansas City, MO 64156",
      "beds": 2,
      "baths": 1,
      "area": 768,
      "imgSrc": "https://photos.zillowstatic.com/fp/6dcd56a16f81c47403a019b64aa3a3c6-p_e.jpg",
      "price": "$78,000",
      "priceLabel": "$78K",
      "latLong": {
          "latitude": 39.247395,
          "longitude": -94.5382
      },
      "listingType": "",
      "communityName": "",
      "uid": "65f7837a-5389-4e80-a78d-1e2044bad86d",
      "date": "2024-06-24T05:37:57.979Z"
  },
  {
      "address": "4127 Montgall Ave, Kansas City, MO 64130",
      "beds": 3,
      "baths": 2,
      "area": 1716,
      "imgSrc": "https://photos.zillowstatic.com/fp/b4e478f1b17c1ae221cef44beb3bfea9-p_e.jpg",
      "price": "$132,500",
      "priceLabel": "$133K",
      "latLong": {
          "latitude": 39.05079,
          "longitude": -94.55234
      },
      "listingType": "",
      "communityName": "",
      "uid": "cd877ead-8caf-4f4c-a17f-0909af0816cc",
      "date": "2024-10-02T07:52:14.708Z"
  },
  {
      "address": "1201 NE 94th Ter, Kansas City, MO 64155",
      "beds": 4,
      "baths": 5,
      "area": 4632,
      "imgSrc": "https://photos.zillowstatic.com/fp/f1fe5e6ee906668fc7b621f1bec2dbcf-p_e.jpg",
      "price": "$580,000",
      "priceLabel": "$580K",
      "latLong": {
          "latitude": 39.264652,
          "longitude": -94.5648
      },
      "listingType": "",
      "communityName": "",
      "uid": "38aa69b0-40bd-40a0-959f-13e32b9cfc02",
      "date": "2024-10-02T10:15:14.032Z"
  },
  {
      "address": "909 Walnut St #31, Kansas City, MO 64106",
      "beds": 2,
      "baths": 2,
      "area": 2271,
      "imgSrc": "https://photos.zillowstatic.com/fp/dd8852517d64d85a8a43c305acf15c52-p_e.jpg",
      "price": "$1,390,000",
      "priceLabel": "$1.39M",
      "latLong": {
          "latitude": 39.10322,
          "longitude": -94.581566
      },
      "listingType": "",
      "communityName": "",
      "uid": "de3aa5f0-5037-483a-ae0c-6b5a5564294f",
      "date": "2023-11-21T21:55:27.014Z"
  },
  {
      "address": "3900 Charlotte St, Kansas City, MO 64110",
      "beds": 5,
      "baths": 3,
      "area": 2522,
      "imgSrc": "https://photos.zillowstatic.com/fp/2b458d1a4fc949c70ddc6be4e49f8d67-p_e.jpg",
      "price": "$450,000",
      "priceLabel": "$450K",
      "latLong": {
          "latitude": 39.056084,
          "longitude": -94.57595
      },
      "listingType": "",
      "communityName": "",
      "uid": "9071ff95-b9a7-415d-8342-5b3b294e4892",
      "date": "2024-04-18T07:18:35.984Z"
  },
  {
      "address": "9121 Western Hills Dr, Kansas City, MO 64114",
      "beds": 3,
      "baths": 3,
      "area": 1197,
      "imgSrc": "https://photos.zillowstatic.com/fp/15a46edffa1a4e33f68130d4c18ec641-p_e.jpg",
      "price": "$274,950",
      "priceLabel": "$275K",
      "latLong": {
          "latitude": 38.962433,
          "longitude": -94.59865
      },
      "listingType": "",
      "communityName": "",
      "uid": "22088ef3-8063-44fb-abd6-fc121d171e52",
      "date": "2024-02-27T01:52:35.109Z"
  },
  {
      "address": "10804 Grandview Rd, Kansas City, MO 64137",
      "beds": 6,
      "baths": 5,
      "area": 4382,
      "imgSrc": "https://photos.zillowstatic.com/fp/eb5a5365e0c0967bd4fedcc6ecc2da47-p_e.jpg",
      "price": "$1,000,000",
      "priceLabel": "$1.00M",
      "latLong": {
          "latitude": 38.930077,
          "longitude": -94.54247
      },
      "listingType": "",
      "communityName": "",
      "uid": "9d368631-bd23-4ea3-8e95-32cce8a672c9",
      "date": "2023-10-14T11:53:35.195Z"
  },
  {
      "address": "2608 W Paseo Blvd, Kansas City, MO 64108",
      "beds": 4,
      "baths": 2,
      "area": 2446,
      "imgSrc": "https://photos.zillowstatic.com/fp/7398fb8dc673a73d89de969c1155a3ca-p_e.jpg",
      "price": "$425,500",
      "priceLabel": "$426K",
      "latLong": {
          "latitude": 39.078957,
          "longitude": -94.56738
      },
      "listingType": "",
      "communityName": "",
      "uid": "10ec1f2c-7567-4970-907e-ce3376387b69",
      "date": "2023-12-04T09:19:11.206Z"
  },
  {
      "address": "614 E 107th Ter, Kansas City, MO 64131",
      "beds": 4,
      "baths": 2,
      "area": 2067,
      "imgSrc": "https://photos.zillowstatic.com/fp/a54e9c2e57456773c74e9f3ee5b8b79a-p_e.jpg",
      "price": "$299,900",
      "priceLabel": "$300K",
      "latLong": {
          "latitude": 38.93334,
          "longitude": -94.58376
      },
      "listingType": "",
      "communityName": "",
      "uid": "58e36028-2027-4c13-9d76-7d81239f51a7",
      "date": "2023-12-23T03:39:48.193Z"
  },
  {
      "address": "508 NW 110th Ter, Kansas City, MO 64155",
      "beds": 5,
      "baths": 3,
      "area": 3148,
      "imgSrc": "https://photos.zillowstatic.com/fp/020ea5e35448531db7c320d32d516da8-p_e.jpg",
      "price": "$450K",
      "priceLabel": "$450K",
      "latLong": {
          "latitude": 39.29414,
          "longitude": -94.58603
      },
      "listingType": "",
      "communityName": "",
      "uid": "a81d3305-d510-4ca6-b70e-e84cbc46ba2b",
      "date": "2024-03-22T15:53:46.730Z"
  },
  {
      "address": "3901 Manheim Rd, Kansas City, MO 64110",
      "beds": 4,
      "baths": 4,
      "area": 3150,
      "imgSrc": "https://photos.zillowstatic.com/fp/a1461fee613ef83f20fee663a0a8d282-p_e.jpg",
      "price": "$319,900",
      "priceLabel": "$320K",
      "latLong": {
          "latitude": 39.055744,
          "longitude": -94.56832
      },
      "listingType": "",
      "communityName": "",
      "uid": "e1e557f5-7e0d-4374-8af3-1e7826c5c7b8",
      "date": "2024-10-02T11:22:56.979Z"
  },
  {
      "address": "6208 N Bell St, Kansas City, MO 64151",
      "beds": 3,
      "baths": 3,
      "area": 2470,
      "imgSrc": "https://photos.zillowstatic.com/fp/4531f4a3fadf63c6224f238b87088774-p_e.jpg",
      "price": "$310,000",
      "priceLabel": "$310K",
      "latLong": {
          "latitude": 39.20816,
          "longitude": -94.60506
      },
      "listingType": "",
      "communityName": "",
      "uid": "0f0e519f-60d9-4e21-a422-c8392e1fdd94",
      "date": "2024-08-17T16:38:47.136Z"
  },
  {
      "address": "2242 E Gregory Blvd, Kansas City, MO 64132",
      "beds": 3,
      "baths": 2,
      "area": 1184,
      "imgSrc": "https://photos.zillowstatic.com/fp/04481c4ae77e5a023d03e31e8a7e2b3a-p_e.jpg",
      "price": "$115,000",
      "priceLabel": "$115K",
      "latLong": {
          "latitude": 38.998444,
          "longitude": -94.55933
      },
      "listingType": "",
      "communityName": "",
      "uid": "c27f8409-7e5d-408d-84c0-8ce50feced17",
      "date": "2024-08-03T17:53:16.859Z"
  },
  {
      "address": "14 NW 39th St, Kansas City, MO 64116",
      "beds": 4,
      "baths": 4,
      "area": 4008,
      "imgSrc": "https://photos.zillowstatic.com/fp/24c8a7539106ad80df439732663bbdb9-p_e.jpg",
      "price": "$375,000",
      "priceLabel": "$375K",
      "latLong": {
          "latitude": 39.165485,
          "longitude": -94.58246
      },
      "listingType": "",
      "communityName": "",
      "uid": "1a4fc424-dd49-4a04-815b-23b33cde103d",
      "date": "2024-03-13T11:57:08.664Z"
  },
  {
      "address": "462 W 104th St UNIT D, Kansas City, MO 64114",
      "beds": 1,
      "baths": 1,
      "area": 810,
      "imgSrc": "https://photos.zillowstatic.com/fp/b4eb05aa3b537a604afa569c4e1e901f-p_e.jpg",
      "price": "$98,900",
      "priceLabel": "$99K",
      "latLong": {
          "latitude": 38.938194,
          "longitude": -94.60059
      },
      "listingType": "",
      "communityName": "",
      "uid": "2c6e7da0-609c-4731-a9a7-e89c7edd3311",
      "date": "2024-10-02T14:50:45.117Z"
  },
  {
      "address": "127 E 78th St, Kansas City, MO 64114",
      "beds": 2,
      "baths": 2,
      "area": 857,
      "imgSrc": "https://photos.zillowstatic.com/fp/ea00ddb1cc6bd65ace078e3d42e0e845-p_e.jpg",
      "price": "$199,900",
      "priceLabel": "$200K",
      "latLong": {
          "latitude": 38.98663,
          "longitude": -94.58925
      },
      "listingType": "",
      "communityName": "",
      "uid": "11743d3f-f04f-4439-a74e-90479893234c",
      "date": "2023-11-23T04:54:40.817Z"
  },
  {
      "address": "7741 Ward Parkway Plz, Kansas City, MO 64114",
      "beds": 3,
      "baths": 2,
      "area": 1504,
      "imgSrc": "https://photos.zillowstatic.com/fp/58181b00efc26116ea8491277975c795-p_e.jpg",
      "price": "$320,000",
      "priceLabel": "$320K",
      "latLong": {
          "latitude": 38.985626,
          "longitude": -94.60348
      },
      "listingType": "",
      "communityName": "",
      "uid": "3603b49b-3025-4a10-af58-e54c41b0087c",
      "date": "2024-05-14T14:29:23.044Z"
  },
  {
      "address": "6308 Vernon Ct, Kansas City, MO 64133",
      "beds": 4,
      "baths": 4,
      "area": 4970,
      "imgSrc": "https://photos.zillowstatic.com/fp/077295d518e5a9069b36a23cb8ab3b5f-p_e.jpg",
      "price": "$359,000",
      "priceLabel": "$359K",
      "latLong": {
          "latitude": 39.006813,
          "longitude": -94.432304
      },
      "listingType": "",
      "communityName": "",
      "uid": "0c70243e-532b-459a-afd6-24fc1485cbd7",
      "date": "2023-12-02T15:23:06.216Z"
  },
  {
      "address": "1812 Summit St, Kansas City, MO 64108",
      "beds": 4,
      "baths": 5,
      "area": 5392,
      "imgSrc": "https://photos.zillowstatic.com/fp/0fddf7a7a0372172ededceedfb1cebde-p_e.jpg",
      "price": "$2,700,000",
      "priceLabel": "$2.70M",
      "latLong": {
          "latitude": 39.0905,
          "longitude": -94.593834
      },
      "listingType": "",
      "communityName": "",
      "uid": "0cef8c2d-27ca-47de-b98b-6433775b411c",
      "date": "2023-10-17T23:08:11.975Z"
  },
  {
      "address": "3623 Thompson Ave, Kansas City, MO 64124",
      "beds": 3,
      "baths": 2,
      "area": 1350,
      "imgSrc": "https://photos.zillowstatic.com/fp/b808c332a2114a0402740a2953dfc0e9-p_e.jpg",
      "price": "$179,500",
      "priceLabel": "$180K",
      "latLong": {
          "latitude": 39.20041,
          "longitude": -94.625305
      },
      "listingType": "",
      "communityName": "",
      "uid": "588bf1c5-ec03-496f-9df7-74434f296a13",
      "date": "2024-02-29T19:21:28.856Z"
  },
  {
      "address": "8228 Summit St, Kansas City, MO 64114",
      "beds": 3,
      "baths": 3,
      "area": 1633,
      "imgSrc": "https://photos.zillowstatic.com/fp/5e614225c8e49959484bd272e7e92383-p_e.jpg",
      "price": "$280,000",
      "priceLabel": "$280K",
      "latLong": {
          "latitude": 38.978706,
          "longitude": -94.599846
      },
      "listingType": "",
      "communityName": "",
      "uid": "ddb6ef9e-a951-4be4-adaa-4543c03948bf",
      "date": "2024-10-01T21:05:10.579Z"
  },
  {
      "address": "1228 W 56th St, Kansas City, MO 64113",
      "beds": 8,
      "baths": 9,
      "area": 12554,
      "imgSrc": "https://photos.zillowstatic.com/fp/431cdc1bf1fabe780fb04e55748276eb-p_e.jpg",
      "price": "$7,700,000",
      "priceLabel": "$7.70M",
      "latLong": {
          "latitude": 39.02693,
          "longitude": -94.60578
      },
      "listingType": "",
      "communityName": "",
      "uid": "afaa5d23-0b79-4d4c-aa67-8a6361e8a4fd",
      "date": "2024-04-21T02:59:43.654Z"
  },
  {
      "address": "610 E 75th St, Kansas City, MO 64131",
      "beds": 3,
      "baths": 3,
      "area": 3856,
      "imgSrc": "https://photos.zillowstatic.com/fp/eece6c8bf09fc5512946054bce649278-p_e.jpg",
      "price": "$250,000",
      "priceLabel": "$250K",
      "latLong": {
          "latitude": 38.992092,
          "longitude": -94.58195
      },
      "listingType": "",
      "communityName": "",
      "uid": "48a7aa48-c7c2-4b42-b0cb-4b63aed087af",
      "date": "2024-10-01T17:10:12.034Z"
  },
  {
      "address": "3647 N Grand Ave, Kansas City, MO 64116",
      "beds": 4,
      "baths": 2,
      "area": 1558,
      "imgSrc": "https://photos.zillowstatic.com/fp/6ca3497c3dc18f277496c924602dcb77-p_e.jpg",
      "price": "$325,000",
      "priceLabel": "$325K",
      "latLong": {
          "latitude": 39.16123,
          "longitude": -94.578064
      },
      "listingType": "",
      "communityName": "",
      "uid": "3d8641c5-e426-4c37-baff-62f0ae20bcd6",
      "date": "2024-10-02T02:08:24.021Z"
  },
  {
      "address": "5316 NW 83rd Ter, Kansas City, MO 64151",
      "beds": 4,
      "baths": 3,
      "area": 2344,
      "imgSrc": "https://photos.zillowstatic.com/fp/6ca04f556fe8eaade2346f255bc9b8d7-p_e.jpg",
      "price": "$335,000",
      "priceLabel": "$335K",
      "latLong": {
          "latitude": 39.246372,
          "longitude": -94.64164
      },
      "listingType": "",
      "communityName": "",
      "uid": "63485860-8821-4eb0-8fbb-12f7c4480259",
      "date": "2024-08-08T03:01:13.449Z"
  },
  {
      "address": "5335 Osage Ave, Kansas City, MO 64133",
      "beds": 4,
      "baths": 3,
      "area": 2368,
      "imgSrc": "https://photos.zillowstatic.com/fp/dbf5b3bddedd75951be77ccf903dabc0-p_e.jpg",
      "price": "$349,900",
      "priceLabel": "$350K",
      "latLong": {
          "latitude": 39.023804,
          "longitude": -94.42104
      },
      "listingType": "",
      "communityName": "",
      "uid": "185e8650-855b-4996-bd0e-27faed6b2411",
      "date": "2024-06-19T20:51:35.902Z"
  },
  {
      "address": "4412 Terrace St, Kansas City, MO 64111",
      "beds": 3,
      "baths": 3,
      "area": 1828,
      "imgSrc": "https://photos.zillowstatic.com/fp/2657dae72717ca91a7f8064457fb449b-p_e.jpg",
      "price": "$399,000",
      "priceLabel": "$399K",
      "latLong": {
          "latitude": 39.047604,
          "longitude": -94.603
      },
      "listingType": "",
      "communityName": "",
      "uid": "b5e0b69b-187c-43f6-aa2c-8c82231ba682",
      "date": "2024-07-04T05:30:44.933Z"
  },
  {
      "address": "8 W 65th Ter, Kansas City, MO 64113",
      "beds": 4,
      "baths": 3,
      "area": 2148,
      "imgSrc": "https://photos.zillowstatic.com/fp/d9e79b5558df302243a306c6a151b651-p_e.jpg",
      "price": "$499,000",
      "priceLabel": "$499K",
      "latLong": {
          "latitude": 39.00972,
          "longitude": -94.589066
      },
      "listingType": "",
      "communityName": "",
      "uid": "60cd310c-0fb9-4248-a9f8-558ec5a4d591",
      "date": "2024-05-03T22:17:01.271Z"
  },
  {
      "address": "1704 E 131st St, Kansas City, MO 64146",
      "beds": 4,
      "baths": 2,
      "area": 2216,
      "imgSrc": "https://photos.zillowstatic.com/fp/06553b0ec7fc1be6f60cf2ee497202c4-p_e.jpg",
      "price": "$650,000",
      "priceLabel": "$650K",
      "latLong": {
          "latitude": 38.890125,
          "longitude": -94.57387
      },
      "listingType": "",
      "communityName": "",
      "uid": "ca2c08af-1948-4965-ad6b-0d062cc57538",
      "date": "2024-07-18T23:06:56.534Z"
  },
  {
      "address": "3935 Central St, Kansas City, MO 64111",
      "beds": 4,
      "baths": 3,
      "area": 2016,
      "imgSrc": "https://photos.zillowstatic.com/fp/fff718bc0d23760fba0bf73b3cdba763-p_e.jpg",
      "price": "$450,000",
      "priceLabel": "$450K",
      "latLong": {
          "latitude": 39.055172,
          "longitude": -94.589386
      },
      "listingType": "",
      "communityName": "",
      "uid": "15e4d27e-c92a-4b12-9a66-f92fa7421f81",
      "date": "2024-07-18T23:08:01.633Z"
  },
  {
      "address": "4121 Woodland Ave, Kansas City, MO 64130",
      "beds": 4,
      "baths": 2,
      "area": 1424,
      "imgSrc": "https://photos.zillowstatic.com/fp/53aafd4c8eb15bb023d6b57e5a3ddca2-p_e.jpg",
      "price": "$80,000",
      "priceLabel": "$80K",
      "latLong": {
          "latitude": 39.051376,
          "longitude": -94.56274
      },
      "listingType": "",
      "communityName": "",
      "uid": "4d8bcb62-c8b7-476e-9112-be6f1d221840",
      "date": "2024-09-12T05:43:13.982Z"
  },
  {
      "address": "1837 Pendleton Ave, Kansas City, MO 64124",
      "beds": 4,
      "baths": 3,
      "area": 3888,
      "imgSrc": "https://photos.zillowstatic.com/fp/865dcc77841c28a904b6ca8585aa1f6d-p_e.jpg",
      "price": "$450,000",
      "priceLabel": "$450K",
      "latLong": {
          "latitude": 39.112335,
          "longitude": -94.55669
      },
      "listingType": "",
      "communityName": "",
      "uid": "5b54245b-da34-4248-83c0-8459a07d83ed",
      "date": "2024-03-08T02:10:59.541Z"
  },
  {
      "address": "8553 Wornall Rd, Kansas City, MO 64114",
      "beds": 3,
      "baths": 2,
      "area": 1200,
      "imgSrc": "https://photos.zillowstatic.com/fp/964bc0a9ac6b308e362059f2d3f49b83-p_e.jpg",
      "price": "$239,999",
      "priceLabel": "$240K",
      "latLong": {
          "latitude": 38.971992,
          "longitude": -94.59487
      },
      "listingType": "",
      "communityName": "",
      "uid": "6403264c-2fe0-4b7e-a829-45906b26d360",
      "date": "2023-11-20T19:36:51.059Z"
  },
  {
      "address": "5443 N Brighton Ave, Kansas City, MO 64119",
      "beds": 3,
      "baths": 2,
      "area": 1500,
      "imgSrc": "https://photos.zillowstatic.com/fp/71b1196518140ed9c9ee3b5cefdaed04-p_e.jpg",
      "price": "$165,000",
      "priceLabel": "$165K",
      "latLong": {
          "latitude": 39.192863,
          "longitude": -94.52026
      },
      "listingType": "",
      "communityName": "",
      "uid": "8418e873-edcd-4f67-b8e6-5fea0e613c7d",
      "date": "2024-07-31T14:09:07.928Z"
  },
  {
      "address": "8341 N Flora Ave, Kansas City, MO 64118",
      "beds": 4,
      "baths": 4,
      "area": 2645,
      "imgSrc": "https://photos.zillowstatic.com/fp/80f60591c0b628dffdb8d1ba1ac3bd60-p_e.jpg",
      "price": "$380,000",
      "priceLabel": "$380K",
      "latLong": {
          "latitude": 39.246735,
          "longitude": -94.559784
      },
      "listingType": "",
      "communityName": "",
      "uid": "81a47638-ea3a-4935-bc46-ab8078419609",
      "date": "2024-10-02T01:01:05.445Z"
  },
  {
      "address": "5900 NW Caney Creek Dr, Kansas City, MO 64151",
      "beds": 3,
      "baths": 3,
      "area": 2113,
      "imgSrc": "https://photos.zillowstatic.com/fp/15f8bff982c9d58780be3b8228dbb906-p_e.jpg",
      "price": "$318,500",
      "priceLabel": "$319K",
      "latLong": {
          "latitude": 39.217636,
          "longitude": -94.6486
      },
      "listingType": "",
      "communityName": "",
      "uid": "d145f6d6-88e4-46cd-b765-de0fa78cf9fd",
      "date": "2024-10-02T05:33:33.818Z"
  },
  {
      "address": "7914 Ward Parkway Plz, Kansas City, MO 64114",
      "beds": 3,
      "baths": 2,
      "area": 1197,
      "imgSrc": "https://photos.zillowstatic.com/fp/2db93d42bbf9563d342901b728654240-p_e.jpg",
      "price": "$299,000",
      "priceLabel": "$299K",
      "latLong": {
          "latitude": 38.98453,
          "longitude": -94.60433
      },
      "listingType": "",
      "communityName": "",
      "uid": "2d335ca9-83a2-4c55-87c1-601c58d6dc41",
      "date": "2024-07-04T13:50:40.317Z"
  },
  {
      "address": "3428 S Benton Ave, Kansas City, MO 64128",
      "beds": 3,
      "baths": 2,
      "area": 1890,
      "imgSrc": "https://photos.zillowstatic.com/fp/a4ec96bc727cc4950a2ba38e4885f2ad-p_e.jpg",
      "price": "$175,000",
      "priceLabel": "$175K",
      "latLong": {
          "latitude": 39.063274,
          "longitude": -94.55004
      },
      "listingType": "",
      "communityName": "",
      "uid": "f7f2ba07-8fec-4d1d-b87d-2ceaaf1f9021",
      "date": "2024-07-31T12:04:47.093Z"
  },
  {
      "address": "429 W 10th St, Kansas City, MO 64105",
      "beds": 2,
      "baths": 3,
      "area": 1098,
      "imgSrc": "https://photos.zillowstatic.com/fp/d6ec0d1b5921e49cd9593dba04f33643-p_e.jpg",
      "price": "$180K",
      "priceLabel": "$180K",
      "latLong": {
          "latitude": 39.10224,
          "longitude": -94.58933
      },
      "listingType": "",
      "communityName": "",
      "uid": "f7c30218-e1e4-479e-88f4-2da0aefb42af",
      "date": "2024-10-01T17:20:54.044Z"
  },
  {
      "address": "1315 E 75th St, Kansas City, MO 64131",
      "beds": 4,
      "baths": 2,
      "area": 2422,
      "imgSrc": "https://photos.zillowstatic.com/fp/d940eba68533cace694421c9a549d547-p_e.jpg",
      "price": "$195,900",
      "priceLabel": "$196K",
      "latLong": {
          "latitude": 38.99114,
          "longitude": -94.57248
      },
      "listingType": "",
      "communityName": "",
      "uid": "f81e6a2d-50f3-41b8-a0dc-8ecfb6441a5f",
      "date": "2024-10-02T15:57:54.969Z"
  },
  {
      "address": "41 E 107th St, Kansas City, MO 64114",
      "beds": 3,
      "baths": 3,
      "area": 2757,
      "imgSrc": "https://photos.zillowstatic.com/fp/8dc95549c7a8255c633150c00a20ae6d-p_e.jpg",
      "price": "$375,000",
      "priceLabel": "$375K",
      "latLong": {
          "latitude": 38.933727,
          "longitude": -94.59076
      },
      "listingType": "",
      "communityName": "",
      "uid": "8129f15e-3bfe-4eaf-ae6a-14b383687a4c",
      "date": "2024-07-09T05:13:45.558Z"
  },
  {
      "address": "9523 Madison Ave, Kansas City, MO 64114",
      "beds": 4,
      "baths": 3,
      "area": 3140,
      "imgSrc": "https://photos.zillowstatic.com/fp/1d87b2c3f445716d112e1e8bf8e6fdc0-p_e.jpg",
      "price": "$549,500",
      "priceLabel": "$550K",
      "latLong": {
          "latitude": 38.954563,
          "longitude": -94.600945
      },
      "listingType": "",
      "communityName": "",
      "uid": "be6e5bf2-053e-4c01-9fd6-f244e2b25f04",
      "date": "2024-09-20T04:15:09.356Z"
  },
  {
      "address": "3635 Belleview Ave, Kansas City, MO 64111",
      "beds": 5,
      "baths": 6,
      "area": 6128,
      "imgSrc": "https://photos.zillowstatic.com/fp/b5abca5cd19266aa6758c420e9cff542-p_e.jpg",
      "price": "$1,850,000",
      "priceLabel": "$1.85M",
      "latLong": {
          "latitude": 39.061546,
          "longitude": -94.59723
      },
      "listingType": "",
      "communityName": "",
      "uid": "f6715a1c-abc6-4ef2-ac94-728436273b3f",
      "date": "2024-10-02T11:45:42.792Z"
  },
  {
      "address": "12409 E 53rd St, Kansas City, MO 64133",
      "beds": 4,
      "baths": 3,
      "area": 2116,
      "imgSrc": "https://photos.zillowstatic.com/fp/b67a2ae151d14f411bb55f81fb481e82-p_e.jpg",
      "price": "$270,000",
      "priceLabel": "$270K",
      "latLong": {
          "latitude": 39.02512,
          "longitude": -94.43161
      },
      "listingType": "",
      "communityName": "",
      "uid": "d784cab5-6699-478c-abee-897ffaf1ebf3",
      "date": "2024-07-12T11:35:13.179Z"
  },
  {
      "address": "912 W 121st St, Kansas City, MO 64145",
      "beds": 4,
      "baths": 4,
      "area": 3735,
      "imgSrc": "https://photos.zillowstatic.com/fp/0f48511c38614d16d7418c7d799cbffc-p_e.jpg",
      "price": "$419,995",
      "priceLabel": "$420K",
      "latLong": {
          "latitude": 38.90951,
          "longitude": -94.60579
      },
      "listingType": "",
      "communityName": "",
      "uid": "ce91bde9-668c-46df-93b7-ee4fec70eb15",
      "date": "2024-09-25T00:24:47.024Z"
  },
  {
      "address": "8905 E 89th Ter, Kansas City, MO 64138",
      "beds": 3,
      "baths": 2,
      "area": 1226,
      "imgSrc": "https://photos.zillowstatic.com/fp/f8af7b4329a212e51308c86ad05a4f21-p_e.jpg",
      "price": "$207,900",
      "priceLabel": "$208K",
      "latLong": {
          "latitude": 38.960663,
          "longitude": -94.48202
      },
      "listingType": "",
      "communityName": "",
      "uid": "d98c2870-56b8-4ec7-b746-b24224ed5efd",
      "date": "2024-07-12T05:07:18.862Z"
  },
  {
      "address": "7201 NW Winter Ave, Kansas City, MO 64152",
      "beds": 3,
      "baths": 2,
      "area": 1460,
      "imgSrc": "https://photos.zillowstatic.com/fp/05d82c2be49434d3b5b668a3c64b90bb-p_e.jpg",
      "price": "$246,000",
      "priceLabel": "$246K",
      "latLong": {
          "latitude": 39.2253,
          "longitude": -94.66383
      },
      "listingType": "",
      "communityName": "",
      "uid": "1900a5f6-fd97-47c4-ae89-c79c9276ab66",
      "date": "2023-12-27T13:04:26.541Z"
  },
  {
      "address": "3011 E 59th St, Kansas City, MO 64130",
      "beds": 5,
      "baths": 2,
      "area": 1572,
      "imgSrc": "https://photos.zillowstatic.com/fp/b7dd75d873ce40cf129bd03d67c0872f-p_e.jpg",
      "price": "$159,000",
      "priceLabel": "$159K",
      "latLong": {
          "latitude": 39.018826,
          "longitude": -94.550095
      },
      "listingType": "",
      "communityName": "",
      "uid": "73f9027f-8857-4a17-bc46-14d9cf5a3e34",
      "date": "2024-09-01T19:40:00.494Z"
  },
  {
      "address": "8233 N Flora Ave, Kansas City, MO 64118",
      "beds": 4,
      "baths": 4,
      "area": 2779,
      "imgSrc": "https://photos.zillowstatic.com/fp/d0f09b42fc66119f084a916d5d1948f3-p_e.jpg",
      "price": "$400,000",
      "priceLabel": "$400K",
      "latLong": {
          "latitude": 39.243595,
          "longitude": -94.56123
      },
      "listingType": "",
      "communityName": "",
      "uid": "bc2e3205-d450-4865-ad33-8fe341cd5dc8",
      "date": "2023-11-04T12:48:39.758Z"
  },
  {
      "address": "4523 NE 67th St, Kansas City, MO 64119",
      "beds": 4,
      "baths": 3,
      "area": 2196,
      "imgSrc": "https://photos.zillowstatic.com/fp/293e6482df35f3e5bf353e6a82bf0406-p_e.jpg",
      "price": "$395,000",
      "priceLabel": "$395K",
      "latLong": {
          "latitude": 39.21473,
          "longitude": -94.52485
      },
      "listingType": "",
      "communityName": "",
      "uid": "ae3d4249-bf38-468b-b8de-fc44478bd4f1",
      "date": "2024-05-19T23:39:56.456Z"
  },
  {
      "address": "8525 N Campbell St, Kansas City, MO 64155",
      "beds": 4,
      "baths": 2,
      "area": 2149,
      "imgSrc": "https://photos.zillowstatic.com/fp/ce79a4f36c88d3645ac19399e6bb3041-p_e.jpg",
      "price": "$260,000",
      "priceLabel": "$260K",
      "latLong": {
          "latitude": 39.249065,
          "longitude": -94.568504
      },
      "listingType": "",
      "communityName": "",
      "uid": "04ac97f9-8513-4965-b5b5-15c3c87ce499",
      "date": "2024-10-02T15:42:37.467Z"
  },
  {
      "address": "7305 E 112th St, Kansas City, MO 64134",
      "beds": 4,
      "baths": 2,
      "area": 1104,
      "imgSrc": "https://photos.zillowstatic.com/fp/a9a3c8cbecef39407912c4db37d28775-p_e.jpg",
      "price": "$170,000",
      "priceLabel": "$170K",
      "latLong": {
          "latitude": 38.921738,
          "longitude": -94.50425
      },
      "listingType": "",
      "communityName": "",
      "uid": "16287d49-dac3-4631-874d-86553509d5b9",
      "date": "2023-12-16T19:23:41.606Z"
  },
  {
      "address": "700 Broadway Blvd #405, Kansas City, MO 64105",
      "beds": 0,
      "baths": 1,
      "area": 675,
      "imgSrc": "https://photos.zillowstatic.com/fp/5db53f8419236dfa27e27bc4673b2121-p_e.jpg",
      "price": "$175,000",
      "priceLabel": "$175K",
      "latLong": {
          "latitude": 39.105167,
          "longitude": -94.58835
      },
      "listingType": "",
      "communityName": "",
      "uid": "276a54ee-4298-4e45-8a9f-d97865bdf04f",
      "date": "2023-11-02T19:30:52.692Z"
  },
  {
      "address": "4761 NE Winn Rd, Kansas City, MO 64117",
      "beds": 4,
      "baths": 3,
      "area": 3005,
      "imgSrc": "https://photos.zillowstatic.com/fp/87408be13c7c40da0fd6c9b821515da7-p_e.jpg",
      "price": "$330,000",
      "priceLabel": "$330K",
      "latLong": {
          "latitude": 39.18046,
          "longitude": -94.52746
      },
      "listingType": "",
      "communityName": "",
      "uid": "ed1dc31d-e2ac-4135-8c36-63615fc90dda",
      "date": "2023-10-07T16:57:00.574Z"
  },
  {
      "address": "5011 Emery Ave, Kansas City, MO 64136",
      "beds": 3,
      "baths": 1,
      "area": 1344,
      "imgSrc": "https://photos.zillowstatic.com/fp/0d57a1c2f22522281cb1181ea2108f9a-p_e.jpg",
      "price": "$180,000",
      "priceLabel": "$180K",
      "latLong": {
          "latitude": 39.029034,
          "longitude": -94.40922
      },
      "listingType": "",
      "communityName": "",
      "uid": "c5829013-e873-485b-8d7d-b0cd7e9c2036",
      "date": "2024-06-19T05:04:31.087Z"
  },
  {
      "address": "7204 Virginia Ave, Kansas City, MO 64131",
      "beds": 4,
      "baths": 1,
      "area": 1333,
      "imgSrc": "https://photos.zillowstatic.com/fp/98d92aca79ed4c9c8e13e3046e4e9730-p_e.jpg",
      "price": "$195,000",
      "priceLabel": "$195K",
      "latLong": {
          "latitude": 38.996593,
          "longitude": -94.572296
      },
      "listingType": "",
      "communityName": "",
      "uid": "f6d1b6e2-6549-4834-b32d-45285e4ffcb6",
      "date": "2024-01-03T04:18:30.827Z"
  },
  {
      "address": "10412 Richmond Ave, Kansas City, MO 64134",
      "beds": 3,
      "baths": 2,
      "area": 1416,
      "imgSrc": "https://photos.zillowstatic.com/fp/a869d10f0f3290db5fa5184f0f02e900-p_e.jpg",
      "price": "$179,950",
      "priceLabel": "$180K",
      "latLong": {
          "latitude": 38.934937,
          "longitude": -94.502014
      },
      "listingType": "",
      "communityName": "",
      "uid": "502b69d6-4acb-4be0-bcd6-48a09267eaa9",
      "date": "2024-09-26T04:38:06.852Z"
  },
  {
      "address": "3609 NW 87th St, Kansas City, MO 64154",
      "beds": 4,
      "baths": 3,
      "area": 2733,
      "imgSrc": "https://photos.zillowstatic.com/fp/1566b42574eeed1be34bebf656aeb3df-p_e.jpg",
      "price": "$389,000",
      "priceLabel": "$389K",
      "latLong": {
          "latitude": 39.25194,
          "longitude": -94.62299
      },
      "listingType": "",
      "communityName": "",
      "uid": "63261898-9ffa-4740-a879-f04ac81463d7",
      "date": "2024-08-13T05:22:44.133Z"
  },
  {
      "address": "8506 N Crawford Ave, Kansas City, MO 64153",
      "beds": 3,
      "baths": 3,
      "area": 1825,
      "imgSrc": "https://photos.zillowstatic.com/fp/5bb1b00d071683be7b0b89b7a603215c-p_e.jpg",
      "price": "$336,900",
      "priceLabel": "$337K",
      "latLong": {
          "latitude": 39.249176,
          "longitude": -94.695946
      },
      "listingType": "",
      "communityName": "",
      "uid": "acf753b7-13fe-4f1c-b1ba-ddb21544c983",
      "date": "2024-08-29T10:00:04.246Z"
  },
  {
      "address": "1134 E 77th St, Kansas City, MO 64131",
      "beds": 3,
      "baths": 2,
      "area": 1734,
      "imgSrc": "https://photos.zillowstatic.com/fp/8d93c10f16590f0542239876cb888c5e-p_e.jpg",
      "price": "$220,000",
      "priceLabel": "$220K",
      "latLong": {
          "latitude": 38.987644,
          "longitude": -94.57416
      },
      "listingType": "",
      "communityName": "",
      "uid": "9351baf2-1a11-4581-b27e-1b8181730651",
      "date": "2024-10-02T05:27:33.090Z"
  },
  {
      "address": "3822 Virginia Ave, Kansas City, MO 64109",
      "beds": 3,
      "baths": 3,
      "area": 2652,
      "imgSrc": "https://photos.zillowstatic.com/fp/b288ac34c8f5294696f170f635f6b9a1-p_e.jpg",
      "price": "$385,000",
      "priceLabel": "$385K",
      "latLong": {
          "latitude": 39.056904,
          "longitude": -94.568886
      },
      "listingType": "",
      "communityName": "",
      "uid": "01e7381d-980f-46b0-b06c-e81ea2b73e91",
      "date": "2024-08-26T06:31:33.708Z"
  },
  {
      "address": "616 W 87th St, Kansas City, MO 64114",
      "beds": 2,
      "baths": 2,
      "area": 997,
      "imgSrc": "https://photos.zillowstatic.com/fp/6a6d78f6152f7b2cf4550bb58b33a84e-p_e.jpg",
      "price": "$225,044",
      "priceLabel": "$225K",
      "latLong": {
          "latitude": 38.971153,
          "longitude": -94.59892
      },
      "listingType": "",
      "communityName": "",
      "uid": "d56d1fea-311a-4471-9d70-97eb54a4181a",
      "date": "2024-07-17T12:46:35.857Z"
  },
  {
      "address": "1228 W 55th St, Kansas City, MO 64112",
      "beds": 5,
      "baths": 8,
      "area": 17092,
      "imgSrc": "https://photos.zillowstatic.com/fp/37f54e9f1c50c1d73e5f0cecd8dc6a31-p_e.jpg",
      "price": "$4,950,000",
      "priceLabel": "$4.95M",
      "latLong": {
          "latitude": 39.029,
          "longitude": -94.60682
      },
      "listingType": "",
      "communityName": "",
      "uid": "59314858-3cdb-4c20-9474-306d3088042d",
      "date": "2023-10-28T07:30:52.577Z"
  },
  {
      "address": "3708 Central St, Kansas City, MO 64111",
      "beds": 4,
      "baths": 3,
      "area": 3056,
      "imgSrc": "https://photos.zillowstatic.com/fp/17566e2cbfa52bf1a3e2deedbb76f588-p_e.jpg",
      "price": "$399,000",
      "priceLabel": "$399K",
      "latLong": {
          "latitude": 39.059902,
          "longitude": -94.58968
      },
      "listingType": "",
      "communityName": "",
      "uid": "cc97722e-1b79-4f67-b8c7-aafc7ba9b860",
      "date": "2024-10-02T12:49:13.666Z"
  },
  {
      "address": "405 W 58th St, Kansas City, MO 64113",
      "beds": 4,
      "baths": 3,
      "area": 3034,
      "imgSrc": "https://photos.zillowstatic.com/fp/82e75c9334e8b437b90b361158088e47-p_e.jpg",
      "price": "$899,900",
      "priceLabel": "$900K",
      "latLong": {
          "latitude": 39.02215,
          "longitude": -94.59337
      },
      "listingType": "",
      "communityName": "",
      "uid": "436f6988-183f-4340-a000-3ce12494c158",
      "date": "2024-10-02T13:54:58.059Z"
  },
  {
      "address": "6428 Oak St, Kansas City, MO 64113",
      "beds": 3,
      "baths": 1,
      "area": 1370,
      "imgSrc": "https://photos.zillowstatic.com/fp/1746729fb6060e460af723fe9fff58e1-p_e.jpg",
      "price": "$329,000",
      "priceLabel": "$329K",
      "latLong": {
          "latitude": 39.010742,
          "longitude": -94.58428
      },
      "listingType": "",
      "communityName": "",
      "uid": "9243dc98-4c3e-4089-904d-6d6784191dc0",
      "date": "2024-10-02T08:53:52.498Z"
  },
  {
      "address": "9924 E 38th Ter, Kansas City, MO 64133",
      "beds": 3,
      "baths": 2,
      "area": 1728,
      "imgSrc": "https://photos.zillowstatic.com/fp/9726ecd85bf41fb61cf2445710c21720-p_e.jpg",
      "price": "$246,000",
      "priceLabel": "$246K",
      "latLong": {
          "latitude": 39.054417,
          "longitude": -94.46217
      },
      "listingType": "",
      "communityName": "",
      "uid": "a849a65f-96d5-440e-8c17-1c19ae9cd84a",
      "date": "2024-05-02T05:56:17.924Z"
  },
  {
      "address": "5315 N Jackson Ave, Kansas City, MO 64119",
      "beds": 3,
      "baths": 2,
      "area": 1088,
      "imgSrc": "https://photos.zillowstatic.com/fp/15ff49578f7400c786f8151927ff2903-p_e.jpg",
      "price": "$210,000",
      "priceLabel": "$210K",
      "latLong": {
          "latitude": 39.190224,
          "longitude": -94.53001
      },
      "listingType": "",
      "communityName": "",
      "uid": "af3e7701-f616-4afa-bdf0-36fba5b3d9bc",
      "date": "2024-08-27T00:08:11.777Z"
  },
  {
      "address": "6308 N Cypress Ave, Gladstone, MO 64119",
      "beds": 5,
      "baths": 5,
      "area": 5228,
      "imgSrc": "https://photos.zillowstatic.com/fp/6c5593841d5c04abb832dd97f7c5572e-p_e.jpg",
      "price": "$586,500",
      "priceLabel": "$587K",
      "latLong": {
          "latitude": 39.208546,
          "longitude": -94.52677
      },
      "listingType": "",
      "communityName": "",
      "uid": "78961de9-ae12-43e1-8f1c-0be7435765d5",
      "date": "2024-10-01T17:03:26.925Z"
  },
  {
      "address": "3 E 66th St, Kansas City, MO 64113",
      "beds": 3,
      "baths": 2,
      "area": 2225,
      "imgSrc": "https://photos.zillowstatic.com/fp/5a23b8771e430696dca6f1b243c67676-p_e.jpg",
      "price": "$500,000",
      "priceLabel": "$500K",
      "latLong": {
          "latitude": 39.008465,
          "longitude": -94.58835
      },
      "listingType": "",
      "communityName": "",
      "uid": "c8c6bfaa-5375-4f70-8bf6-53cd4ec4d762",
      "date": "2023-12-23T22:21:22.151Z"
  },
  {
      "address": "7828 NE San Rafael Dr, Kansas City, MO 64119",
      "beds": 3,
      "baths": 2,
      "area": 1071,
      "imgSrc": "https://photos.zillowstatic.com/fp/be7eafc69830bb30eb2c4ef70a1eb18f-p_e.jpg",
      "price": "$210,000",
      "priceLabel": "$210K",
      "latLong": {
          "latitude": 39.181538,
          "longitude": -94.48711
      },
      "listingType": "",
      "communityName": "",
      "uid": "bc27badd-ab11-4926-806e-d7a1424619a0",
      "date": "2024-02-11T00:46:21.506Z"
  },
  {
      "address": "1030 W 68th Ter, Kansas City, MO 64113",
      "beds": 4,
      "baths": 5,
      "area": 3217,
      "imgSrc": "https://photos.zillowstatic.com/fp/bea3f33253f80347d1a0101902ff7ebf-p_e.jpg",
      "price": "$859,000",
      "priceLabel": "$859K",
      "latLong": {
          "latitude": 39.005814,
          "longitude": -94.602295
      },
      "listingType": "",
      "communityName": "",
      "uid": "8a668619-f439-4b6d-bf3e-049ae075412d",
      "date": "2024-01-31T19:14:42.988Z"
  },
  {
      "address": "14400 Prospect Ave, Kansas City, MO 64146",
      "beds": 4,
      "baths": 7,
      "area": 6395,
      "imgSrc": "https://photos.zillowstatic.com/fp/291849c382ec5b79628ae35612d46a37-p_e.jpg",
      "price": "$11,000,000",
      "priceLabel": "$11.0M",
      "latLong": {
          "latitude": 38.865456,
          "longitude": -94.56456
      },
      "listingType": "",
      "communityName": "",
      "uid": "9fc2c756-d71e-4833-aa0b-61412bf43c02",
      "date": "2024-01-02T01:42:06.090Z"
  },
  {
      "address": "11800 E 67th St, Kansas City, MO 64133",
      "beds": 4,
      "baths": 2,
      "area": 2526,
      "imgSrc": "https://photos.zillowstatic.com/fp/28795cda7c535da660dcc1988d8eaf05-p_e.jpg",
      "price": "$319,000",
      "priceLabel": "$319K",
      "latLong": {
          "latitude": 39.000793,
          "longitude": -94.441284
      },
      "listingType": "",
      "communityName": "",
      "uid": "7fb1d0e8-9877-4d03-9bd2-58dc51239297",
      "date": "2023-12-28T18:34:15.469Z"
  },
  {
      "address": "8432 NE 109th Pl, Kansas City, MO 64157",
      "beds": 5,
      "baths": 3,
      "area": 2552,
      "imgSrc": "https://photos.zillowstatic.com/fp/e48b46c07899162f9d0c5fdf45ccac5f-p_e.jpg",
      "price": "$339,900",
      "priceLabel": "$340K",
      "latLong": {
          "latitude": 39.291958,
          "longitude": -94.47988
      },
      "listingType": "",
      "communityName": "",
      "uid": "ac0472cd-3b41-4c4f-9637-5345dc5c723b",
      "date": "2024-02-14T09:05:52.415Z"
  },
  {
      "address": "1101 Walnut St UNIT 1103, Kansas City, MO 64106",
      "beds": 2,
      "baths": 3,
      "area": 1136,
      "imgSrc": "https://photos.zillowstatic.com/fp/efa29d809a3546f8acdc5adf02afa759-p_e.jpg",
      "price": "$420,000",
      "priceLabel": "$420K",
      "latLong": {
          "latitude": 39.100803,
          "longitude": -94.581726
      },
      "listingType": "",
      "communityName": "",
      "uid": "79a89fad-5036-41ef-be54-8ba53797c311",
      "date": "2024-08-15T10:42:43.497Z"
  },
  {
      "address": "3 Janssen Pl, Kansas City, MO 64109",
      "beds": 6,
      "baths": 6,
      "area": 7545,
      "imgSrc": "https://photos.zillowstatic.com/fp/7cdb7b2c0afd9675186c0ec862cc4c1f-p_e.jpg",
      "price": "$2,150,000",
      "priceLabel": "$2.15M",
      "latLong": {
          "latitude": 39.061436,
          "longitude": -94.57755
      },
      "listingType": "",
      "communityName": "",
      "uid": "afe186e6-701c-469a-b611-a60134b4dd5a",
      "date": "2023-11-10T13:09:50.185Z"
  },
  {
      "address": "3635 Holmes St, Kansas City, MO 64109",
      "beds": 3,
      "baths": 4,
      "area": 3000,
      "imgSrc": "https://photos.zillowstatic.com/fp/6fab09b2954cda2b9058497a2a3dea31-p_e.jpg",
      "price": "$665,000",
      "priceLabel": "$665K",
      "latLong": {
          "latitude": 39.060356,
          "longitude": -94.57619
      },
      "listingType": "",
      "communityName": "",
      "uid": "2654a58b-507c-440c-a1c8-b4dec1ea79ab",
      "date": "2024-10-02T14:01:33.204Z"
  },
  {
      "address": "6523 NW Sweetbriar Ln, Kansas City, MO 64151",
      "beds": 3,
      "baths": 2,
      "area": 2532,
      "imgSrc": "https://photos.zillowstatic.com/fp/51f4fe80c71f44bc432d3e59d1e33316-p_e.jpg",
      "price": "$309,000",
      "priceLabel": "$309K",
      "latLong": {
          "latitude": 39.213497,
          "longitude": -94.65134
      },
      "listingType": "",
      "communityName": "",
      "uid": "a4430818-a41d-4902-9b67-cbd07db8dbf4",
      "date": "2024-10-02T07:23:20.693Z"
  },
  {
      "address": "710 E 42nd St, Kansas City, MO 64110",
      "beds": 2,
      "baths": 1,
      "area": 880,
      "imgSrc": "https://photos.zillowstatic.com/fp/d92b41d360d35a5ed702e534b3e63af6-p_e.jpg",
      "price": "$239,000",
      "priceLabel": "$239K",
      "latLong": {
          "latitude": 39.051067,
          "longitude": -94.57649
      },
      "listingType": "",
      "communityName": "",
      "uid": "ee1f3f0f-df2f-43d8-bd7a-e2c371d7762d",
      "date": "2024-10-02T15:30:09.357Z"
  },
  {
      "address": "7706 N Donnelly Ave, Kansas City, MO 64158",
      "beds": 5,
      "baths": 6,
      "area": 5475,
      "imgSrc": "https://photos.zillowstatic.com/fp/a9f8243777359694fbe69ab835a69ae8-p_e.jpg",
      "price": "$1,550,000",
      "priceLabel": "$1.55M",
      "latLong": {
          "latitude": 39.233143,
          "longitude": -94.480644
      },
      "listingType": "",
      "communityName": "",
      "uid": "c0991f89-75f6-4f2e-af0a-e9bb66727a0d",
      "date": "2023-11-09T02:41:02.769Z"
  },
  {
      "address": "205 E 99th St, Kansas City, MO 64114",
      "beds": 4,
      "baths": 3,
      "area": 1876,
      "imgSrc": "https://photos.zillowstatic.com/fp/7c63f04b521115f54294f535913ed7f9-p_e.jpg",
      "price": "$250,000",
      "priceLabel": "$250K",
      "latLong": {
          "latitude": 38.94828,
          "longitude": -94.588745
      },
      "listingType": "",
      "communityName": "",
      "uid": "7e7cd881-9ef4-4ab0-b67c-5ec4a5060f03",
      "date": "2024-01-01T01:17:10.671Z"
  },
  {
      "address": "5204 E 41st St, Kansas City, MO 64130",
      "beds": 3,
      "baths": 1,
      "area": 936,
      "imgSrc": "https://photos.zillowstatic.com/fp/3a61638ff4d5ae050c903b349381420e-p_e.jpg",
      "price": "$139,000",
      "priceLabel": "$139K",
      "latLong": {
          "latitude": 39.051495,
          "longitude": -94.523346
      },
      "listingType": "",
      "communityName": "",
      "uid": "5c61c626-05a4-4a7a-bd4c-267ad5fa54ca",
      "date": "2023-10-22T15:49:01.958Z"
  },
  {
      "address": "4524 NE 83rd Ter, Kansas City, MO 64119",
      "beds": 3,
      "baths": 3,
      "area": 1607,
      "imgSrc": "https://photos.zillowstatic.com/fp/1c2a3f400d802a281c29bd9dac55a7b7-p_e.jpg",
      "price": "$240,000",
      "priceLabel": "$240K",
      "latLong": {
          "latitude": 39.244576,
          "longitude": -94.52553
      },
      "listingType": "",
      "communityName": "",
      "uid": "264f30d1-13eb-4d4f-9b65-95166a50e7a2",
      "date": "2024-03-20T22:48:03.323Z"
  },
  {
      "address": "43 W 73rd Ter, Kansas City, MO 64114",
      "beds": 3,
      "baths": 1,
      "area": 1032,
      "imgSrc": "https://photos.zillowstatic.com/fp/842063d338201a8dfe4ee1eb4ecaf244-p_e.jpg",
      "price": "$325,000",
      "priceLabel": "$325K",
      "latLong": {
          "latitude": 38.994686,
          "longitude": -94.59145
      },
      "listingType": "",
      "communityName": "",
      "uid": "6872f914-40f7-4b92-b2d1-1897594fcca4",
      "date": "2024-01-09T00:54:47.833Z"
  },
  {
      "address": "6715 N Bellefontaine Ave, Kansas City, MO 64119",
      "beds": 3,
      "baths": 3,
      "area": 2275,
      "imgSrc": "https://photos.zillowstatic.com/fp/26a3aa974a7a65cba0a1219340b64c56-p_e.jpg",
      "price": "$285,000",
      "priceLabel": "$285K",
      "latLong": {
          "latitude": 39.00433,
          "longitude": -94.55042
      },
      "listingType": "",
      "communityName": "",
      "uid": "3805ec97-818e-4278-8a92-a695135bf205",
      "date": "2024-10-01T19:55:55.605Z"
  },
  {
      "address": "7603 Pennsylvania Ave, Kansas City, MO 64114",
      "beds": 2,
      "baths": 2,
      "area": 1040,
      "imgSrc": "https://photos.zillowstatic.com/fp/ec552d6926084888862470e4c9df7c42-p_e.jpg",
      "price": "$209,000",
      "priceLabel": "$209K",
      "latLong": {
          "latitude": 38.990585,
          "longitude": -94.59604
      },
      "listingType": "",
      "communityName": "",
      "uid": "00c7e081-07b6-4369-8291-71f064dba537",
      "date": "2024-10-02T14:07:29.022Z"
  },
  {
      "address": "1450 E 77th St, Kansas City, MO 64131",
      "beds": 3,
      "baths": 2,
      "area": 1340,
      "imgSrc": "https://photos.zillowstatic.com/fp/1a14550c4c1166d3fc0c7bb5b7f5dea6-p_e.jpg",
      "price": "$195,000",
      "priceLabel": "$195K",
      "latLong": {
          "latitude": 38.987427,
          "longitude": -94.56889
      },
      "listingType": "",
      "communityName": "",
      "uid": "5b3f0128-2558-40a0-b093-5868253d3f55",
      "date": "2024-01-26T10:06:13.995Z"
  },
  {
      "address": "1214 & 1212 W 21st St, Kansas City, MO 64108",
      "beds": 2,
      "baths": 1,
      "area": 735,
      "imgSrc": "https://photos.zillowstatic.com/fp/65d0b872dc3665737b1e1c3f9a54f4bf-p_e.jpg",
      "price": "$195,000",
      "priceLabel": "$195K",
      "latLong": {
          "latitude": 39.088264,
          "longitude": -94.59889
      },
      "listingType": "",
      "communityName": "",
      "uid": "b97990d0-2d4a-4697-8e3f-eda0c44efcf5",
      "date": "2023-11-28T11:06:55.602Z"
  },
  {
      "address": "504 E 131st Ct, Kansas City, MO 64145",
      "beds": 3,
      "baths": 2,
      "area": 1340,
      "imgSrc": "https://photos.zillowstatic.com/fp/42eeb5ab9014a06901d01339e941c270-p_e.jpg",
      "price": "$265,000",
      "priceLabel": "$265K",
      "latLong": {
          "latitude": 38.889534,
          "longitude": -94.588524
      },
      "listingType": "",
      "communityName": "",
      "uid": "82ccdb2e-daff-40dc-9a2c-9b1fc7cb6458",
      "date": "2023-11-18T12:06:49.959Z"
  },
  {
      "address": "8419 NE 107th Ter, Kansas City, MO 64157",
      "beds": 3,
      "baths": 3,
      "area": 2190,
      "imgSrc": "https://photos.zillowstatic.com/fp/6ecf86df8456f6e37752e6583083d41b-p_e.jpg",
      "price": "$318,250",
      "priceLabel": "$318K",
      "latLong": {
          "latitude": 39.287495,
          "longitude": -94.47994
      },
      "listingType": "",
      "communityName": "",
      "uid": "7f15ed40-8854-49d5-8669-a90037133e93",
      "date": "2024-01-03T04:19:12.151Z"
  },
  {
      "address": "7806 NE 108th Ter, Kansas City, MO 64134",
      "beds": 3,
      "baths": 2,
      "area": 912,
      "imgSrc": "https://photos.zillowstatic.com/fp/83ee342548ab1c6fdbfba949b045853f-p_e.jpg",
      "price": "$149,950",
      "priceLabel": "$150K",
      "latLong": {
          "latitude": 38.929012,
          "longitude": -94.49811
      },
      "listingType": "",
      "communityName": "",
      "uid": "845493a0-7cca-42cb-9d43-cb3bbc994ea4",
      "date": "2024-03-03T12:08:52.004Z"
  },
  {
      "address": "1302 NE 119th Ter, Kansas City, MO 64155",
      "beds": 4,
      "baths": 3,
      "area": 2496,
      "imgSrc": "https://photos.zillowstatic.com/fp/5567016696b5ced1e961db9dbf1b5b15-p_e.jpg",
      "price": "$365,000",
      "priceLabel": "$365K",
      "latLong": {
          "latitude": 39.31046,
          "longitude": -94.56349
      },
      "listingType": "",
      "communityName": "",
      "uid": "d6cc5b7f-5c95-4f1a-9554-9e149d20741c",
      "date": "2024-07-06T08:31:23.384Z"
  },
  {
      "address": "843 W 56th St, Kansas City, MO 64113",
      "beds": 4,
      "baths": 5,
      "area": 4320,
      "imgSrc": "https://photos.zillowstatic.com/fp/ab969cf1ba014c61e4cabae6d432974f-p_e.jpg",
      "price": "$1,300,000",
      "priceLabel": "$1.30M",
      "latLong": {
          "latitude": 39.02638,
          "longitude": -94.59938
      },
      "listingType": "",
      "communityName": "",
      "uid": "1c87c0b7-f62c-46b2-a7a6-48c036f5b91b",
      "date": "2024-09-10T08:17:30.284Z"
  },
  {
      "address": "4144 Charlotte St, Kansas City, MO 64110",
      "beds": 4,
      "baths": 2,
      "area": 1624,
      "imgSrc": "https://photos.zillowstatic.com/fp/24b7b77703006002988d36d330bc4df9-p_e.jpg",
      "price": "$344,000",
      "priceLabel": "$344K",
      "latLong": {
          "latitude": 39.051067,
          "longitude": -94.57622
      },
      "listingType": "",
      "communityName": "",
      "uid": "8182945b-7d54-4572-9f11-e221a9e00367",
      "date": "2024-10-01T19:19:41.357Z"
  },
  {
      "address": "22 E 79th St, Kansas City, MO 64114",
      "beds": 1,
      "baths": 1,
      "area": 700,
      "imgSrc": "https://photos.zillowstatic.com/fp/23879e4b00a8ef6133a1b9b305271107-p_e.jpg",
      "price": "$139,500",
      "priceLabel": "$140K",
      "latLong": {
          "latitude": 38.985107,
          "longitude": -94.58873
      },
      "listingType": "",
      "communityName": "",
      "uid": "fef21cf9-764b-4062-b8d5-7a0ea730365f",
      "date": "2024-10-02T11:22:43.936Z"
  },
  {
      "address": "8100 Belleview Ave, Kansas City, MO 64114",
      "beds": 4,
      "baths": 2,
      "area": 1706,
      "imgSrc": "https://photos.zillowstatic.com/fp/4df35fc9ed849a75c938adfb7bd3b39d-p_e.jpg",
      "price": "$299,000",
      "priceLabel": "$299K",
      "latLong": {
          "latitude": 38.981533,
          "longitude": -94.60205
      },
      "listingType": "",
      "communityName": "",
      "uid": "078c3e7f-2978-42b7-b379-aa204d000220",
      "date": "2024-06-14T10:20:11.938Z"
  },
  {
      "address": "2839 Campbell St, Kansas City, MO 64109",
      "beds": 5,
      "baths": 4,
      "area": 3526,
      "imgSrc": "https://photos.zillowstatic.com/fp/e5b531588c12b6760fa82901b8d169a9-p_e.jpg",
      "price": "$799,000",
      "priceLabel": "$799K",
      "latLong": {
          "latitude": 39.074528,
          "longitude": -94.57342
      },
      "listingType": "",
      "communityName": "",
      "uid": "99e4bc62-7003-481b-84ef-aa2d2e570f21",
      "date": "2024-01-30T19:19:15.242Z"
  },
  {
      "address": "5812 Rockhill Rd, Kansas City, MO 64110",
      "beds": 4,
      "baths": 2,
      "area": 1832,
      "imgSrc": "https://photos.zillowstatic.com/fp/fcb6a3dc9cafc8a940aa2c4509cb4afb-p_e.jpg",
      "price": "$365,000",
      "priceLabel": "$365K",
      "latLong": {
          "latitude": 39.021305,
          "longitude": -94.576836
      },
      "listingType": "",
      "communityName": "",
      "uid": "c33c0d62-3358-47aa-bd98-d0dbb0356952",
      "date": "2024-10-02T00:28:55.143Z"
  },
  {
      "address": "3927 NE Chaumiere Rd, Kansas City, MO 64117",
      "beds": 3,
      "baths": 2,
      "area": 1624,
      "imgSrc": "https://photos.zillowstatic.com/fp/720aa70296b69d414ae78e594e550f73-p_e.jpg",
      "price": "$240,000",
      "priceLabel": "$240K",
      "latLong": {
          "latitude": 39.165874,
          "longitude": -94.540405
      },
      "listingType": "",
      "communityName": "",
      "uid": "d69b8e1a-f969-4947-bcab-f3d843d96c8d",
      "date": "2024-06-17T03:27:44.595Z"
  },
  {
      "address": "8716 N Troost Ave, Kansas City, MO 64155",
      "beds": 4,
      "baths": 3,
      "area": 1900,
      "imgSrc": "https://photos.zillowstatic.com/fp/110c621afb1a7fca0516b5dabf06d743-p_e.jpg",
      "price": "$329,000",
      "priceLabel": "$329K",
      "latLong": {
          "latitude": 39.253284,
          "longitude": -94.5664
      },
      "listingType": "",
      "communityName": "",
      "uid": "22d36a33-7e0d-487e-b517-9444010a28fa",
      "date": "2024-08-22T14:55:49.078Z"
  },
  {
      "address": "9812 N Lydia Ave, Kansas City, MO 64155",
      "beds": 3,
      "baths": 4,
      "area": 2885,
      "imgSrc": "https://photos.zillowstatic.com/fp/a91180f8e1863c5b4d40ce0ffb0319a4-p_e.jpg",
      "price": "$340,000",
      "priceLabel": "$340K",
      "latLong": {
          "latitude": 39.272015,
          "longitude": -94.56419
      },
      "listingType": "",
      "communityName": "",
      "uid": "69d52837-b366-49d3-b7c4-8a33ab6564a1",
      "date": "2024-06-20T18:38:38.386Z"
  },
  {
      "address": "4010 Prospect Ave, Kansas City, MO 64130",
      "beds": 4,
      "baths": 2,
      "area": 1716,
      "imgSrc": "https://photos.zillowstatic.com/fp/90f8e51f0de88e31fa15e4fa40185324-p_e.jpg",
      "price": "$210,000",
      "priceLabel": "$210K",
      "latLong": {
          "latitude": 39.05324,
          "longitude": -94.55406
      },
      "listingType": "",
      "communityName": "",
      "uid": "75fe4558-1f9c-428e-9204-0e21572b58d4",
      "date": "2024-10-01T19:17:00.369Z"
  },
  {
      "address": "3539 Genessee St, Kansas City, MO 64111",
      "beds": 4,
      "baths": 4,
      "area": 1933,
      "imgSrc": "https://photos.zillowstatic.com/fp/575e3a771a160a49913b10051d1c831a-p_e.jpg",
      "price": "$310,000",
      "priceLabel": "$310K",
      "latLong": {
          "latitude": 39.063004,
          "longitude": -94.60462
      },
      "listingType": "",
      "communityName": "",
      "uid": "be73b6fe-ef37-4146-addf-bca6f52da77b",
      "date": "2023-10-20T11:37:17.085Z"
  },
  {
      "address": "4727 Jarboe St APT 71, Kansas City, MO 64112",
      "beds": 2,
      "baths": 2,
      "area": 1016,
      "imgSrc": "https://photos.zillowstatic.com/fp/7fc234beab08a6ae2fd79eff0f24fcbe-p_e.jpg",
      "price": "$185,000",
      "priceLabel": "$185K",
      "latLong": {
          "latitude": 39.041695,
          "longitude": -94.59942
      },
      "listingType": "",
      "communityName": "",
      "uid": "6c3a6904-f750-4c75-a7a7-1100689bab41",
      "date": "2024-10-02T11:32:36.814Z"
  },
  {
      "address": "8623 NE 72nd Ter, Kansas City, MO 64158",
      "beds": 3,
      "baths": 3,
      "area": 1952,
      "imgSrc": "https://photos.zillowstatic.com/fp/ae7cb1ae921c5a7a13b8e70a0d898658-p_e.jpg",
      "price": "$335,000",
      "priceLabel": "$335K",
      "latLong": {
          "latitude": 39.223717,
          "longitude": -94.47703
      },
      "listingType": "",
      "communityName": "",
      "uid": "ee8f652b-6869-4612-8744-f5cf9422d4fe",
      "date": "2023-12-25T04:35:50.557Z"
  },
  {
      "address": "11801 E 62nd St, Kansas City, MO 64133",
      "beds": 3,
      "baths": 3,
      "area": 1687,
      "imgSrc": "https://photos.zillowstatic.com/fp/a9d3d531cf17d26045e8021adcad7eb4-p_e.jpg",
      "price": "$233,900",
      "priceLabel": "$234K",
      "latLong": {
          "latitude": 39.00892,
          "longitude": -94.44276
      },
      "listingType": "",
      "communityName": "",
      "uid": "6202487b-be94-46f3-8a17-51292ee0f447",
      "date": "2024-10-02T09:35:31.643Z"
  },
  {
      "address": "9206 Cleveland Ave, Kansas City, MO 64132",
      "beds": 3,
      "baths": 2,
      "area": 1306,
      "imgSrc": "https://photos.zillowstatic.com/fp/4ad4a8be33a0c881e2947fd78e63ffca-p_e.jpg",
      "price": "$129,000",
      "priceLabel": "$129K",
      "latLong": {
          "latitude": 38.95957,
          "longitude": -94.54425
      },
      "listingType": "",
      "communityName": "",
      "uid": "3b82f78a-2126-4915-978a-8e88aae65127",
      "date": "2024-10-01T19:21:43.486Z"
  },
  {
      "address": "7808 NW Seymour Ct, Kansas City, MO 64152",
      "beds": 3,
      "baths": 3,
      "area": 1605,
      "imgSrc": "https://photos.zillowstatic.com/fp/89dac1057678187eb5b28d7a53579005-p_e.jpg",
      "price": "$315,000",
      "priceLabel": "$315K",
      "latLong": {
          "latitude": 39.237705,
          "longitude": -94.674324
      },
      "listingType": "",
      "communityName": "",
      "uid": "d47042c3-b113-476d-a45d-f0223ee77976",
      "date": "2023-10-23T06:10:30.067Z"
  },
  {
      "address": "9729 Shepherds Dr, Kansas City, MO 64131",
      "beds": 4,
      "baths": 2,
      "area": 1554,
      "imgSrc": "https://photos.zillowstatic.com/fp/ac9211bce1ca306f3bdaaf73d118c5f8-p_e.jpg",
      "price": "$252,500",
      "priceLabel": "$253K",
      "latLong": {
          "latitude": 38.949806,
          "longitude": -94.56647
      },
      "listingType": "",
      "communityName": "",
      "uid": "9c7e06f9-ea55-4449-9364-9f64f95833e4",
      "date": "2024-10-01T19:09:34.514Z"
  },
  {
      "address": "1013 NE 97th St, Kansas City, MO 64155",
      "beds": 4,
      "baths": 2,
      "area": 2014,
      "imgSrc": "https://photos.zillowstatic.com/fp/0552cdc5007dae2a2113cafe1d506baa-p_e.jpg",
      "price": "$325,000",
      "priceLabel": "$325K",
      "latLong": {
          "latitude": 39.270004,
          "longitude": -94.5684
      },
      "listingType": "",
      "communityName": "",
      "uid": "10c70c48-a72e-4009-8b61-4f70629a8f74",
      "date": "2023-11-16T21:52:27.278Z"
  },
  {
      "address": "9832 Smalley Ave, Kansas City, MO 64134",
      "beds": 3,
      "baths": 3,
      "area": 1948,
      "imgSrc": "https://photos.zillowstatic.com/fp/146a3afa137a19661a3a3d77a6a73a01-p_e.jpg",
      "price": "$260,000",
      "priceLabel": "$260K",
      "latLong": {
          "latitude": 38.94481,
          "longitude": -94.49822
      },
      "listingType": "",
      "communityName": "",
      "uid": "b4a54adf-0d23-4a99-8d47-400fcc7c36e9",
      "date": "2024-09-21T07:10:57.519Z"
  },
  {
      "address": "4147 McGee St, Kansas City, MO 64111",
      "beds": 0,
      "baths": 2,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/3d5c81bba04576129209201dca8f1bc1-p_e.jpg",
      "price": "$450,000",
      "priceLabel": "$450K",
      "latLong": {
          "latitude": 39.04991,
          "longitude": -94.58264
      },
      "listingType": "",
      "communityName": "",
      "uid": "6123afc9-4ecd-4220-8c0f-6f31b3157330",
      "date": "2024-06-06T14:47:14.275Z"
  },
  {
      "address": "10 E 56th Ter, Kansas City, MO 64113",
      "beds": 4,
      "baths": 3,
      "area": 2260,
      "imgSrc": "https://photos.zillowstatic.com/fp/4429f8ce5d2f865bbadfb12e905cd90f-p_e.jpg",
      "price": "$649,000",
      "priceLabel": "$649K",
      "latLong": {
          "latitude": 39.0252,
          "longitude": -94.58736
      },
      "listingType": "",
      "communityName": "",
      "uid": "3ef6c3ca-c2ed-488e-a080-04e53688ce65",
      "date": "2024-10-02T07:30:54.794Z"
  },
  {
      "address": "5536 Jaudon Ave, Kansas City, MO 64130",
      "beds": 3,
      "baths": 3,
      "area": 2320,
      "imgSrc": "https://photos.zillowstatic.com/fp/65a33e45fb233b46c831f3c2a50d5ed3-p_e.jpg",
      "price": "$274,950",
      "priceLabel": "$275K",
      "latLong": {
          "latitude": 39.024967,
          "longitude": -94.55036
      },
      "listingType": "",
      "communityName": "",
      "uid": "d7558b79-8f05-45ff-b990-271900042e28",
      "date": "2024-10-01T19:30:55.474Z"
  },
  {
      "address": "8836 N Main St, Kansas City, MO 64155",
      "beds": 2,
      "baths": 1,
      "area": 736,
      "imgSrc": "https://photos.zillowstatic.com/fp/500534478a346b85862e02c9031b9b51-p_e.jpg",
      "price": "$165,000",
      "priceLabel": "$165K",
      "latLong": {
          "latitude": 39.254875,
          "longitude": -94.58109
      },
      "listingType": "",
      "communityName": "",
      "uid": "c021febb-fb94-40db-a00d-d6d3f46110d0",
      "date": "2024-03-28T09:08:50.460Z"
  },
  {
      "address": "310 W 49th St APT 606, Kansas City, MO 64112",
      "beds": 2,
      "baths": 2,
      "area": 1245,
      "imgSrc": "https://photos.zillowstatic.com/fp/69debbafa6d1f6deecbdd4c9b74bbb7f-p_e.jpg",
      "price": "$335,000",
      "priceLabel": "$335K",
      "latLong": {
          "latitude": 39.038944,
          "longitude": -94.590965
      },
      "listingType": "",
      "communityName": "",
      "uid": "b9841f31-ba8d-4baf-b3a4-3606bb452bc5",
      "date": "2024-06-23T04:06:46.483Z"
  },
  {
      "address": "2907 Jarboe St, Kansas City, MO 64108",
      "beds": 2,
      "baths": 1,
      "area": 961,
      "imgSrc": "https://photos.zillowstatic.com/fp/f87b63d98e12bf64cd853be7db96456e-p_e.jpg",
      "price": "$160,000",
      "priceLabel": "$160K",
      "latLong": {
          "latitude": 39.074657,
          "longitude": -94.59754
      },
      "listingType": "",
      "communityName": "",
      "uid": "516f0e26-ab58-4153-8e09-06042e6a3053",
      "date": "2023-10-12T18:00:28.923Z"
  },
  {
      "address": "912 Baltimore Ave STE 603, Kansas City, MO 64105",
      "beds": 1,
      "baths": 1,
      "area": 515,
      "imgSrc": "https://photos.zillowstatic.com/fp/b87ac7fff33ea70209bc6ff16e5bfb4d-p_e.jpg",
      "price": "$175,000",
      "priceLabel": "$175K",
      "latLong": {
          "latitude": 39.103146,
          "longitude": -94.5845
      },
      "listingType": "",
      "communityName": "",
      "uid": "926885c2-b77b-4f42-b12a-5b73b61f940b",
      "date": "2024-10-01T23:15:16.376Z"
  },
  {
      "address": "6008 Rockhill Rd, Kansas City, MO 64110",
      "beds": 3,
      "baths": 2,
      "area": 1980,
      "imgSrc": "https://photos.zillowstatic.com/fp/bebd28bffbac50e5c71d5f9a90857d52-p_e.jpg",
      "price": "$265,000",
      "priceLabel": "$265K",
      "latLong": {
          "latitude": 39.017975,
          "longitude": -94.577
      },
      "listingType": "",
      "communityName": "",
      "uid": "e1e512ea-5365-457a-a589-a0be981d0d34",
      "date": "2024-02-18T09:44:58.453Z"
  },
  {
      "address": "11311 N Marsh Ave, Kansas City, MO 64157",
      "beds": 3,
      "baths": 3,
      "area": 1453,
      "imgSrc": "https://photos.zillowstatic.com/fp/21b9153675ddc40e1b951d7a4a5f8b56-p_e.jpg",
      "price": "$300,000",
      "priceLabel": "$300K",
      "latLong": {
          "latitude": 39.298218,
          "longitude": -94.48095
      },
      "listingType": "",
      "communityName": "",
      "uid": "0318c745-dc16-45af-a70e-ed63555033ce",
      "date": "2024-10-01T22:19:02.322Z"
  },
  {
      "address": "4607 Hedges St, Kansas City, MO 64133",
      "beds": 3,
      "baths": 3,
      "area": 2290,
      "imgSrc": "https://photos.zillowstatic.com/fp/a95c5acb62ea7d8819e6bf0b61a496c7-p_e.jpg",
      "price": "$260,000",
      "priceLabel": "$260K",
      "latLong": {
          "latitude": 39.038258,
          "longitude": -94.453354
      },
      "listingType": "",
      "communityName": "",
      "uid": "d07443d5-9e4f-4c91-9181-08738ca38491",
      "date": "2024-10-01T23:13:21.989Z"
  },
  {
      "address": "3618 Wyoming St APT 1, Kansas City, MO 64111",
      "beds": 2,
      "baths": 1,
      "area": 963,
      "imgSrc": "https://photos.zillowstatic.com/fp/ce058236006fc11e3b93dfe1ee69bb75-p_e.jpg",
      "price": "$149,000",
      "priceLabel": "$149K",
      "latLong": {
          "latitude": 39.06141,
          "longitude": -94.60407
      },
      "listingType": "",
      "communityName": "",
      "uid": "a49f8814-740a-4bca-b6e9-747d4156f6bc",
      "date": "2024-07-12T10:05:15.511Z"
  },
  {
      "address": "4436 NE Antioch Rd, Kansas City, MO 64117",
      "beds": 4,
      "baths": 2,
      "area": 1105,
      "imgSrc": "https://photos.zillowstatic.com/fp/56defe081783f812c1e21c2079e5370b-p_e.jpg",
      "price": "$222,000",
      "priceLabel": "$222K",
      "latLong": {
          "latitude": 39.17503,
          "longitude": -94.54926
      },
      "listingType": "",
      "communityName": "",
      "uid": "bde6c04a-11be-4450-a560-711b6623a370",
      "date": "2024-10-02T08:57:41.252Z"
  },
  {
      "address": "5502 N Poe St, Kansas City, MO 64119",
      "beds": 4,
      "baths": 3,
      "area": 2560,
      "imgSrc": "https://photos.zillowstatic.com/fp/56dc259876da0b953a3931b83231cb74-p_e.jpg",
      "price": "$360,000",
      "priceLabel": "$360K",
      "latLong": {
          "latitude": 39.19348,
          "longitude": -94.505875
      },
      "listingType": "",
      "communityName": "",
      "uid": "454350c1-4c71-4052-9fdc-2f5bc9ce77c5",
      "date": "2024-10-02T14:54:45.358Z"
  },
  {
      "address": "7607 Jefferson St, Kansas City, MO 64114",
      "beds": 3,
      "baths": 2,
      "area": 960,
      "imgSrc": "https://photos.zillowstatic.com/fp/e1ddca154ff199e88392c4222a3aa97e-p_e.jpg",
      "price": "$265,000",
      "priceLabel": "$265K",
      "latLong": {
          "latitude": 38.99045,
          "longitude": -94.59708
      },
      "listingType": "",
      "communityName": "",
      "uid": "b7cb2c83-8cc4-4346-af92-8e4ae297347f",
      "date": "2024-01-08T22:16:24.896Z"
  },
  {
      "address": "405 E 74th St, Kansas City, MO 64131",
      "beds": 3,
      "baths": 3,
      "area": 3010,
      "imgSrc": "https://photos.zillowstatic.com/fp/b71b6684f6a4961a1a684c408dd15796-p_e.jpg",
      "price": "$360,000",
      "priceLabel": "$360K",
      "latLong": {
          "latitude": 38.9935,
          "longitude": -94.584465
      },
      "listingType": "",
      "communityName": "",
      "uid": "44216ee8-dcb5-4470-b07f-08307c7dd534",
      "date": "2024-01-11T08:31:14.798Z"
  },
  {
      "address": "3951 Saint John Ave, Kansas City, MO 64123",
      "beds": 6,
      "baths": 2,
      "area": 3040,
      "imgSrc": "https://photos.zillowstatic.com/fp/959c54e9224665acbf56ca5ce32a8da0-p_e.jpg",
      "price": "$225,000",
      "priceLabel": "$225K",
      "latLong": {
          "latitude": 39.11272,
          "longitude": -94.53463
      },
      "listingType": "",
      "communityName": "",
      "uid": "8a5fd35a-696b-4eaf-961d-f3449515b5b2",
      "date": "2024-10-01T17:22:52.924Z"
  },
  {
      "address": "2425 Brooklyn Ave, Kansas City, MO 64127",
      "beds": 5,
      "baths": 2,
      "area": 2246,
      "imgSrc": "https://photos.zillowstatic.com/fp/70a23a86fe05c6c31ad216f340290baf-p_e.jpg",
      "price": "$209,900",
      "priceLabel": "$210K",
      "latLong": {
          "latitude": 39.0823,
          "longitude": -94.55651
      },
      "listingType": "",
      "communityName": "",
      "uid": "f5c6ca0c-9a75-4a90-87f5-8eff764cc534",
      "date": "2024-07-27T10:17:03.157Z"
  },
  {
      "address": "4930 N Newton Ave, Kansas City, MO 64119",
      "beds": 3,
      "baths": 2,
      "area": 1567,
      "imgSrc": "https://photos.zillowstatic.com/fp/c61b0dca3d7704dceb8ed81aaa7e919e-p_e.jpg",
      "price": "$220,000",
      "priceLabel": "$220K",
      "latLong": {
          "latitude": 39.184322,
          "longitude": -94.501915
      },
      "listingType": "",
      "communityName": "",
      "uid": "66d6ca40-859c-4240-96b3-7edeb993e557",
      "date": "2024-10-02T16:00:20.432Z"
  },
  {
      "address": "9705 NW 87th St, Kansas City, MO 64153",
      "beds": 3,
      "baths": 3,
      "area": 2024,
      "imgSrc": "https://photos.zillowstatic.com/fp/8210d2e9134c14ae5bdb459987ad9f14-p_e.jpg",
      "price": "$295,000",
      "priceLabel": "$295K",
      "latLong": {
          "latitude": 39.251953,
          "longitude": -94.69309
      },
      "listingType": "",
      "communityName": "",
      "uid": "24ccf6f8-ba91-4f83-b758-837b6becd022",
      "date": "2023-12-03T13:45:14.219Z"
  },
  {
      "address": "1912 NW 79th Ter, Kansas City, MO 64151",
      "beds": 3,
      "baths": 3,
      "area": 2036,
      "imgSrc": "https://photos.zillowstatic.com/fp/aa5f82cf3a4acd15eba4c9d378ef5263-p_e.jpg",
      "price": "$315,000",
      "priceLabel": "$315K",
      "latLong": {
          "latitude": 39.238873,
          "longitude": -94.602905
      },
      "listingType": "",
      "communityName": "",
      "uid": "d5d19415-4683-4488-9f8b-b07c27099e08",
      "date": "2024-05-22T01:51:26.778Z"
  },
  {
      "address": "4107 Kenwood Ave, Kansas City, MO 64110",
      "beds": 4,
      "baths": 2,
      "area": 1823,
      "imgSrc": "https://photos.zillowstatic.com/fp/322d06d8c5cb8797c1095ade572e769e-p_e.jpg",
      "price": "$258,000",
      "priceLabel": "$258K",
      "latLong": {
          "latitude": 39.052376,
          "longitude": -94.57784
      },
      "listingType": "",
      "communityName": "",
      "uid": "f0f22453-bcd2-477e-a40b-25f18643716e",
      "date": "2024-10-01T20:50:53.328Z"
  },
  {
      "address": "11051 Greenwood Rd, Kansas City, MO 64134",
      "beds": 3,
      "baths": 1,
      "area": 1584,
      "imgSrc": "https://photos.zillowstatic.com/fp/9fab1aa618d7c70f339fb93842f1f53e-p_e.jpg",
      "price": "$179,500",
      "priceLabel": "$180K",
      "latLong": {
          "latitude": 38.92262,
          "longitude": -94.49042
      },
      "listingType": "",
      "communityName": "",
      "uid": "9187d2f3-57f0-4b01-8209-f75010e81fd2",
      "date": "2024-10-01T19:07:50.945Z"
  },
  {
      "address": "6136 Kenwood Ave, Kansas City, MO 64110",
      "beds": 3,
      "baths": 2,
      "area": 2218,
      "imgSrc": "https://photos.zillowstatic.com/fp/e01a728847b2cfddfa9ecf413b2f3d4b-p_e.jpg",
      "price": "$325,000",
      "priceLabel": "$325K",
      "latLong": {
          "latitude": 39.015602,
          "longitude": -94.58056
      },
      "listingType": "",
      "communityName": "",
      "uid": "426e53d8-90ea-40d3-a228-7dbaf37987c4",
      "date": "2024-05-03T19:57:27.066Z"
  },
  {
      "address": "12 NW 111th St, Kansas City, MO 64155",
      "beds": 4,
      "baths": 3,
      "area": 1842,
      "imgSrc": "https://photos.zillowstatic.com/fp/ee70b1faa1494147148c436337da820d-p_e.jpg",
      "price": "$349,900",
      "priceLabel": "$350K",
      "latLong": {
          "latitude": 39.295383,
          "longitude": -94.58079
      },
      "listingType": "",
      "communityName": "",
      "uid": "00d04c02-1527-4531-aad4-da26ad9a9693",
      "date": "2024-04-06T12:27:24.752Z"
  },
  {
      "address": "2204 NW 58th St, Kansas City, MO 64151",
      "beds": 3,
      "baths": 2,
      "area": 1843,
      "imgSrc": "https://photos.zillowstatic.com/fp/7ee0f6893dc87fd4532c595d9568b7a5-p_e.jpg",
      "price": "$270,000",
      "priceLabel": "$270K",
      "latLong": {
          "latitude": 39.19948,
          "longitude": -94.60697
      },
      "listingType": "",
      "communityName": "",
      "uid": "43978504-c8cd-49d0-b00e-d26175082164",
      "date": "2024-02-26T07:46:15.694Z"
  },
  {
      "address": "10114 White Ave, Kansas City, MO 64134",
      "beds": 3,
      "baths": 2,
      "area": 1300,
      "imgSrc": "https://photos.zillowstatic.com/fp/3cefa8cdbed439c82a12e140ac2a8f0b-p_e.jpg",
      "price": "$179,900",
      "priceLabel": "$180K",
      "latLong": {
          "latitude": 38.940556,
          "longitude": -94.52051
      },
      "listingType": "",
      "communityName": "",
      "uid": "b7e9ccd1-26dc-4da1-8a59-44f8f0899368",
      "date": "2024-10-02T12:03:19.643Z"
  },
  {
      "address": "13517 E 54th Ter, Kansas City, MO 64133",
      "beds": 4,
      "baths": 4,
      "area": 3122,
      "imgSrc": "https://photos.zillowstatic.com/fp/c6cf6d9549b19421d5628ec284d1ef4e-p_e.jpg",
      "price": "$340,000",
      "priceLabel": "$340K",
      "latLong": {
          "latitude": 39.021496,
          "longitude": -94.41975
      },
      "listingType": "",
      "communityName": "",
      "uid": "38ead39e-7f1a-4339-aa0f-c005badd9c21",
      "date": "2024-10-02T10:33:39.632Z"
  },
  {
      "address": "1425 E 77th Ter, Kansas City, MO 64131",
      "beds": 3,
      "baths": 2,
      "area": 1344,
      "imgSrc": "https://photos.zillowstatic.com/fp/2c594f219f23a1aafe0274680f6fa9c4-p_e.jpg",
      "price": "$235,000",
      "priceLabel": "$235K",
      "latLong": {
          "latitude": 38.985794,
          "longitude": -94.569855
      },
      "listingType": "",
      "communityName": "",
      "uid": "f28c4f42-8fad-487a-9ae5-2e5d584b1d06",
      "date": "2024-10-02T15:20:29.156Z"
  },
  {
      "address": "9825 NE 116th St, Kansas City, MO 64157",
      "beds": 5,
      "baths": 4,
      "area": 4400,
      "imgSrc": "https://photos.zillowstatic.com/fp/bf5831385ea0d1c86e3027d96ca0efc2-p_e.jpg",
      "price": "$1,200,000",
      "priceLabel": "$1.20M",
      "latLong": {
          "latitude": 39.301857,
          "longitude": -94.45639
      },
      "listingType": "",
      "communityName": "",
      "uid": "5fdc02f9-b214-4b08-8f5a-a98013b76f81",
      "date": "2023-11-06T20:49:53.038Z"
  },
  {
      "address": "5411 N Indiana Ave, Kansas City, MO 64119",
      "beds": 3,
      "baths": 1,
      "area": 888,
      "imgSrc": "https://photos.zillowstatic.com/fp/b61439afd010782e84a1f6e5de2925aa-p_e.jpg",
      "price": "$210,000",
      "priceLabel": "$210K",
      "latLong": {
          "latitude": 39.191643,
          "longitude": -94.539345
      },
      "listingType": "",
      "communityName": "",
      "uid": "3ae25a67-1a12-4dda-a9bf-f0d537d59ef6",
      "date": "2024-03-23T22:05:01.462Z"
  },
  {
      "address": "6608 NW 105th St, Kansas City, MO 64154",
      "beds": 6,
      "baths": 5,
      "area": 3344,
      "imgSrc": "https://photos.zillowstatic.com/fp/216bf087e4642820214f1d3f4f1f918c-p_e.jpg",
      "price": "$625,000",
      "priceLabel": "$625K",
      "latLong": {
          "latitude": 39.28455,
          "longitude": -94.65444
      },
      "listingType": "",
      "communityName": "",
      "uid": "a7961970-4191-4638-b2d3-6d4f4ca2f9bf",
      "date": "2024-10-02T09:59:50.209Z"
  },
  {
      "address": "516 Gladstone Pl, Kansas City, MO 64123",
      "beds": 3,
      "baths": 2,
      "area": 1752,
      "imgSrc": "https://photos.zillowstatic.com/fp/732bb779bd0bc4c2436b4bbf405a3ddc-p_e.jpg",
      "price": "$349,950",
      "priceLabel": "$350K",
      "latLong": {
          "latitude": 39.11773,
          "longitude": -94.53417
      },
      "listingType": "",
      "communityName": "",
      "uid": "03e2bbef-572b-4c56-9080-4351dd6f6662",
      "date": "2024-04-12T01:19:11.051Z"
  },
  {
      "address": "310 W 49th St APT 1105, Kansas City, MO 64112",
      "beds": 3,
      "baths": 3,
      "area": 2197,
      "imgSrc": "https://photos.zillowstatic.com/fp/e2036c3a9322bc24ee6be7eb18a18641-p_e.jpg",
      "price": "$295,000",
      "priceLabel": "$295K",
      "latLong": {
          "latitude": 39.038837,
          "longitude": -94.59111
      },
      "listingType": "",
      "communityName": "",
      "uid": "fffa757f-acb5-428a-bb05-beb281325935",
      "date": "2024-10-02T01:19:34.392Z"
  },
  {
      "address": "9618 NE 97th St, Kansas City, MO 64157",
      "beds": 4,
      "baths": 4,
      "area": 2692,
      "imgSrc": "https://photos.zillowstatic.com/fp/c281d28cb368814041ab3990eb49c396-p_e.jpg",
      "price": "$525,000",
      "priceLabel": "$525K",
      "latLong": {
          "latitude": 39.269127,
          "longitude": -94.457344
      },
      "listingType": "",
      "communityName": "",
      "uid": "ff1b7931-94f6-4c0d-8dd3-d4ee57c58c54",
      "date": "2024-10-02T15:15:58.190Z"
  },
  {
      "address": "1335 E 109th Ter, Kansas City, MO 64131",
      "beds": 4,
      "baths": 3,
      "area": 2258,
      "imgSrc": "https://photos.zillowstatic.com/fp/6cf6c29ea4dffe3c2abd6eddd4e92dc7-p_e.jpg",
      "price": "$400,000",
      "priceLabel": "$400K",
      "latLong": {
          "latitude": 38.926144,
          "longitude": -94.5753
      },
      "listingType": "",
      "communityName": "",
      "uid": "93b0b31a-89b8-4003-b9df-a78bfdb57b49",
      "date": "2024-05-04T18:42:36.071Z"
  },
  {
      "address": "521 E Santa Fe Trl, Kansas City, MO 64145",
      "beds": 3,
      "baths": 3,
      "area": 2701,
      "imgSrc": "https://photos.zillowstatic.com/fp/18081e9180f495372dbbcea69b986cc1-p_e.jpg",
      "price": "$395,000",
      "priceLabel": "$395K",
      "latLong": {
          "latitude": 38.910965,
          "longitude": -94.58775
      },
      "listingType": "",
      "communityName": "",
      "uid": "b2538aec-c0e0-48ef-b2cf-7888635b2bc0",
      "date": "2024-09-22T18:57:29.926Z"
  },
  {
      "address": "709 Benton Blvd, Kansas City, MO 64124",
      "beds": 3,
      "baths": 3,
      "area": 3168,
      "imgSrc": "https://photos.zillowstatic.com/fp/32b84243274ca352b5ec0843cb66d5fb-p_e.jpg",
      "price": "$229,000",
      "priceLabel": "$229K",
      "latLong": {
          "latitude": 39.10385,
          "longitude": -94.54387
      },
      "listingType": "",
      "communityName": "",
      "uid": "c8df58d6-64ef-418d-8cc3-84f1f1ca8164",
      "date": "2024-09-25T00:00:37.510Z"
  },
  {
      "address": "3530 Cherry St, Kansas City, MO 64109",
      "beds": 5,
      "baths": 3,
      "area": 2439,
      "imgSrc": "https://photos.zillowstatic.com/fp/ae5fec7f89865e626227cbe711b679ea-p_e.jpg",
      "price": "$385,000",
      "priceLabel": "$385K",
      "latLong": {
          "latitude": 39.06226,
          "longitude": -94.5791
      },
      "listingType": "",
      "communityName": "",
      "uid": "653aa074-d79a-49f1-84d4-33e0c7dca1cc",
      "date": "2024-09-06T21:44:20.065Z"
  },
  {
      "address": "2501 E 68th Ter, Kansas City, MO 64132",
      "beds": 2,
      "baths": 1,
      "area": 1027,
      "imgSrc": "https://photos.zillowstatic.com/fp/5e886fc19e237dd9fdf6130576d5d2dc-p_e.jpg",
      "price": "$39,900",
      "priceLabel": "$40K",
      "latLong": {
          "latitude": 39.00239,
          "longitude": -94.55759
      },
      "listingType": "",
      "communityName": "",
      "uid": "f9e8dc4d-b127-4ffb-b926-b789842498b8",
      "date": "2024-10-02T06:43:42.928Z"
  },
  {
      "address": "8823 NE 74th Ter, Kansas City, MO 64158",
      "beds": 3,
      "baths": 3,
      "area": 1476,
      "imgSrc": "https://photos.zillowstatic.com/fp/76f272a3ba51e4ac4e7bec84a3a7e7df-p_e.jpg",
      "price": "$270,000",
      "priceLabel": "$270K",
      "latLong": {
          "latitude": 39.22817,
          "longitude": -94.473076
      },
      "listingType": "",
      "communityName": "",
      "uid": "d2d29be5-41ff-45b1-9674-c6ac6d8d9557",
      "date": "2023-10-16T21:36:36.645Z"
  },
  {
      "address": "7225 Noland Rd, Kansas City, MO 64139",
      "beds": 4,
      "baths": 1,
      "area": 1414,
      "imgSrc": "https://photos.zillowstatic.com/fp/2d06f63806d1f87550f5687177ba6b45-p_e.jpg",
      "price": "$199,900",
      "priceLabel": "$200K",
      "latLong": {
          "latitude": 38.989906,
          "longitude": -94.416855
      },
      "listingType": "",
      "communityName": "",
      "uid": "6dbbae17-9ddc-4e28-8b96-79b3f1a97d54",
      "date": "2024-07-02T18:23:33.676Z"
  },
  {
      "address": "8407 NW 90th St, Kansas City, MO 64153",
      "beds": 4,
      "baths": 3,
      "area": 3121,
      "imgSrc": "https://photos.zillowstatic.com/fp/b44de6a1b9109dd22e5db5034dc35cc1-p_e.jpg",
      "price": "$665,420",
      "priceLabel": "$665K",
      "latLong": {
          "latitude": 39.255257,
          "longitude": -94.67831
      },
      "listingType": "NEW_CONSTRUCTION",
      "communityName": "Reserve at Riverstone",
      "uid": "6482d2e0-9b9b-4c19-9cb5-25615b4edc66",
      "date": "2024-10-01T23:19:27.611Z"
  },
  {
      "address": "8310 NW 82nd St, Kansas City, MO 64152",
      "beds": 4,
      "baths": 3,
      "area": 3222,
      "imgSrc": "https://photos.zillowstatic.com/fp/8aa737f10bfea4dc1444c970bea0bf84-p_e.jpg",
      "price": "$425,000",
      "priceLabel": "$425K",
      "latLong": {
          "latitude": 39.244576,
          "longitude": -94.676674
      },
      "listingType": "",
      "communityName": "",
      "uid": "5a5b3df2-3853-413b-a5d6-cc1ebad0fec7",
      "date": "2024-09-13T17:39:48.147Z"
  },
  {
      "address": "5320 NW 87th St, Kansas City, MO 64154",
      "beds": 3,
      "baths": 2,
      "area": 1348,
      "imgSrc": "https://photos.zillowstatic.com/fp/63682f24b1a048f6bfeda26ef4b17174-p_e.jpg",
      "price": "$210,000",
      "priceLabel": "$210K",
      "latLong": {
          "latitude": 39.252876,
          "longitude": -94.64206
      },
      "listingType": "",
      "communityName": "",
      "uid": "e5948251-58ca-4c1b-af45-01e8cf7b6910",
      "date": "2023-12-18T01:35:29.761Z"
  },
  {
      "address": "6732 Agnes Ave, Kansas City, MO 64132",
      "beds": 3,
      "baths": 2,
      "area": 1772,
      "imgSrc": "https://photos.zillowstatic.com/fp/9dbd737b8fd1fe85cb89263cf8745995-p_e.jpg",
      "price": "$149,000",
      "priceLabel": "$149K",
      "latLong": {
          "latitude": 39.003708,
          "longitude": -94.5523
      },
      "listingType": "",
      "communityName": "",
      "uid": "1f63a9e0-a778-4cfa-b05f-6e50c560e475",
      "date": "2024-10-02T01:46:38.093Z"
  },
  {
      "address": "2107 Grand Ave UNIT 409, Kansas City, MO 64108",
      "beds": 2,
      "baths": 2,
      "area": 1112,
      "imgSrc": "https://photos.zillowstatic.com/fp/4f0d7ce179ccb51986d7b117f1d52e33-p_e.jpg",
      "price": "$275,000",
      "priceLabel": "$275K",
      "latLong": {
          "latitude": 39.08745,
          "longitude": -94.58119
      },
      "listingType": "",
      "communityName": "",
      "uid": "cd077d74-5eca-44f6-a2b2-dfd47c02c129",
      "date": "2024-03-06T14:05:05.124Z"
  },
  {
      "address": "2006 Summit St, Kansas City, MO 64108",
      "beds": 4,
      "baths": 3,
      "area": 2610,
      "imgSrc": "https://photos.zillowstatic.com/fp/468acf2892b12ab45386618a754ae4bf-p_e.jpg",
      "price": "$1,099,000",
      "priceLabel": "$1.10M",
      "latLong": {
          "latitude": 39.089108,
          "longitude": -94.59391
      },
      "listingType": "",
      "communityName": "",
      "uid": "80958a9f-0d3e-44c6-8529-331efc496ac4",
      "date": "2024-02-10T07:01:41.076Z"
  },
  {
      "address": "2917 E 30th St, Kansas City, MO 64128",
      "beds": 3,
      "baths": 2,
      "area": 1900,
      "imgSrc": "https://photos.zillowstatic.com/fp/1c133a136af2e1b7d0083c8f9733aa82-p_e.jpg",
      "price": "$189,000",
      "priceLabel": "$189K",
      "latLong": {
          "latitude": 39.07129,
          "longitude": -94.54829
      },
      "listingType": "",
      "communityName": "",
      "uid": "61d7d858-98be-4e25-8d4a-2eb1c8291d7a",
      "date": "2024-05-07T15:38:06.864Z"
  },
  {
      "address": "12712 E 63rd St, Kansas City, MO 64133",
      "beds": 3,
      "baths": 3,
      "area": 1932,
      "imgSrc": "https://photos.zillowstatic.com/fp/60b51c92f8094b6e3f784adf161df21f-p_e.jpg",
      "price": "$349,900",
      "priceLabel": "$350K",
      "latLong": {
          "latitude": 39.007854,
          "longitude": -94.43215
      },
      "listingType": "",
      "communityName": "",
      "uid": "87e25cf8-30b5-4839-ae1a-e0c2612a62dc",
      "date": "2024-04-05T12:56:12.432Z"
  },
  {
      "address": "5439 N Indiana Ave, Kansas City, MO 64119",
      "beds": 3,
      "baths": 1,
      "area": 888,
      "imgSrc": "https://photos.zillowstatic.com/fp/bdee338318e6647209f9dd297c26c082-p_e.jpg",
      "price": "$185,000",
      "priceLabel": "$185K",
      "latLong": {
          "latitude": 39.19277,
          "longitude": -94.53934
      },
      "listingType": "",
      "communityName": "",
      "uid": "1e9ba6fa-0f91-4668-ab42-e56d4909211e",
      "date": "2023-10-13T10:06:49.250Z"
  },
  {
      "address": "1716 E 97th St APT A, Kansas City, MO 64131",
      "beds": 2,
      "baths": 2,
      "area": 1062,
      "imgSrc": "https://photos.zillowstatic.com/fp/b86c1d474624fd753b82777c17bab7a4-p_e.jpg",
      "price": "$128,600",
      "priceLabel": "$129K",
      "latLong": {
          "latitude": 38.950764,
          "longitude": -94.5682
      },
      "listingType": "",
      "communityName": "",
      "uid": "f5a02e29-728a-434f-a537-f1f14440a26d",
      "date": "2024-05-02T00:45:24.682Z"
  },
  {
      "address": "4950 Wallace Ave, Kansas City, MO 64129",
      "beds": 3,
      "baths": 3,
      "area": 2700,
      "imgSrc": "https://photos.zillowstatic.com/fp/a23e4b6b2142db2fdbf274e5c0768848-p_e.jpg",
      "price": "$172,000",
      "priceLabel": "$172K",
      "latLong": {
          "latitude": 39.032867,
          "longitude": -94.48774
      },
      "listingType": "",
      "communityName": "",
      "uid": "e1d534d8-d31e-4b77-aeed-731c9d3f20f5",
      "date": "2024-10-02T07:29:03.657Z"
  },
  {
      "address": "916 E 78th St, Kansas City, MO 64131",
      "beds": 3,
      "baths": 2,
      "area": 1580,
      "imgSrc": "https://photos.zillowstatic.com/fp/886228dad0685f9ef4680d5593be983c-p_e.jpg",
      "price": "$249,900",
      "priceLabel": "$250K",
      "latLong": {
          "latitude": 38.98646,
          "longitude": -94.57732
      },
      "listingType": "",
      "communityName": "",
      "uid": "d3d6982d-389f-40cb-b5e9-e0262952ffc5",
      "date": "2024-05-11T02:29:30.080Z"
  },
  {
      "address": "7222 Grand Ave, Kansas City, MO 64114",
      "beds": 2,
      "baths": 2,
      "area": 1184,
      "imgSrc": "https://photos.zillowstatic.com/fp/5a0d6839237eba0a801b1f63e4150768-p_e.jpg",
      "price": "$320,000",
      "priceLabel": "$320K",
      "latLong": {
          "latitude": 38.996635,
          "longitude": -94.587326
      },
      "listingType": "",
      "communityName": "",
      "uid": "1f01c87c-308e-46e3-91d7-79aefd14a832",
      "date": "2024-10-01T21:11:10.775Z"
  },
  {
      "address": "8007 Blue Ridge Blvd, Kansas City, MO 64138",
      "beds": 3,
      "baths": 2,
      "area": 1572,
      "imgSrc": "https://photos.zillowstatic.com/fp/3f369ad1eca4f4700f724fb17e0a700c-p_e.jpg",
      "price": "$200,000",
      "priceLabel": "$200K",
      "latLong": {
          "latitude": 38.977684,
          "longitude": -94.48875
      },
      "listingType": "",
      "communityName": "",
      "uid": "ea457671-8d1a-4e42-a3ba-dd912e71a11e",
      "date": "2024-01-13T21:58:12.866Z"
  },
  {
      "address": "2843 Benton Blvd, Kansas City, MO 64128",
      "beds": 4,
      "baths": 3,
      "area": 3624,
      "imgSrc": "https://photos.zillowstatic.com/fp/8616c398bda11b14cd354b7359252315-p_e.jpg",
      "price": "$199,000",
      "priceLabel": "$199K",
      "latLong": {
          "latitude": 39.072838,
          "longitude": -94.54882
      },
      "listingType": "",
      "communityName": "",
      "uid": "99ab8ffb-89d3-4a19-ac54-60633386b764",
      "date": "2023-12-26T11:25:12.052Z"
  },
  {
      "address": "4724 Logan Ave, Kansas City, MO 64136",
      "beds": 2,
      "baths": 1,
      "area": 825,
      "imgSrc": "https://photos.zillowstatic.com/fp/73007cbfb32cfa469a3d0aecaccdef23-p_e.jpg",
      "price": "$144,700",
      "priceLabel": "$145K",
      "latLong": {
          "latitude": 39.03355,
          "longitude": -94.40732
      },
      "listingType": "",
      "communityName": "",
      "uid": "0eaebaa2-7c9d-4865-a314-8cc51de3b447",
      "date": "2024-07-02T11:54:10.602Z"
  },
  {
      "address": "720 Gleed Ter, Kansas City, MO 64109",
      "beds": 4,
      "baths": 5,
      "area": 5122,
      "imgSrc": "https://photos.zillowstatic.com/fp/f054a500584d0dd96717550597287b66-p_e.jpg",
      "price": "$1,250,000",
      "priceLabel": "$1.25M",
      "latLong": {
          "latitude": 39.059235,
          "longitude": -94.575745
      },
      "listingType": "",
      "communityName": "",
      "uid": "e955687a-4c46-489c-87c1-a64fa4ac1498",
      "date": "2024-04-13T10:54:57.616Z"
  },
  {
      "address": "3825 Campbell St, Kansas City, MO 64109",
      "beds": 6,
      "baths": 3,
      "area": 3767,
      "imgSrc": "https://photos.zillowstatic.com/fp/d6c696c929ff514fd14e05c19638b86e-p_e.jpg",
      "price": "$650,000",
      "priceLabel": "$650K",
      "latLong": {
          "latitude": 39.056988,
          "longitude": -94.57409
      },
      "listingType": "",
      "communityName": "",
      "uid": "ece5a404-f443-460f-87c0-bf1870999561",
      "date": "2024-07-05T21:36:34.011Z"
  },
  {
      "address": "8702 N Chatham Ave, Kansas City, MO 64154",
      "beds": 2,
      "baths": 1,
      "area": 1694,
      "imgSrc": "https://photos.zillowstatic.com/fp/2688391f892853f05a8453c17d4af4a7-p_e.jpg",
      "price": "$190,000",
      "priceLabel": "$190K",
      "latLong": {
          "latitude": 39.224796,
          "longitude": -94.64332
      },
      "listingType": "",
      "communityName": "",
      "uid": "0f8d24d3-5c74-4bf0-9cd0-3c2196f36447",
      "date": "2024-10-02T05:17:10.391Z"
  },
  {
      "address": "409 E 63rd St, Kansas City, MO 64110",
      "beds": 3,
      "baths": 4,
      "area": 2116,
      "imgSrc": "https://photos.zillowstatic.com/fp/b0fc34c157d2e29287081fc036edd73f-p_e.jpg",
      "price": "$679,000",
      "priceLabel": "$679K",
      "latLong": {
          "latitude": 39.013493,
          "longitude": -94.58349
      },
      "listingType": "",
      "communityName": "",
      "uid": "60f1cbf4-8b57-41cd-bb71-047bba2fe260",
      "date": "2024-05-27T07:19:07.261Z"
  },
  {
      "address": "629 Tracy Ave, Kansas City, MO 64106",
      "beds": 5,
      "baths": 3,
      "area": 3604,
      "imgSrc": "https://photos.zillowstatic.com/fp/5eb8d623c10f5474a4e561a6d13b9faf-p_e.jpg",
      "price": "$320,000",
      "priceLabel": "$320K",
      "latLong": {
          "latitude": 39.106102,
          "longitude": -94.566635
      },
      "listingType": "",
      "communityName": "",
      "uid": "0265fa91-4b2e-4cd0-9b1c-9d816684ca6d",
      "date": "2024-10-02T05:30:28.311Z"
  },
  {
      "address": "11200 Myrtle Ave, Kansas City, MO 64137",
      "beds": 3,
      "baths": 3,
      "area": 1080,
      "imgSrc": "https://photos.zillowstatic.com/fp/2021aaf9b7c499929147b56ea6b09ed0-p_e.jpg",
      "price": "$219,900",
      "priceLabel": "$220K",
      "latLong": {
          "latitude": 38.922367,
          "longitude": -94.54559
      },
      "listingType": "",
      "communityName": "",
      "uid": "ed32bbb6-01e5-41cd-88e4-e1ee81186f83",
      "date": "2024-08-13T17:57:51.474Z"
  },
  {
      "address": "5601/5603 N Strathbury Dr, Kansas City, MO 64151",
      "beds": 0,
      "baths": 3,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/fd97832f6bda415e1d017165345daee6-p_e.jpg",
      "price": "$325,000",
      "priceLabel": "$325K",
      "latLong": {
          "latitude": 39.196255,
          "longitude": -94.63015
      },
      "listingType": "",
      "communityName": "",
      "uid": "6a40d04a-3376-44bf-8a98-211f5360c692",
      "date": "2024-07-07T00:43:57.344Z"
  },
  {
      "address": "8315 Ward Parkway Plz, Kansas City, MO 64114",
      "beds": 3,
      "baths": 2,
      "area": 1592,
      "imgSrc": "https://photos.zillowstatic.com/fp/31dd4ed0b34e789927e80b23871668aa-p_e.jpg",
      "price": "$291,000",
      "priceLabel": "$291K",
      "latLong": {
          "latitude": 38.97759,
          "longitude": -94.603874
      },
      "listingType": "",
      "communityName": "",
      "uid": "8ed7034c-01c3-4f35-9f5a-3b899e023405",
      "date": "2024-10-02T11:00:54.553Z"
  },
  {
      "address": "8519 N Richmond Ave, Kansas City, MO 64157",
      "beds": 5,
      "baths": 5,
      "area": 4709,
      "imgSrc": "https://photos.zillowstatic.com/fp/5440442699d777b3e5c093f0179643d1-p_e.jpg",
      "price": "$575,000",
      "priceLabel": "$575K",
      "latLong": {
          "latitude": 39.24872,
          "longitude": -94.48986
      },
      "listingType": "",
      "communityName": "",
      "uid": "12ee934a-740a-4309-b651-7ef193209d19",
      "date": "2024-07-23T20:16:13.408Z"
  },
  {
      "address": "620 W 87th Ter, Kansas City, MO 64114",
      "beds": 3,
      "baths": 3,
      "area": 1872,
      "imgSrc": "https://photos.zillowstatic.com/fp/5ad2f8d7197bc49dfa789c6e37480a74-p_e.jpg",
      "price": "$310,000",
      "priceLabel": "$310K",
      "latLong": {
          "latitude": 38.97004,
          "longitude": -94.59917
      },
      "listingType": "",
      "communityName": "",
      "uid": "7d9cf489-b8d8-4e9c-a964-931f1576de64",
      "date": "2024-10-01T19:54:17.683Z"
  },
  {
      "address": "8808 Wornall Rd, Kansas City, MO 64114",
      "beds": 2,
      "baths": 1,
      "area": 1068,
      "imgSrc": "https://photos.zillowstatic.com/fp/7c7d795de6ebeb2e84195693311efffb-p_e.jpg",
      "price": "$235,000",
      "priceLabel": "$235K",
      "latLong": {
          "latitude": 38.968365,
          "longitude": -94.59577
      },
      "listingType": "",
      "communityName": "",
      "uid": "a7444103-8117-4691-8f9d-a0bdc8653616",
      "date": "2024-10-02T06:31:55.772Z"
  },
  {
      "address": "10915 Cypress Ave, Kansas City, MO 64137",
      "beds": 6,
      "baths": 3,
      "area": 3294,
      "imgSrc": "https://photos.zillowstatic.com/fp/5ed9feb85bf16a6d8227a129f990479b-p_e.jpg",
      "price": "$330,000",
      "priceLabel": "$330K",
      "latLong": {
          "latitude": 38.927605,
          "longitude": -94.53736
      },
      "listingType": "",
      "communityName": "",
      "uid": "4a80d262-074c-4458-9e20-f3233bf5e788",
      "date": "2024-09-11T01:24:16.625Z"
  },
  {
      "address": "116 E 46th St, Kansas City, MO 64111",
      "beds": 15,
      "baths": 17,
      "area": 11595,
      "imgSrc": "https://photos.zillowstatic.com/fp/e4ceb0f0c86d262d42035f01f1378d46-p_e.jpg",
      "price": "$3,500,000",
      "priceLabel": "$3.50M",
      "latLong": {
          "latitude": 39.043163,
          "longitude": -94.58451
      },
      "listingType": "",
      "communityName": "",
      "uid": "7d0bc89b-390a-4dd2-ab22-53bfdd5302bc",
      "date": "2023-10-09T17:21:33.937Z"
  },
  {
      "address": "801 E 40th St, Kansas City, MO 64110",
      "beds": 3,
      "baths": 2,
      "area": 1580,
      "imgSrc": "https://photos.zillowstatic.com/fp/d13e138a85ca0df316137ae6e2afe470-p_e.jpg",
      "price": "$310,000",
      "priceLabel": "$310K",
      "latLong": {
          "latitude": 39.054226,
          "longitude": -94.57557
      },
      "listingType": "",
      "communityName": "",
      "uid": "b4d50f12-6568-45ce-b320-236212fac057",
      "date": "2024-10-02T00:39:42.209Z"
  },
  {
      "address": "1432 NW 79th St, Kansas City, MO 64118",
      "beds": 3,
      "baths": 4,
      "area": 3123,
      "imgSrc": "https://photos.zillowstatic.com/fp/d769cbaf56354947e381151f855ff695-p_e.jpg",
      "price": "$399,000",
      "priceLabel": "$399K",
      "latLong": {
          "latitude": 39.23809,
          "longitude": -94.59849
      },
      "listingType": "",
      "communityName": "",
      "uid": "76b0b708-84e4-49a1-809c-d059ebd5256d",
      "date": "2024-07-09T22:30:04.655Z"
  },
  {
      "address": "2512 NW 79th Ter, Kansas City, MO 64151",
      "beds": 3,
      "baths": 3,
      "area": 2409,
      "imgSrc": "https://photos.zillowstatic.com/fp/cee719ed66ef5d0f25aca14b5f876649-p_e.jpg",
      "price": "$497,500",
      "priceLabel": "$498K",
      "latLong": {
          "latitude": 39.238213,
          "longitude": -94.61014
      },
      "listingType": "",
      "communityName": "",
      "uid": "1d3f0694-baa7-4273-b40b-e8aa7711c336",
      "date": "2024-08-06T12:42:46.893Z"
  },
  {
      "address": "6705 E 99th St, Kansas City, MO 64134",
      "beds": 3,
      "baths": 2,
      "area": 1246,
      "imgSrc": "https://photos.zillowstatic.com/fp/5ca2df685f242fe19608da34aa62e3ae-p_e.jpg",
      "price": "$180,000",
      "priceLabel": "$180K",
      "latLong": {
          "latitude": 38.945004,
          "longitude": -94.511116
      },
      "listingType": "",
      "communityName": "",
      "uid": "0ef553b8-7612-419f-bea6-3f9bf578997b",
      "date": "2024-04-14T17:04:34.686Z"
  },
  {
      "address": "506 Oak St, Kansas City, MO 64106",
      "beds": 3,
      "baths": 4,
      "area": 2032,
      "imgSrc": "https://photos.zillowstatic.com/fp/dc857410ee5ae7e11d8deda93f9b6f55-p_e.jpg",
      "price": "$645,450",
      "priceLabel": "$645K",
      "latLong": {
          "latitude": 39.10879,
          "longitude": -94.57935
      },
      "listingType": "",
      "communityName": "",
      "uid": "78306c6c-2043-4ade-8b8e-a09b4f9cd04b",
      "date": "2024-10-02T06:31:53.224Z"
  },
  {
      "address": "614 W 58th St, Kansas City, MO 64113",
      "beds": 5,
      "baths": 5,
      "area": 4035,
      "imgSrc": "https://photos.zillowstatic.com/fp/bc6207439f0eef3136f29ac2a8e22570-p_e.jpg",
      "price": "$1,250,000",
      "priceLabel": "$1.25M",
      "latLong": {
          "latitude": 39.022766,
          "longitude": -94.59574
      },
      "listingType": "",
      "communityName": "",
      "uid": "8e50bbfb-ba8a-4e68-b966-e321236f3eed",
      "date": "2023-12-29T04:36:35.273Z"
  },
  {
      "address": "10839 Madison Ave, Kansas City, MO 64114",
      "beds": 3,
      "baths": 3,
      "area": 2654,
      "imgSrc": "https://photos.zillowstatic.com/fp/5d640935557f3eb5f5bd93693e30e9c0-p_e.jpg",
      "price": "$375,000",
      "priceLabel": "$375K",
      "latLong": {
          "latitude": 38.931114,
          "longitude": -94.60298
      },
      "listingType": "",
      "communityName": "",
      "uid": "0167ac1c-3a9d-42c1-968b-5d342527de69",
      "date": "2024-02-22T03:48:50.950Z"
  },
  {
      "address": "600 W 57th St, Kansas City, MO 64113",
      "beds": 4,
      "baths": 4,
      "area": 3966,
      "imgSrc": "https://photos.zillowstatic.com/fp/db0d6fee4cf81a1a5a5ffc9c912dbdf4-p_e.jpg",
      "price": "$1,675,000",
      "priceLabel": "$1.68M",
      "latLong": {
          "latitude": 39.024597,
          "longitude": -94.59527
      },
      "listingType": "",
      "communityName": "",
      "uid": "a2a78748-5584-499a-85e5-0dbf763b125a",
      "date": "2024-04-25T11:57:38.721Z"
  },
  {
      "address": "1039 Westover Rd, Kansas City, MO 64113",
      "beds": 5,
      "baths": 7,
      "area": 7604,
      "imgSrc": "https://photos.zillowstatic.com/fp/b80d74df46698bf1aa2dcbd0f71a22e5-p_e.jpg",
      "price": "$2,799,000",
      "priceLabel": "$2.80M",
      "latLong": {
          "latitude": 39.025276,
          "longitude": -94.601875
      },
      "listingType": "",
      "communityName": "",
      "uid": "724511be-8278-46c4-aa31-affdf9945ea4",
      "date": "2024-10-01T16:24:34.360Z"
  },
  {
      "address": "4412 Bell St, Kansas City, MO 64111",
      "beds": 3,
      "baths": 2,
      "area": 1480,
      "imgSrc": "https://photos.zillowstatic.com/fp/29b3878d95ed8942dad9e129819f7976-p_e.jpg",
      "price": "$290,000",
      "priceLabel": "$290K",
      "latLong": {
          "latitude": 39.047596,
          "longitude": -94.60677
      },
      "listingType": "",
      "communityName": "",
      "uid": "8cdf548b-96be-4f87-a989-f2c15c91347f",
      "date": "2024-04-21T16:15:22.905Z"
  },
  {
      "address": "11115 N Lewis Ave, Kansas City, MO 64157",
      "beds": 5,
      "baths": 3,
      "area": 1520,
      "imgSrc": "https://photos.zillowstatic.com/fp/1285012caff23c9e3884b677e9dfe704-p_e.jpg",
      "price": "$315,000",
      "priceLabel": "$315K",
      "latLong": {
          "latitude": 39.294704,
          "longitude": -94.47404
      },
      "listingType": "",
      "communityName": "",
      "uid": "fdf9ed95-37e2-4cbc-b85a-b0241b06de8b",
      "date": "2024-09-22T15:30:14.025Z"
  },
  {
      "address": "5214 N Wheeling Ave, Kansas City, MO 64119",
      "beds": 2,
      "baths": 1,
      "area": 755,
      "imgSrc": "https://photos.zillowstatic.com/fp/ea9e85f567d22619783b7d726cca05a5-p_e.jpg",
      "price": "$150,000",
      "priceLabel": "$150K",
      "latLong": {
          "latitude": 39.188465,
          "longitude": -94.508575
      },
      "listingType": "",
      "communityName": "",
      "uid": "0d50cabd-9727-43b6-a1ab-d63c0812b179",
      "date": "2024-06-18T10:05:55.620Z"
  },
  {
      "address": "5302 Cleveland Ave, Kansas City, MO 64130",
      "beds": 4,
      "baths": 4,
      "area": 2150,
      "imgSrc": "https://photos.zillowstatic.com/fp/870c93f0d526b45cd9e1f38b837668ea-p_e.jpg",
      "price": "$285,000",
      "priceLabel": "$285K",
      "latLong": {
          "latitude": 39.045216,
          "longitude": -94.54029
      },
      "listingType": "",
      "communityName": "",
      "uid": "da610612-a5b7-4e51-ba0c-c1ef1d8a484f",
      "date": "2024-10-02T09:31:53.251Z"
  },
  {
      "address": "11602 Bennington Ave, Kansas City, MO 64134",
      "beds": 3,
      "baths": 1,
      "area": 1196,
      "imgSrc": "https://photos.zillowstatic.com/fp/24ec2e49f0a558386dc930359f1924b5-p_e.jpg",
      "price": "$179,500",
      "priceLabel": "$180K",
      "latLong": {
          "latitude": 38.913086,
          "longitude": -94.51581
      },
      "listingType": "",
      "communityName": "",
      "uid": "f54620e5-d075-4ed8-abac-9b86ab5a4d51",
      "date": "2024-08-13T09:50:02.606Z"
  },
  {
      "address": "8344 Campbell St, Kansas City, MO 64131",
      "beds": 4,
      "baths": 2,
      "area": 1510,
      "imgSrc": "https://photos.zillowstatic.com/fp/7741e2c72bcf4de769ced20779415c29-p_e.jpg",
      "price": "$249,900",
      "priceLabel": "$250K",
      "latLong": {
          "latitude": 38.975445,
          "longitude": -94.57941
      },
      "listingType": "",
      "communityName": "",
      "uid": "50c8032c-bbc8-447b-ac3f-ad7ce911dd24",
      "date": "2024-07-18T01:17:30.563Z"
  },
  {
      "address": "406 E 91st St, Kansas City, MO 64131",
      "beds": 3,
      "baths": 3,
      "area": 2394,
      "imgSrc": "https://photos.zillowstatic.com/fp/8cc5eb4439e4a62d1a165de8c3db4791-p_e.jpg",
      "price": "$289,950",
      "priceLabel": "$290K",
      "latLong": {
          "latitude": 38.963238,
          "longitude": -94.58582
      },
      "listingType": "",
      "communityName": "",
      "uid": "fc203d33-618b-4be1-baf4-e117f35f75e9",
      "date": "2024-01-07T01:47:08.852Z"
  },
  {
      "address": "9724 N Lewis Ave, Kansas City, MO 64157",
      "beds": 3,
      "baths": 4,
      "area": 1951,
      "imgSrc": "https://photos.zillowstatic.com/fp/c6b782d4b4ebc7f0c529397adbe85429-p_e.jpg",
      "price": "$255,000",
      "priceLabel": "$255K",
      "latLong": {
          "latitude": 39.26935,
          "longitude": -94.475334
      },
      "listingType": "",
      "communityName": "",
      "uid": "11058ef3-4d7d-4e18-876e-adaee1d5e7ae",
      "date": "2024-10-02T04:37:42.016Z"
  },
  {
      "address": "935 W 42nd St, Kansas City, MO 64111",
      "beds": 0,
      "baths": 2,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/033e9ecf0747f3fedeeb40dfb5e44556-p_e.jpg",
      "price": "$250,000",
      "priceLabel": "$250K",
      "latLong": {
          "latitude": 39.051888,
          "longitude": -94.5988
      },
      "listingType": "",
      "communityName": "",
      "uid": "2b35d862-168d-4a6a-bd9c-3af76b7a22a1",
      "date": "2024-10-02T00:17:42.060Z"
  },
  {
      "address": "8641 E 57th St, Kansas City, MO 64129",
      "beds": 4,
      "baths": 3,
      "area": 1763,
      "imgSrc": "https://photos.zillowstatic.com/fp/ee7f98e1159d7968dc0c767dcfb36154-p_e.jpg",
      "price": "$243,000",
      "priceLabel": "$243K",
      "latLong": {
          "latitude": 39.019855,
          "longitude": -94.48414
      },
      "listingType": "",
      "communityName": "",
      "uid": "78fc3e6d-f540-428a-aa5e-bb9c0c6039b7",
      "date": "2024-02-18T01:19:23.683Z"
  },
  {
      "address": "819 NE Cookingham Dr, Kansas City, MO 64155",
      "beds": 3,
      "baths": 2,
      "area": 1197,
      "imgSrc": "https://photos.zillowstatic.com/fp/db62a75c62b22d58b8267463fc9a7631-p_e.jpg",
      "price": "$269,500",
      "priceLabel": "$270K",
      "latLong": {
          "latitude": 39.30341,
          "longitude": -94.56783
      },
      "listingType": "",
      "communityName": "",
      "uid": "ff63442c-b9a3-4005-ac65-0d2853f98897",
      "date": "2024-10-02T09:53:04.189Z"
  },
  {
      "address": "7315 Charlotte St, Kansas City, MO 64131",
      "beds": 3,
      "baths": 2,
      "area": 1482,
      "imgSrc": "https://photos.zillowstatic.com/fp/eea21f7b7d1352529cd2cebad4e026b7-p_e.jpg",
      "price": "$340,000",
      "priceLabel": "$340K",
      "latLong": {
          "latitude": 38.994724,
          "longitude": -94.57864
      },
      "listingType": "",
      "communityName": "",
      "uid": "469b8884-97e3-4bb9-8b45-ea47300ae50f",
      "date": "2024-08-19T16:08:53.183Z"
  },
  {
      "address": "7620 N Mercier Ct, Kansas City, MO 64118",
      "beds": 3,
      "baths": 3,
      "area": 1900,
      "imgSrc": "https://photos.zillowstatic.com/fp/b590fb5ac0421d1bf1bf5aac1c0b21f0-p_e.jpg",
      "price": "$255,000",
      "priceLabel": "$255K",
      "latLong": {
          "latitude": 39.222607,
          "longitude": -94.59593
      },
      "listingType": "",
      "communityName": "",
      "uid": "04c97b93-2256-43b8-b569-5e40e4699898",
      "date": "2024-09-27T04:10:36.175Z"
  },
  {
      "address": "2015 E 73rd St, Kansas City, MO 64132",
      "beds": 3,
      "baths": 1,
      "area": 1552,
      "imgSrc": "https://photos.zillowstatic.com/fp/afa351dbc9235a11e84f84df25bb43cc-p_e.jpg",
      "price": "$152,900",
      "priceLabel": "$153K",
      "latLong": {
          "latitude": 38.99437,
          "longitude": -94.56313
      },
      "listingType": "",
      "communityName": "",
      "uid": "bd63d77f-a68a-4aaf-92f6-b84ec460039d",
      "date": "2024-01-23T11:30:41.824Z"
  },
  {
      "address": "5035 E 9th St, Kansas City, MO 64127",
      "beds": 3,
      "baths": 2,
      "area": 1296,
      "imgSrc": "https://photos.zillowstatic.com/fp/12b1f141f68200a568b3e01068d81660-p_e.jpg",
      "price": "$89,900",
      "priceLabel": "$90K",
      "latLong": {
          "latitude": 39.101326,
          "longitude": -94.52202
      },
      "listingType": "",
      "communityName": "",
      "uid": "018befe5-fc9f-425f-9826-4d1baef6a248",
      "date": "2024-01-14T11:48:44.758Z"
  },
  {
      "address": "1210 W 48th St, Kansas City, MO 64112",
      "beds": 4,
      "baths": 6,
      "area": 5100,
      "imgSrc": "https://photos.zillowstatic.com/fp/ccf7e043fbf031fa843aeb669c6d0838-p_e.jpg",
      "price": "$1,539,000",
      "priceLabel": "$1.54M",
      "latLong": {
          "latitude": 39.04103,
          "longitude": -94.6016
      },
      "listingType": "NEW_CONSTRUCTION",
      "communityName": "",
      "uid": "7b87dc81-a224-45a3-a9e1-b7bed080bd19",
      "date": "2023-10-22T05:37:20.158Z"
  },
  {
      "address": "7012 N Pennsylvania Ave, Kansas City, MO 64118",
      "beds": 3,
      "baths": 1,
      "area": 1147,
      "imgSrc": "https://photos.zillowstatic.com/fp/7b4fbe3b69de8e348e541640bccad6a6-p_e.jpg",
      "price": "$214,900",
      "priceLabel": "$215K",
      "latLong": {
          "latitude": 39.221558,
          "longitude": -94.58837
      },
      "listingType": "",
      "communityName": "",
      "uid": "d5beda32-3559-4a00-b61f-16c3df44dca8",
      "date": "2024-10-02T03:51:24.449Z"
  },
  {
      "address": "7712 NE 103rd Ter, Kansas City, MO 64157",
      "beds": 4,
      "baths": 4,
      "area": 3038,
      "imgSrc": "https://photos.zillowstatic.com/fp/a41d392f1cbaf6180c49fdc7224a4da0-p_e.jpg",
      "price": "$699,000",
      "priceLabel": "$699K",
      "latLong": {
          "latitude": 39.280766,
          "longitude": -94.488174
      },
      "listingType": "NEW_CONSTRUCTION",
      "communityName": "Benson Place",
      "uid": "fd9e5fed-2aef-44ac-8b19-5368c4feaf17",
      "date": "2024-10-01T18:44:20.981Z"
  },
  {
      "address": "8623 NE 101st St, Kansas City, MO 64157",
      "beds": 4,
      "baths": 3,
      "area": 2398,
      "imgSrc": "https://photos.zillowstatic.com/fp/60b333e9428a58a1a117d88aad9f640a-p_e.jpg",
      "price": "$425,000",
      "priceLabel": "$425K",
      "latLong": {
          "latitude": 39.276134,
          "longitude": -94.47623
      },
      "listingType": "",
      "communityName": "",
      "uid": "449cddc6-864c-4907-a012-ce0263f9c8fc",
      "date": "2024-02-25T09:33:17.215Z"
  },
  {
      "address": "1000 NE 115th St, Kansas City, MO 64155",
      "beds": 3,
      "baths": 3,
      "area": 1462,
      "imgSrc": "https://photos.zillowstatic.com/fp/9657a88d3bf73ae27f11d78ba4b80383-p_e.jpg",
      "price": "$259,900",
      "priceLabel": "$260K",
      "latLong": {
          "latitude": 39.302067,
          "longitude": -94.56623
      },
      "listingType": "",
      "communityName": "",
      "uid": "a09284b8-0b1e-467c-aa98-42f2e77de55d",
      "date": "2024-10-01T20:37:21.718Z"
  },
  {
      "uid": "aa95646d-7f67-491e-beca-d612710a7bbe",
      "address": "1025 NW 95th Ter, Kansas City, MO",
      "beds": 0,
      "baths": 0,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/7c492550c0bd92eaba2ff1043f7fae95-p_e.jpg",
      "price": "From $405,000",
      "priceLabel": "",
      "latLong": {
          "latitude": 39.26439,
          "longitude": -94.594406
      },
      "listingType": "NEW_CONSTRUCTION",
      "communityName": "Fountain Hills",
      "date": "2024-10-01T23:31:18.268Z"
  },
  {
      "address": "7111 Eastern Ave, Kansas City, MO 64133",
      "beds": 4,
      "baths": 2,
      "area": 3000,
      "imgSrc": "https://photos.zillowstatic.com/fp/01ef90100e4e9ca00f08099aefb99f96-p_e.jpg",
      "price": "$270,000",
      "priceLabel": "$270K",
      "latLong": {
          "latitude": 38.994022,
          "longitude": -94.500656
      },
      "listingType": "",
      "communityName": "",
      "uid": "f5b14d70-3cf1-4951-b0a0-e05a3c8a2327",
      "date": "2024-01-01T13:08:07.044Z"
  },
  {
      "address": "5902 Walnut St, Kansas City, MO 64113",
      "beds": 4,
      "baths": 2,
      "area": 1764,
      "imgSrc": "https://photos.zillowstatic.com/fp/da899d40769ab3df3fd4844e7d9a5e5b-p_e.jpg",
      "price": "$369,900",
      "priceLabel": "$370K",
      "latLong": {
          "latitude": 39.020233,
          "longitude": -94.58717
      },
      "listingType": "",
      "communityName": "",
      "uid": "81164c1d-747e-4ef1-ba92-fec80d2ea521",
      "date": "2024-10-01T07:22:08.456Z"
  },
  {
      "address": "2902 NE 43rd St, Kansas City, MO 64117",
      "beds": 2,
      "baths": 1,
      "area": 1014,
      "imgSrc": "https://photos.zillowstatic.com/fp/7fc052ac6882abc9f6e3a83669b92e14-p_e.jpg",
      "price": "$137,000",
      "priceLabel": "$137K",
      "latLong": {
          "latitude": 39.171803,
          "longitude": -94.54559
      },
      "listingType": "",
      "communityName": "",
      "uid": "65312d24-7215-4d4c-8cb5-3c581abc105d",
      "date": "2024-10-02T11:57:47.046Z"
  },
  {
      "address": "7439 N Strathbury Ave, Kansas City, MO 64151",
      "beds": 4,
      "baths": 5,
      "area": 3729,
      "imgSrc": "https://photos.zillowstatic.com/fp/4528314aa90c2303a899f1c23ec92f76-p_e.jpg",
      "price": "$450,000",
      "priceLabel": "$450K",
      "latLong": {
          "latitude": 39.231186,
          "longitude": -94.629875
      },
      "listingType": "",
      "communityName": "",
      "uid": "30e4ca88-b3fb-46a3-9a0b-09edff21556e",
      "date": "2024-07-15T10:24:05.161Z"
  },
  {
      "address": "1220 W 41st St, Kansas City, MO 64111",
      "beds": 3,
      "baths": 2,
      "area": 936,
      "imgSrc": "https://photos.zillowstatic.com/fp/1e65ac606fd7f398a95532473c81b2da-p_e.jpg",
      "price": "$309,500",
      "priceLabel": "$310K",
      "latLong": {
          "latitude": 39.054466,
          "longitude": -94.601234
      },
      "listingType": "",
      "communityName": "",
      "uid": "91a00568-3b5c-4979-80cd-5565851ca907",
      "date": "2024-10-02T14:20:25.891Z"
  },
  {
      "address": "8404 N Kensington Ave, Kansas City, MO 64156",
      "beds": 3,
      "baths": 3,
      "area": 1531,
      "imgSrc": "https://photos.zillowstatic.com/fp/7f8534b08bbb048eb1613a57797e5f91-p_e.jpg",
      "price": "$345,000",
      "priceLabel": "$345K",
      "latLong": {
          "latitude": 39.246098,
          "longitude": -94.527435
      },
      "listingType": "",
      "communityName": "",
      "uid": "d5cc0037-fa48-427d-8749-843e07af9325",
      "date": "2024-06-27T01:05:22.918Z"
  },
  {
      "address": "3317 E 114th Ter, Kansas City, MO 64137",
      "beds": 3,
      "baths": 2,
      "area": 1430,
      "imgSrc": "https://photos.zillowstatic.com/fp/d49b8fac9c2411ce837709f95c6ab93a-p_e.jpg",
      "price": "$225,000",
      "priceLabel": "$225K",
      "latLong": {
          "latitude": 38.91751,
          "longitude": -94.551186
      },
      "listingType": "",
      "communityName": "",
      "uid": "7b2f4e26-860a-49d6-a536-c5b1d502f636",
      "date": "2024-02-26T05:46:53.944Z"
  },
  {
      "address": "4607 Liberty St, Kansas City, MO",
      "beds": 0,
      "baths": 0,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/4207b178f4ee0b046da1fa545b71d60a-p_e.jpg",
      "price": "From $999,000",
      "priceLabel": "",
      "latLong": {
          "latitude": 39.044086,
          "longitude": -94.60309
      },
      "listingType": "",
      "communityName": "",
      "uid": "d8eb5677-e4e5-4928-8fea-feeca85d8e64",
      "date": "2024-05-15T16:07:24.910Z"
  },
  {
      "address": "1327 E 81st St, Kansas City, MO 64131",
      "beds": 4,
      "baths": 3,
      "area": 1550,
      "imgSrc": "https://photos.zillowstatic.com/fp/99d638faa10ee3c824338a7993dc776f-p_e.jpg",
      "price": "$213,500",
      "priceLabel": "$214K",
      "latLong": {
          "latitude": 38.98114,
          "longitude": -94.57245
      },
      "listingType": "",
      "communityName": "",
      "uid": "fd4d143f-8ff5-4d36-b134-723074a1e4c4",
      "date": "2024-05-04T19:51:15.468Z"
  },
  {
      "address": "5232 N Randolph Rd, Kansas City, MO 64119",
      "beds": 3,
      "baths": 1,
      "area": 960,
      "imgSrc": "https://photos.zillowstatic.com/fp/bc359a2354f63be86cc7b6f7aa7dce2e-p_e.jpg",
      "price": "$180,000",
      "priceLabel": "$180K",
      "latLong": {
          "latitude": 39.189133,
          "longitude": -94.493774
      },
      "listingType": "",
      "communityName": "",
      "uid": "1d0e5551-02db-41b5-b98c-9450b725dc33",
      "date": "2024-02-06T11:43:48.432Z"
  },
  {
      "address": "6301 NW 78th Ter, Kansas City, MO 64151",
      "beds": 4,
      "baths": 3,
      "area": 3824,
      "imgSrc": "https://photos.zillowstatic.com/fp/64661e9c8718b44f9253418be54e0845-p_e.jpg",
      "price": "$410,000",
      "priceLabel": "$410K",
      "latLong": {
          "latitude": 39.237164,
          "longitude": -94.65153
      },
      "listingType": "",
      "communityName": "",
      "uid": "6486d9f3-0a51-4a60-894b-26c6c84b19b4",
      "date": "2024-10-02T12:58:48.515Z"
  },
  {
      "address": "8542 N Booth Ave, Kansas City, MO 64157",
      "beds": 5,
      "baths": 5,
      "area": 6173,
      "imgSrc": "https://photos.zillowstatic.com/fp/6a4ff68ac4eb502312251f854cdcf8c0-p_e.jpg",
      "price": "$1,800,000",
      "priceLabel": "$1.80M",
      "latLong": {
          "latitude": 39.24926,
          "longitude": -94.477455
      },
      "listingType": "",
      "communityName": "",
      "uid": "93a43b31-08f4-4293-bf92-33b170c6a86f",
      "date": "2024-04-05T21:55:06.564Z"
  },
  {
      "address": "4820 Jarboe St, Kansas City, MO 64112",
      "beds": 0,
      "baths": 2,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/540acffbd35ece99566f987923ec90c5-p_e.jpg",
      "price": "$635,000",
      "priceLabel": "$635K",
      "latLong": {
          "latitude": 39.03996,
          "longitude": -94.600136
      },
      "listingType": "",
      "communityName": "",
      "uid": "e85dc541-ad77-41c7-81ba-c6b9db34b785",
      "date": "2024-10-02T02:07:50.077Z"
  },
  {
      "address": "2537 Charlotte St, Kansas City, MO 64108",
      "beds": 5,
      "baths": 2,
      "area": 2080,
      "imgSrc": "https://photos.zillowstatic.com/fp/ec01841bb28e52c749b907d0a35477dd-p_e.jpg",
      "price": "$349,500",
      "priceLabel": "$350K",
      "latLong": {
          "latitude": 39.080097,
          "longitude": -94.574554
      },
      "listingType": "",
      "communityName": "",
      "uid": "391a8061-969e-46f5-9b59-710b1bcb0f87",
      "date": "2024-01-07T06:09:22.513Z"
  },
  {
      "address": "4540 Mercier St, Kansas City, MO 64111",
      "beds": 4,
      "baths": 4,
      "area": 3796,
      "imgSrc": "https://photos.zillowstatic.com/fp/f530bf85599401e4980ba75f05611489-p_e.jpg",
      "price": "$1,695,000",
      "priceLabel": "$1.70M",
      "latLong": {
          "latitude": 39.044777,
          "longitude": -94.60181
      },
      "listingType": "",
      "communityName": "",
      "uid": "b7c562f2-57e6-47ca-8257-0e839a4a83cb",
      "date": "2023-11-18T02:10:56.441Z"
  },
  {
      "address": "5963 N Cosby Ave, Kansas City, MO 64151",
      "beds": 4,
      "baths": 7,
      "area": 7300,
      "imgSrc": "https://photos.zillowstatic.com/fp/539177d46a34c73fd798386ee006ddc5-p_e.jpg",
      "price": "$1,499,900",
      "priceLabel": "$1.50M",
      "latLong": {
          "latitude": 39.204704,
          "longitude": -94.65014
      },
      "listingType": "",
      "communityName": "",
      "uid": "63840d3a-d3c9-48ed-b0b7-5c0b303e5089",
      "date": "2024-10-01T23:49:40.378Z"
  },
  {
      "address": "11316 Booth Ave, Kansas City, MO 64134",
      "beds": 3,
      "baths": 2,
      "area": 1191,
      "imgSrc": "https://photos.zillowstatic.com/fp/02e77824789e781e4e95c3cd999dd8f8-p_e.jpg",
      "price": "$199,900",
      "priceLabel": "$200K",
      "latLong": {
          "latitude": 38.91686,
          "longitude": -94.49259
      },
      "listingType": "",
      "communityName": "",
      "uid": "119a1d24-ca1f-4791-872e-cecaef9c5547",
      "date": "2024-10-01T20:14:18.999Z"
  },
  {
      "address": "5417 Tracy Ave, Kansas City, MO 64110",
      "beds": 5,
      "baths": 2,
      "area": 1666,
      "imgSrc": "https://photos.zillowstatic.com/fp/ce5c3cc883896352368d1a8b6fe01915-p_e.jpg",
      "price": "$249,900",
      "priceLabel": "$250K",
      "latLong": {
          "latitude": 39.02827,
          "longitude": -94.571075
      },
      "listingType": "",
      "communityName": "",
      "uid": "9bf8cbab-1b22-45c8-b5b3-6db5935ac54f",
      "date": "2024-10-02T06:38:21.782Z"
  },
  {
      "address": "600 E 8th St, Kansas City, MO",
      "beds": 0,
      "baths": 0,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/eb03a36cda11e81ca21a063ddd84334a-p_e.jpg",
      "price": "From $74,000",
      "priceLabel": "",
      "latLong": {
          "latitude": 39.104553,
          "longitude": -94.57557
      },
      "listingType": "",
      "communityName": "",
      "uid": "40150e84-88ea-496f-8064-fec9c414e0a9",
      "date": "2024-02-21T22:28:32.597Z"
  },
  {
      "address": "10226 N Flora Ave, Kansas City, MO 64155",
      "beds": 3,
      "baths": 2,
      "area": 1520,
      "imgSrc": "https://photos.zillowstatic.com/fp/ef1753e2010f0c9aef751673c5aa7540-p_e.jpg",
      "price": "$359,000",
      "priceLabel": "$359K",
      "latLong": {
          "latitude": 39.27973,
          "longitude": -94.5602
      },
      "listingType": "",
      "communityName": "",
      "uid": "feefbe66-c956-4809-a877-283e494f98ee",
      "date": "2023-10-05T09:06:42.008Z"
  },
  {
      "address": "6306 NW 79th St, Kansas City, MO 64151",
      "beds": 2,
      "baths": 2,
      "area": 1835,
      "imgSrc": "https://photos.zillowstatic.com/fp/54f0543deb0de32d3dec17b76653e445-p_e.jpg",
      "price": "$340,000",
      "priceLabel": "$340K",
      "latLong": {
          "latitude": 39.238945,
          "longitude": -94.651634
      },
      "listingType": "",
      "communityName": "",
      "uid": "22127e8f-1938-4bfe-9c3a-6b7937f18324",
      "date": "2024-10-01T21:46:04.992Z"
  },
  {
      "address": "350 NE 132nd St, Kansas City, MO 64165",
      "beds": 4,
      "baths": 2,
      "area": 1824,
      "imgSrc": "https://photos.zillowstatic.com/fp/98997b9d5a92ae4df733ee1feb4f5ade-p_e.jpg",
      "price": "$345,000",
      "priceLabel": "$345K",
      "latLong": {
          "latitude": 39.332424,
          "longitude": -94.57812
      },
      "listingType": "",
      "communityName": "",
      "uid": "3fb95fed-c845-4a32-8582-567e4852e1df",
      "date": "2024-10-02T05:08:05.327Z"
  },
  {
      "address": "7155 E 69th Ter, Kansas City, MO 64133",
      "beds": 4,
      "baths": 5,
      "area": 4015,
      "imgSrc": "https://photos.zillowstatic.com/fp/e255f91504dbceffe85b15b35ffe9d47-p_e.jpg",
      "price": "$300,000",
      "priceLabel": "$300K",
      "latLong": {
          "latitude": 38.99828,
          "longitude": -94.50305
      },
      "listingType": "",
      "communityName": "",
      "uid": "21969078-3c0e-4ac7-9d79-522dd813b1b5",
      "date": "2024-04-03T12:49:21.214Z"
  },
  {
      "address": "9207 NE 93rd Ct, Kansas City, MO 64157",
      "beds": 4,
      "baths": 3,
      "area": 3122,
      "imgSrc": "https://photos.zillowstatic.com/fp/1ef1bc8fe0f83600bf991d33d344a942-p_e.jpg",
      "price": "$479,500",
      "priceLabel": "$480K",
      "latLong": {
          "latitude": 39.26121,
          "longitude": -94.46607
      },
      "listingType": "",
      "communityName": "",
      "uid": "831ce508-71d7-4e33-b4f2-c646a42e293e",
      "date": "2024-10-01T17:08:16.741Z"
  },
  {
      "address": "5316 Oak St, Kansas City, MO 64112",
      "beds": 5,
      "baths": 5,
      "area": 4292,
      "imgSrc": "https://photos.zillowstatic.com/fp/2010f056166082d15bba044a5335c0bd-p_e.jpg",
      "price": "$1,449,000",
      "priceLabel": "$1.45M",
      "latLong": {
          "latitude": 39.03007,
          "longitude": -94.58333
      },
      "listingType": "",
      "communityName": "",
      "uid": "b4b5e9fa-2147-4f89-8d4d-044af3643845",
      "date": "2024-06-18T03:04:46.326Z"
  },
  {
      "address": "3921 N Jackson Ave, Kansas City, MO 64117",
      "beds": 2,
      "baths": 1,
      "area": 720,
      "imgSrc": "https://photos.zillowstatic.com/fp/d2a713b8d2d57e8b75c655837d1d9eb4-p_e.jpg",
      "price": "$148,000",
      "priceLabel": "$148K",
      "latLong": {
          "latitude": 39.164837,
          "longitude": -94.5309
      },
      "listingType": "",
      "communityName": "",
      "uid": "86d6ecdd-f230-4f35-95b3-d418449039bd",
      "date": "2024-10-01T20:22:40.487Z"
  },
  {
      "address": "4536 Jefferson St APT 8B, Kansas City, MO 64111",
      "beds": 2,
      "baths": 2,
      "area": 1197,
      "imgSrc": "https://photos.zillowstatic.com/fp/8d66fe4fc8feca248755e4d91c84e007-p_e.jpg",
      "price": "$259,000",
      "priceLabel": "$259K",
      "latLong": {
          "latitude": 39.04466,
          "longitude": -94.59501
      },
      "listingType": "",
      "communityName": "",
      "uid": "e902fe83-34c4-4f70-90ec-ac30c7f2323b",
      "date": "2023-11-21T22:27:22.590Z"
  },
  {
      "address": "1407 NE 92nd Ter, Kansas City, MO 64155",
      "beds": 3,
      "baths": 4,
      "area": 3292,
      "imgSrc": "https://photos.zillowstatic.com/fp/68e55c9ae38c7e230ca6ce98bd4a4325-p_e.jpg",
      "price": "$550,000",
      "priceLabel": "$550K",
      "latLong": {
          "latitude": 39.26179,
          "longitude": -94.56048
      },
      "listingType": "",
      "communityName": "",
      "uid": "df4c2c34-9cf1-4a83-b480-0cfa4e0171f7",
      "date": "2024-05-04T01:44:05.889Z"
  },
  {
      "address": "4606 E 112th Ter, Kansas City, MO 64137",
      "beds": 5,
      "baths": 4,
      "area": 2208,
      "imgSrc": "https://photos.zillowstatic.com/fp/9fff6cc4a07647c73811bebe944d2275-p_e.jpg",
      "price": "$250,000",
      "priceLabel": "$250K",
      "latLong": {
          "latitude": 38.9208,
          "longitude": -94.5354
      },
      "listingType": "",
      "communityName": "",
      "uid": "1eb47254-6519-41e1-9ab4-13ae711c7a38",
      "date": "2024-09-27T18:31:08.957Z"
  },
  {
      "address": "814 E 33rd St, Kansas City, MO 64109",
      "beds": 4,
      "baths": 3,
      "area": 2046,
      "imgSrc": "https://photos.zillowstatic.com/fp/97e0e2b0131c1d4e650cb089d3bc6db0-p_e.jpg",
      "price": "$315,000",
      "priceLabel": "$315K",
      "latLong": {
          "latitude": 39.06723,
          "longitude": -94.57481
      },
      "listingType": "",
      "communityName": "",
      "uid": "654f5448-3f74-4f04-9f3a-a08b12ff90dd",
      "date": "2024-09-02T08:34:34.970Z"
  },
  {
      "address": "712 Broadway Blvd #706, Kansas City, MO 64105",
      "beds": 2,
      "baths": 2,
      "area": 1308,
      "imgSrc": "https://photos.zillowstatic.com/fp/e13274b3fc52c9c099886c3ffa30c8d4-p_e.jpg",
      "price": "$360,000",
      "priceLabel": "$360K",
      "latLong": {
          "latitude": 39.10491,
          "longitude": -94.58849
      },
      "listingType": "",
      "communityName": "",
      "uid": "7e482b5a-3426-419d-b2f7-195137efddab",
      "date": "2024-08-25T08:43:34.445Z"
  },
  {
      "address": "8615 N Lewis Ave, Kansas City, MO 64157",
      "beds": 5,
      "baths": 4,
      "area": 3504,
      "imgSrc": "https://photos.zillowstatic.com/fp/40af21c273fa6953bdbadae49267e569-p_e.jpg",
      "price": "$585,000",
      "priceLabel": "$585K",
      "latLong": {
          "latitude": 39.249084,
          "longitude": -94.471146
      },
      "listingType": "",
      "communityName": "",
      "uid": "985ed5dc-a3b3-4a6f-a3ee-bd99bb93b32b",
      "date": "2024-10-02T14:46:16.622Z"
  },
  {
      "address": "921 Benton Blvd, Kansas City, MO 64127",
      "beds": 5,
      "baths": 4,
      "area": 3608,
      "imgSrc": "https://photos.zillowstatic.com/fp/6b9d504301b7a359e2781a93f40fcf33-p_e.jpg",
      "price": "$225,000",
      "priceLabel": "$225K",
      "latLong": {
          "latitude": 39.101437,
          "longitude": -94.54395
      },
      "listingType": "",
      "communityName": "",
      "uid": "f5dee4a6-a622-4499-ae1c-053548cb8a6e",
      "date": "2023-10-24T16:43:46.904Z"
  },
  {
      "address": "4618 Forest Ave, Kansas City, MO 64110",
      "beds": 0,
      "baths": 4,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/926a8b729832713f64b9d706a1b078da-p_e.jpg",
      "price": "$1,210,000",
      "priceLabel": "$1.21M",
      "latLong": {
          "latitude": 39.023907,
          "longitude": -94.5728
      },
      "listingType": "",
      "communityName": "",
      "uid": "b4f90300-126e-4451-acca-f6a1a102fa97",
      "date": "2024-07-03T00:36:24.134Z"
  },
  {
      "address": "4932 NE Chouteau Dr, Kansas City, MO 64119",
      "beds": 4,
      "baths": 3,
      "area": 1584,
      "imgSrc": "https://photos.zillowstatic.com/fp/675037242b7a893d03abe5a55f2abe82-p_e.jpg",
      "price": "$270,000",
      "priceLabel": "$270K",
      "latLong": {
          "latitude": 39.184055,
          "longitude": -94.54062
      },
      "listingType": "",
      "communityName": "",
      "uid": "e8757bd8-a76f-43b7-9985-84d4cfb5d917",
      "date": "2024-10-02T02:40:17.959Z"
  },
  {
      "address": "2706 E 36th St, Kansas City, MO 64128",
      "beds": 4,
      "baths": 1,
      "area": 3220,
      "imgSrc": "https://photos.zillowstatic.com/fp/e6612b94ded4e191105433c79dea47c1-p_e.jpg",
      "price": "$129,000",
      "priceLabel": "$129K",
      "latLong": {
          "latitude": 39.06066,
          "longitude": -94.55185
      },
      "listingType": "",
      "communityName": "",
      "uid": "90d7dff0-a8b5-4bb5-8e0e-71c60981194f",
      "date": "2024-10-01T21:08:24.668Z"
  },
  {
      "address": "5200 NE 48th St, Kansas City, MO 64119",
      "beds": 3,
      "baths": 2,
      "area": 2406,
      "imgSrc": "https://photos.zillowstatic.com/fp/9ec19ddbf9d62945405c0d9b2a7deefd-p_e.jpg",
      "price": "$320,000",
      "priceLabel": "$320K",
      "latLong": {
          "latitude": 39.181366,
          "longitude": -94.51875
      },
      "listingType": "",
      "communityName": "",
      "uid": "eedac54f-197e-4134-af7c-4ce50928ea66",
      "date": "2024-10-02T08:55:40.364Z"
  },
  {
      "address": "7907 E 107th St, Kansas City, MO 64134",
      "beds": 4,
      "baths": 1,
      "area": 1179,
      "imgSrc": "https://photos.zillowstatic.com/fp/9145c009053a42e10df4ace03cc1e206-p_e.jpg",
      "price": "$218,000",
      "priceLabel": "$218K",
      "latLong": {
          "latitude": 38.92993,
          "longitude": -94.496895
      },
      "listingType": "",
      "communityName": "",
      "uid": "b5eed7af-8e39-4c17-9f55-d26b49b2725e",
      "date": "2024-08-19T15:59:21.698Z"
  },
  {
      "address": "5719 McGee St, Kansas City, MO 64113",
      "beds": 5,
      "baths": 4,
      "area": 3510,
      "imgSrc": "https://photos.zillowstatic.com/fp/55b1da39752f3e464a28945af025a101-p_e.jpg",
      "price": "$695,000",
      "priceLabel": "$695K",
      "latLong": {
          "latitude": 39.02314,
          "longitude": -94.58412
      },
      "listingType": "",
      "communityName": "",
      "uid": "784cfb08-e496-4a70-b0da-ebe529da13e0",
      "date": "2024-10-02T03:56:25.914Z"
  },
  {
      "address": "210 W 5th St APT 203, Kansas City, MO 64105",
      "beds": 2,
      "baths": 2,
      "area": 1800,
      "imgSrc": "https://photos.zillowstatic.com/fp/d7a08533e5489f12f7c506758430335a-p_e.jpg",
      "price": "$578,950",
      "priceLabel": "$579K",
      "latLong": {
          "latitude": 39.10791,
          "longitude": -94.58628
      },
      "listingType": "",
      "communityName": "",
      "uid": "73e03e23-f18d-4ff9-8028-50ec485eaf1a",
      "date": "2024-10-02T07:56:15.488Z"
  },
  {
      "address": "8415 Central St, Kansas City, MO 64114",
      "beds": 3,
      "baths": 2,
      "area": 1224,
      "imgSrc": "https://photos.zillowstatic.com/fp/43b64972706adf723174eb196d44d929-p_e.jpg",
      "price": "$299,950",
      "priceLabel": "$300K",
      "latLong": {
          "latitude": 38.975807,
          "longitude": -94.59367
      },
      "listingType": "",
      "communityName": "",
      "uid": "21ae384b-ed28-4b13-8bd9-9c298348053b",
      "date": "2024-04-27T07:17:21.586Z"
  },
  {
      "address": "3622 NE 85th St, Kansas City, MO 64156",
      "beds": 4,
      "baths": 3,
      "area": 1899,
      "imgSrc": "https://photos.zillowstatic.com/fp/281db2ad3f48181425ff260d2f8320b5-p_e.jpg",
      "price": "$374,900",
      "priceLabel": "$375K",
      "latLong": {
          "latitude": 39.248066,
          "longitude": -94.53529
      },
      "listingType": "",
      "communityName": "",
      "uid": "857a2145-123a-49c4-b978-ae3105661e2b",
      "date": "2024-07-24T12:35:08.232Z"
  },
  {
      "address": "10727-29 N Kenwood Ave, Kansas City, MO 64155",
      "beds": 0,
      "baths": 4,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/66173df34ad195c8da2dc286ceab344e-p_e.jpg",
      "price": "$475,000",
      "priceLabel": "$475K",
      "latLong": {
          "latitude": 39.288975,
          "longitude": -94.57223
      },
      "listingType": "",
      "communityName": "",
      "uid": "67571aaf-a6bc-4ece-bd1a-9004889746c7",
      "date": "2023-11-01T19:34:49.747Z"
  },
  {
      "address": "5342 Garfield Ave, Kansas City, MO 64130",
      "beds": 3,
      "baths": 1,
      "area": 1192,
      "imgSrc": "https://photos.zillowstatic.com/fp/87f7a43d2962a27768f1f4e61eef685e-p_e.jpg",
      "price": "$130,000",
      "priceLabel": "$130K",
      "latLong": {
          "latitude": 39.02889,
          "longitude": -94.5612
      },
      "listingType": "",
      "communityName": "",
      "uid": "4bcacb0b-8021-456d-9a1c-1764be717fb5",
      "date": "2024-02-23T23:39:07.586Z"
  },
  {
      "address": "10001 NW 92nd Ter, Kansas City, MO 64153",
      "beds": 3,
      "baths": 2,
      "area": 2007,
      "imgSrc": "https://photos.zillowstatic.com/fp/278c9cfa863261b42daea23d3e726d3a-p_e.jpg",
      "price": "$515,000",
      "priceLabel": "$515K",
      "latLong": {
          "latitude": 39.261803,
          "longitude": -94.69692
      },
      "listingType": "",
      "communityName": "",
      "uid": "776f4120-6081-4198-94fd-83ec369beba0",
      "date": "2024-08-03T01:11:32.291Z"
  },
  {
      "address": "8685 NE Shoal Creek Valley Dr, Kansas City, MO 64157",
      "beds": 4,
      "baths": 4,
      "area": 4480,
      "imgSrc": "https://photos.zillowstatic.com/fp/524949b1dfeee900a0175719b7ed4333-p_e.jpg",
      "price": "$1,199,950",
      "priceLabel": "$1.20M",
      "latLong": {
          "latitude": 39.24636,
          "longitude": -94.46978
      },
      "listingType": "",
      "communityName": "",
      "uid": "657663b3-acdb-4e27-b0b1-40d7bec4dce9",
      "date": "2024-10-02T09:04:16.026Z"
  },
  {
      "address": "600 E Admiral Blvd, Kansas City, MO",
      "beds": 0,
      "baths": 0,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/1cd9c6406a4f12b3fe8bc09398e1a8eb-p_e.jpg",
      "price": "From $184,900",
      "priceLabel": "",
      "latLong": {
          "latitude": 39.105656,
          "longitude": -94.57569
      },
      "listingType": "",
      "communityName": "",
      "uid": "9b7cefd8-05ef-44bf-9866-2445116812ed",
      "date": "2024-05-02T11:00:18.434Z"
  },
  {
      "address": "4011 Mercier St, Kansas City, MO 64111",
      "beds": 0,
      "baths": 0,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/e1129bd6fb32336e5ec3cfd2f496336b-p_e.jpg",
      "price": "$400,000",
      "priceLabel": "$400K",
      "latLong": {
          "latitude": 39.05473,
          "longitude": -94.60146
      },
      "listingType": "",
      "communityName": "",
      "uid": "cf4eef5b-f58c-429e-b1af-a9aee8ca44e3",
      "date": "2024-09-20T21:31:33.989Z"
  },
  {
      "address": "5500 NE 44th Ter, Kansas City, MO 64117",
      "beds": 2,
      "baths": 1,
      "area": 1080,
      "imgSrc": "https://photos.zillowstatic.com/fp/396548b30dd4f204c3dc6c32f2b90147-p_e.jpg",
      "price": "$124,900",
      "priceLabel": "$125K",
      "latLong": {
          "latitude": 39.175182,
          "longitude": -94.515434
      },
      "listingType": "",
      "communityName": "",
      "uid": "9717bd9f-3852-4422-8961-c60b0030842d",
      "date": "2024-05-31T12:16:24.134Z"
  },
  {
      "address": "306 NW 110th St, Kansas City, MO 64155",
      "beds": 3,
      "baths": 2,
      "area": 1280,
      "imgSrc": "https://photos.zillowstatic.com/fp/512d9fc54d28e364531df931f88a50c4-p_e.jpg",
      "price": "$327,000",
      "priceLabel": "$327K",
      "latLong": {
          "latitude": 39.293354,
          "longitude": -94.5838
      },
      "listingType": "",
      "communityName": "",
      "uid": "f05a98a2-b66f-4b35-b978-b0a118744545",
      "date": "2024-10-01T17:30:10.570Z"
  },
  {
      "address": "5823 Holmes St, Kansas City, MO 64110",
      "beds": 3,
      "baths": 2,
      "area": 1184,
      "imgSrc": "https://photos.zillowstatic.com/fp/e567cd10a7734912f2e44b87cec9192d-p_e.jpg",
      "price": "$331,500",
      "priceLabel": "$332K",
      "latLong": {
          "latitude": 39.020824,
          "longitude": -94.57847
      },
      "listingType": "",
      "communityName": "",
      "uid": "5054be5e-245a-459f-8d57-f8f7bc081862",
      "date": "2023-11-10T08:52:08.273Z"
  },
  {
      "address": "2700 Paseo Blvd, Kansas City, MO 64109",
      "beds": 3,
      "baths": 2,
      "area": 2278,
      "imgSrc": "https://photos.zillowstatic.com/fp/12b1260533591e4a22707514bc8900f9-p_e.jpg",
      "price": "$212,000",
      "priceLabel": "$212K",
      "latLong": {
          "latitude": 39.077343,
          "longitude": -94.5655
      },
      "listingType": "",
      "communityName": "",
      "uid": "1f5a5cf8-641a-4381-a64c-69c28893179d",
      "date": "2024-10-02T00:55:27.583Z"
  },
  {
      "address": "8308 Paseo Blvd, Kansas City, MO 64131",
      "beds": 3,
      "baths": 2,
      "area": 2274,
      "imgSrc": "https://photos.zillowstatic.com/fp/f3e851857e6d53f6aa1603ff8d70aa99-p_e.jpg",
      "price": "$139,000",
      "priceLabel": "$139K",
      "latLong": {
          "latitude": 38.976727,
          "longitude": -94.56755
      },
      "listingType": "",
      "communityName": "",
      "uid": "47da18ea-268b-4aee-a227-d7d5bef1875f",
      "date": "2024-05-14T08:55:44.164Z"
  },
  {
      "address": "4512 Summit St, Kansas City, MO 64111",
      "beds": 3,
      "baths": 4,
      "area": 3397,
      "imgSrc": "https://photos.zillowstatic.com/fp/b471bc64f75c8550710dd9d880f9b1b0-p_e.jpg",
      "price": "$1,030,000",
      "priceLabel": "$1.03M",
      "latLong": {
          "latitude": 39.045586,
          "longitude": -94.59635
      },
      "listingType": "",
      "communityName": "",
      "uid": "0f03af8c-f6e5-4a1a-920f-31e6ab3b7b5e",
      "date": "2024-10-02T06:18:36.575Z"
  },
  {
      "address": "3136 Grand Avenue, Kansas City, MO 64111",
      "beds": 0,
      "baths": 0,
      "area": 18520,
      "imgSrc": "https://photos.zillowstatic.com/fp/ee475d4805df32d33668dd86509e1051-p_e.jpg",
      "price": "$1,995,000",
      "priceLabel": "$2.00M",
      "latLong": {
          "latitude": 39.069572,
          "longitude": -94.58277
      },
      "listingType": "",
      "communityName": "",
      "uid": "a22cf0c9-05aa-41d9-a77d-25b30b7a1037",
      "date": "2023-11-27T05:24:14.320Z"
  },
  {
      "address": "5545 Harrison St, Kansas City, MO 64110",
      "beds": 3,
      "baths": 3,
      "area": 2060,
      "imgSrc": "https://photos.zillowstatic.com/fp/6f267b7c1631c950c73a72f23d051871-p_e.jpg",
      "price": "$450,000",
      "priceLabel": "$450K",
      "latLong": {
          "latitude": 39.025555,
          "longitude": -94.57472
      },
      "listingType": "",
      "communityName": "",
      "uid": "b2de4500-64d1-464d-9a9a-8182ad622d8c",
      "date": "2023-11-27T13:52:08.020Z"
  },
  {
      "address": "4519 N Campbell St, Kansas City, MO 64116",
      "beds": 3,
      "baths": 1,
      "area": 1048,
      "imgSrc": "https://photos.zillowstatic.com/fp/4376a55d8742d8e9bdcd2517b513782b-p_e.jpg",
      "price": "$184,900",
      "priceLabel": "$185K",
      "latLong": {
          "latitude": 39.176872,
          "longitude": -94.56903
      },
      "listingType": "",
      "communityName": "",
      "uid": "1710e4dd-00ba-46e7-a13d-d77955109530",
      "date": "2024-10-02T07:02:06.180Z"
  },
  {
      "address": "8410 N Winan Ave, Kansas City, MO 64153",
      "beds": 5,
      "baths": 3,
      "area": 1962,
      "imgSrc": "https://photos.zillowstatic.com/fp/35abf245f2408342738e2cce4e51f139-p_e.jpg",
      "price": "$330,000",
      "priceLabel": "$330K",
      "latLong": {
          "latitude": 39.248314,
          "longitude": -94.69755
      },
      "listingType": "",
      "communityName": "",
      "uid": "bcc37112-b510-4ea8-939a-2671f71c3d12",
      "date": "2024-10-01T17:46:17.698Z"
  },
  {
      "address": "3839 Harrison St, Kansas City, MO 64109",
      "beds": 5,
      "baths": 3,
      "area": 2448,
      "imgSrc": "https://photos.zillowstatic.com/fp/d3aa04d18b0af0a747a1dd3aec546bd7-p_e.jpg",
      "price": "$450,000",
      "priceLabel": "$450K",
      "latLong": {
          "latitude": 39.056248,
          "longitude": -94.57294
      },
      "listingType": "",
      "communityName": "",
      "uid": "89c8f4fb-f37e-4771-8f82-b27f33e2d25a",
      "date": "2024-05-24T02:28:52.614Z"
  },
  {
      "address": "425 Gladstone Blvd, Kansas City, MO 64124",
      "beds": 4,
      "baths": 5,
      "area": 5200,
      "imgSrc": "https://photos.zillowstatic.com/fp/7d0ecbfd14c2a2378002460abc756972-p_e.jpg",
      "price": "$1,195,000",
      "priceLabel": "$1.20M",
      "latLong": {
          "latitude": 39.108646,
          "longitude": -94.545456
      },
      "listingType": "",
      "communityName": "",
      "uid": "387c076e-44b0-446a-b650-8dcf72461463",
      "date": "2024-10-02T13:37:29.716Z"
  },
  {
      "address": "627 E Meyer Blvd, Kansas City, MO 64131",
      "beds": 0,
      "baths": 3,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/876ca1ddd2911a675d76e36f1af9ac8a-p_e.jpg",
      "price": "$725,000",
      "priceLabel": "$725K",
      "latLong": {
          "latitude": 39.011356,
          "longitude": -94.58047
      },
      "listingType": "",
      "communityName": "",
      "uid": "57167829-1e4f-4be5-9919-00cd651059bf",
      "date": "2024-02-10T18:18:19.575Z"
  },
  {
      "address": "924 NW 62nd Ter, Kansas City, MO 64118",
      "beds": 3,
      "baths": 4,
      "area": 2268,
      "imgSrc": "https://photos.zillowstatic.com/fp/6b10e5250e369de3ee107e6392326cbd-p_e.jpg",
      "price": "$285,000",
      "priceLabel": "$285K",
      "latLong": {
          "latitude": 39.208126,
          "longitude": -94.59157
      },
      "listingType": "",
      "communityName": "",
      "uid": "3e28768d-1917-4022-9086-23e953371e90",
      "date": "2024-06-17T07:23:08.315Z"
  },
  {
      "address": "6501 Edgevale Rd, Kansas City, MO 64113",
      "beds": 3,
      "baths": 4,
      "area": 2923,
      "imgSrc": "https://photos.zillowstatic.com/fp/b32d4b8da15adf76d893a31e643aab53-p_e.jpg",
      "price": "$635,000",
      "priceLabel": "$635K",
      "latLong": {
          "latitude": 39.00972,
          "longitude": -94.58426
      },
      "listingType": "",
      "communityName": "",
      "uid": "94c43db1-6da3-47e4-87c1-c0463b733321",
      "date": "2024-07-19T16:47:54.353Z"
  },
  {
      "address": "912 E 78th Ter, Kansas City, MO 64131",
      "beds": 3,
      "baths": 2,
      "area": 1652,
      "imgSrc": "https://photos.zillowstatic.com/fp/53834718e47fd4da15815be3a85c1d93-p_e.jpg",
      "price": "$275,000",
      "priceLabel": "$275K",
      "latLong": {
          "latitude": 38.98568,
          "longitude": -94.57703
      },
      "listingType": "",
      "communityName": "",
      "uid": "785c796e-b03a-41a7-8623-12f73cf4e0ca",
      "date": "2024-08-22T08:33:41.000Z"
  },
  {
      "address": "8323 NW 83rd St, Kansas City, MO 64152",
      "beds": 4,
      "baths": 4,
      "area": 3502,
      "imgSrc": "https://photos.zillowstatic.com/fp/eb111239d0c7b6d0e1a68bb23708a27c-p_e.jpg",
      "price": "$429,900",
      "priceLabel": "$430K",
      "latLong": {
          "latitude": 39.24499,
          "longitude": -94.67719
      },
      "listingType": "",
      "communityName": "",
      "uid": "c4693cde-15c5-4df1-a377-03a7a3b10e40",
      "date": "2024-07-29T23:54:46.283Z"
  },
  {
      "address": "8903 NE 116th St, Kansas City, MO 64157",
      "beds": 3,
      "baths": 3,
      "area": 1950,
      "imgSrc": "https://photos.zillowstatic.com/fp/81491e355dc0a4958c3b902ec556dc7c-p_e.jpg",
      "price": "$327,900",
      "priceLabel": "$328K",
      "latLong": {
          "latitude": 39.302578,
          "longitude": -94.47098
      },
      "listingType": "",
      "communityName": "",
      "uid": "2573cbad-92ee-403e-b42b-0de2b9731666",
      "date": "2024-10-02T13:17:35.172Z"
  },
  {
      "address": "3809 NW 75th St, Kansas City, MO 64151",
      "beds": 5,
      "baths": 5,
      "area": 4505,
      "imgSrc": "https://photos.zillowstatic.com/fp/eabfb1afe8d15a6b93f4fcdb8d52e50c-p_e.jpg",
      "price": "$518,000",
      "priceLabel": "$518K",
      "latLong": {
          "latitude": 39.22902,
          "longitude": -94.624504
      },
      "listingType": "",
      "communityName": "",
      "uid": "c2c884c1-454c-4e60-b677-090f9438354b",
      "date": "2024-10-02T06:02:59.911Z"
  },
  {
      "address": "4432 Norledge Ave, Kansas City, MO 64123",
      "beds": 3,
      "baths": 2,
      "area": 1800,
      "imgSrc": "https://photos.zillowstatic.com/fp/35d2caa5e4827f6a5eeb3d14a16401d9-p_e.jpg",
      "price": "$215,000",
      "priceLabel": "$215K",
      "latLong": {
          "latitude": 39.116184,
          "longitude": -94.52855
      },
      "listingType": "",
      "communityName": "",
      "uid": "925356ef-8605-48d7-aa14-7a7ee909e720",
      "date": "2023-12-24T22:28:57.889Z"
  },
  {
      "address": "7600 NW 76th Way, Kansas City, MO 64152",
      "beds": 3,
      "baths": 3,
      "area": 1672,
      "imgSrc": "https://photos.zillowstatic.com/fp/342d71221c9a2cc0c121d7c4b9536c8c-p_e.jpg",
      "price": "$320,000",
      "priceLabel": "$320K",
      "latLong": {
          "latitude": 39.23386,
          "longitude": -94.66858
      },
      "listingType": "",
      "communityName": "",
      "uid": "80fa6925-ce64-4a6c-9813-7728f98ee9f3",
      "date": "2024-02-29T13:24:29.678Z"
  },
  {
      "address": "1101 Walnut St UNIT 1001, Kansas City, MO 64106",
      "beds": 2,
      "baths": 3,
      "area": 1520,
      "imgSrc": "https://photos.zillowstatic.com/fp/5727c32d730e58dddadd984a69293bbe-p_e.jpg",
      "price": "$459,000",
      "priceLabel": "$459K",
      "latLong": {
          "latitude": 39.10091,
          "longitude": -94.581635
      },
      "listingType": "",
      "communityName": "",
      "uid": "baf9fd96-5025-40db-a132-bdb5544b5735",
      "date": "2024-10-01T21:17:25.908Z"
  },
  {
      "address": "4545 Wornall Rd APT 1100, Kansas City, MO 64111",
      "beds": 1,
      "baths": 1,
      "area": 815,
      "imgSrc": "https://photos.zillowstatic.com/fp/af6fed63fe1219e4f13015fc4e914df6-p_e.jpg",
      "price": "$204,500",
      "priceLabel": "$205K",
      "latLong": {
          "latitude": 39.044407,
          "longitude": -94.58939
      },
      "listingType": "",
      "communityName": "",
      "uid": "fae455e4-3163-4152-ad04-5173d26ac1fd",
      "date": "2024-10-02T08:44:03.496Z"
  },
  {
      "address": "8409 N Virginia Ave, Kansas City, MO 64155",
      "beds": 3,
      "baths": 2,
      "area": 1363,
      "imgSrc": "https://photos.zillowstatic.com/fp/a2f8f64e8fc72b7a16ed1e0306f4b9cb-p_e.jpg",
      "price": "$285,000",
      "priceLabel": "$285K",
      "latLong": {
          "latitude": 39.247055,
          "longitude": -94.563156
      },
      "listingType": "",
      "communityName": "",
      "uid": "9d2beb6f-ad73-4751-ac01-6283f230ac73",
      "date": "2023-12-03T02:44:35.136Z"
  },
  {
      "address": "5401 NW 62nd St, Kansas City, MO 64151",
      "beds": 4,
      "baths": 6,
      "area": 4698,
      "imgSrc": "https://photos.zillowstatic.com/fp/6bdd22d66de3c40d25bcb54f25f82526-p_e.jpg",
      "price": "$699,000",
      "priceLabel": "$699K",
      "latLong": {
          "latitude": 39.20654,
          "longitude": -94.64432
      },
      "listingType": "",
      "communityName": "",
      "uid": "45c53ab3-df07-409b-9cba-0ea511fb9e87",
      "date": "2024-09-07T21:46:01.451Z"
  },
  {
      "address": "9631 State Line Rd, Kansas City, MO 64114",
      "beds": 3,
      "baths": 3,
      "area": 1989,
      "imgSrc": "https://photos.zillowstatic.com/fp/4a5cf16b54b68aa1dd72e3c396990184-p_e.jpg",
      "price": "$410,000",
      "priceLabel": "$410K",
      "latLong": {
          "latitude": 38.952457,
          "longitude": -94.607796
      },
      "listingType": "",
      "communityName": "",
      "uid": "cb008b4c-e622-4b6a-9222-adff27ad69a1",
      "date": "2024-01-10T21:23:50.325Z"
  },
  {
      "address": "5911 Wornall Rd, Kansas City, MO 64113",
      "beds": 3,
      "baths": 2,
      "area": 1854,
      "imgSrc": "https://photos.zillowstatic.com/fp/b1f4013c8b57295ad4c44e622bc3a3ba-p_e.jpg",
      "price": "$430,000",
      "priceLabel": "$430K",
      "latLong": {
          "latitude": 39.020023,
          "longitude": -94.59248
      },
      "listingType": "",
      "communityName": "",
      "uid": "311e8adb-b531-44d0-aba6-307879ef2e31",
      "date": "2024-06-04T14:44:05.280Z"
  },
  {
      "address": "10217 Wheeling Ave, Kansas City, MO 64134",
      "beds": 4,
      "baths": 2,
      "area": 1495,
      "imgSrc": "https://photos.zillowstatic.com/fp/ffd6b676b49a43007552725cc0844a8f-p_e.jpg",
      "price": "$210,000",
      "priceLabel": "$210K",
      "latLong": {
          "latitude": 38.939262,
          "longitude": -94.518234
      },
      "listingType": "",
      "communityName": "",
      "uid": "c14d9b7a-6596-4501-9596-6131a0142781",
      "date": "2024-10-02T15:28:21.366Z"
  },
  {
      "address": "10410 N Hedges Ave, Kansas City, MO 64157",
      "beds": 5,
      "baths": 5,
      "area": 5174,
      "imgSrc": "https://photos.zillowstatic.com/fp/dbede3d60fea05a7f5d932f297a5a4d1-p_e.jpg",
      "price": "$1,500,000",
      "priceLabel": "$1.50M",
      "latLong": {
          "latitude": 39.282085,
          "longitude": -94.448105
      },
      "listingType": "",
      "communityName": "",
      "uid": "0a9d8b6d-a6c2-4ae8-b5d9-36e31fa6c4fc",
      "date": "2024-10-02T10:38:16.591Z"
  },
  {
      "address": "4216 Mercier St, Kansas City, MO 64111",
      "beds": 0,
      "baths": 0,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/07d3817fdaa01b4fe6a049c180f712af-p_e.jpg",
      "price": "$325,000",
      "priceLabel": "$325K",
      "latLong": {
          "latitude": 39.051537,
          "longitude": -94.602325
      },
      "listingType": "",
      "communityName": "",
      "uid": "e84b70b0-8546-481a-b5d5-fbbf10cdcd26",
      "date": "2024-04-27T06:51:26.780Z"
  },
  {
      "address": "9409 NE 89th St, Kansas City, MO 64157",
      "beds": 5,
      "baths": 5,
      "area": 4017,
      "imgSrc": "https://photos.zillowstatic.com/fp/6b075955d5d0d845930a055033d3efd4-p_e.jpg",
      "price": "$725,000",
      "priceLabel": "$725K",
      "latLong": {
          "latitude": 39.254612,
          "longitude": -94.46082
      },
      "listingType": "",
      "communityName": "",
      "uid": "f765963a-8e8c-4282-8cc6-729dcea903ab",
      "date": "2024-04-10T03:02:36.731Z"
  },
  {
      "address": "11406 Sycamore Ter, Kansas City, MO 64134",
      "beds": 3,
      "baths": 1,
      "area": 912,
      "imgSrc": "https://photos.zillowstatic.com/fp/3d7f198c46975f060594d19711690e9e-p_e.jpg",
      "price": "$154,500",
      "priceLabel": "$155K",
      "latLong": {
          "latitude": 38.91584,
          "longitude": -94.49797
      },
      "listingType": "",
      "communityName": "",
      "uid": "22b3281c-c991-4ee2-bf09-f58b2e90f561",
      "date": "2024-01-01T02:05:14.692Z"
  },
  {
      "address": "4816 Westwood Rd, Kansas City, MO 64112",
      "beds": 4,
      "baths": 4,
      "area": 3464,
      "imgSrc": "https://photos.zillowstatic.com/fp/eea77c0dd2486d3b18af03c1bebf3782-p_e.jpg",
      "price": "$1,450,000",
      "priceLabel": "$1.45M",
      "latLong": {
          "latitude": 39.03988,
          "longitude": -94.60506
      },
      "listingType": "",
      "communityName": "",
      "uid": "9397f5b9-85ec-4a4d-b09a-9133406a7b79",
      "date": "2023-10-08T10:33:28.136Z"
  },
  {
      "address": "4525 Kenwood Ave, Kansas City, MO 64110",
      "beds": 6,
      "baths": 6,
      "area": 6106,
      "imgSrc": "https://photos.zillowstatic.com/fp/d88082e01178451588d33fb3a246fb70-p_e.jpg",
      "price": "$1,950,000",
      "priceLabel": "$1.95M",
      "latLong": {
          "latitude": 39.044785,
          "longitude": -94.578255
      },
      "listingType": "",
      "communityName": "",
      "uid": "175b9e32-e7e8-4cb4-81e8-92b7bf6bb71f",
      "date": "2024-07-11T11:56:22.325Z"
  },
  {
      "address": "11 E 89th St, Kansas City, MO 64114",
      "beds": 3,
      "baths": 3,
      "area": 1625,
      "imgSrc": "https://photos.zillowstatic.com/fp/6ed3ff26d293f24300644b3fe7c18e6c-p_e.jpg",
      "price": "$265,000",
      "priceLabel": "$265K",
      "latLong": {
          "latitude": 38.966503,
          "longitude": -94.590096
      },
      "listingType": "",
      "communityName": "",
      "uid": "79dbb66d-b59a-40d7-82cf-ccf18dfd0972",
      "date": "2024-02-22T15:20:18.088Z"
  },
  {
      "address": "7634 Baltimore Ave, Kansas City, MO 64114",
      "beds": 3,
      "baths": 1,
      "area": 1368,
      "imgSrc": "https://photos.zillowstatic.com/fp/2130786570340ecc28342e2affa2f182-p_e.jpg",
      "price": "$259,000",
      "priceLabel": "$259K",
      "latLong": {
          "latitude": 38.989243,
          "longitude": -94.591225
      },
      "listingType": "",
      "communityName": "",
      "uid": "c1da2f74-9bf7-4a77-994f-f87e7772150c",
      "date": "2024-08-14T10:59:54.789Z"
  },
  {
      "address": "1431 NW 75th St, Kansas City, MO 64118",
      "beds": 4,
      "baths": 3,
      "area": 2304,
      "imgSrc": "https://photos.zillowstatic.com/fp/d783392d8357ebf407a8b65f78c23031-p_e.jpg",
      "price": "$385,000",
      "priceLabel": "$385K",
      "latLong": {
          "latitude": 39.231297,
          "longitude": -94.59787
      },
      "listingType": "",
      "communityName": "",
      "uid": "e65e65ad-f146-41e6-aaeb-c463a3e6bad2",
      "date": "2024-08-01T07:46:59.056Z"
  },
  {
      "address": "10340 N Potter Ave, Kansas City, MO 64157",
      "beds": 5,
      "baths": 5,
      "area": 3471,
      "imgSrc": "https://photos.zillowstatic.com/fp/929bf6fafc0c9d247219a886374ed5b5-p_e.jpg",
      "price": "$625,000",
      "priceLabel": "$625K",
      "latLong": {
          "latitude": 39.280254,
          "longitude": -94.48445
      },
      "listingType": "",
      "communityName": "",
      "uid": "3ac9c095-baa6-40be-af9e-9b0b9941506d",
      "date": "2023-11-21T02:46:34.325Z"
  },
  {
      "address": "20 NW 43rd Ter, Kansas City, MO 64116",
      "beds": 3,
      "baths": 3,
      "area": 2710,
      "imgSrc": "https://photos.zillowstatic.com/fp/ef084d43a09e278d6c8d5f5094bf59a5-p_e.jpg",
      "price": "$395,000",
      "priceLabel": "$395K",
      "latLong": {
          "latitude": 39.173866,
          "longitude": -94.58235
      },
      "listingType": "",
      "communityName": "",
      "uid": "cb69a145-b6ca-4bb3-83b1-4258c3eb9954",
      "date": "2024-09-30T06:24:12.215Z"
  },
  {
      "address": "1800 Baltimore Ave FLOOR 6, Kansas City, MO 64108",
      "beds": 3,
      "baths": 2,
      "area": 4500,
      "imgSrc": "https://photos.zillowstatic.com/fp/49c9208c94b06e50a7a4b61b0a2b60f5-p_e.jpg",
      "price": "$1,800,000",
      "priceLabel": "$1.80M",
      "latLong": {
          "latitude": 39.091724,
          "longitude": -94.58501
      },
      "listingType": "",
      "communityName": "",
      "uid": "3ad132b4-2c41-4f4d-a16d-2a4f86a6523e",
      "date": "2023-10-12T00:51:20.806Z"
  },
  {
      "address": "118 NE 109th St, Kansas City, MO 64155",
      "beds": 3,
      "baths": 2,
      "area": 1354,
      "imgSrc": "https://photos.zillowstatic.com/fp/19d0d542f7aae7aaf7bb961177fa9467-p_e.jpg",
      "price": "$309,900",
      "priceLabel": "$310K",
      "latLong": {
          "latitude": 39.29128,
          "longitude": -94.57816
      },
      "listingType": "",
      "communityName": "",
      "uid": "3408b36c-1d80-462b-96c4-7e473825d174",
      "date": "2024-01-24T14:25:50.080Z"
  },
  {
      "address": "1728 Summit St, Kansas City, MO 64108",
      "beds": 4,
      "baths": 4,
      "area": 2529,
      "imgSrc": "https://photos.zillowstatic.com/fp/f52b789b1f16e97446b24dd004639541-p_e.jpg",
      "price": "$885,000",
      "priceLabel": "$885K",
      "latLong": {
          "latitude": 39.092113,
          "longitude": -94.593735
      },
      "listingType": "",
      "communityName": "",
      "uid": "e3b30399-8f0d-4053-bc47-bf787f2450cb",
      "date": "2024-09-25T23:10:22.389Z"
  },
  {
      "address": "1717 Bristol Ave, Kansas City, MO 64126",
      "beds": 2,
      "baths": 1,
      "area": 808,
      "imgSrc": "https://photos.zillowstatic.com/fp/1ed1a7d963a0fe2eb4bd04b66e474f10-p_e.jpg",
      "price": "$69,000",
      "priceLabel": "$69K",
      "latLong": {
          "latitude": 39.089355,
          "longitude": -94.499794
      },
      "listingType": "",
      "communityName": "",
      "uid": "f405abf5-43d1-4ffd-aa1a-5c9bb7dca193",
      "date": "2024-09-26T15:34:13.449Z"
  },
  {
      "address": "4612 Forest Ave, Kansas City, MO 64110",
      "beds": 3,
      "baths": 3,
      "area": 1365,
      "imgSrc": "https://photos.zillowstatic.com/fp/02a0958d54bdb2462726204c8b25a044-p_e.jpg",
      "price": "$330,000",
      "priceLabel": "$330K",
      "latLong": {
          "latitude": 39.0432,
          "longitude": -94.57181
      },
      "listingType": "NEW_CONSTRUCTION",
      "communityName": "Homes in Midtown",
      "uid": "dda1da6b-85d4-43fb-b4e3-85ab7d0acd29",
      "date": "2024-07-18T12:51:27.841Z"
  },
  {
      "address": "4210 Virginia Ave, Kansas City, MO 64110",
      "beds": 3,
      "baths": 3,
      "area": 1922,
      "imgSrc": "https://photos.zillowstatic.com/fp/7021406a07c4dab5733f1b91e7080f23-p_e.jpg",
      "price": "$398,000",
      "priceLabel": "$398K",
      "latLong": {
          "latitude": 39.050056,
          "longitude": -94.56924
      },
      "listingType": "NEW_CONSTRUCTION",
      "communityName": "Homes in Midtown",
      "uid": "a7f1939e-6629-4072-a25f-f6796dff65b6",
      "date": "2024-07-05T15:34:35.843Z"
  },
  {
      "address": "3339 Colorado Ave, Kansas City, MO 64128",
      "beds": 4,
      "baths": 2,
      "area": 1800,
      "imgSrc": "https://photos.zillowstatic.com/fp/954e7f34b039566e926e7d7713210451-p_e.jpg",
      "price": "$145,000",
      "priceLabel": "$145K",
      "latLong": {
          "latitude": 39.063583,
          "longitude": -94.52156
      },
      "listingType": "",
      "communityName": "",
      "uid": "ae767098-9b6a-4bc2-a365-ac3fb07bb507",
      "date": "2023-12-11T00:38:16.552Z"
  },
  {
      "address": "12480 Charlotte St, Kansas City, MO 64146",
      "beds": 3,
      "baths": 3,
      "area": 1722,
      "imgSrc": "https://photos.zillowstatic.com/fp/f476f3cc41af823111e8fb70b31db0d2-p_e.jpg",
      "price": "$310,000",
      "priceLabel": "$310K",
      "latLong": {
          "latitude": 38.90015,
          "longitude": -94.58354
      },
      "listingType": "",
      "communityName": "",
      "uid": "2921db42-0951-4309-857c-4d882cc157fe",
      "date": "2024-08-08T16:49:30.334Z"
  },
  {
      "address": "3625 State Line Rd, Kansas City, MO 64111",
      "beds": 2,
      "baths": 1,
      "area": 1046,
      "imgSrc": "https://photos.zillowstatic.com/fp/30a54746463e329487490df0b2ff7e66-p_e.jpg",
      "price": "$189,000",
      "priceLabel": "$189K",
      "latLong": {
          "latitude": 39.061295,
          "longitude": -94.60694
      },
      "listingType": "",
      "communityName": "",
      "uid": "9617ff75-1bcf-424f-bcb5-d37b88b64583",
      "date": "2023-12-06T05:33:20.771Z"
  },
  {
      "address": "2107 Grand Ave UNIT 602, Kansas City, MO 64108",
      "beds": 2,
      "baths": 2,
      "area": 1446,
      "imgSrc": "https://photos.zillowstatic.com/fp/c9f2f909fc993c0ae4f4007aae57df15-p_e.jpg",
      "price": "$295,000",
      "priceLabel": "$295K",
      "latLong": {
          "latitude": 39.08746,
          "longitude": -94.581314
      },
      "listingType": "",
      "communityName": "",
      "uid": "ad6fff3c-fb03-4b0a-bd1b-8d53ed45ae85",
      "date": "2024-09-28T21:23:28.805Z"
  },
  {
      "address": "4830 NE Winn Rd, Kansas City, MO 64119",
      "beds": 3,
      "baths": 2,
      "area": 1708,
      "imgSrc": "https://photos.zillowstatic.com/fp/9746e925e9c16441a26f37256fa10994-p_e.jpg",
      "price": "$244,000",
      "priceLabel": "$244K",
      "latLong": {
          "latitude": 39.18296,
          "longitude": -94.52346
      },
      "listingType": "",
      "communityName": "",
      "uid": "b39e74e7-4396-49bd-9561-c6d536b559fc",
      "date": "2024-07-11T03:05:59.998Z"
  },
  {
      "address": "11006 Olive St, Kansas City, MO 64131",
      "beds": 4,
      "baths": 3,
      "area": 2051,
      "imgSrc": "https://photos.zillowstatic.com/fp/3ff8c03454b7d8a6a8c4b175b7b7d2d7-p_e.jpg",
      "price": "$265,000",
      "priceLabel": "$265K",
      "latLong": {
          "latitude": 38.926243,
          "longitude": -94.56236
      },
      "listingType": "",
      "communityName": "",
      "uid": "87f65125-2235-46b5-9fad-875f6fe55553",
      "date": "2024-10-01T20:52:48.206Z"
  },
  {
      "address": "19 E 32nd St, Kansas City, MO 64111",
      "beds": 7,
      "baths": 3,
      "area": 1905,
      "imgSrc": "https://photos.zillowstatic.com/fp/9fba2ae0162233f0c6d68bb8fc09e6db-p_e.jpg",
      "price": "$300,000",
      "priceLabel": "$300K",
      "latLong": {
          "latitude": 39.068943,
          "longitude": -94.583984
      },
      "listingType": "",
      "communityName": "",
      "uid": "bd033113-faa0-44b6-8aae-33cdec5b9217",
      "date": "2024-03-26T15:40:11.172Z"
  },
  {
      "address": "4815 NE Chouteau Dr, Kansas City, MO 64119",
      "beds": 3,
      "baths": 2,
      "area": 1932,
      "imgSrc": "https://photos.zillowstatic.com/fp/ca10f7c8e26583ee14218f1ecfd5c1c5-p_e.jpg",
      "price": "$299,900",
      "priceLabel": "$300K",
      "latLong": {
          "latitude": 39.180454,
          "longitude": -94.539474
      },
      "listingType": "",
      "communityName": "",
      "uid": "b61a0463-997d-44d7-86db-63006cbd4ff6",
      "date": "2024-04-18T04:16:51.775Z"
  },
  {
      "address": "420 E 70th St, Kansas City, MO 64131",
      "beds": 3,
      "baths": 1,
      "area": 1539,
      "imgSrc": "https://photos.zillowstatic.com/fp/7c75a81a2a02968474ed4dbfdbea563e-p_e.jpg",
      "price": "$334,950",
      "priceLabel": "$335K",
      "latLong": {
          "latitude": 39.00124,
          "longitude": -94.58338
      },
      "listingType": "",
      "communityName": "",
      "uid": "4221c5cf-726a-49cb-8967-b63983ab974b",
      "date": "2024-10-02T13:41:23.194Z"
  },
  {
      "address": "2703 E 46th St, Kansas City, MO 64130",
      "beds": 3,
      "baths": 1,
      "area": 1461,
      "imgSrc": "https://photos.zillowstatic.com/fp/fbcedec369e813e4e06499c0261cc4fe-p_e.jpg",
      "price": "$130,000",
      "priceLabel": "$130K",
      "latLong": {
          "latitude": 39.042515,
          "longitude": -94.55283
      },
      "listingType": "",
      "communityName": "",
      "uid": "d382d841-0397-4f4c-b457-d234a8ddf358",
      "date": "2023-11-27T23:32:58.238Z"
  },
  {
      "address": "5619 NW 109th Ct, Kansas City, MO 64154",
      "beds": 4,
      "baths": 3,
      "area": 2807,
      "imgSrc": "https://photos.zillowstatic.com/fp/89b0700eccc3e40b92a480e71e454d84-p_e.jpg",
      "price": "$525,000",
      "priceLabel": "$525K",
      "latLong": {
          "latitude": 39.2918,
          "longitude": -94.64229
      },
      "listingType": "",
      "communityName": "",
      "uid": "f9c6081a-9e73-48ea-bbba-013a1c7a192b",
      "date": "2024-08-08T02:41:10.118Z"
  },
  {
      "address": "911 E 75th St, Kansas City, MO 64131",
      "beds": 3,
      "baths": 2,
      "area": 1432,
      "imgSrc": "https://photos.zillowstatic.com/fp/ebf1f414df712132d1a0965c692c86c2-p_e.jpg",
      "price": "$279,500",
      "priceLabel": "$280K",
      "latLong": {
          "latitude": 38.991394,
          "longitude": -94.57764
      },
      "listingType": "",
      "communityName": "",
      "uid": "f660cece-d405-49d5-8362-2679597dec24",
      "date": "2024-10-01T16:25:36.917Z"
  },
  {
      "address": "8339 Madison Ave, Kansas City, MO 64114",
      "beds": 2,
      "baths": 1,
      "area": 816,
      "imgSrc": "https://photos.zillowstatic.com/fp/6bcc8682cfa894abbba54e4dfe29582e-p_e.jpg",
      "price": "$237,500",
      "priceLabel": "$238K",
      "latLong": {
          "latitude": 38.976715,
          "longitude": -94.60045
      },
      "listingType": "",
      "communityName": "",
      "uid": "75946ea8-8b2d-48a2-8fcd-c1321a05a996",
      "date": "2024-07-11T18:00:54.892Z"
  },
  {
      "address": "4100 Highland Ave, Kansas City, MO 64110",
      "beds": 4,
      "baths": 2,
      "area": 1681,
      "imgSrc": "https://photos.zillowstatic.com/fp/6dd0c7c03cad3f8cce3cf1e56515d41b-p_e.jpg",
      "price": "$140,000",
      "priceLabel": "$140K",
      "latLong": {
          "latitude": 39.05208,
          "longitude": -94.564545
      },
      "listingType": "",
      "communityName": "",
      "uid": "27860846-d5ff-45ce-bc19-396f97490bf8",
      "date": "2024-05-31T11:57:52.951Z"
  },
  {
      "address": "5630 Newton Ave, Kansas City, MO 64129",
      "beds": 3,
      "baths": 3,
      "area": 1636,
      "imgSrc": "https://photos.zillowstatic.com/fp/6d56c2be3e0a95d17d79354d91d1f5cd-p_e.jpg",
      "price": "$189,500",
      "priceLabel": "$190K",
      "latLong": {
          "latitude": 39.02156,
          "longitude": -94.50758
      },
      "listingType": "",
      "communityName": "",
      "uid": "8ec38f9b-1f27-4899-a675-d75881727500",
      "date": "2023-12-19T10:57:00.004Z"
  },
  {
      "address": "4620 Genessee St, Kansas City, MO 64112",
      "beds": 5,
      "baths": 6,
      "area": 4313,
      "imgSrc": "https://photos.zillowstatic.com/fp/1443909cae83e367ef6e63db529133bc-p_e.jpg",
      "price": "$1,849,000",
      "priceLabel": "$1.85M",
      "latLong": {
          "latitude": 39.043896,
          "longitude": -94.60612
      },
      "listingType": "",
      "communityName": "",
      "uid": "5542fcf5-b3b6-43d5-9157-13b5a714d71c",
      "date": "2024-10-02T11:49:06.567Z"
  },
  {
      "address": "5129 Wyandotte St #5, Kansas City, MO 64112",
      "beds": 2,
      "baths": 1,
      "area": 790,
      "imgSrc": "https://photos.zillowstatic.com/fp/62106bb9dfc8016fc9652dac6107fefe-p_e.jpg",
      "price": "$220,000",
      "priceLabel": "$220K",
      "latLong": {
          "latitude": 39.033833,
          "longitude": -94.58937
      },
      "listingType": "",
      "communityName": "",
      "uid": "e3253f1b-989e-43f9-a85a-5d60ac7af30e",
      "date": "2024-07-30T19:43:42.248Z"
  },
  {
      "address": "2720 Olive St, Kansas City, MO 64109",
      "beds": 2,
      "baths": 2,
      "area": 990,
      "imgSrc": "https://photos.zillowstatic.com/fp/82d57dc0d8a4d2706c23e93a3f65747c-p_e.jpg",
      "price": "$149,950",
      "priceLabel": "$150K",
      "latLong": {
          "latitude": 39.076355,
          "longitude": -94.55515
      },
      "listingType": "",
      "communityName": "",
      "uid": "4e6051d3-2397-4746-9fe2-84094a651381",
      "date": "2023-10-20T09:26:54.609Z"
  },
  {
      "address": "3904 NW 73rd St, Kansas City, MO 64151",
      "beds": 3,
      "baths": 3,
      "area": 1953,
      "imgSrc": "https://photos.zillowstatic.com/fp/d0fb64c616e685eaaa32000f8d6360c5-p_e.jpg",
      "price": "$365,000",
      "priceLabel": "$365K",
      "latLong": {
          "latitude": 39.22725,
          "longitude": -94.62546
      },
      "listingType": "",
      "communityName": "",
      "uid": "ac1e92f4-6978-4991-ac1f-f832a11b0191",
      "date": "2024-04-01T02:12:06.313Z"
  },
  {
      "address": "11619 Sycamore Dr, Kansas City, MO 64134",
      "beds": 5,
      "baths": 4,
      "area": 1468,
      "imgSrc": "https://photos.zillowstatic.com/fp/7f09be6eea3b920e287d505ebae3a0b7-p_e.jpg",
      "price": "$263,000",
      "priceLabel": "$263K",
      "latLong": {
          "latitude": 38.912373,
          "longitude": -94.49802
      },
      "listingType": "",
      "communityName": "",
      "uid": "6b826985-a3e7-41e3-b3cb-ccf6e2ea470e",
      "date": "2024-10-02T12:41:14.895Z"
  },
  {
      "address": "4028 NE Kelsey Rd, Kansas City, MO 64116",
      "beds": 3,
      "baths": 1,
      "area": 1400,
      "imgSrc": "https://photos.zillowstatic.com/fp/539f0957a0afc8adb3af07931c4d36e6-p_e.jpg",
      "price": "$229,000",
      "priceLabel": "$229K",
      "latLong": {
          "latitude": 39.16719,
          "longitude": -94.5501
      },
      "listingType": "",
      "communityName": "",
      "uid": "0da94a4c-299d-44c4-b93f-2c034f09d635",
      "date": "2023-12-06T21:28:32.882Z"
  },
  {
      "address": "4445 Forest Ave, Kansas City, MO 64110",
      "beds": 3,
      "baths": 3,
      "area": 1912,
      "imgSrc": "https://photos.zillowstatic.com/fp/8ef40869648766d0c5697225e8fa26bf-p_e.jpg",
      "price": "$465,000",
      "priceLabel": "$465K",
      "latLong": {
          "latitude": 39.045532,
          "longitude": -94.571075
      },
      "listingType": "",
      "communityName": "",
      "uid": "92311345-332f-46d7-90e7-6e0fb2380a13",
      "date": "2024-10-01T21:47:25.691Z"
  },
  {
      "address": "204 W 128th St, Kansas City, MO 64145",
      "beds": 5,
      "baths": 4,
      "area": 4929,
      "imgSrc": "https://photos.zillowstatic.com/fp/56ed0e06b6f9d797c2ddae2306c6cb53-p_e.jpg",
      "price": "$780,000",
      "priceLabel": "$780K",
      "latLong": {
          "latitude": 38.89681,
          "longitude": -94.59804
      },
      "listingType": "",
      "communityName": "",
      "uid": "5a7955f0-c3ec-4a59-9928-0411c05248c5",
      "date": "2023-11-13T14:04:33.251Z"
  },
  {
      "address": "7512 N Hemple Ave, Kansas City, MO 64152",
      "beds": 3,
      "baths": 1,
      "area": 888,
      "imgSrc": "https://photos.zillowstatic.com/fp/4f90a4340f719d3b65b90b6773c81b0a-p_e.jpg",
      "price": "$240,000",
      "priceLabel": "$240K",
      "latLong": {
          "latitude": 39.231903,
          "longitude": -94.66253
      },
      "listingType": "",
      "communityName": "",
      "uid": "3b20cb89-4a55-4d32-af24-fbd9622ae282",
      "date": "2024-04-18T18:55:58.884Z"
  },
  {
      "address": "113 NE 101st Pl, Kansas City, MO 64155",
      "beds": 3,
      "baths": 2,
      "area": 1562,
      "imgSrc": "https://photos.zillowstatic.com/fp/f70ff075ccf4f1ef831d4b6c399abb3c-p_e.jpg",
      "price": "$270,000",
      "priceLabel": "$270K",
      "latLong": {
          "latitude": 39.276043,
          "longitude": -94.58054
      },
      "listingType": "",
      "communityName": "",
      "uid": "1480bc0b-8da3-4a84-897c-879b153ebde2",
      "date": "2023-12-15T00:45:25.502Z"
  },
  {
      "address": "4526 S Benton Ave, Kansas City, MO 64130",
      "beds": 3,
      "baths": 1,
      "area": 1042,
      "imgSrc": "https://photos.zillowstatic.com/fp/edda48b6dda5cc677746d5883e8e589a-p_e.jpg",
      "price": "$159,000",
      "priceLabel": "$159K",
      "latLong": {
          "latitude": 39.043503,
          "longitude": -94.55125
      },
      "listingType": "",
      "communityName": "",
      "uid": "3b2e7419-48ce-451e-b5bd-841a0ceb828f",
      "date": "2024-06-21T23:59:24.826Z"
  },
  {
      "address": "4143 Roanoke Rd APT 3, Kansas City, MO 64111",
      "beds": 2,
      "baths": 2,
      "area": 892,
      "imgSrc": "https://photos.zillowstatic.com/fp/e0aea9c4539e7e758edd31171c9dd0e1-p_e.jpg",
      "price": "$125,000",
      "priceLabel": "$125K",
      "latLong": {
          "latitude": 39.05324,
          "longitude": -94.59744
      },
      "listingType": "",
      "communityName": "",
      "uid": "90d5e4ad-9cb8-4404-9550-a2831bcaf39e",
      "date": "2024-03-03T20:26:09.789Z"
  },
  {
      "address": "333 W Meyer Blvd APT 714, Kansas City, MO 64113",
      "beds": 1,
      "baths": 1,
      "area": 702,
      "imgSrc": "https://photos.zillowstatic.com/fp/46d1b53fba0191f3b5daadf9d0dfbb4b-p_e.jpg",
      "price": "$150,000",
      "priceLabel": "$150K",
      "latLong": {
          "latitude": 39.011917,
          "longitude": -94.59269
      },
      "listingType": "",
      "communityName": "",
      "uid": "7701f873-24ec-4391-b572-70488a740c5d",
      "date": "2023-10-11T08:41:27.642Z"
  },
  {
      "address": "8231 NW Waukomis Dr, Kansas City, MO 64151",
      "beds": 2,
      "baths": 3,
      "area": 1508,
      "imgSrc": "https://photos.zillowstatic.com/fp/41575e6ca32747f6cc1a250276634a94-p_e.jpg",
      "price": "$185,000",
      "priceLabel": "$185K",
      "latLong": {
          "latitude": 39.243427,
          "longitude": -94.64233
      },
      "listingType": "",
      "communityName": "",
      "uid": "023a1afa-7d17-4c3a-92f7-7252a0ed3d3a",
      "date": "2024-08-28T03:54:58.612Z"
  },
  {
      "address": "9811 N Laurel Ave, Kansas City, MO 64157",
      "beds": 5,
      "baths": 4,
      "area": 3100,
      "imgSrc": "https://photos.zillowstatic.com/fp/ad3e0192f7d27ed46fcfac1e72e9d53e-p_e.jpg",
      "price": "$639,900",
      "priceLabel": "$640K",
      "latLong": {
          "latitude": 39.271084,
          "longitude": -94.46614
      },
      "listingType": "NEW_CONSTRUCTION",
      "communityName": "",
      "uid": "060755ed-d1c1-4a6b-9ecf-6dcca44e7deb",
      "date": "2023-11-03T22:43:08.525Z"
  },
  {
      "address": "7706 N Kensington Ave, Kansas City, MO 64119",
      "beds": 4,
      "baths": 4,
      "area": 2442,
      "imgSrc": "https://photos.zillowstatic.com/fp/f8580c5f7feeb09cf70c456b39c38a9e-p_e.jpg",
      "price": "$459,900",
      "priceLabel": "$460K",
      "latLong": {
          "latitude": 39.233807,
          "longitude": -94.52761
      },
      "listingType": "",
      "communityName": "",
      "uid": "d76d67e9-5fa7-4e66-bcf4-5c43ff847c58",
      "date": "2024-09-13T03:13:13.827Z"
  },
  {
      "address": "8624 NE 115th St, Kansas City, MO 64157",
      "beds": 3,
      "baths": 3,
      "area": 1554,
      "imgSrc": "https://photos.zillowstatic.com/fp/d67d39684ae460e53cd520570157874a-p_e.jpg",
      "price": "$295,000",
      "priceLabel": "$295K",
      "latLong": {
          "latitude": 39.300957,
          "longitude": -94.47563
      },
      "listingType": "",
      "communityName": "",
      "uid": "46095661-2d6e-4591-ac1a-b631d32c028c",
      "date": "2024-05-09T14:54:28.873Z"
  },
  {
      "address": "3515 NE 50th St, Kansas City, MO 64119",
      "beds": 4,
      "baths": 4,
      "area": 3243,
      "imgSrc": "https://photos.zillowstatic.com/fp/8ce50207772e17576a1cde964ba2feac-p_e.jpg",
      "price": "$442,500",
      "priceLabel": "$443K",
      "latLong": {
          "latitude": 39.184788,
          "longitude": -94.53814
      },
      "listingType": "",
      "communityName": "",
      "uid": "f2b3d871-9250-41be-bdb4-81faea713d67",
      "date": "2024-08-02T03:40:51.778Z"
  },
  {
      "address": "4211 Olive St, Kansas City, MO 64130",
      "beds": 2,
      "baths": 2,
      "area": 807,
      "imgSrc": "https://photos.zillowstatic.com/fp/9cf0a4c9bd12e656b9e0b0bad3dbe255-p_e.jpg",
      "price": "$115,000",
      "priceLabel": "$115K",
      "latLong": {
          "latitude": 39.049503,
          "longitude": -94.55588
      },
      "listingType": "",
      "communityName": "",
      "uid": "48d536ba-faf7-4dac-94d5-5a6e1a70b03f",
      "date": "2024-04-04T16:53:07.774Z"
  },
  {
      "address": "3913 N Garfield Ave, Kansas City, MO 64116",
      "beds": 5,
      "baths": 3,
      "area": 2700,
      "imgSrc": "https://photos.zillowstatic.com/fp/44bd4d8ea96e7a5b20039bfb4c2ab8f9-p_e.jpg",
      "price": "$449,000",
      "priceLabel": "$449K",
      "latLong": {
          "latitude": 39.25159,
          "longitude": -94.532585
      },
      "listingType": "",
      "communityName": "",
      "uid": "925e3829-294e-466c-8ac7-4f7bf35f615a",
      "date": "2024-10-02T05:34:47.809Z"
  },
  {
      "address": "6244 N Mercier St, Kansas City, MO 64118",
      "beds": 4,
      "baths": 4,
      "area": 1936,
      "imgSrc": "https://photos.zillowstatic.com/fp/461d2509623b94c134b95608092d617c-p_e.jpg",
      "price": "$310,000",
      "priceLabel": "$310K",
      "latLong": {
          "latitude": 39.207623,
          "longitude": -94.59613
      },
      "listingType": "",
      "communityName": "",
      "uid": "439511be-7061-4577-a880-15a05aaa239b",
      "date": "2024-05-17T06:46:25.742Z"
  },
  {
      "address": "7036 N Fisk Ct, Kansas City, MO 64151",
      "beds": 2,
      "baths": 3,
      "area": 1290,
      "imgSrc": "https://photos.zillowstatic.com/fp/ed4c9c8a2717327a84191d2faf8e5678-p_e.jpg",
      "price": "$225,000",
      "priceLabel": "$225K",
      "latLong": {
          "latitude": 39.2213,
          "longitude": -94.6552
      },
      "listingType": "",
      "communityName": "",
      "uid": "cffee28a-2dc2-43c5-b7e2-5196f324c105",
      "date": "2024-10-02T12:50:54.192Z"
  },
  {
      "address": "3615 Jefferson St, Kansas City, MO 64111",
      "beds": 4,
      "baths": 3,
      "area": 2148,
      "imgSrc": "https://photos.zillowstatic.com/fp/d86951887a9c73f2d38615deb44419fa-p_e.jpg",
      "price": "$415,000",
      "priceLabel": "$415K",
      "latLong": {
          "latitude": 39.06263,
          "longitude": -94.59355
      },
      "listingType": "",
      "communityName": "",
      "uid": "e6623959-3663-4c90-9eb4-a0f587cf188b",
      "date": "2024-10-01T23:28:14.877Z"
  },
  {
      "address": "105 S Benton Blvd, Kansas City, MO 64123",
      "beds": 5,
      "baths": 3,
      "area": 2428,
      "imgSrc": "https://photos.zillowstatic.com/fp/295330c6022bbd9d1704a7e83e217fd9-p_e.jpg",
      "price": "$335,000",
      "priceLabel": "$335K",
      "latLong": {
          "latitude": 39.11289,
          "longitude": -94.54404
      },
      "listingType": "",
      "communityName": "",
      "uid": "00237e9a-1ef4-4e58-9886-471f38faabc5",
      "date": "2023-11-13T13:12:42.802Z"
  },
  {
      "address": "406 Gladstone Blvd, Kansas City, MO 64124",
      "beds": 5,
      "baths": 4,
      "area": 5875,
      "imgSrc": "https://photos.zillowstatic.com/fp/3e925f92578147adf0712604750bd362-p_e.jpg",
      "price": "$759,000",
      "priceLabel": "$759K",
      "latLong": {
          "latitude": 39.10945,
          "longitude": -94.54636
      },
      "listingType": "",
      "communityName": "",
      "uid": "0a83724d-c0a1-4f63-ac3b-c1beffec9c6b",
      "date": "2023-10-20T12:18:28.940Z"
  },
  {
      "address": "6627 Paseo Blvd, Kansas City, MO 64132",
      "beds": 3,
      "baths": 3,
      "area": 1972,
      "imgSrc": "https://photos.zillowstatic.com/fp/94484035f2386b5b3f491929757dc4a1-p_e.jpg",
      "price": "$299,000",
      "priceLabel": "$299K",
      "latLong": {
          "latitude": 39.00579,
          "longitude": -94.561806
      },
      "listingType": "",
      "communityName": "",
      "uid": "80153f15-d7c5-412d-a8e9-5c57e38de784",
      "date": "2024-10-02T02:52:58.507Z"
  },
  {
      "address": "634 NW 110th St, Kansas City, MO 64155",
      "beds": 3,
      "baths": 3,
      "area": 2481,
      "imgSrc": "https://photos.zillowstatic.com/fp/4a41bedea1d1d4858996eeecce34bac4-p_e.jpg",
      "price": "$435,000",
      "priceLabel": "$435K",
      "latLong": {
          "latitude": 39.29269,
          "longitude": -94.58745
      },
      "listingType": "",
      "communityName": "",
      "uid": "31439fd7-f313-4aa0-98e4-5ac3d0cb1da5",
      "date": "2024-01-14T21:46:43.336Z"
  },
  {
      "address": "4519 N Mulberry Dr, Kansas City, MO 64116",
      "beds": 4,
      "baths": 6,
      "area": 5248,
      "imgSrc": "https://photos.zillowstatic.com/fp/5657a5a59ce8939c4da11e68356c8801-p_e.jpg",
      "price": "$895,000",
      "priceLabel": "$895K",
      "latLong": {
          "latitude": 39.17668,
          "longitude": -94.59717
      },
      "listingType": "",
      "communityName": "",
      "uid": "9b862ae0-4666-4492-8542-334ac2dd0fed",
      "date": "2024-10-01T19:42:15.532Z"
  },
  {
      "address": "8641 E 97th Ter, Kansas City, MO 64134",
      "beds": 4,
      "baths": 2,
      "area": 1933,
      "imgSrc": "https://photos.zillowstatic.com/fp/d2b4b54e331696594a8bfaaaa647ae68-p_e.jpg",
      "price": "$185,000",
      "priceLabel": "$185K",
      "latLong": {
          "latitude": 38.94698,
          "longitude": -94.48784
      },
      "listingType": "",
      "communityName": "",
      "uid": "c0ebbb87-9b0f-443c-91e3-495d99af7816",
      "date": "2024-05-13T22:33:15.088Z"
  },
  {
      "address": "4412 N Virginia Ave, Kansas City, MO 64116",
      "beds": 2,
      "baths": 1,
      "area": 725,
      "imgSrc": "https://photos.zillowstatic.com/fp/abc43f4d2d14f01dec33ea80fe12d527-p_e.jpg",
      "price": "$145,000",
      "priceLabel": "$145K",
      "latLong": {
          "latitude": 39.174824,
          "longitude": -94.56361
      },
      "listingType": "",
      "communityName": "",
      "uid": "2bf97413-b9b8-43f8-81ca-2a81711008ff",
      "date": "2023-10-22T23:55:31.331Z"
  },
  {
      "address": "2326 Park Ave, Kansas City, MO 64127",
      "beds": 3,
      "baths": 2,
      "area": 1428,
      "imgSrc": "https://photos.zillowstatic.com/fp/5d9f8a35b64f35b53a018ed9fec34f01-p_e.jpg",
      "price": "$200,995",
      "priceLabel": "$201K",
      "latLong": {
          "latitude": 39.083565,
          "longitude": -94.55595
      },
      "listingType": "",
      "communityName": "",
      "uid": "ed33ff8e-30c4-4839-a8d2-9032239bf2e1",
      "date": "2023-10-08T17:32:06.352Z"
  },
  {
      "address": "1222 W 67th Ter, Kansas City, MO 64113",
      "beds": 4,
      "baths": 3,
      "area": 1826,
      "imgSrc": "https://photos.zillowstatic.com/fp/2d83ce96e9455683c6193b638ed796cf-p_e.jpg",
      "price": "$629,000",
      "priceLabel": "$629K",
      "latLong": {
          "latitude": 39.00705,
          "longitude": -94.60476
      },
      "listingType": "",
      "communityName": "",
      "uid": "f5753560-9c88-45ca-b783-e0a48f177e8a",
      "date": "2024-05-06T11:13:24.629Z"
  },
  {
      "address": "6143 Forest Ave, Kansas City, MO 64110",
      "beds": 2,
      "baths": 3,
      "area": 1134,
      "imgSrc": "https://photos.zillowstatic.com/fp/fe7c6ef971887d11267b4c1d82940d89-p_e.jpg",
      "price": "$254,900",
      "priceLabel": "$255K",
      "latLong": {
          "latitude": 39.015026,
          "longitude": -94.57299
      },
      "listingType": "",
      "communityName": "",
      "uid": "52124bca-5133-4a4f-9d68-0b8baa924c85",
      "date": "2023-10-12T19:18:28.763Z"
  },
  {
      "address": "4000 E 107th Ter, Kansas City, MO 64137",
      "beds": 3,
      "baths": 3,
      "area": 1060,
      "imgSrc": "https://photos.zillowstatic.com/fp/2c5ae0aa056842f0babda4ef3f8e2913-p_e.jpg",
      "price": "$225,000",
      "priceLabel": "$225K",
      "latLong": {
          "latitude": 38.931473,
          "longitude": -94.543335
      },
      "listingType": "",
      "communityName": "",
      "uid": "9baf8c3e-e39c-4ed1-b66b-e27e24b7e39b",
      "date": "2024-04-28T19:28:34.545Z"
  },
  {
      "address": "5407 Woodland Ave, Kansas City, MO 64130",
      "beds": 3,
      "baths": 3,
      "area": 1673,
      "imgSrc": "https://photos.zillowstatic.com/fp/fb805c41946e1411e4c23f90a9d103ee-p_e.jpg",
      "price": "$154,950",
      "priceLabel": "$155K",
      "latLong": {
          "latitude": 39.02824,
          "longitude": -94.56406
      },
      "listingType": "",
      "communityName": "",
      "uid": "7d27fc0a-83da-4e86-88ce-95325b88e415",
      "date": "2024-05-26T22:42:32.125Z"
  },
  {
      "address": "3800 N Mulberry Dr UNIT 206, Kansas City, MO 64116",
      "beds": 1,
      "baths": 2,
      "area": 1076,
      "imgSrc": "https://photos.zillowstatic.com/fp/da5caab7bdf0fb580d81a64fd3f232b7-p_e.jpg",
      "price": "$300,000",
      "priceLabel": "$300K",
      "latLong": {
          "latitude": 39.163216,
          "longitude": -94.59135
      },
      "listingType": "",
      "communityName": "",
      "uid": "2ea0d3bf-ac41-452a-9cf9-08e38cb81edf",
      "date": "2024-02-27T08:46:09.329Z"
  },
  {
      "address": "4537 Gillham Rd, Kansas City, MO 64110",
      "beds": 3,
      "baths": 2,
      "area": 1709,
      "imgSrc": "https://photos.zillowstatic.com/fp/8c0c0e951189323cf7b2904262d9dd99-p_e.jpg",
      "price": "$310,000",
      "priceLabel": "$310K",
      "latLong": {
          "latitude": 39.04396,
          "longitude": -94.57367
      },
      "listingType": "",
      "communityName": "",
      "uid": "c97c7129-652d-47a1-8a50-de652c70b18e",
      "date": "2023-11-21T22:22:41.041Z"
  },
  {
      "address": "56 E 32nd St, Kansas City, MO 64111",
      "beds": 0,
      "baths": 0,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/f4eef5df7d43cae06811e481062f85b3-p_e.jpg",
      "price": "$825,000",
      "priceLabel": "$825K",
      "latLong": {
          "latitude": 39.069294,
          "longitude": -94.58153
      },
      "listingType": "",
      "communityName": "",
      "uid": "cbb6f8e4-559e-4163-adee-24cb8c20ca0d",
      "date": "2024-06-25T15:28:59.105Z"
  },
  {
      "address": "3224 E 6th St, Kansas City, MO 64124",
      "beds": 2,
      "baths": 1,
      "area": 898,
      "imgSrc": "https://photos.zillowstatic.com/fp/7315bd8ba55fbfa81505241357ccf74e-p_e.jpg",
      "price": "$95,000",
      "priceLabel": "$95K",
      "latLong": {
          "latitude": 39.10539,
          "longitude": -94.54275
      },
      "listingType": "",
      "communityName": "",
      "uid": "afc81136-7590-4680-afd7-3d61f214441e",
      "date": "2024-09-03T07:43:54.591Z"
  },
  {
      "address": "9920 N Harrison Dr, Kansas City, MO 64155",
      "beds": 4,
      "baths": 4,
      "area": 3951,
      "imgSrc": "https://photos.zillowstatic.com/fp/ee2dcde4545250a03450cd059742b729-p_e.jpg",
      "price": "$540,000",
      "priceLabel": "$540K",
      "latLong": {
          "latitude": 39.273884,
          "longitude": -94.56858
      },
      "listingType": "",
      "communityName": "",
      "uid": "38ca5fcc-083f-40ac-ab56-bed9eae64f33",
      "date": "2024-03-24T10:52:46.753Z"
  },
  {
      "address": "515 Wabash Ave, Kansas City, MO 64124",
      "beds": 0,
      "baths": 1,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/ae55945f33a39d7738341926981fc151-p_e.jpg",
      "price": "$575,000",
      "priceLabel": "$575K",
      "latLong": {
          "latitude": 39.107834,
          "longitude": -94.55216
      },
      "listingType": "",
      "communityName": "",
      "uid": "9ceac6fd-b59d-4efe-83c7-d1f86707bc42",
      "date": "2024-05-30T10:12:00.385Z"
  },
  {
      "address": "5216 Woodland Ave, Kansas City, MO 64110",
      "beds": 3,
      "baths": 2,
      "area": 1331,
      "imgSrc": "https://photos.zillowstatic.com/fp/d727553a96893a15fd55c9b6b3b56aa2-p_e.jpg",
      "price": "$239,900",
      "priceLabel": "$240K",
      "latLong": {
          "latitude": 39.03137,
          "longitude": -94.564575
      },
      "listingType": "",
      "communityName": "",
      "uid": "d31a72da-9188-4d79-8ae7-cdb8b9808a0e",
      "date": "2024-08-06T15:45:12.363Z"
  },
  {
      "address": "309 E 125th Ter, Kansas City, MO 64145",
      "beds": 4,
      "baths": 5,
      "area": 4199,
      "imgSrc": "https://photos.zillowstatic.com/fp/a575d6904472a3af5784df4648a1b34e-p_e.jpg",
      "price": "$700,000",
      "priceLabel": "$700K",
      "latLong": {
          "latitude": 38.900166,
          "longitude": -94.59059
      },
      "listingType": "",
      "communityName": "",
      "uid": "63099161-d3c2-4219-a21e-a16705067791",
      "date": "2024-02-13T00:44:05.251Z"
  },
  {
      "address": "8113 Highland Ave, Kansas City, MO 64131",
      "beds": 3,
      "baths": 1,
      "area": 1100,
      "imgSrc": "https://photos.zillowstatic.com/fp/156b9c74b3adf34a414483cb1944c6a4-p_e.jpg",
      "price": "$215,000",
      "priceLabel": "$215K",
      "latLong": {
          "latitude": 38.974434,
          "longitude": -94.574974
      },
      "listingType": "NEW_CONSTRUCTION",
      "communityName": "",
      "uid": "43dafc84-5666-4d50-8ca4-4e440ce3fd14",
      "date": "2024-03-12T21:00:45.699Z"
  },
  {
      "address": "5341 Brooklyn Ave, Kansas City, MO 64130",
      "beds": 3,
      "baths": 2,
      "area": 1048,
      "imgSrc": "https://photos.zillowstatic.com/fp/8f75f63fe130624b835a5ea55754ecae-p_e.jpg",
      "price": "$175,000",
      "priceLabel": "$175K",
      "latLong": {
          "latitude": 39.02886,
          "longitude": -94.55934
      },
      "listingType": "",
      "communityName": "",
      "uid": "1b5636d7-7607-41b3-b964-f1d3f5d11d4f",
      "date": "2024-09-07T17:44:05.288Z"
  },
  {
      "address": "5425 E 27th Ter, Kansas City, MO 64128",
      "beds": 4,
      "baths": 2,
      "area": 1512,
      "imgSrc": "https://photos.zillowstatic.com/fp/aa75b20b142407d652762728883ffea9-p_e.jpg",
      "price": "$160,000",
      "priceLabel": "$160K",
      "latLong": {
          "latitude": 39.075092,
          "longitude": -94.51916
      },
      "listingType": "",
      "communityName": "",
      "uid": "3b49781e-753b-4c8e-a856-38f750a34e24",
      "date": "2024-10-01T20:21:25.741Z"
  },
  {
      "address": "1405 E 27th St, Kansas City, MO 64109",
      "beds": 3,
      "baths": 2,
      "area": 1720,
      "imgSrc": "https://photos.zillowstatic.com/fp/ea0386252267158f9b014e058b815b25-p_e.jpg",
      "price": "$224,900",
      "priceLabel": "$225K",
      "latLong": {
          "latitude": 39.07728,
          "longitude": -94.56618
      },
      "listingType": "",
      "communityName": "",
      "uid": "1a81c90f-5fa2-40ad-8706-9c2f933193e2",
      "date": "2024-08-24T07:03:54.801Z"
  },
  {
      "address": "3719 Indiana Ave, Kansas City, MO 64128",
      "beds": 3,
      "baths": 2,
      "area": 1496,
      "imgSrc": "https://photos.zillowstatic.com/fp/bcfb941fe267cc5cf4f42af4dee323cf-p_e.jpg",
      "price": "$105,000",
      "priceLabel": "$105K",
      "latLong": {
          "latitude": 39.057964,
          "longitude": -94.54388
      },
      "listingType": "",
      "communityName": "",
      "uid": "d6d53b7a-9adb-49e8-bc1d-6d883afa3dbe",
      "date": "2024-10-02T00:10:27.416Z"
  },
  {
      "address": "3203 College Ave, Kansas City, MO 64128",
      "beds": 3,
      "baths": 3,
      "area": 2396,
      "imgSrc": "https://photos.zillowstatic.com/fp/26796f86fba613af54331a95ee60ebd5-p_e.jpg",
      "price": "$175,000",
      "priceLabel": "$175K",
      "latLong": {
          "latitude": 39.06579,
          "longitude": -94.54472
      },
      "listingType": "",
      "communityName": "",
      "uid": "3bbb8e7e-f0a6-41da-8785-7e561eb84891",
      "date": "2024-08-14T03:51:22.402Z"
  },
  {
      "address": "1015 W 97th St, Kansas City, MO 64114",
      "beds": 3,
      "baths": 2,
      "area": 1650,
      "imgSrc": "https://photos.zillowstatic.com/fp/8ce24d171070cc51328b42980edc0fcd-p_e.jpg",
      "price": "$399,000",
      "priceLabel": "$399K",
      "latLong": {
          "latitude": 38.952282,
          "longitude": -94.60398
      },
      "listingType": "",
      "communityName": "",
      "uid": "2def530f-7d2c-438e-9a78-934468005f6e",
      "date": "2024-10-02T06:28:44.910Z"
  },
  {
      "address": "1535 Walnut St APT 106, Kansas City, MO 64108",
      "beds": 3,
      "baths": 2,
      "area": 1825,
      "imgSrc": "https://photos.zillowstatic.com/fp/2db0ab6db77f759b7e840d5834199626-p_e.jpg",
      "price": "$547,500",
      "priceLabel": "$548K",
      "latLong": {
          "latitude": 39.09471,
          "longitude": -94.58204
      },
      "listingType": "",
      "communityName": "",
      "uid": "fb9fbf96-e985-419e-ad20-389a92222d5e",
      "date": "2024-01-28T11:07:06.774Z"
  },
  {
      "address": "700 W 48th St APT 204, Kansas City, MO 64112",
      "beds": 1,
      "baths": 1,
      "area": 505,
      "imgSrc": "https://photos.zillowstatic.com/fp/5e415e948b999bd46171f5842d5af18b-p_e.jpg",
      "price": "$170,000",
      "priceLabel": "$170K",
      "latLong": {
          "latitude": 39.04087,
          "longitude": -94.59538
      },
      "listingType": "",
      "communityName": "",
      "uid": "c3910551-f9cb-4df4-acf1-3da615d1a214",
      "date": "2023-10-24T10:00:04.702Z"
  },
  {
      "address": "617 W 88th Ter, Kansas City, MO 64114",
      "beds": 2,
      "baths": 1,
      "area": 1576,
      "imgSrc": "https://photos.zillowstatic.com/fp/79f421a06b1d5755d27306cf29bcc32a-p_e.jpg",
      "price": "$175,000",
      "priceLabel": "$175K",
      "latLong": {
          "latitude": 38.96784,
          "longitude": -94.59887
      },
      "listingType": "",
      "communityName": "",
      "uid": "f45aa8d2-8bf8-4232-a694-a1dea60e6861",
      "date": "2024-06-20T14:16:37.966Z"
  },
  {
      "address": "7915 N Lister Ave, Kansas City, MO 64119",
      "beds": 4,
      "baths": 3,
      "area": 2880,
      "imgSrc": "https://photos.zillowstatic.com/fp/928cad1088a510322904dcfd3923d852-p_e.jpg",
      "price": "$399,000",
      "priceLabel": "$399K",
      "latLong": {
          "latitude": 39.237015,
          "longitude": -94.523674
      },
      "listingType": "",
      "communityName": "",
      "uid": "45bde2d2-2a5e-4b63-9d87-5c7728b17fec",
      "date": "2024-10-02T12:24:21.673Z"
  },
  {
      "address": "3817 Highland Ave, Kansas City, MO 64109",
      "beds": 3,
      "baths": 2,
      "area": 1198,
      "imgSrc": "https://photos.zillowstatic.com/fp/6e36a55af1966646f52e5801db02526d-p_e.jpg",
      "price": "$165,000",
      "priceLabel": "$165K",
      "latLong": {
          "latitude": 39.05618,
          "longitude": -94.56363
      },
      "listingType": "",
      "communityName": "",
      "uid": "f7ec8172-4729-4405-9b63-a28ea33ebc91",
      "date": "2023-10-06T10:31:01.243Z"
  },
  {
      "address": "11105 N Hunter Ave, Kansas City, MO 64157",
      "beds": 5,
      "baths": 4,
      "area": 3072,
      "imgSrc": "https://photos.zillowstatic.com/fp/1325fa23ae0ba2870c88b61606a7e4ac-p_e.jpg",
      "price": "$537,300",
      "priceLabel": "$537K",
      "latLong": {
          "latitude": 39.293858,
          "longitude": -94.46914
      },
      "listingType": "",
      "communityName": "",
      "uid": "e3105c5e-e225-4716-b0b8-4701c9a8c4c6",
      "date": "2024-10-02T16:06:34.656Z"
  },
  {
      "address": "10600 Oak Trafficway, Kansas City, MO 64155",
      "beds": 3,
      "baths": 2,
      "area": 1841,
      "imgSrc": "https://photos.zillowstatic.com/fp/f0278e5a780cdda6c9649df413381e88-p_e.jpg",
      "price": "$294,900",
      "priceLabel": "$295K",
      "latLong": {
          "latitude": 39.28519,
          "longitude": -94.5758
      },
      "listingType": "",
      "communityName": "",
      "uid": "d10441f9-8099-48ba-b3aa-82eadee7a472",
      "date": "2024-07-26T03:11:11.470Z"
  },
  {
      "address": "1200 W 57th Ter, Kansas City, MO 64113",
      "beds": 3,
      "baths": 6,
      "area": 10615,
      "imgSrc": "https://photos.zillowstatic.com/fp/674b91a1787e59bfb749096e294b702c-p_e.jpg",
      "price": "$3,175,000",
      "priceLabel": "$3.18M",
      "latLong": {
          "latitude": 39.023865,
          "longitude": -94.60291
      },
      "listingType": "",
      "communityName": "",
      "uid": "bf6e763f-bcbc-4afa-9f90-54235310dc1e",
      "date": "2024-10-01T21:31:50.974Z"
  },
  {
      "address": "2618 Euclid Ave, Kansas City, MO 64127",
      "beds": 0,
      "baths": 2,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/34f7fc9ecaa7e51632c69f6c5d9eaf0d-p_e.jpg",
      "price": "$170,000",
      "priceLabel": "$170K",
      "latLong": {
          "latitude": 39.09935,
          "longitude": -94.558334
      },
      "listingType": "",
      "communityName": "",
      "uid": "b6b148e8-ce26-49bd-aae9-a264471ee962",
      "date": "2024-10-02T13:33:51.083Z"
  },
  {
      "address": "6021 N Topping Ave, Kansas City, MO 64119",
      "beds": 2,
      "baths": 1,
      "area": 864,
      "imgSrc": "https://photos.zillowstatic.com/fp/ddd5ac3c02351b2e607415ade56ceb7b-p_e.jpg",
      "price": "$139,900",
      "priceLabel": "$140K",
      "latLong": {
          "latitude": 39.203083,
          "longitude": -94.51164
      },
      "listingType": "",
      "communityName": "",
      "uid": "c5c08a69-e36e-4379-8f02-bdaee2b7ae44",
      "date": "2024-10-02T04:01:14.596Z"
  },
  {
      "address": "401 E 117th St, Kansas City, MO 64131",
      "beds": 0,
      "baths": 0,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/0e2c6fa791212dbed2d72d049b2f6e72-p_e.jpg",
      "price": "$440,000",
      "priceLabel": "$440K",
      "latLong": {
          "latitude": 38.91497,
          "longitude": -94.58902
      },
      "listingType": "",
      "communityName": "",
      "uid": "53f9db97-f2c8-440b-ac94-0ff16dc2f30b",
      "date": "2023-12-05T07:49:06.168Z"
  },
  {
      "address": "7824 Washington St, Kansas City, MO 64114",
      "beds": 3,
      "baths": 1,
      "area": 1532,
      "imgSrc": "https://photos.zillowstatic.com/fp/2f03800bc12e5434b8d5e20a3ad2aec1-p_e.jpg",
      "price": "$285,000",
      "priceLabel": "$285K",
      "latLong": {
          "latitude": 38.985966,
          "longitude": -94.59586
      },
      "listingType": "",
      "communityName": "",
      "uid": "5ba41f4b-e848-4803-8e73-7f7681c7b0ee",
      "date": "2024-10-01T22:54:15.792Z"
  },
  {
      "address": "8808 E 111th St, Kansas City, MO 64134",
      "beds": 3,
      "baths": 2,
      "area": 1124,
      "imgSrc": "https://photos.zillowstatic.com/fp/26d0bce6c11b2edb0d25a67aadc642d6-p_e.jpg",
      "price": "$149,700",
      "priceLabel": "$150K",
      "latLong": {
          "latitude": 38.921337,
          "longitude": -94.489456
      },
      "listingType": "",
      "communityName": "",
      "uid": "0e8bcaf7-e7c3-4608-b145-8ab5fea3f989",
      "date": "2024-09-19T22:08:04.427Z"
  },
  {
      "address": "12926 Virginia Ave, Kansas City, MO 64146",
      "beds": 3,
      "baths": 2,
      "area": 1300,
      "imgSrc": "https://photos.zillowstatic.com/fp/6f0365c69edf91a48e71761632feaa1b-p_e.jpg",
      "price": "$275,000",
      "priceLabel": "$275K",
      "latLong": {
          "latitude": 38.890827,
          "longitude": -94.57829
      },
      "listingType": "",
      "communityName": "",
      "uid": "ecc849cd-2ea5-4b43-8a92-b246c0f2256a",
      "date": "2024-06-18T07:23:12.618Z"
  },
  {
      "address": "607 E 110th Ter, Kansas City, MO 64131",
      "beds": 4,
      "baths": 2,
      "area": 1802,
      "imgSrc": "https://photos.zillowstatic.com/fp/e122bd675d277b818e893b13df6f505c-p_e.jpg",
      "price": "$347,500",
      "priceLabel": "$348K",
      "latLong": {
          "latitude": 38.926987,
          "longitude": -94.5848
      },
      "listingType": "",
      "communityName": "",
      "uid": "a216672d-cc81-48db-9969-924ed338197d",
      "date": "2023-10-20T22:49:37.510Z"
  },
  {
      "address": "1106 NE 113th St, Kansas City, MO 64155",
      "beds": 3,
      "baths": 3,
      "area": 1536,
      "imgSrc": "https://photos.zillowstatic.com/fp/937cf7a95d2eddd30e21f54620bfd792-p_e.jpg",
      "price": "$284,000",
      "priceLabel": "$284K",
      "latLong": {
          "latitude": 39.298214,
          "longitude": -94.5645
      },
      "listingType": "",
      "communityName": "",
      "uid": "13f53a69-2757-4203-a6f8-e52d76cedc50",
      "date": "2024-10-01T16:46:07.821Z"
  },
  {
      "address": "6318 NW 78th Ter, Kansas City, MO 64151",
      "beds": 4,
      "baths": 3,
      "area": 2850,
      "imgSrc": "https://photos.zillowstatic.com/fp/2b0a754a46d9a4bc2954a7c100617e97-p_e.jpg",
      "price": "$415,000",
      "priceLabel": "$415K",
      "latLong": {
          "latitude": 39.237835,
          "longitude": -94.65235
      },
      "listingType": "",
      "communityName": "",
      "uid": "e8637bf6-e4c0-4679-938a-768238131d56",
      "date": "2024-10-02T08:46:31.219Z"
  },
  {
      "address": "3800 Ruysser Rd, Kansas City, MO 64137",
      "beds": 3,
      "baths": 2,
      "area": 1420,
      "imgSrc": "https://photos.zillowstatic.com/fp/7608f916e2b1165658b619904126716e-p_e.jpg",
      "price": "$199,000",
      "priceLabel": "$199K",
      "latLong": {
          "latitude": 38.93151,
          "longitude": -94.545395
      },
      "listingType": "",
      "communityName": "",
      "uid": "9311f4b4-df2f-4494-9086-fc3134c0c235",
      "date": "2024-10-02T04:50:42.472Z"
  },
  {
      "address": "7135 Paseo Blvd, Kansas City, MO 64132",
      "beds": 3,
      "baths": 2,
      "area": 2292,
      "imgSrc": "https://photos.zillowstatic.com/fp/8f04c5283de8a73932366ca288a49ea8-p_e.jpg",
      "price": "$230,000",
      "priceLabel": "$230K",
      "latLong": {
          "latitude": 38.997112,
          "longitude": -94.56443
      },
      "listingType": "",
      "communityName": "",
      "uid": "7f05674c-caff-4b32-9f1d-51530158ee7d",
      "date": "2024-10-02T07:16:36.018Z"
  },
  {
      "address": "7319 Tracy Ave, Kansas City, MO 64131",
      "beds": 3,
      "baths": 2,
      "area": 1306,
      "imgSrc": "https://photos.zillowstatic.com/fp/a5af2d7d5539ec605a314469bbd0a266-p_e.jpg",
      "price": "$269,995",
      "priceLabel": "$270K",
      "latLong": {
          "latitude": 38.99431,
          "longitude": -94.57288
      },
      "listingType": "",
      "communityName": "",
      "uid": "2328cd7b-5c32-40ce-9c06-8be2facc1d00",
      "date": "2024-03-23T12:53:17.775Z"
  },
  {
      "address": "6311 NW 78th Pl, Kansas City, MO 64151",
      "beds": 3,
      "baths": 4,
      "area": 3149,
      "imgSrc": "https://photos.zillowstatic.com/fp/20d626b0b54a62d15f20d0b578b7e69d-p_e.jpg",
      "price": "$435,000",
      "priceLabel": "$435K",
      "latLong": {
          "latitude": 39.236523,
          "longitude": -94.652725
      },
      "listingType": "",
      "communityName": "",
      "uid": "453902b1-85ce-4111-bcad-a4c7c2cd1d2c",
      "date": "2024-06-27T16:54:50.422Z"
  },
  {
      "address": "5336 N Bales Ave, Kansas City, MO 64119",
      "beds": 3,
      "baths": 1,
      "area": 888,
      "imgSrc": "https://photos.zillowstatic.com/fp/e145e2ae9c3ac26f1587730150d201c7-p_e.jpg",
      "price": "$229,900",
      "priceLabel": "$230K",
      "latLong": {
          "latitude": 39.191032,
          "longitude": -94.53891
      },
      "listingType": "",
      "communityName": "",
      "uid": "09df9275-6f27-47df-99d9-d9d6c2c09b64",
      "date": "2024-10-02T11:41:10.055Z"
  },
  {
      "address": "609 Central St APT 1310, Kansas City, MO 64105",
      "beds": 0,
      "baths": 1,
      "area": 511,
      "imgSrc": "https://photos.zillowstatic.com/fp/bb27c058a09eb29d0f3bfe0e83da77de-p_e.jpg",
      "price": "$150,000",
      "priceLabel": "$150K",
      "latLong": {
          "latitude": 39.106125,
          "longitude": -94.58569
      },
      "listingType": "",
      "communityName": "",
      "uid": "0c3b418e-c3cb-426d-ba40-8769aa12aebb",
      "date": "2024-04-18T08:17:10.334Z"
  },
  {
      "address": "523 Grand Blvd APT 4E, Kansas City, MO 64106",
      "beds": 1,
      "baths": 2,
      "area": 1107,
      "imgSrc": "https://photos.zillowstatic.com/fp/bfe4f3d348430b41436ede31b7e04799-p_e.jpg",
      "price": "$350,000",
      "priceLabel": "$350K",
      "latLong": {
          "latitude": 39.108105,
          "longitude": -94.57997
      },
      "listingType": "",
      "communityName": "",
      "uid": "c6ce80a3-e79b-4ebf-aaef-15d9740d038f",
      "date": "2024-10-02T13:23:01.471Z"
  },
  {
      "address": "402 NE 97th Ter, Kansas City, MO 64155",
      "beds": 4,
      "baths": 3,
      "area": 3807,
      "imgSrc": "https://photos.zillowstatic.com/fp/f5603e51b36c21f883e83f924bf43ce8-p_e.jpg",
      "price": "$354,900",
      "priceLabel": "$355K",
      "latLong": {
          "latitude": 39.271,
          "longitude": -94.57493
      },
      "listingType": "",
      "communityName": "",
      "uid": "530eff73-81e0-40ec-849f-4457ed35cced",
      "date": "2023-12-27T11:54:46.762Z"
  },
  {
      "address": "532 NE 98th Pl, Kansas City, MO 64155",
      "beds": 3,
      "baths": 2,
      "area": 1498,
      "imgSrc": "https://photos.zillowstatic.com/fp/d55a766949793e2d94232dd1a2ca6541-p_e.jpg",
      "price": "$332,000",
      "priceLabel": "$332K",
      "latLong": {
          "latitude": 39.272095,
          "longitude": -94.571945
      },
      "listingType": "",
      "communityName": "",
      "uid": "4ffd0b4e-4aa0-417f-a791-7be07dfdb5de",
      "date": "2024-10-02T06:35:57.471Z"
  },
  {
      "address": "3208 Lockridge St, Kansas City, MO 64128",
      "beds": 4,
      "baths": 2,
      "area": 2774,
      "imgSrc": "https://photos.zillowstatic.com/fp/d78cfc7e7e5a5e539870100942ae1afb-p_e.jpg",
      "price": "$209,000",
      "priceLabel": "$209K",
      "latLong": {
          "latitude": 39.076065,
          "longitude": -94.54547
      },
      "listingType": "",
      "communityName": "",
      "uid": "11738350-8138-4d34-b0e2-a28faf41ecfe",
      "date": "2024-10-01T18:29:13.344Z"
  },
  {
      "address": "8912 NE 97th St, Kansas City, MO 64157",
      "beds": 5,
      "baths": 4,
      "area": 4856,
      "imgSrc": "https://photos.zillowstatic.com/fp/0c952849a9c1bdd5c869e713cc5acd85-p_e.jpg",
      "price": "$549,900",
      "priceLabel": "$550K",
      "latLong": {
          "latitude": 39.268875,
          "longitude": -94.47011
      },
      "listingType": "",
      "communityName": "",
      "uid": "2b426c3b-d568-4409-bd9a-5f890c6b5a55",
      "date": "2024-10-02T10:07:48.307Z"
  },
  {
      "address": "8234 Madison Ave, Kansas City, MO 64114",
      "beds": 4,
      "baths": 2,
      "area": 2204,
      "imgSrc": "https://photos.zillowstatic.com/fp/99853bc8fb7c2789d4669615200f7d6b-p_e.jpg",
      "price": "$375,000",
      "priceLabel": "$375K",
      "latLong": {
          "latitude": 38.978493,
          "longitude": -94.60102
      },
      "listingType": "",
      "communityName": "",
      "uid": "35eec32b-bffe-4da6-8150-dbe2f3ee10da",
      "date": "2024-07-07T04:17:47.513Z"
  },
  {
      "address": "9333 N Belton Ave, Kansas City, MO 64154",
      "beds": 3,
      "baths": 2,
      "area": 1500,
      "imgSrc": "https://photos.zillowstatic.com/fp/a2c3146e384d97e0ffce5b5108ac8fc5-p_e.jpg",
      "price": "$452,920",
      "priceLabel": "$453K",
      "latLong": {
          "latitude": 39.261574,
          "longitude": -94.61913
      },
      "listingType": "NEW_CONSTRUCTION",
      "communityName": "",
      "uid": "a3dbbb53-fbd4-465c-a844-281d158fb053",
      "date": "2023-10-15T01:42:06.362Z"
  },
  {
      "address": "5006 N Crystal Ave, Kansas City, MO 64119",
      "beds": 3,
      "baths": 1,
      "area": 816,
      "imgSrc": "https://photos.zillowstatic.com/fp/3a199e7f179e8e0317257cd2b11969bf-p_e.jpg",
      "price": "$129,900",
      "priceLabel": "$130K",
      "latLong": {
          "latitude": 39.184498,
          "longitude": -94.49494
      },
      "listingType": "",
      "communityName": "",
      "uid": "f0c65ea0-fb1c-487b-82b1-7f1b0495f3f3",
      "date": "2024-10-02T11:57:20.892Z"
  },
  {
      "address": "8804 E 47th St, Kansas City, MO 64129",
      "beds": 3,
      "baths": 1,
      "area": 1200,
      "imgSrc": "https://photos.zillowstatic.com/fp/18ecf58dd74137e62129ab37c783cde2-p_e.jpg",
      "price": "$200,000",
      "priceLabel": "$200K",
      "latLong": {
          "latitude": 39.0385,
          "longitude": -94.48056
      },
      "listingType": "",
      "communityName": "",
      "uid": "a4398b72-ecba-40e7-aefe-472e2be92738",
      "date": "2023-12-21T10:44:07.288Z"
  },
  {
      "address": "936 E Gregory Blvd, Kansas City, MO 64131",
      "beds": 2,
      "baths": 2,
      "area": 1184,
      "imgSrc": "https://photos.zillowstatic.com/fp/930dead7b715f60271d5e7359e885e48-p_e.jpg",
      "price": "$250,000",
      "priceLabel": "$250K",
      "latLong": {
          "latitude": 38.999126,
          "longitude": -94.57587
      },
      "listingType": "",
      "communityName": "",
      "uid": "98d6443a-d73d-406c-999a-cdad221770b9",
      "date": "2024-07-17T07:06:10.530Z"
  },
  {
      "address": "422 E 55th St, Kansas City, MO 64110",
      "beds": 4,
      "baths": 3,
      "area": 2164,
      "imgSrc": "https://photos.zillowstatic.com/fp/7c7abd1247d971323e55003beed4a30f-p_e.jpg",
      "price": "$695,000",
      "priceLabel": "$695K",
      "latLong": {
          "latitude": 39.02768,
          "longitude": -94.58186
      },
      "listingType": "",
      "communityName": "",
      "uid": "1f157ca2-f639-4d54-b53d-1d40c6be7a02",
      "date": "2024-03-22T10:06:20.757Z"
  },
  {
      "address": "811 E 75th St, Kansas City, MO 64131",
      "beds": 4,
      "baths": 2,
      "area": 2182,
      "imgSrc": "https://photos.zillowstatic.com/fp/59d9da68b97adcff7c8290e33342f924-p_e.jpg",
      "price": "$299,500",
      "priceLabel": "$300K",
      "latLong": {
          "latitude": 38.991367,
          "longitude": -94.57867
      },
      "listingType": "",
      "communityName": "",
      "uid": "4aab5386-76b3-465b-936d-eebf1798334e",
      "date": "2023-10-27T13:10:50.417Z"
  },
  {
      "address": "2624 Jarboe St, Kansas City, MO 64108",
      "beds": 2,
      "baths": 1,
      "area": 937,
      "imgSrc": "https://photos.zillowstatic.com/fp/fb76fa8f4e2185aa3855831441978c72-p_e.jpg",
      "price": "$209,999",
      "priceLabel": "$210K",
      "latLong": {
          "latitude": 39.07961,
          "longitude": -94.597916
      },
      "listingType": "",
      "communityName": "",
      "uid": "e61a2bd4-b81d-4f3c-84c8-5fe1c6559ed0",
      "date": "2024-10-02T03:06:40.260Z"
  },
  {
      "address": "8907 NE 109th St, Kansas City, MO 64157",
      "beds": 3,
      "baths": 3,
      "area": 1898,
      "imgSrc": "https://photos.zillowstatic.com/fp/6bdd17dcb8a1f869e42725ef90abd94a-p_e.jpg",
      "price": "$340,000",
      "priceLabel": "$340K",
      "latLong": {
          "latitude": 39.28972,
          "longitude": -94.4711
      },
      "listingType": "",
      "communityName": "",
      "uid": "4a5d3999-abc7-4074-ab4d-961870f8ea14",
      "date": "2024-10-02T04:26:34.215Z"
  },
  {
      "address": "2401 Holly St, Kansas City, MO 64108",
      "beds": 3,
      "baths": 2,
      "area": 5786,
      "imgSrc": "https://photos.zillowstatic.com/fp/16c78bcd7c409b9afc81e55e6e9b49f6-p_e.jpg",
      "price": "$2,050,000",
      "priceLabel": "$2.05M",
      "latLong": {
          "latitude": 39.083862,
          "longitude": -94.59819
      },
      "listingType": "",
      "communityName": "",
      "uid": "193171c7-d9a0-4481-87e4-c803d416b5b3",
      "date": "2024-09-07T01:48:17.103Z"
  },
  {
      "address": "9321 Madison Ave, Kansas City, MO 64114",
      "beds": 3,
      "baths": 2,
      "area": 1808,
      "imgSrc": "https://photos.zillowstatic.com/fp/9a65ab2780915e2019c1314934e19e58-p_e.jpg",
      "price": "$425,000",
      "priceLabel": "$425K",
      "latLong": {
          "latitude": 38.958633,
          "longitude": -94.60164
      },
      "listingType": "",
      "communityName": "",
      "uid": "ad2b266a-7184-4a1d-8bf0-83590f49ebb6",
      "date": "2023-10-06T04:04:17.848Z"
  },
  {
      "address": "4107 E 60th St, Kansas City, MO 64130",
      "beds": 3,
      "baths": 1,
      "area": 947,
      "imgSrc": "https://photos.zillowstatic.com/fp/07e94c3af4a6e5754fec4451f473774c-p_e.jpg",
      "price": "$65,000",
      "priceLabel": "$65K",
      "latLong": {
          "latitude": 39.016724,
          "longitude": -94.53786
      },
      "listingType": "",
      "communityName": "",
      "uid": "ae41cab7-6dd9-4fe0-9c7b-aa1f92a19309",
      "date": "2024-05-08T12:09:13.902Z"
  },
  {
      "address": "8109 Grand Ave, Kansas City, MO 64114",
      "beds": 3,
      "baths": 1,
      "area": 1760,
      "imgSrc": "https://photos.zillowstatic.com/fp/6b5ddfffeaf12ae784eafd943b3edda9-p_e.jpg",
      "price": "$250,000",
      "priceLabel": "$250K",
      "latLong": {
          "latitude": 38.980343,
          "longitude": -94.587494
      },
      "listingType": "",
      "communityName": "",
      "uid": "ef519ac2-3bad-41fd-a460-d436e61481ee",
      "date": "2024-06-19T07:37:39.596Z"
  },
  {
      "address": "3022 Wallace Ave, Kansas City, MO 64129",
      "beds": 3,
      "baths": 2,
      "area": 1068,
      "imgSrc": "https://photos.zillowstatic.com/fp/61d17a70174cd9fb8d9705bb7ad05649-p_e.jpg",
      "price": "$175,000",
      "priceLabel": "$175K",
      "latLong": {
          "latitude": 39.067894,
          "longitude": -94.48545
      },
      "listingType": "",
      "communityName": "",
      "uid": "d3f0486c-2026-4ff8-b064-d52ce0966bd7",
      "date": "2023-11-08T07:42:26.532Z"
  },
  {
      "address": "10611 N Northbrooke Dr, Kansas City, MO 64155",
      "beds": 3,
      "baths": 3,
      "area": 2872,
      "imgSrc": "https://photos.zillowstatic.com/fp/82631211a9c237621d5a67a142c98624-p_e.jpg",
      "price": "$525,000",
      "priceLabel": "$525K",
      "latLong": {
          "latitude": 39.287186,
          "longitude": -94.58213
      },
      "listingType": "",
      "communityName": "",
      "uid": "df9f94bf-821e-4d87-ae9a-030d243b98ef",
      "date": "2024-10-02T14:36:11.205Z"
  },
  {
      "address": "2507 E 69th St, Kansas City, MO 64132",
      "beds": 2,
      "baths": 1,
      "area": 768,
      "imgSrc": "https://photos.zillowstatic.com/fp/c023ddcb27e9dffc5f3359fa542d1dc4-p_e.jpg",
      "price": "$150,000",
      "priceLabel": "$150K",
      "latLong": {
          "latitude": 39.001423,
          "longitude": -94.55731
      },
      "listingType": "",
      "communityName": "",
      "uid": "9f7415b2-aaaf-45c2-a237-1b6fde47fee3",
      "date": "2024-10-02T15:32:27.975Z"
  },
  {
      "address": "12743 Cherry St, Kansas City, MO 64145",
      "beds": 4,
      "baths": 3,
      "area": 2667,
      "imgSrc": "https://photos.zillowstatic.com/fp/7e7e2ebe215335e05e8680360f34a3c8-p_e.jpg",
      "price": "$339,900",
      "priceLabel": "$340K",
      "latLong": {
          "latitude": 38.895123,
          "longitude": -94.58813
      },
      "listingType": "",
      "communityName": "",
      "uid": "5b554df3-b48a-4e3f-aade-2514f1faf89e",
      "date": "2024-09-26T16:11:09.364Z"
  },
  {
      "address": "7805 Pennsylvania Ave, Kansas City, MO 64114",
      "beds": 3,
      "baths": 2,
      "area": 1136,
      "imgSrc": "https://photos.zillowstatic.com/fp/7156d90b423a5e2fbb633364d6f1d5db-p_e.jpg",
      "price": "$312,500",
      "priceLabel": "$313K",
      "latLong": {
          "latitude": 38.98669,
          "longitude": -94.596245
      },
      "listingType": "",
      "communityName": "",
      "uid": "8c46df5d-6a2d-4ab5-a16a-13e167fa1fef",
      "date": "2023-11-15T04:40:22.758Z"
  },
  {
      "address": "12838 Locust St, Kansas City, MO 64145",
      "beds": 4,
      "baths": 3,
      "area": 2829,
      "imgSrc": "https://photos.zillowstatic.com/fp/41b0b1bbadd3cb2e04934f458216b5a1-p_e.jpg",
      "price": "$379,000",
      "priceLabel": "$379K",
      "latLong": {
          "latitude": 38.894306,
          "longitude": -94.590034
      },
      "listingType": "",
      "communityName": "",
      "uid": "63380274-a47a-4fce-a9aa-c865f776956d",
      "date": "2024-10-02T03:31:26.736Z"
  },
  {
      "address": "4239 E 68th Ter, Kansas City, MO 64132",
      "beds": 2,
      "baths": 1,
      "area": 1001,
      "imgSrc": "https://photos.zillowstatic.com/fp/5d0785de1132d5d74b3bedd5ce8c8d13-p_e.jpg",
      "price": "$110,000",
      "priceLabel": "$110K",
      "latLong": {
          "latitude": 39.001404,
          "longitude": -94.53631
      },
      "listingType": "",
      "communityName": "",
      "uid": "da801672-5682-47f9-980a-7c183aa3ec72",
      "date": "2024-05-22T06:49:58.666Z"
  },
  {
      "address": "525 W 38th St, Kansas City, MO 64111",
      "beds": 5,
      "baths": 5,
      "area": 3852,
      "imgSrc": "https://photos.zillowstatic.com/fp/1eac14cd25ce65535b986a9b016b1c46-p_e.jpg",
      "price": "$565,000",
      "priceLabel": "$565K",
      "latLong": {
          "latitude": 39.057774,
          "longitude": -94.592834
      },
      "listingType": "",
      "communityName": "",
      "uid": "2e755b9c-0fdf-45e2-9217-9b1949eba1db",
      "date": "2024-10-01T16:45:04.500Z"
  },
  {
      "address": "19 W Concord Ave, Kansas City, MO 64112",
      "beds": 4,
      "baths": 4,
      "area": 2900,
      "imgSrc": "https://photos.zillowstatic.com/fp/d546b1d3ae5fdb91ad476c470a486118-p_e.jpg",
      "price": "$725,000",
      "priceLabel": "$725K",
      "latLong": {
          "latitude": 39.03158,
          "longitude": -94.5885
      },
      "listingType": "",
      "communityName": "",
      "uid": "7707e5e7-cc4d-41d2-9c80-0a8c61656f14",
      "date": "2024-01-15T09:25:36.211Z"
  },
  {
      "address": "113 W 5th St APT 201, Kansas City, MO 64105",
      "beds": 1,
      "baths": 1,
      "area": 874,
      "imgSrc": "https://photos.zillowstatic.com/fp/1adf0e196993c2b15d858d6af215a0c0-p_e.jpg",
      "price": "$269,900",
      "priceLabel": "$270K",
      "latLong": {
          "latitude": 39.10784,
          "longitude": -94.58439
      },
      "listingType": "",
      "communityName": "",
      "uid": "49954544-ea56-4921-a5d9-1c6ed644de4d",
      "date": "2024-10-01T18:29:11.330Z"
  },
  {
      "address": "4313 McGee St APT 2N, Kansas City, MO 64111",
      "beds": 2,
      "baths": 1,
      "area": 1090,
      "imgSrc": "https://photos.zillowstatic.com/fp/56f50bebba58120fe0f1707607dcc275-p_e.jpg",
      "price": "$218,000",
      "priceLabel": "$218K",
      "latLong": {
          "latitude": 39.04869,
          "longitude": -94.582794
      },
      "listingType": "",
      "communityName": "",
      "uid": "2ebd6ad4-7757-4e41-af22-9a8cb6376618",
      "date": "2023-10-23T10:41:52.534Z"
  },
  {
      "address": "6603 NW 104th Ter, Kansas City, MO 64154",
      "beds": 4,
      "baths": 4,
      "area": 2293,
      "imgSrc": "https://photos.zillowstatic.com/fp/74ecfcd4159847eecfb0161bac74f076-p_e.jpg",
      "price": "$525,000",
      "priceLabel": "$525K",
      "latLong": {
          "latitude": 39.281555,
          "longitude": -94.655136
      },
      "listingType": "",
      "communityName": "",
      "uid": "4e7109fe-f183-48bf-9599-f224e0501ad0",
      "date": "2024-10-02T09:56:22.314Z"
  },
  {
      "address": "3744 Montgall Ave, Kansas City, MO 64128",
      "beds": 4,
      "baths": 2,
      "area": 1884,
      "imgSrc": "https://photos.zillowstatic.com/fp/2e7b33c919c6d55165a534b7ddf912d5-p_e.jpg",
      "price": "$199,000",
      "priceLabel": "$199K",
      "latLong": {
          "latitude": 39.057358,
          "longitude": -94.55266
      },
      "listingType": "",
      "communityName": "",
      "uid": "dd2f28a0-5c09-4906-b8b4-619aae7cee75",
      "date": "2024-10-01T23:25:50.325Z"
  },
  {
      "address": "10123 N Ditman Ave, Kansas City, MO 64157",
      "beds": 3,
      "baths": 3,
      "area": 1652,
      "imgSrc": "https://photos.zillowstatic.com/fp/59f469797c4f95f412693ff108163c14-p_e.jpg",
      "price": "$370,000",
      "priceLabel": "$370K",
      "latLong": {
          "latitude": 39.27732,
          "longitude": -94.477356
      },
      "listingType": "",
      "communityName": "",
      "uid": "d36af890-64f5-4968-863a-947b167926c7",
      "date": "2024-10-02T08:13:21.632Z"
  },
  {
      "uid": "5ec574d0-2461-4ebc-be32-701dd31cfbbc",
      "address": "9406 NE 111th Ter, Kansas City, MO",
      "beds": 0,
      "baths": 0,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/52d198448d4f3886a5ac2ce39cce24b9-p_e.jpg",
      "price": "From $358,300",
      "priceLabel": "",
      "latLong": {
          "latitude": 39.293766,
          "longitude": -94.464226
      },
      "listingType": "NEW_CONSTRUCTION",
      "communityName": "SomerBrook",
      "date": "2023-12-22T08:01:58.699Z"
  },
  {
      "address": "5925 State Line Rd, Kansas City, MO 64113",
      "beds": 4,
      "baths": 4,
      "area": 3738,
      "imgSrc": "https://photos.zillowstatic.com/fp/db67642c869b2680e3b1f94521b6740b-p_e.jpg",
      "price": "$1,695,000",
      "priceLabel": "$1.70M",
      "latLong": {
          "latitude": 39.02017,
          "longitude": -94.60727
      },
      "listingType": "",
      "communityName": "",
      "uid": "5a567e15-0673-430e-8f22-f1f257570667",
      "date": "2024-10-02T13:14:32.183Z"
  },
  {
      "address": "1831 Mercier St, Kansas City, MO 64108",
      "beds": 3,
      "baths": 4,
      "area": 1663,
      "imgSrc": "https://photos.zillowstatic.com/fp/ddf2e84721472e9681be45237b2c77fb-p_e.jpg",
      "price": "$539,900",
      "priceLabel": "$540K",
      "latLong": {
          "latitude": 39.09019,
          "longitude": -94.5989
      },
      "listingType": "",
      "communityName": "",
      "uid": "e2881fd7-9461-48ad-bbd1-1d22e35bb71b",
      "date": "2024-10-01T18:04:14.491Z"
  },
  {
      "address": "15919 E 77th Ter, Kansas City, MO 64139",
      "beds": 4,
      "baths": 4,
      "area": 2788,
      "imgSrc": "https://photos.zillowstatic.com/fp/8ac26b6db2ba1536b21dbc6d2817aeb2-p_e.jpg",
      "price": "$445,000",
      "priceLabel": "$445K",
      "latLong": {
          "latitude": 38.978897,
          "longitude": -94.39508
      },
      "listingType": "",
      "communityName": "",
      "uid": "6b8aa27a-eb94-47b3-afb2-e3db7e540100",
      "date": "2024-01-29T13:18:31.663Z"
  },
  {
      "address": "4975 Ward Pkwy, Kansas City, MO 64112",
      "beds": 5,
      "baths": 5,
      "area": 3562,
      "imgSrc": "https://photos.zillowstatic.com/fp/d1408871546fccbd678fd326e25f9f6e-p_e.jpg",
      "price": "$1,160,000",
      "priceLabel": "$1.16M",
      "latLong": {
          "latitude": 39.037174,
          "longitude": -94.599045
      },
      "listingType": "",
      "communityName": "",
      "uid": "2b52b76f-2f68-4f65-b7a3-2432e53f307e",
      "date": "2024-09-10T14:31:28.984Z"
  },
  {
      "address": "11229 Bristol Ter, Kansas City, MO 64134",
      "beds": 4,
      "baths": 2,
      "area": 1154,
      "imgSrc": "https://photos.zillowstatic.com/fp/d9a74cd6e7d4dd20cdd027addedeeaa0-p_e.jpg",
      "price": "$199,900",
      "priceLabel": "$200K",
      "latLong": {
          "latitude": 38.918793,
          "longitude": -94.50673
      },
      "listingType": "",
      "communityName": "",
      "uid": "5eb806bb-f723-4db0-a21d-38b0c32a19d3",
      "date": "2024-04-11T06:10:14.090Z"
  },
  {
      "address": "9605 NE 91st Ter, Kansas City, MO 64157",
      "beds": 5,
      "baths": 5,
      "area": 4906,
      "imgSrc": "https://photos.zillowstatic.com/fp/fab84649d4ad166e19f0ec05528f0e74-p_e.jpg",
      "price": "$720,000",
      "priceLabel": "$720K",
      "latLong": {
          "latitude": 39.25941,
          "longitude": -94.459694
      },
      "listingType": "",
      "communityName": "",
      "uid": "508edb4f-6e7e-4375-9191-a937c2dc0088",
      "date": "2024-10-01T23:13:10.238Z"
  },
  {
      "address": "1101 Walnut St UNIT 1206, Kansas City, MO 64106",
      "beds": 1,
      "baths": 1,
      "area": 813,
      "imgSrc": "https://photos.zillowstatic.com/fp/2355cc4aa4c6801a910c37da2103469c-p_e.jpg",
      "price": "$299,000",
      "priceLabel": "$299K",
      "latLong": {
          "latitude": 39.10065,
          "longitude": -94.58151
      },
      "listingType": "",
      "communityName": "",
      "uid": "73a67072-d24d-4183-8326-ae988eb5c728",
      "date": "2024-05-20T16:42:19.972Z"
  },
  {
      "address": "9332 N Belton Ave, Kansas City, MO 64154",
      "beds": 3,
      "baths": 3,
      "area": 2322,
      "imgSrc": "https://photos.zillowstatic.com/fp/bc07bd4cb8fc8155f6e894f9ea78c8a9-p_e.jpg",
      "price": "$480,540",
      "priceLabel": "$481K",
      "latLong": {
          "latitude": 39.26177,
          "longitude": -94.619385
      },
      "listingType": "NEW_CONSTRUCTION",
      "communityName": "",
      "uid": "a15382a8-ae89-4edb-854c-0c55182833c8",
      "date": "2024-03-01T14:21:38.971Z"
  },
  {
      "address": "9115 N Kentucky Ave, Kansas City, MO 64157",
      "beds": 4,
      "baths": 4,
      "area": 3649,
      "imgSrc": "https://photos.zillowstatic.com/fp/741cac0984e14bc241b9c253d6cbb168-p_e.jpg",
      "price": "$559,900",
      "priceLabel": "$560K",
      "latLong": {
          "latitude": 39.25846,
          "longitude": -94.47316
      },
      "listingType": "",
      "communityName": "",
      "uid": "a82ebffb-91e8-4df7-b3fc-1f3755e8bc9a",
      "date": "2023-12-20T23:03:55.892Z"
  },
  {
      "address": "7910 N Anita Dr, Kansas City, MO 64151",
      "beds": 4,
      "baths": 3,
      "area": 2468,
      "imgSrc": "https://photos.zillowstatic.com/fp/846ecc958b99465ab1b82445989ce2f2-p_e.jpg",
      "price": "$349,900",
      "priceLabel": "$350K",
      "latLong": {
          "latitude": 39.237915,
          "longitude": -94.63334
      },
      "listingType": "",
      "communityName": "",
      "uid": "19825282-5b56-4cf9-a57b-20fa0d0da3c2",
      "date": "2024-09-24T08:36:57.509Z"
  },
  {
      "address": "6934 Bellefontaine Ave, Kansas City, MO 64132",
      "beds": 2,
      "baths": 1,
      "area": 956,
      "imgSrc": "https://photos.zillowstatic.com/fp/d0d126cde324ce21530ea59d202cc82e-p_e.jpg",
      "price": "$135,000",
      "priceLabel": "$135K",
      "latLong": {
          "latitude": 39.00013,
          "longitude": -94.5513
      },
      "listingType": "",
      "communityName": "",
      "uid": "11a75fd6-3f49-4120-b807-e821bf1c95fe",
      "date": "2023-10-30T20:03:38.383Z"
  },
  {
      "address": "3434 Campbell St, Kansas City, MO 64109",
      "beds": 5,
      "baths": 3,
      "area": 3055,
      "imgSrc": "https://photos.zillowstatic.com/fp/14e6f90b96db3c820733b0bfff467dad-p_e.jpg",
      "price": "$465,000",
      "priceLabel": "$465K",
      "latLong": {
          "latitude": 39.064102,
          "longitude": -94.57434
      },
      "listingType": "",
      "communityName": "",
      "uid": "75339377-99c7-49b0-8552-646b3fe4debb",
      "date": "2024-10-02T08:52:01.338Z"
  },
  {
      "address": "2980 Baltimore Ave APT 2204, Kansas City, MO 64108",
      "beds": 2,
      "baths": 2,
      "area": 1046,
      "imgSrc": "https://photos.zillowstatic.com/fp/e19c32e5ea6d5d5418e3118ddc8263d4-p_e.jpg",
      "price": "$255,000",
      "priceLabel": "$255K",
      "latLong": {
          "latitude": 39.072235,
          "longitude": -94.586716
      },
      "listingType": "",
      "communityName": "",
      "uid": "550e38e9-818c-4516-ab3a-a957d85ad736",
      "date": "2023-11-24T09:16:41.212Z"
  },
  {
      "address": "6205 E Truman Rd, Kansas City, MO 64126",
      "beds": 3,
      "baths": 2,
      "area": 2076,
      "imgSrc": "https://photos.zillowstatic.com/fp/d7dfba6bc0e6271c302ae55b89ff1c1b-p_e.jpg",
      "price": "$100,000",
      "priceLabel": "$100K",
      "latLong": {
          "latitude": 39.093533,
          "longitude": -94.50978
      },
      "listingType": "",
      "communityName": "",
      "uid": "ea9d6c32-3e7a-41ae-9994-ae7eba03d871",
      "date": "2024-10-02T13:27:08.199Z"
  },
  {
      "address": "5519 NE Meadowbrook Rd, Kansas City, MO 64119",
      "beds": 3,
      "baths": 2,
      "area": 2020,
      "imgSrc": "https://photos.zillowstatic.com/fp/6baaa7f26601b125e85e8bab83128286-p_e.jpg",
      "price": "$275,000",
      "priceLabel": "$275K",
      "latLong": {
          "latitude": 39.193516,
          "longitude": -94.49619
      },
      "listingType": "",
      "communityName": "",
      "uid": "2e5b92d6-3b2e-4847-aac7-189e2916438c",
      "date": "2024-01-26T01:23:35.367Z"
  },
  {
      "address": "4514 E 20th St, Kansas City, MO 64127",
      "beds": 2,
      "baths": 1,
      "area": 1026,
      "imgSrc": "https://photos.zillowstatic.com/fp/a103746c5c4c9789959e9953d4661a43-p_e.jpg",
      "price": "$35,000",
      "priceLabel": "$35K",
      "latLong": {
          "latitude": 39.08744,
          "longitude": -94.529526
      },
      "listingType": "",
      "communityName": "",
      "uid": "da21405a-eb4e-453a-aa62-00a8814ed855",
      "date": "2024-10-02T14:13:31.942Z"
  },
  {
      "address": "2300 NE 110th St, Kansas City, MO 64155",
      "beds": 4,
      "baths": 4,
      "area": 2968,
      "imgSrc": "https://photos.zillowstatic.com/fp/7f67934c4c3226b002f5697a0fbb2e60-p_e.jpg",
      "price": "$535,000",
      "priceLabel": "$535K",
      "latLong": {
          "latitude": 39.29274,
          "longitude": -94.549995
      },
      "listingType": "",
      "communityName": "",
      "uid": "c3d47355-e7cd-43f2-9181-9bcf42aade58",
      "date": "2024-10-02T04:53:19.331Z"
  },
  {
      "address": "9614 NE 97th St, Kansas City, MO 64157",
      "beds": 6,
      "baths": 5,
      "area": 3887,
      "imgSrc": "https://photos.zillowstatic.com/fp/907f7e9b49dd99c675dba11b8eb25ba2-p_e.jpg",
      "price": "$630,000",
      "priceLabel": "$630K",
      "latLong": {
          "latitude": 39.269154,
          "longitude": -94.45768
      },
      "listingType": "",
      "communityName": "",
      "uid": "e48f568a-0e17-4a45-a107-a4f57cdcba85",
      "date": "2024-09-19T11:08:56.904Z"
  },
  {
      "address": "5125 Tracy Ave, Kansas City, MO 64110",
      "beds": 5,
      "baths": 2,
      "area": 1700,
      "imgSrc": "https://photos.zillowstatic.com/fp/54f0c34b572784f13adcc46d554411a2-p_e.jpg",
      "price": "$329,900",
      "priceLabel": "$330K",
      "latLong": {
          "latitude": 39.03357,
          "longitude": -94.57075
      },
      "listingType": "",
      "communityName": "",
      "uid": "8635ead4-8921-40d5-8ccf-e2950eb46a3c",
      "date": "2024-03-09T16:22:03.469Z"
  },
  {
      "address": "4225 E 68th St, Kansas City, MO 64132",
      "beds": 3,
      "baths": 2,
      "area": 1407,
      "imgSrc": "https://photos.zillowstatic.com/fp/8428485a779c13dc30a624ab7b0abbd0-p_e.jpg",
      "price": "$61,000",
      "priceLabel": "$61K",
      "latLong": {
          "latitude": 39.002323,
          "longitude": -94.53679
      },
      "listingType": "",
      "communityName": "",
      "uid": "29eac575-5a26-4f93-bbc4-a741c101e5a7",
      "date": "2024-10-02T04:00:51.359Z"
  },
  {
      "address": "4 E 51st St, Kansas City, MO 64112",
      "beds": 2,
      "baths": 4,
      "area": 3217,
      "imgSrc": "https://photos.zillowstatic.com/fp/b36915e1834ba621f461cfa43bc81ae7-p_e.jpg",
      "price": "$2,949,000",
      "priceLabel": "$2.95M",
      "latLong": {
          "latitude": 39.03503,
          "longitude": -94.58657
      },
      "listingType": "",
      "communityName": "",
      "uid": "ff10cda4-baba-45c2-ae11-fad2bd96317e",
      "date": "2024-01-24T11:55:34.314Z"
  },
  {
      "address": "2401 NE 46th Ter, Kansas City, MO 64116",
      "beds": 3,
      "baths": 1,
      "area": 950,
      "imgSrc": "https://photos.zillowstatic.com/fp/56a5471c1db738cd4d944dd097823de7-p_e.jpg",
      "price": "$193,500",
      "priceLabel": "$194K",
      "latLong": {
          "latitude": 39.17817,
          "longitude": -94.551094
      },
      "listingType": "",
      "communityName": "",
      "uid": "ee497946-5e1b-40f7-87ed-ec31b540889b",
      "date": "2024-05-04T11:03:47.866Z"
  },
  {
      "address": "5912 Forest Ave, Kansas City, MO 64110",
      "beds": 4,
      "baths": 2,
      "area": 1646,
      "imgSrc": "https://photos.zillowstatic.com/fp/dc40e42ec0696f8e0c27c99ae7b017e4-p_e.jpg",
      "price": "$179,000",
      "priceLabel": "$179K",
      "latLong": {
          "latitude": 39.01945,
          "longitude": -94.57338
      },
      "listingType": "",
      "communityName": "",
      "uid": "5a14f1c6-5999-4fe4-9278-652e69aaf714",
      "date": "2024-10-01T17:18:37.837Z"
  },
  {
      "uid": "4be94551-f447-4a43-a228-59a8a42088c2",
      "address": "",
      "beds": 0,
      "baths": 0,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/c378b2b72d16f035e54a3b442bc8387e-p_e.jpg",
      "price": "From $499,950",
      "priceLabel": "",
      "latLong": {
          "latitude": 39.279424,
          "longitude": -94.489717
      },
      "listingType": "NEW_CONSTRUCTION",
      "communityName": "Benson Place",
      "date": "2024-08-19T16:13:54.640Z"
  },
  {
      "uid": "2a113ac0-8694-4d7f-ae2d-e5e218ceaa11",
      "address": "",
      "beds": 0,
      "baths": 0,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/41ac7fafb1df5faae0d77b1db0f510cd-p_e.jpg",
      "price": "From $275,000",
      "priceLabel": "",
      "latLong": {
          "latitude": 38.9116349,
          "longitude": -94.4500436
      },
      "listingType": "NEW_CONSTRUCTION",
      "communityName": "Homes in Midtown",
      "date": "2024-10-01T19:28:43.312Z"
  },
  {
      "uid": "874c4e65-4d69-4ffe-8918-9076698b2d93",
      "address": "",
      "beds": 0,
      "baths": 0,
      "area": 0,
      "imgSrc": "https://photos.zillowstatic.com/fp/b059ca309de6af362cb3c5c8ea5a95d9-p_e.jpg",
      "price": "From $569,000",
      "priceLabel": "",
      "latLong": {
          "latitude": 39.261194,
          "longitude": -94.673417
      },
      "listingType": "NEW_CONSTRUCTION",
      "communityName": "Reserve at Riverstone",
      "date": "2024-07-24T06:11:47.397Z"
  }
]

export const propertySchema = z.object({
  uid: z.string(),
  address: z.string(),
  date: z.string(),
  price: z.string()
});

export type propertyType = z.infer<typeof propertySchema>;