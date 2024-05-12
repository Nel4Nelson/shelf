import Text from "./components/Text";
import NavBar from "./components/NavBar";
import iPhone from "@/assets/iPhone.svg";
import curvyLine from "@/assets/CurvyLine.svg";
import AboutBooks from "./components/Carousel/AboutBooks";
import Benefits from "./components/Benefits";
import Statistic from "./components/Statistic";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import ArrowRight from "@/assets/ArrowRight.svg";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";
import { NotebookPen } from "lucide-react";

// import CustomButton from "./components/CustomButton";
// import Apple from "@/assets/Apple.svg";
// import Android from "@/assets/Android.svg";

const App = () => {
  const statistics = [
    { number: 1300, title: "Successful Deliveries" },
    { number: 1000, title: "Happy Customers" },
    { number: 5000, title: "Books available" },
  ];

  return (
    <div className="grid">
      <div className="bg-custom-header-bg">
        <div className="flex flex-col gap-16">
          <NavBar />
          <div className="flex justify-center">
            <Text
              header={
                <>
                  A Better way to Nurture a{" "}
                  <span className="text-custom-secondary">Reading Habit.</span>
                </>
              }
            >
              With our curated selection, personalized recommendations, and
              vibrant community, cultivating a habit for reading has never been
              easier.
            </Text>
          </div>
        </div>
        {/* CTA */}
        <div className="flex gap-3 justify-center mt-5 mb-[100px]">
          {/* <CustomButton img={Apple} text="iPhone" />
          <CustomButton img={Android} text="Android" /> */}
          <Link target="blank" to="/waitlist">
            <Button className="bg-custom-black-900 flex gap-2 font-poppinsFont text-lg h-[63px] px-[24px] py-[9px] rounded-[13.6px]">
              {" "}
              <NotebookPen />
              Join the waitlist
            </Button>
          </Link>
        </div>
        <div className="relative flex justify-center mt-5">
          <img className="relative z-50" src={iPhone} alt="Bigshelf Iphone" />
          <img
            className="absolute -z-5"
            src={curvyLine}
            alt="Bigshelf curvy Line"
          />
        </div>
      </div>

      <section className="flex justify-center pt-[100px]">
        <Text
          header={
            <>
              Explore our{" "}
              <span className="text-custom-secondary">Bigshelf</span>.
              <br />
              There is a book for you.
            </>
          }
        >
          Find the right books that match your taste. From Nigerian literature
          to contemporary gems, discover new worlds, new ideas, and new
          adventures in books through BigShelf.
        </Text>
      </section>

      {/* Carousel X auto scrolling */}
      <section className="py-[100px]">
        <AboutBooks />
      </section>

      {/* BigShelf Benefits */}
      <section className="bg-custom-black-50 py-[100px] flex flex-col gap-14">
        <div className="flex justify-center">
          <Text
            header={
              <>
                Experience{" "}
                <span className="text-custom-secondary">BigSavings</span> With
                Every Purchase.
              </>
            }
          >
            Enjoy direct gift delivery, the lowest book prices in Nigeria, and
            free delivery on book hauls, saving you money while expanding your
            reading collection.
          </Text>
        </div>
        <div className="flex justify-center">
          <Benefits />
        </div>
      </section>

      {/* BigEarning Text */}
      <section className="flex flex-col items-center justify-center py-[100px]">
        <Text
          header={
            <>
              Make <span className="text-custom-secondary">BigEarnings</span>
              <br />
              Passively.
            </>
          }
        >
          Join our affiliate program and earn passive income effortlessly.
          BigShelf rewards you with 20% of profits from book sales generated
          through your referrals.
        </Text>
        <Button
          variant="outline"
          className="mt-[40px] flex items-center gap-2 text-custom-text-primary font-bodyRegularFont text-xl font-medium"
        >
          Become an affiliate
          <img src={ArrowRight} alt="Arrow icon" />
        </Button>
      </section>

      {/* Statistics */}
      <section className="bg-custom-statistic-bg flex flex-col gap-24 py-[100px]">
        <div className="flex justify-center">
          <Text
            header={
              <>
                Connect with the{" "}
                <span className="text-custom-secondary">BigCommunity</span>.
              </>
            }
          >
            Share and receive insights, recommendations, and experiences to
            enrich your reading journey together.
          </Text>
        </div>
        <div className="flex gap-20 justify-center items-center">
          {statistics.map((stats) => (
            <Statistic number={stats.number} title={stats.title} />
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-linear-bg lg:pb-[100px] flex flex-col justify-center items-center">
        <section className="py-[100px]">
          <Text
            header={
              <>
                Feel the <span className="text-custom-secondary">BigLove</span>,
                Hear from Our Community.
              </>
            }
          >
            Don’t just take our word for it, hear what others have to say.
          </Text>
        </section>
        <Testimonial />
      </section>

      {/* Footer */}
      <footer className="flex justify-center pt-[150px]">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
