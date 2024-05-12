import { Button } from "./ui/button";

interface Props {
  heading: string;
  text1?: string;
  text2?: string;
}

const FooterText = ({ heading, text1, text2 }: Props) => {
  return (
    <div className="flex flex-col gap-2 font-bodyRegularFont">
      <p className="text-custom-text-primary font-bodyBoldFont font-bold text-xl">
        {heading}
      </p>
      {text1 && (
        <Button
          variant="link"
          className="text-custom-text-body text-lg p-0 m-0 justify-start"
        >
          {text1}
        </Button>
      )}
      {text2 && (
        <Button
          variant="link"
          className="text-custom-text-body text-lg p-0 m-0 justify-start"
        >
          {text2}
        </Button>
      )}
    </div>
  );
};

export default FooterText;
