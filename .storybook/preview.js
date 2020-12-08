import '../src/css/tribes-media-ui.css';
import { applyTheme } from '../src/theme/utils';

applyTheme({ primary: "#680FFB", secondary: "white", primaryText: "white", secondaryText: "#680FFB" })

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
