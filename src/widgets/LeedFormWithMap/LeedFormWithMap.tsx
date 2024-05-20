"use client";
import { ContainerLayout } from "@/entities";
import { LeedForm } from "@/features";
import { ReactElement } from "react";

export const LeedFormWithMap = (): ReactElement => {
  return (
    <ContainerLayout>
      <div>
        <div
          className={
            "rounded-2xl bg-gradient-to-b from-[#A5B9ECC4] to-[#ccdafdc4] grid drop-shadow-lg overflow-hidden grid-cols-1 lg:grid-cols-2"
          }
        >
          <div className={"py-12 px-8 md:px-12"}>
            <div className={"mb-12"}>
              <span className={"font-bold text-2xl lg:text-3xl text-zinc-900"}>
                Оставить заявку
              </span>
            </div>
            <LeedForm />
          </div>
          <div>
            <div
              className={"w-full h-full min-h-[400px]"}
              style={{ position: "relative", overflow: "hidden" }}
            >
              <a
                href="https://yandex.ru/maps/35/krasnodar/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "0",
                }}
              >
                Краснодар
              </a>
              <a
                href="https://yandex.ru/maps/35/krasnodar/house/stavropolskaya_ulitsa_149/Z0AYdgRhSEMGQFpvfXxweHpgYA==/?ll=39.032787%2C45.019446&utm_medium=mapframe&utm_source=maps&z=16.6"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "14px",
                }}
              >
                Ставропольская улица, 149 на карте Краснодара — Яндекс Карты
              </a>
              <iframe
                className={"w-full h-full"}
                src="https://yandex.ru/map-widget/v1/?ll=39.032787%2C45.019446&mode=whatshere&whatshere%5Bpoint%5D=39.031161%2C45.019634&whatshere%5Bzoom%5D=17&z=16.6"
                frameBorder="1"
                style={{ position: "relative" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};
