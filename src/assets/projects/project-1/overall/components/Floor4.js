import React from 'react';

import close from '../../../../images/close.svg';

const Floor4 = () => {
  return (
    <div className="floor-4" style={{ opacity: 0, position: 'absolute' }}>
      <div
        className="closeFloor4"
        style={{
          fontSize: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          position: 'absolute',
          top: 30,
          right: 30,
          borderRadius: '50%',
          boxShadow: '0px 0px 16px 0px rgba(0,0,0,0.75)',
          cursor: 'pointer',
          width: 30,
          height: 30,
          textAlign: 'center',
        }}
      >
        <span>
          <img style={{ width: 20 }} src={close} alt="close" />
        </span>
      </div>
      <img
        id="floor4-image"
        src="assets/projects/project-1/overall/published/360_assets/COR49_Billancourt/images/floorplan.jpg"
        useMap="#image-map"
        alt=""
      />
      <map name="image-map">
        <area
          target=""
          alt="utility"
          title="utility"
          href="#"
          coords="311,33,406,33,408,192,313,94"
          shape="poly"
          data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}'
        />
        <area
          target=""
          alt="kitchen"
          title="kitchen"
          href="#"
          coords="197,155,310,32"
          shape="rect"
          data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}'
        />
        <area
          target=""
          alt="family room"
          title="family room"
          href="https://studiotocdo.vn/wp-content/uploads/vv360/VV2%20116/tour.html"
          coords="200,156,199,290,375,290,439,227,312,99,311,155"
          shape="poly"
          data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}'
        />
        <area
          target=""
          alt="conservatory"
          title="conservatory"
          href="#"
          coords="82,169,200,170,199,282,181,284,182,314,81,315"
          shape="poly"
          data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}'
        />
        <area
          target=""
          alt="living room"
          title="living room"
          href="#"
          coords="198,297,375,509"
          shape="rect"
          data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}'
        />
        <area
          target=""
          alt="bedroom 2"
          title="bedroom 2"
          href="#"
          coords="481,299,645,451"
          shape="rect"
          data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}'
        />
        <area
          target=""
          alt="hall"
          title="hall"
          href="#"
          coords="536,209,464,208,380,292,380,509,456,509,457,452,474,453,475,292,536,292"
          shape="poly"
          data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}'
        />
        <area
          target=""
          alt="bathroom"
          title="bathroom"
          href="#"
          coords="540,208,644,292"
          shape="rect"
          data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}'
        />
        <area
          target=""
          alt="bedroom 1"
          title="bedroom 1"
          href="#"
          coords="486,31,645,201"
          shape="rect"
          data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}'
        />
        <area
          target=""
          alt="en-suite"
          title="en-suite"
          href="#"
          coords="409,113,482,33"
          shape="rect"
          data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}'
        />
        <area
          target=""
          alt="wardrobe"
          title="wardrobe"
          href="#"
          coords="411,118,483,117,483,202,464,204,445,222,410,192"
          shape="poly"
          data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"ff0000","fillOpacity":0.6}'
        />
      </map>
    </div>
  );
};

export default Floor4;
