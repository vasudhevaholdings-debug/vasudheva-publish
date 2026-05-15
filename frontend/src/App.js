import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import Philosophy from "./pages/Philosophy";
import AuthorService from "./pages/AuthorService";
import Manuscript from "./pages/Manuscript";
import RightsAndRoyalty from "./pages/RightRoyality";
import ForInstitutions from "./pages/ForInstitution";
import Insights from "./pages/Insight";
import PublishWithUs from "./pages/PublishWithUs";
import Books from "./pages/Books";
import Partner from "./pages/Partner";
import Contact from "./pages/Contact";
import WhyExist from "./pages/WhyExist";
import Leadership from "./pages/Leadership";
import Governance from "./pages/Governance";
import ExploreBooks from "./pages/ExploreBooks";
import ReaderCommunity from "./pages/ReaderCommunity";
import AudioBooks from "./pages/AudioBooks";
import InstitutionSolutions from "./pages/InstitutionSolutions";
import BulkPage from "./pages/BulkPage";
import CustomPublish from "./pages/CustomPublish";
import Career from "./pages/Career";

// Import Pages (abhi sirf Home bana rahe hain, baaki baad mein add karenge)
// import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        {/* <Routes path="/" element={<Home/>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/submit-manuscript" element={<Manuscript />} />
        <Route path="/author-services" element={<AuthorService />} />
        <Route path="/rights-royalties" element={<RightsAndRoyalty />} />
        <Route path="/for-institutions" element={<ForInstitutions />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/publish-with-us" element={<PublishWithUs />} />
        <Route path="/books" element={<Books />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/why-exist" element={<WhyExist />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/explore-books" element={<ExploreBooks />} />
        <Route path="/for-readers" element={<ReaderCommunity />} />
        <Route path="/audio-books" element={<AudioBooks />} />
        <Route path="/institutional-solutions" element={<InstitutionSolutions />} />
        <Route path="/bulk-orders" element={<BulkPage />} />
        <Route path="/custom-publishing" element={<CustomPublish />} />
        <Route path="/career" element={<Career />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;