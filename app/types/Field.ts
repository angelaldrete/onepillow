import Option from './Option';

interface Field {
  name: string;
  label: string;
  placeholder: string;
  pattern?: string;
  patternError?: string;
  type?: string;
  options?: Option[];
  disabled?: boolean;
  value?: string;
}

export default Field;