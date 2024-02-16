import React from "react";
import Meta from "./../components/Meta";
import DashboardSection from "./../components/DashboardSection";
import { requireAuth } from "./../util/auth";
import Layout from "./../components/Layout"; // Import Layout
import Navigation from "./../components/Navigation"; // Import Navigation

function DashboardPage(props) {
  return (
    <>
      <Meta title="Dashboard" />
      <Layout.Root>
        <Layout.SideNav>
          <Navigation />
        </Layout.SideNav>
        <Layout.Main>
          <DashboardSection
            title="Dashboard"
            subtitle=""
            strapline=""
            size="md"
            bgColor="bg-white"
          />
        </Layout.Main>
      </Layout.Root>
    </>
  );
}

export default requireAuth(DashboardPage);