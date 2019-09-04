import * as React from "react";
import * as System from "office-ui-fabric-react";
import {
  ControlType,
  PropertyControls,
  addPropertyControls,
  Stack,
  Frame
} from "framer";
import { withHOC } from "../utils/withHOC";
import { mergeStyles } from "office-ui-fabric-react";
import { centeredChildStyles } from "../utils/CenteredWrapper";
import { colors } from "../canvas";
import { OfficeLogo } from "../assets/office-logo";

const style = {
  width: "100%",
  height: "100%",
  display: "flex" as "flex",
  flexDirection: "column" as "column",
  color: colors["office.navbar.text"],
  fontSize: "14px",
  alignItems: "center" as "center",
  backgroundColor: colors["office.background"],
  selectors: {
    ":hover": {
      backgroundColor: "white",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,.1)",
      color: colors["office.link"]
    }
  }
};

const InnerOfficeButton: React.SFC<any> = ({ text, image, ...props }) => {
  return (
    <Stack
      className={mergeStyles(style)}
      {...props}
      gap={0}
      background={colors["office.background"]}
    >
      <Frame
        style={{
          width: "100%",
          height: "51px",
          textAlign: "center",
          background: "transparent",
          backgroundColor: "pink"
        }}
      >
        <OfficeLogo style={{ marginTop: "15px" }} />
      </Frame>
      <Frame
        style={{
          width: "100%",
          height: "46px",
          textAlign: "center",
          background: "transparent"
        }}
      >
        <p>{text}</p>
      </Frame>
    </Stack>
  );
};

export const OfficeButton = withHOC(InnerOfficeButton);

OfficeButton.defaultProps = {
  width: 97,
  height: 97
};

addPropertyControls(OfficeButton, {
  text: { type: ControlType.String, defaultValue: "Text" },
  image: { type: ControlType.Image }
});