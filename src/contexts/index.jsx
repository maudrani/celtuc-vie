import { StylesProvider } from './styles';

const Contexts = ({ children }) => {
  return <StylesProvider>{children}</StylesProvider>;
};

export default Contexts;
