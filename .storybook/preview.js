import '../src/css/tribes-media-ui.css';
import { applyTheme } from '../src/theme/utils';

applyTheme({ primary: "#FFFF00", secondary: "#1A1A1A" })

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
