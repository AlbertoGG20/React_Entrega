import DatePicker from "../../components/datePicker/DatePicker";
import Header from "../../components/header/header/Header";
import Legacy from "../../components/legacy/Legacy";
import Maps from "../../components/maps/Maps";
import Section1 from "../../components/section1/Section1";
import Section2 from "../../components/section2/Section2";

function Home() {
  return (
    <>
      <Header />
      <Section1 />
      <Legacy />
      <Section2 />
      <DatePicker />
      <Maps />
    </>
  )

}
export default Home;