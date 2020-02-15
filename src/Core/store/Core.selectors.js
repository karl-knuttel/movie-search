import { createSelector } from 'reselect';

export const getCore = state => state.get('core');

export const getCoreTitle = createSelector(getCore, core => core.title);
