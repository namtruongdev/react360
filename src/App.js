import FeatherIcon from 'feather-icons-react';
import { initializeAPIDemo } from './assets/projects/project-3/general/action.js';
import license from './assets/projects/project-3/general/license.lic';
import './assets/css/round.css';
import styled from 'styled-components';

import Menu from './components/Menu';
// import Floor4 from './assets/projects/project-1/overall/components/Floor4';
import Floor7 from './assets/projects/project-3/components/Floor7';

const Popup = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  background: transparent;
  z-index: 999999999999;
  border-radius: 5px;
  padding: 0;
  width: 180px;
  transform: translate(-50%, 0);
  top: -50px;
  left: 115px;

  button {
    border: none;
    border-radius: 5px;
    padding: 4%;
    cursor: pointer;
    margin: auto auto 12px auto;
    display: flex;
    align-items: center;
    width: 120px;
    background: #fff;
    color: #333;
    .text {
      font-weight: 600;
      display: flex;
      font-size: 13px;
      align-items: center;
      padding-left: 5px;
    }
  }

  .icon-close {
    position: relative;
    border-radius: 50%;
    cursor: pointer;
    z-index: 999999999999;
  }
`;

const ButtonBox = styled.div`
  display: none;
  position: absolute;
  z-index: 99999;
  top: 5%;
  left: 50%;
  transform: translate(-50%, 0);
  button {
    width: 115px;
    padding: 6px;
    margin-right: 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-size: 16px;
    background: #fff;
    border: 1px solid;
    svg {
      margin-right: 6px;
    }
  }
`;

const Preview = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 999999;
  background-color: rgb(0 0 0 / 75%);
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.7s;
  img {
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  iframe {
    width: 90%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    border: none;
  }

  @-webkit-keyframes zoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  .close-preview {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;

const App = () => {
  const viewer = window.WR360.ImageRotator.Create('wr360PlayerId');

  viewer.licenseFileURL = license;
  viewer.settings.configFileURL =
    '/assets/projects/project-3/general/config.xml';
  viewer.settings.graphicsPath =
    '/assets/img/round';
  viewer.settings.alt = '360 degree view ALT description';
  viewer.settings.googleEventTracking = false;
  viewer.settings.apiReadyCallback = (api, isFullScreen) => {
    if (!isFullScreen) {
      initializeAPIDemo(api);
    }
    // for (let i = 1; i <= 36; i++) {
    //   let general = `000${i}.jpg`;
    // let floor0 = `000${i}.jpg`;
    // let floor1 = `000${i}.jpg`;
    // let floor2 = `000${i}.jpg`;
    // let floor3 = `000${i}.jpg`;
    // let floor4 = `000${i}.jpg`;
    // let floor5 = `000${i}.jpg`;
    // let floor6 = `000${i}.jpg`;
    // let floor7 = `000${i}.jpg`;
    // let floor8 = `000${i}.jpg`;
    // let snow = `000${i}.jpg`;
    // if (i >= 10) general = `00${i}.jpg`;
    // if (i >= 10) floor0 = `00${i}.jpg`;
    // if (i >= 10) floor1 = `00${i}.jpg`;
    // if (i >= 10) floor2 = `00${i}.jpg`;
    // if (i >= 10) floor3 = `00${i}.jpg`;
    // if (i >= 10) floor4 = `00${i}.jpg`;
    // if (i >= 10) floor5 = `00${i}.jpg`;
    // if (i >= 10) floor6 = `00${i}.jpg`;
    // if (i >= 10) floor7 = `00${i}.jpg`;
    // if (i >= 10) floor8 = `00${i}.jpg`;
    // if (i >= 10) snow = `00${i}.jpg`;

    // window
    //   .$('<img>')
    //   .attr({
    //     src: `/assets/projects/project-3/general/images/${general}`,
    //   })
    //   .appendTo('.preload');
    // window
    //   .$('<img>')
    //   .attr({
    //     src: `/assets/projects/project-3/floor/Floor0/360_assets/images/${floor0}`,
    //   })
    //   .appendTo('.preload');
    // window
    //   .$('<img>')
    //   .attr({
    //     src: `/assets/projects/project-3/floor/Floor1/360_assets/images/${floor1}`,
    //   })
    //   .appendTo('.preload');
    // window
    //   .$('<img>')
    //   .attr({
    //     src: `/assets/projects/project-3/floor/Floor2/360_assets/images/${floor2}`,
    //   })
    //   .appendTo('.preload');
    // window
    //   .$('<img>')
    //   .attr({
    //     src: `/assets/projects/project-3/floor/Floor3/360_assets/images/${floor3}`,
    //   })
    //   .appendTo('.preload');
    // window
    //   .$('<img>')
    //   .attr({
    //     src: `/assets/projects/project-3/floor/Floor4/360_assets/images/${floor4}`,
    //   })
    //   .appendTo('.preload');
    // window
    //   .$('<img>')
    //   .attr({
    //     src: `/assets/projects/project-3/floor/Floor5/360_assets/images/${floor5}`,
    //   })
    //   .appendTo('.preload');
    // window
    //   .$('<img>')
    //   .attr({
    //     src: `/assets/projects/project-3/floor/Floor6/360_assets/images/${floor6}`,
    //   })
    //   .appendTo('.preload');
    // window
    //   .$('<img>')
    //   .attr({
    //     src: `/assets/projects/project-3/floor/Floor7/360_assets/images/${floor7}`,
    //   })
    //   .appendTo('.preload');
    // window
    //   .$('<img>')
    //   .attr({
    //     src: `/assets/projects/project-3/floor/Floor8/360_assets/images/${floor8}`,
    //   })
    //   .appendTo('.preload');
    // window
    //   .$('<img>')
    //   .attr({
    //     src: `/assets/projects/project-3/floor/Snow/360_assets/images/${snow}`,
    //   })
    //   .appendTo('.preload');
    // }

    return false;
  };

  viewer.runImageRotator();

  return (
    <>
      <Floor7 />
      <Menu className="menu" />
      <ButtonBox className="button-box">
        <button id="highlight_floor">
          <FeatherIcon icon="loader" size="24" fill="white" color="black" />
          <small className="text">Highlight</small>
        </button>
        <button id="virtual_360_floor">
          <FeatherIcon icon="codepen" size="24" fill="white" color="black" />
          <small className="text">360 Preview</small>
        </button>
        <button id="image_360_floor">
          <FeatherIcon icon="image" size="24" fill="white" color="black" />
          <small className="text">3D Image</small>
        </button>
      </ButtonBox>
      <section
        id="wr360PlayerId"
        className="wr360_player"
        style={{ backgroundColor: '#FFFFFF' }}
      ></section>
      <div className="preload" style={{ display: 'block' }}></div>
      <div
        id="overlay"
        style={{
          background: 'transparent',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: '9999',
          display: 'none',
        }}
      ></div>
      <Popup id="popup">
        <button id="highlight">
          <FeatherIcon
            icon="loader"
            size="24"
            fill="white"
            color="black"
            className="icon-close"
            id="icon-highlight"
          />
          <small className="text">Highlight</small>
        </button>
        <button id="virtual_360">
          <FeatherIcon
            icon="codepen"
            size="24"
            fill="white"
            color="black"
            className="icon-close"
            id="iconPreview"
          />
          <small className="text">360 Preview</small>
        </button>
        <button id="image_360">
          <FeatherIcon
            icon="image"
            size="24"
            fill="white"
            color="black"
            className="icon-close"
            id="icon-3D"
          />
          <small className="text">3D Image</small>
        </button>
      </Popup>
      <Preview className="preview_360">
        <FeatherIcon
          icon="x"
          size="45"
          fill="black"
          color="white"
          className="close-preview"
        />
      </Preview>
      <div className="info room_1">
        <div className="info-text">
          <h4>Name : 201</h4>
          <p>Price: 585,000</p>
          <p>Surface area: 718.71</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Additional space: 84.18</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Facing: North/South/East</p>
          <p className="available">Available</p>
        </div>
        <div className="info-image">
          <img
            className="info-avatar"
            src="/assets/projects/project-3/floor/Floor7/360_assets/images/0001.jpg"
            alt=""
          />
          <p className="custom-text">
            <FeatherIcon icon="heart" size="16" fill="white" color="grey" />
            <a href="/#">Wishlist</a>
          </p>
          <p className="absolute-text">
            <FeatherIcon icon="search" size="16" fill="white" color="grey" />
            <a href="/#">More details</a>
          </p>
        </div>
      </div>

      <div className="info room_2">
        <div className="info-text">
          <h4>Name : 201</h4>
          <p>Price: 585,000</p>
          <p>Surface area: 718.71</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Additional space: 84.18</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Facing: North/South/East</p>
          <p className="available">Available</p>
        </div>
        <div className="info-image">
          <img
            className="info-avatar"
            src="/assets/projects/project-3/floor/Floor7/360_assets/images/0001.jpg"
            alt=""
          />
          <p className="custom-text">
            <FeatherIcon icon="heart" size="16" fill="white" color="grey" />
            <a href="/#">Wishlist</a>
          </p>
          <p className="absolute-text">
            <FeatherIcon icon="search" size="16" fill="white" color="grey" />
            <a href="/#">More details</a>
          </p>
        </div>
      </div>

      <div className="info room_3">
        <div className="info-text">
          <h4>Name : 201</h4>
          <p>Price: 585,000</p>
          <p>Surface area: 718.71</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Additional space: 84.18</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Facing: North/South/East</p>
          <p className="available">Available</p>
        </div>
        <div className="info-image">
          <img
            className="info-avatar"
            src="/assets/projects/project-3/floor/Floor7/360_assets/images/0001.jpg"
            alt=""
          />
          <p className="custom-text">
            <FeatherIcon icon="heart" size="16" fill="white" color="grey" />
            <a href="/#">Wishlist</a>
          </p>
          <p className="absolute-text">
            <FeatherIcon icon="search" size="16" fill="white" color="grey" />
            <a href="/#">More details</a>
          </p>
        </div>
      </div>

      <div className="info room_4">
        <div className="info-text">
          <h4>Name : 201</h4>
          <p>Price: 585,000</p>
          <p>Surface area: 718.71</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Additional space: 84.18</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Facing: North/South/East</p>
          <p className="available">Available</p>
        </div>
        <div className="info-image">
          <img
            className="info-avatar"
            src="/assets/projects/project-3/floor/Floor7/360_assets/images/0001.jpg"
            alt=""
          />
          <p className="custom-text">
            <FeatherIcon icon="heart" size="16" fill="white" color="grey" />
            <a href="/#">Wishlist</a>
          </p>
          <p className="absolute-text">
            <FeatherIcon icon="search" size="16" fill="white" color="grey" />
            <a href="/#">More details</a>
          </p>
        </div>
      </div>

      <div className="info room_5">
        <div className="info-text">
          <h4>Name : 201</h4>
          <p>Price: 585,000</p>
          <p>Surface area: 718.71</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Additional space: 84.18</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Facing: North/South/East</p>
          <p className="available">Available</p>
        </div>
        <div className="info-image">
          <img
            className="info-avatar"
            src="/assets/projects/project-3/floor/Floor7/360_assets/images/0001.jpg"
            alt=""
          />
          <p className="custom-text">
            <FeatherIcon icon="heart" size="16" fill="white" color="grey" />
            <a href="/#">Wishlist</a>
          </p>
          <p className="absolute-text">
            <FeatherIcon icon="search" size="16" fill="white" color="grey" />
            <a href="/#">More details</a>
          </p>
        </div>
      </div>

      <div className="info room_6">
        <div className="info-text">
          <h4>Name : 201</h4>
          <p>Price: 585,000</p>
          <p>Surface area: 718.71</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Additional space: 84.18</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Facing: North/South/East</p>
          <p className="available">Available</p>
        </div>
        <div className="info-image">
          <img
            className="info-avatar"
            src="/assets/projects/project-3/floor/Floor7/360_assets/images/0001.jpg"
            alt=""
          />
          <p className="custom-text">
            <FeatherIcon icon="heart" size="16" fill="white" color="grey" />
            <a href="/#">Wishlist</a>
          </p>
          <p className="absolute-text">
            <FeatherIcon icon="search" size="16" fill="white" color="grey" />
            <a href="/#">More details</a>
          </p>
        </div>
      </div>

      <div className="info room_7">
        <div className="info-text">
          <h4>Name : 201</h4>
          <p>Price: 585,000</p>
          <p>Surface area: 718.71</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Additional space: 84.18</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Facing: North/South/East</p>
          <p className="available">Available</p>
        </div>
        <div className="info-image">
          <img
            className="info-avatar"
            src="/assets/projects/project-3/floor/Floor7/360_assets/images/0001.jpg"
            alt=""
          />
          <p className="custom-text">
            <FeatherIcon icon="heart" size="16" fill="white" color="grey" />
            <a href="/#">Wishlist</a>
          </p>
          <p className="absolute-text">
            <FeatherIcon icon="search" size="16" fill="white" color="grey" />
            <a href="/#">More details</a>
          </p>
        </div>
      </div>

      <div className="info room_8">
        <div className="info-text">
          <h4>Name : 201</h4>
          <p>Price: 585,000</p>
          <p>Surface area: 718.71</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Additional space: 84.18</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Facing: North/South/East</p>
          <p className="available">Available</p>
        </div>
        <div className="info-image">
          <img
            className="info-avatar"
            src="/assets/projects/project-3/floor/Floor7/360_assets/images/0001.jpg"
            alt=""
          />
          <p className="custom-text">
            <FeatherIcon icon="heart" size="16" fill="white" color="grey" />
            <a href="/#">Wishlist</a>
          </p>
          <p className="absolute-text">
            <FeatherIcon icon="search" size="16" fill="white" color="grey" />
            <a href="/#">More details</a>
          </p>
        </div>
      </div>

      <div className="info room_9">
        <div className="info-text">
          <h4>Name : 201</h4>
          <p>Price: 585,000</p>
          <p>Surface area: 718.71</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Additional space: 84.18</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Facing: North/South/East</p>
          <p className="available">Available</p>
        </div>
        <div className="info-image">
          <img
            className="info-avatar"
            src="/assets/projects/project-3/floor/Floor7/360_assets/images/0001.jpg"
            alt=""
          />
          <p className="custom-text">
            <FeatherIcon icon="heart" size="16" fill="white" color="grey" />
            <a href="/#">Wishlist</a>
          </p>
          <p className="absolute-text">
            <FeatherIcon icon="search" size="16" fill="white" color="grey" />
            <a href="/#">More details</a>
          </p>
        </div>
      </div>

      <div className="info room_10">
        <div className="info-text">
          <h4>Name : 201</h4>
          <p>Price: 585,000</p>
          <p>Surface area: 718.71</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Additional space: 84.18</p>
          <p>
            (66.7 m<sup>2</sup>)
          </p>
          <p>Facing: North/South/East</p>
          <p className="available">Available</p>
        </div>
        <div className="info-image">
          <img
            className="info-avatar"
            src="/assets/projects/project-3/floor/Floor7/360_assets/images/0001.jpg"
            alt=""
          />
          <p className="custom-text">
            <FeatherIcon icon="heart" size="16" fill="white" color="grey" />
            <a href="/#">Wishlist</a>
          </p>
          <p className="absolute-text">
            <FeatherIcon icon="search" size="16" fill="white" color="grey" />
            <a href="/#">More details</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
