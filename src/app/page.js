"use client";
import { PageContainer } from "@/Components/shared/Shared";

import { Login } from "./login/page";
import { Register } from "./register/page";
import { Manager } from "./manager/page";
import { Kehila } from "./kehila/page";
import { CreateKehila } from "./create-kehila/page";
import Welcome from "@/Components/welcome/page";

export default function Home() {
  return (
    <PageContainer>
      <Welcome />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Manager /> */}
      {/* <Kehila /> */}
      {/* <CreateKehila /> */}
    </PageContainer>
  );
}
