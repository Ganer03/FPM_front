import { ContainerLayout } from "@/entities";
import { ReactElement } from "react";

interface IStatsDTO {
  text: string;
  value: number | string;
}

const Stat = ({ text, value }: IStatsDTO): ReactElement => {
  return (
    <div className="flex flex-col gap-3 justify-between self-stretch items-center py-6 px-12 lg:px-24 lg:py-12">
      <span className="font-bold text-zinc-100 text-3xl lg:text-4xl drop-shadow-md">
        {value}
      </span>
      <span className="text-md lg:text-lg whitespace-nowrap text-zinc-100 drop-shadow-md">
        {text}
      </span>
    </div>
  );
};

export const Stats = ({ stats }: { stats: IStatsDTO[] }): ReactElement => {
  return (
    <>
      <ContainerLayout>
        <div className="drop-shadow-md">
          <div
            key={"1"}
            className="grid grid-cols-1 lg:grid-cols-4 gap-x-12 bg-gradient-to-b from-[#3B6CE8] to-[#6F94F3] rounded-3xl"
          >
            {stats.slice(0, 4).map((item, index) => (
              <Stat text={item.text} value={item.value} key={index} />
            ))}
          </div>
        </div>
      </ContainerLayout>
    </>
  );
};
