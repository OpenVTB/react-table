import { createGlobalStyle } from 'styled-components';

import VTBGroupUI_Medium_eot from '@openvtb/fonts/VTBGroupUI-Medium/VTBGroupUI-Medium.eot';
import VTBGroupUI_Medium_woff2 from '@openvtb/fonts/VTBGroupUI-Medium/VTBGroupUI-Medium.woff2';
import VTBGroupUI_Medium_woff from '@openvtb/fonts/VTBGroupUI-Medium/VTBGroupUI-Medium.woff';
import VTBGroupUI_Medium_ttf from '@openvtb/fonts/VTBGroupUI-Medium/VTBGroupUI-Medium.ttf';
import VTBGroupUI_Regular_eot from '@openvtb/fonts/VTBGroupUI-Regular/VTBGroupUI-Regular.eot';
import VTBGroupUI_Regular_woff2 from '@openvtb/fonts/VTBGroupUI-Regular/VTBGroupUI-Regular.woff2';
import VTBGroupUI_Regular_woff from '@openvtb/fonts/VTBGroupUI-Regular/VTBGroupUI-Regular.woff';
import VTBGroupUI_Regular_ttf from '@openvtb/fonts/VTBGroupUI-Regular/VTBGroupUI-Regular.ttf';

export const FontsVTBGroup = createGlobalStyle`
  @font-face {
    font-family: 'VTB Group UI';
    src: url('${VTBGroupUI_Medium_eot}');
    src: url('${VTBGroupUI_Medium_eot}?#iefix') format('embedded-opentype'),
      url('${VTBGroupUI_Medium_woff2}') format('woff2'),
      url('${VTBGroupUI_Medium_woff}') format('woff'),
      url('${VTBGroupUI_Medium_ttf}') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'VTB Group UI';
    src: url('${VTBGroupUI_Regular_eot}');
    src: url('${VTBGroupUI_Regular_eot}?#iefix') format('embedded-opentype'),
      url('${VTBGroupUI_Regular_woff2}') format('woff2'),
      url('${VTBGroupUI_Regular_woff}') format('woff'),
      url('${VTBGroupUI_Regular_ttf}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
