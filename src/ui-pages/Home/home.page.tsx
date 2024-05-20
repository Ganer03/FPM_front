import { CONSTANTS } from "@/app/constants";
import { ApolloProviderLayout } from "@/entities";
import { SnakeText } from "@/features";
import {
  Directions,
  Footer,
  Header,
  Intro,
  LeedFormWithMap,
  News,
  Partners,
  Stats,
} from "@/widgets";
import { ReactElement } from "react";

export const HomePage = ({ lang }: { lang: string }): ReactElement => {
  return (
    <>
      <Header />
      <Intro lang={lang} />
      <Stats stats={CONSTANTS.stats} />
      <SnakeText
        text={" мы выпускаем квалифицированных специалистов"}
        mainText={"50лет"}
      />
      <Directions directions={CONSTANTS.directions} />
      <ApolloProviderLayout>
        <News />
      </ApolloProviderLayout>
      <LeedFormWithMap />
      <Partners partners={CONSTANTS.partners} />
      {/*<AboutUs/>*/}
      <Footer />
    </>
  );
};
