import '../src/css/tribes-media-ui.css';
import { applyTheme } from '../src/theme/utils';

applyTheme({ primary: "#680FFB", secondary: "blue" })

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
