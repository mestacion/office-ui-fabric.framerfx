import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerLabelBase: React.SFC = props => {
  return <System.LabelBase {...props} style={style} />;
};

export const LabelBase = withHOC(InnerLabelBase);

LabelBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(LabelBase, {
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});