import { AppData } from './appdata';
import Prismic from './prismic';
import { StylesProvider } from './styles';

const Contexts = ({ children }) => {
  return (
    <Prismic>
      <AppData>
        <StylesProvider>{children}</StylesProvider>
      </AppData>
    </Prismic>
  );
};

export default Contexts;
