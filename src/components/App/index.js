// == Import
import Header from 'src/components/header';
import SearchHomeConatainer from 'src/components/searchHomeContainer';
import { CssBaseline } from '@material-ui/core';
import './styles.scss';
import { useSelector } from 'react-redux';
// == Composant
const App = () => {
  const isSearchFormHidden = useSelector((state) => state.isSearchFormHidden);
  return (
    <div className="app">
      <CssBaseline />
      {isSearchFormHidden && <Header />}
      {isSearchFormHidden && <SearchHomeConatainer />}
      <footer>copiright</footer>
    </div>
  );
};

// == Export
export default App;
