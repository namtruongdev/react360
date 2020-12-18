import { useCallback } from 'react';

import { initializeAPIDemo } from './assets/projects/project-1/overall/action';
import license from './assets/projects/project-1/overall/published/license.lic';
import './assets/projects/project-1/overall/published/imagerotator/html/css/round.css';

import Menu from './component/menu';
import SwitchBtn from './component/SwitchBtn';

const App = () => {
  const viewer = window.WR360.ImageRotator.Create('wr360PlayerId');
  viewer.licenseFileURL = license;
  viewer.settings.configFileURL =
    '/assets/projects/project-1/overall/published/360_assets/COR49_Billancourt/COR49_Billancourt.xml';
  viewer.settings.graphicsPath =
    '/assets/projects/project-1/overall/published/imagerotator/html/img/round';
  viewer.settings.alt = '360 degree view ALT description';
  viewer.settings.googleEventTracking = false;
  viewer.settings.apiReadyCallback = useCallback((api, isFullScreen) => {
    if (!isFullScreen) {
      initializeAPIDemo(api);
    }
    for (let i = 1; i <= 36; i++) {
      let fileName = `Filename_0${i}.jpg`;
      if (i >= 10) fileName = `Filename_${i}.jpg`;
      window
        .$('<img>')
        .attr({
          src: `/assets/projects/project-2/overall/IntegrationTemplates/360_assets/VansShoe/images/${fileName}`,
        })
        .appendTo('.hidden');
    }
    return false;
  }, []);

  viewer.runImageRotator();

  const onHandleClick = (name) => {
    console.log(name);
  };

  return (
    <>
      <SwitchBtn />
      <Menu onHandleClick={onHandleClick} />
      <section
        id="wr360PlayerId"
        className="wr360_player"
        style={{ backgroundColor: '#FFFFFF' }}
      ></section>

      <img style={{ opacity: 0 }} id="popup" src="#" alt="popup" />
      <div className="floor-4" style={{ opacity: 0 }}>
        <span
          className="closeFloor4"
          style={{
            fontSize: 30,
            display: 'block',
            width: 40,
            height: 40,
            textAlign: 'center',
            lineHeight: 1,
            position: 'absolute',
            borderRadius: '50%',
            top: 30,
            right: 30,
            cursor: 'pointer',
            boxShadow: '0px 0px 16px 0px rgba(0,0,0,0.75)',
          }}
        >
          &#9932;
        </span>
        <img
          className="test"
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
            href="#"
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
      <div className="hidden" style={{ display: 'block' }}></div>
    </>
  );
};

export default App;
