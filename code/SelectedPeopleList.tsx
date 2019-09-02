import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSelectedPeopleList: React.SFC = props => {
  return <System.SelectedPeopleList {...props} style={style} />;
};

export const SelectedPeopleList = withHOC(InnerSelectedPeopleList);

SelectedPeopleList.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SelectedPeopleList, {});