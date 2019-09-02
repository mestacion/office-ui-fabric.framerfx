import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerExpandingCard: React.SFC = props => {
  return <System.ExpandingCard {...props} style={style} />;
};

export const ExpandingCard = withHOC(InnerExpandingCard);

ExpandingCard.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ExpandingCard, {
  compactCardHeight: { title: "CompactCardHeight", type: ControlType.Number },
  expandedCardHeight: { title: "ExpandedCardHeight", type: ControlType.Number },
  mode: { title: "Mode", type: ControlType.Number },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  directionalHint: { title: "DirectionalHint", type: ControlType.Number },
  directionalHintFixed: {
    title: "DirectionalHintFixed",
    defaultValue: false,
    type: ControlType.Boolean
  },
  firstFocus: {
    title: "FirstFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  gapSpace: { title: "GapSpace", type: ControlType.Number },
  trapFocus: {
    title: "TrapFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
