import "./MostPopular.css";
import popular_01 from "../../Assets/images/popular-01.jpg";
import popular_02 from "../../Assets/images/popular-02.jpg";
import popular_03 from "../../Assets/images/popular-03.jpg";
import popular_04 from "../../Assets/images/popular-04.jpg";
import { Card, SectionHeader, SectionWrapper } from "../../Components/index";

const MostPopular = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Most Popular</SectionHeader>
      <div className="most-popular-items">
        <Card
          image={popular_01}
          title="Fortnight"
          category="SandBox"
          rate="4.8"
          download="5M"
        />
        <Card
          image={popular_02}
          title="PubG"
          category="Stream"
          rate="4.2"
          download="3M"
        />
        <Card
          image={popular_03}
          title="Dota2"
          category="Legendary"
          rate="4.5"
          download="1M"
        />
        <Card
          image={popular_04}
          title="CS-Go"
          category="Battle"
          rate="4.0"
          download="7M"
        />

        <Card
          image={popular_01}
          title="Fortnight"
          category="SandBox"
          rate="4.8"
          download="5M"
        />
        <Card
          image={popular_02}
          title="PubG"
          category="Stream"
          rate="4.2"
          download="3M"
        />
        <Card
          image={popular_03}
          title="Dota2"
          category="Legendary"
          rate="4.5"
          download="1M"
        />
        <Card
          image={popular_04}
          title="CS-Go"
          category="Battle"
          rate="4.0"
          download="7M"
        />
      </div>
    </SectionWrapper>
  );
};

export default MostPopular;
