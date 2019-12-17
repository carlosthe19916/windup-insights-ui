import { MapDispatchToProps, MapStateToProps } from 'react-redux';

export const enum FetchStatus {
  'none',
  'inProgress',
  'complete',
}

export function createMapStateToProps<OwnProps, StateProps>(
  mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState>
) {
  return mapStateToProps;
}