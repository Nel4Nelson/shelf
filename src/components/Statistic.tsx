import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Props {
  number: number;
  title: string;
}

const Statistic = ({ number, title }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="text-custom-text-body font-bodyRegularFont flex flex-col"
    >
      <p className="text-xl">Up to</p>
      <p className="flex text-custom-text-primary font-bodyBoldFont text-7xl font-extrabold">
        <CountUp start={inView ? 0 : undefined} end={number} delay={0}>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
        +
      </p>
      <p className="text-2xl font-bold">{title}</p>
    </div>
  );
};

export default Statistic;
