import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerFabricBase: React.SFC = props => {
  return <System.FabricBase {...props} style={style} />;
};

export const FabricBase = withHOC(InnerFabricBase);

FabricBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FabricBase, {
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
