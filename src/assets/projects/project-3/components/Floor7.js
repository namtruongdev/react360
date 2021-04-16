import React from 'react';
import './styles.css';
import FeatherIcon from 'feather-icons-react';

const Floor7 = () => {
  return (
    <div className="floor-7" style={{ display: 'none', width: '100%', height: '100%', margin: 'auto' }}>
      <img
        id="floor7-image"
        src="/assets/projects/project-3/floor/Floor7/360_assets/images/0001.jpg"
        useMap="#image-map"
        alt=""
      />

      <FeatherIcon icon="x" size="45" fill="black" color="white" className="close-preview" />

      <map name="image-map">
        <area id="room_01" target="" alt="" title="" href="#" coords="540,256,527,336,616,336,619,260" shape="poly" data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}' />
        <area id="room_02" target="" alt="" title="" href="#" coords="" shape="0" data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}' />
        <area id="room_03" target="" alt="" title="" href="#" coords="756,234,797,257,889,239,844,216" shape="poly" data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}' />
        <area id="room_04" target="" alt="" title="" href="#" coords="846,217,907,207,945,226,964,223,1004,241,977,246,998,259,923,275,882,246,835,257,829,250,891,237" shape="poly" data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}' />
        <area id="room_05" target="" alt="" title="" href="#" coords="366,297,351,336,533,336,535,300" shape="poly" data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}' />
        <area id="room_06" target="" alt="" title="" href="#" coords="709,282,880,248,923,275,756,311" shape="poly" data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}' />
        <area id="room_07" target="" alt="" title="" href="#" coords="263,282,258,289,242,295,258,298,247,315,263,315,245,347,349,345,373,282,263,282" shape="poly" data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}' />
        <area id="room_08" target="" alt="" title="" href="#" coords="621,243,614,322,652,324,696,313,709,320,756,311,705,282,731,277,720,271,704,271,698,244" shape="poly" data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}' />
        <area id="room_09" target="" alt="" title="" href="#" coords="310,243,303,257,247,257,229,284,425,282,438,243" shape="poly" data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}' />
        <area id="room_10" target="" alt="" title="" href="#" coords="439,243,425,280,472,282,468,275,538,279,542,244" shape="poly" data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}' />
      </map>
    </div>
  );
};

export default Floor7;
