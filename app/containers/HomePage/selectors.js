import { createSelector } from 'reselect';

const make = (state, props) => state.Home;

export const makeToolbarList = createSelector(make, state => state.toolbarList);
export const makeSidebarFavouriteList = createSelector(
  make,
  state => state.sidebarFavouriteList
);
export const makeSelectedPath = createSelector(
  make,
  state => state.selectedPath
);

export const makeDirectoryLists = createSelector(
  make,
  state => state.directoryLists
);

export const makeMtpDevice = createSelector(make, state => state.mtpDevice);
export const makeContextMenuPos = createSelector(
  make,
  state => state.contextMenuPos
);
export const makeContextMenuList = createSelector(
  make,
  state => state.contextMenuList
);

export const makeIsLoading = createSelector(make, state => state.___isLoading);
