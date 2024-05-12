import React from "react";
import CarouselX from "./CarouselX";
import { EmblaOptionsType } from "embla-carousel";
import Americanah from "@/assets/Americanah.png";
import Joy from "@/assets/Joy.png";
import Atomic from "@/assets/Atomic.png";
import Rich from "@/assets/Rich.png";

const AboutBooks: React.FC = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES = [
    {
      img: Americanah,
      title: "Americanah",
      author: "Chiamanda Adichie",
      about: `"Americanah" is a powerful novel by Chimamanda Ngozi Adichie that follows the journey of Ifemelu, a young Nigerian woman who moves to the United States for university. Through Ifemelu's experiences as an immigrant, the novel explores themes of race, identity, and belonging, offering a compelling commentary on the complexities of the American experience for people of color. 
    As Ifemelu navigates love, friendship, and career challenges, she grapples with questions of cultural assimilation and the meaning of home, making "Americanah" a thought-provoking and deeply resonant read.`,
    },
    {
      img: Joy,
      title: "Joys of Motherhood",
      author: " Buchi Emecheta",
      about: ` "The Joys of Motherhood" by Buchi Emecheta is a poignant novel that follows the life of Nnu Ego, a Nigerian woman navigating the challenges and sacrifices of motherhood in a patriarchal society. Set in colonial Nigeria, the novel explores themes of tradition, identity, and the struggle for autonomy in the face of societal expectations. Through Nnu Ego's experiences, 
    Emecheta offers a powerful commentary on the complexities of womanhood, motherhood, and the pursuit of fulfillment amidst cultural and social constraints.`,
    },
    {
      img: Atomic,
      title: "Atomic Habits",
      author: "James Clear",
      about: `"Atomic Habits" by James Clear is a bestselling book that offers practical strategies for building and maintaining good habits while breaking bad ones. Clear presents a framework for understanding how habits work and provides actionable techniques for implementing small changes that lead to remarkable results. 
    By focusing on the power of tiny habits and the importance of consistency, "Atomic Habits" offers readers a roadmap for achieving lasting personal transformation and reaching their full potential.`,
    },
    {
      img: Rich,
      title: "Rich Dad, Poor Dad",
      author: "Robert T. Kiyosaki",
      about: `"Rich Dad, Poor Dad" by Robert T. Kiyosaki is a personal finance classic that contrasts the financial philosophies of the author's "rich dad" and "poor dad." Through engaging anecdotes and practical advice, 
    Kiyosaki shares valuable lessons on building wealth, investing wisely, and achieving financial independence. By challenging conventional wisdom and promoting financial literacy, "Rich Dad, Poor Dad" has inspired millions of readers to rethink their approach to money and pursue financial success.`,
    },
  ];
  return <CarouselX slides={SLIDES} options={OPTIONS} />;
};

export default AboutBooks;
