import Prismic from './prismic';
import { StylesProvider } from './styles';

const Contexts = ({ children }) => {
  return (
    <Prismic>
      <StylesProvider>{children}</StylesProvider>
    </Prismic>
  );
};

export default Contexts;
