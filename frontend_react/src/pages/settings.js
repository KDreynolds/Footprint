import React from "react";
import Meta from "./../components/Meta";
import SettingsSection from "./../components/SettingsSection";
import { useRouter } from "./../util/router";
import { requireAuth } from "./../util/auth";

function SettingsPage(props) {
  const router = useRouter();

  return (
    <>
      <Meta title="Settings" />
      <SettingsSection
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        section={router.query.section}
        key={router.query.section}
      />
    </>
  );
}

export default requireAuth(SettingsPage);
