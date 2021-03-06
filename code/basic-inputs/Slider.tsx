import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { WithManagedStatePropertyControls } from "../utils/stateManagement/propertyControls";
import { compose } from "../utils/compose";
import { withManagedState } from "../utils/stateManagement/withManagedState";

const InnerSlider: React.SFC = props => {
  return <System.Slider {...props} />;
};

export const Slider = compose(
  withHOC,
  withManagedState
)(InnerSlider);

Slider.defaultProps = {
  width: 150,
  height: 50,
  valuePropName: "value"
};

addPropertyControls(Slider, {
  label: {
    title: "Label",
    defaultValue: "Slider Label",
    type: ControlType.String
  },
  value: {
    title: "Value",
    type: ControlType.Number,
    defaultValue: 5,
    displayStepper: true
  },
  min: {
    title: "Min",
    type: ControlType.Number,
    defaultValue: 0,
    displayStepper: true
  },
  max: {
    title: "Max",
    type: ControlType.Number,
    defaultValue: 1,
    displayStepper: true
  },
  step: {
    title: "Step",
    type: ControlType.Number,
    defaultValue: 1,
    displayStepper: true
  },
  showValue: {
    title: "ShowValue",
    defaultValue: false,
    type: ControlType.Boolean
  },
  vertical: {
    title: "Vertical",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  snapToStep: {
    title: "SnapToStep",
    defaultValue: false,
    type: ControlType.Boolean
  },
  originFromZero: {
    title: "OriginFromZero",
    defaultValue: false,
    type: ControlType.Boolean
  },
  ...WithManagedStatePropertyControls
});
