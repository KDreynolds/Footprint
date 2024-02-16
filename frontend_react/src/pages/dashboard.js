import React from "react";
import Meta from "./../components/Meta";
import DashboardSection from "./../components/DashboardSection";
import { requireAuth } from "./../util/auth";
import Layout from "./../components/Layout"; 
import Navigation from "./../components/Navigation"; 
import SupabaseDropzone from './../components/SupabaseDropzone';

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
          <SupabaseDropzone />
        </Layout.Main>
      </Layout.Root>
    </>
  );
}

export default requireAuth(DashboardPage);