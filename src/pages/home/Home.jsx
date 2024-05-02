import DatePicker from "../../components/datePicker/DatePicker";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Legacy from "../../components/legacy/Legacy";
import Maps from "../../components/maps/Maps";
import Section1 from "../../components/section1/Section1";
import Section2 from "../../components/section2/Section2";
import Opinions from "../../components/opinions/Opinions"
import './Home.css';

function Home() {
  return (
    <>
      <Header page="home" />
      <Section1 />
      <Legacy />
      <Section2 />
      <DatePicker />
      <Maps />
      <Opinions />
      <Footer />
    </>
  )

}
export default Home;