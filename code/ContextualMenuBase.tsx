import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerContextualMenuBase: React.SFC = props => {
  return <System.ContextualMenuBase {...props} style={style} />;
};

export const ContextualMenuBase = withHOC(InnerContextualMenuBase);

ContextualMenuBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ContextualMenuBase, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  target: { title: "Target", defaultValue: "", type: ControlType.String },
  directionalHint: { title: "DirectionalHint", type: ControlType.Number },
  directionalHintForRTL: {
    title: "DirectionalHintForRTL",
    type: ControlType.Number
  },
  gapSpace: { title: "GapSpace", type: ControlType.Number },
  beakWidth: { title: "BeakWidth", type: ControlType.Number },
  useTargetWidth: {
    title: "UseTargetWidth",
    defaultValue: false,
    type: ControlType.Boolean
  },
  useTargetAsMinWidth: {
    title: "UseTargetAsMinWidth",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isBeakVisible: {
    title: "IsBeakVisible",
    defaultValue: false,
    type: ControlType.Boolean
  },
  coverTarget: {
    title: "CoverTarget",
    defaultValue: false,
    type: ControlType.Boolean
  },
  alignTargetEdge: {
    title: "AlignTargetEdge",
    defaultValue: false,
    type: ControlType.Boolean
  },
  labelElementId: {
    title: "LabelElementId",
    defaultValue: "",
    type: ControlType.String
  },
  shouldFocusOnMount: {
    title: "ShouldFocusOnMount",
    defaultValue: false,
    type: ControlType.Boolean
  },
  shouldFocusOnContainer: {
    title: "ShouldFocusOnContainer",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isSubMenu: {
    title: "IsSubMenu",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: "", type: ControlType.String },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  doNotLayer: {
    title: "DoNotLayer",
    defaultValue: false,
    type: ControlType.Boolean
  },
  directionalHintFixed: {
    title: "DirectionalHintFixed",
    defaultValue: false,
    type: ControlType.Boolean
  },
  title: { title: "Title", defaultValue: "", type: ControlType.String },
  subMenuHoverDelay: { title: "SubMenuHoverDelay", type: ControlType.Number },
  hidden: { title: "Hidden", defaultValue: false, type: ControlType.Boolean },
  delayUpdateFocusOnHover: {
    title: "DelayUpdateFocusOnHover",
    defaultValue: false,
    type: ControlType.Boolean
  },
  responsiveMode: { title: "ResponsiveMode", type: ControlType.Number }
});