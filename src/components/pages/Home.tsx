import { FC, memo } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";

export const Home: FC = memo(() => {
  return (
    <>
      <Header />

      <Footer />
    </>
  )
})