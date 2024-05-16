"use client";

import { ApolloProvider } from "@apollo/client";
import apolloClient from "@/app/apollo-client";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
