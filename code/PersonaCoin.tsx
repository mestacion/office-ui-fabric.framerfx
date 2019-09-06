import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";
import { colors } from "./canvas";

const InnerPersonaCoin = ({ width, height, ...props }) => {
  const coinSize = Math.min(width, height);
  return <System.PersonaCoin {...props} coinSize={coinSize} />;
};

export const PersonaCoin = withHOC(InnerPersonaCoin);

PersonaCoin.defaultProps = {
  width: 90,
  height: 90,
  imageShouldStartVisible: true,
  imageShouldFadeIn: true
};

addPropertyControls(PersonaCoin, {
  text: { title: "Text", defaultValue: "John Doe", type: ControlType.String },
  imageUrl: {
    title: "ImageUrl",
    defaultValue: "https://api.adorable.io/avatars/90/charly.png",
    type: ControlType.String
  },
  initialsColor: {
    title: "InitialsColor",
    defaultValue: colors["exchange.primary"],
    type: ControlType.Color,
    hidden(props) {
      return !!props["imageUrl"];
    }
  },
  presence: {
    title: "Presence",
    type: ControlType.Number,
    defaultValue: 2,
    min: 0,
    max: 4,
    displayStepper: true
  },
  isOutOfOffice: {
    title: "IsOutOfOffice",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
