const apiKey =
  "pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA";

const mymap = L.map("map").setView([32.0149, 34.77336], 17);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    maxZoom: 20,
    minZoom: 17,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey,
    scrollWheelZoom: false,
  }
).addTo(mymap);

var myGeoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [34.77366998, 32.01423686],
            [34.77367166, 32.01420711],
            [34.77363071, 32.01420781],
            [34.77362904, 32.01423793],
            [34.77366998, 32.01423686],
          ],
        ],
      },
      id: "c985ac35-0833-47ba-81ca-36bf99e867f9",
      properties: { name: "B502" },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [34.77277767, 32.01605742],
            [34.77279313, 32.01617786],
            [34.7733935, 32.0161102],
            [34.77336091, 32.01587109],
            [34.77322721, 32.01588455],
            [34.77324351, 32.01600853],
            [34.77277767, 32.01605742],
          ],
        ],
      },
      id: "27694427-d9ec-4b54-8776-c432cf8e3436",
      properties: { name: "B1" },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [34.77434754, 32.01440633],
            [34.77447246, 32.01448179],
            [34.77467759, 32.01421858],
            [34.77420991, 32.01395512],
            [34.77410265, 32.01409972],
            [34.77443953, 32.01428846],
            [34.77434754, 32.01440633],
          ],
        ],
      },
      id: "1c25f061-65e8-47cb-8b45-882c2392cd5e",
      properties: { name: "B7" },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [34.7736023, 32.01423793],
            [34.7736023, 32.01421029],
            [34.77355676, 32.01420994],
            [34.77355635, 32.01423722],
            [34.7736023, 32.01423793],
          ],
        ],
      },
      id: "d652c325-a765-4318-b570-d33b6b4389a1",
      properties: { name: "B503" },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [34.77387534, 32.01444994],
            [34.77416236, 32.01460192],
            [34.7743324, 32.01437272],
            [34.7740529, 32.01421862],
            [34.77387534, 32.01444994],
          ],
        ],
      },
      id: "e6a53b96-6883-4067-9515-fcfb4e26e3f8",
      properties: { name: "B6" },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [34.77278686, 32.01591289],
            [34.77318376, 32.01587782],
            [34.77317238, 32.01577629],
            [34.77277213, 32.01581171],
            [34.77278686, 32.01591289],
          ],
        ],
      },
      id: "8805b3cf-d973-4b86-b1b8-692ba0a81a66",
      properties: { name: "B2" },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [34.77294106, 32.01426618],
            [34.77323511, 32.01423402],
            [34.77318145, 32.01389612],
            [34.77287523, 32.01394465],
            [34.77294106, 32.01426618],
          ],
        ],
      },
      id: "38bd33f7-9363-4c2d-854f-bc0e1d2496aa",
      properties: { name: "B8" },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [34.77270599, 32.01551408],
            [34.77298851, 32.0154863],
            [34.77296596, 32.01534308],
            [34.77268514, 32.01537302],
            [34.77270599, 32.01551408],
          ],
        ],
      },
      id: "496f3063-ce06-4462-81db-b8a9e77dbc84",
      properties: { name: "B3" },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [34.77313831, 32.01546977],
            [34.7731298, 32.01535144],
            [34.7733787, 32.01534025],
            [34.77338551, 32.01545786],
            [34.77313831, 32.01546977],
          ],
        ],
      },
      id: "757b5767-2f23-4a2d-a2bb-13263627c77a",
      properties: { name: "B4" },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [34.77307901, 32.01468509],
            [34.77343756, 32.01489614],
            [34.77368983, 32.01457101],
            [34.77319007, 32.01428735],
            [34.77308562, 32.01442019],
            [34.77322558, 32.01450486],
            [34.77307901, 32.01468509],
          ],
        ],
      },
      id: "e5e5ca8a-dd93-45a6-862c-1fee19dc423e",
      properties: { name: "B5" },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [34.77369965, 32.01423722],
            [34.77374978, 32.01423509],
            [34.77374853, 32.01420533],
            [34.77370132, 32.01420711],
            [34.77369965, 32.01423722],
          ],
        ],
      },
      id: "9afde2a9-3de3-4a80-98bb-2c811d4fc919",
      properties: { name: "B501" },
    },
  ],
};


L.geoJSON(myGeoJSON, {
  style: function (feature) {
    return {
      color: "black",
      fillColor: "yellow",
    };
  },
  onEachFeature: function (feature, layer) {


    if (feature.properties.name == "B1") {
      layer.bindPopup(
        `<div class="sidebar-header">

          <h1 class="aa">` +
          feature.properties.name +
          `</h1></b>
          <img class="BuildingPhoto" src="imges/B1and 2.jpg" height="150px" alt="" />
          </br></br><a href="">show more</a>
          </div>`
      );
    }
    if (feature.properties.name == "B2") {
      layer.bindPopup(
        `<div class="sidebar-header">

          <h1 class="aa">` +
          feature.properties.name +
          `</h1></b>
          <img class="BuildingPhoto" src="imges/B1and 2.jpg" height="150px" alt="" />
          </br></br><a href="">show more</a></div>`
      );
    }
    if (feature.properties.name == "B3") {
      layer.bindPopup(
        `<div class="sidebar-header">

          <h1 class="aa">` +
          feature.properties.name +
          `</h1></b>
          <img class="BuildingPhoto" src="imges/B500plus.jpeg" height="150px" alt="" />
          </br></br><a href="">show more</a></div>`
      );
    }
    if (feature.properties.name == "B4") {
      layer.bindPopup(
        `<div class="sidebar-header">

          <h1 class="aa">` +
          feature.properties.name +
          `</h1></b>
          <img class="BuildingPhoto" src="imges/B500plus.jpeg" height="150px" alt="" />
          </br></br><a href="">show more</a>
                </div>`
      );
    }
    if (feature.properties.name == "B5") {
      layer.bindPopup(
        `<div class="sidebar-header">

          <h1 class="aa">` +
          feature.properties.name +
          `</h1></b>
          <img class="BuildingPhoto" src="imges/B5.jpeg" height="150px" alt="" />
          </br></br><a href="">show more</a>
                </div>`
      );
    }
    if (feature.properties.name == "B6") {
      layer.bindPopup(
        `<div class="sidebar-header">

          <h1 class="aa">` +
          feature.properties.name +
          `</h1></b>
          <img class="BuildingPhoto" src="imges/B6.jpg" height="150px" alt="" />
          </br></br><a href="">show more</a>
                </div>`
      );
    }
    if (feature.properties.name == "B7") {
      layer.bindPopup(
        `<div class="sidebar-header">

          <h1 class="aa">` +
          feature.properties.name +
          `</h1></b>
          <img class="BuildingPhoto" src="imges/B7.jpg" height="150px" alt="" />
          </br></br><a href="">show more</a>
                </div>`
      );
    }
    if (feature.properties.name == "B8") {
      layer.bindPopup(
        `<div class="sidebar-header">

          <h1 class="aa">` +
          feature.properties.name +
          `</h1></b>
          <img class="BuildingPhoto" src="imges/B8.jpg" height="150px" alt="" />
          </br></br><a href="">show more</a>
                </div>`
      );
    }
    if (feature.properties.name == "B501") {
      layer.bindPopup(
        `<div class="sidebar-header">

          <h1 class="aa">` +
          feature.properties.name +
          `</h1></b>
          <img class="BuildingPhoto" src="imges/B500plus.jpeg" height="150px" alt="" />
          </br></br><a href="">show more</a>
                </div>`
      );
    }
    if (feature.properties.name == "B502") {
      layer.bindPopup(
        `<div class="sidebar-header">

          <h1 class="aa">` +
          feature.properties.name +
          `</h1></b>
          <img class="BuildingPhoto" src="imges/B500plus.jpeg" height="150px" alt="" />
          </br></br><a href="">show more</a>
                </div>`
      );
    }
    if (feature.properties.name == "B503") {
      layer.bindPopup(
        `<div class="sidebar-header">

          <h1 class="aa">` +
          feature.properties.name +
          `</h1></b>
          <img class="BuildingPhoto" src="imges/B500plus.jpeg" height="150px" alt="" />
          </br></br><a href="">show more</a>
                </div>`
      );
    }
  },
}).addTo(mymap);
