import React from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function ResponsiveFontSizes(props) {
  return (
    <div>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </div>
  );
}
