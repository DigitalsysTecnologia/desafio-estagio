import { Platform } from 'react-native';

// Importe a fonte corretamente
import MinhaFonteRegular from './assets/fonts/MinhaFonte-Regular.ttf';
import MinhaFonteBold from './assets/fonts/MinhaFonte-Bold.ttf';

export const Fonts = {
  regular: Platform.OS === 'ios' ? 'dominica-Regular' : 'dominicaRegular',
  //bold: Platform.OS === 'ios' ? 'dominica-Bold' : 'dominicaFonteBold',
};