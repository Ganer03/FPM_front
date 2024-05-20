"use client";
import { apolloClient } from "@/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { ReactElement, ReactNode } from "react";

export const ApolloProviderLayout = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
