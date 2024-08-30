"use client";
import { Container } from "inversify";
import "reflect-metadata";
import { useRef } from "react";
import { Provider } from "react-redux";
import { Provider as InversifyProvider } from "inversify-react";
import store from "@/store/index";
const container = new Container();

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <InversifyProvider container={container}>{children}</InversifyProvider>
    </Provider>
  );
}
