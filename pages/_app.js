import "../styles/globals.css";

//INTRNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex";

import {NFTMarketplaceProvider} from '../Context/NFTMarketplaceContext';



const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <NFTMarketplaceProvider>
    <Component {...pageProps} />
    <Footer />
    </NFTMarketplaceProvider>
  </div>
);

export default MyApp;
