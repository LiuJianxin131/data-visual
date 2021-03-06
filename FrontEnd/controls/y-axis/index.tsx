import * as React from 'react';
import Axis from '@controls/axis';
import { IControlProps } from '@controls/index';

export default class YAxis extends React.Component<IControlProps, undefined> {
  render() {
    return <Axis axisType='yAxis' {...this.props} />;
  }
}