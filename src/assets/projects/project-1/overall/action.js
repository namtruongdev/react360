export const initializeAPIDemo = (api) => {
  api.hotspots.onAction(({ hotspotInfo }) => {
    switch (hotspotInfo.clickDataParam) {
      case 3:
        window.location.assign(hotspotInfo.url);
        break;

      default:
        alert('haha');
        break;
    }
  });
};
