import React from "react";
import "./../styles/global.css";
import { CssVarsProvider } from '@mui/joy/styles'; // Import CssVarsProvider for MUI Joy styles
import CssBaseline from '@mui/joy/CssBaseline';
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import ContactPage from "./contact";
import PricingPage from "./pricing";
import DashboardPage from "./dashboard";
import AuthPage from "./auth";
import SettingsPage from "./settings";
import LegalPage from "./legal";
import { Switch, Route, Router, useLocation } from "./../util/router";
import PurchasePage from "./purchase";
import NotFoundPage from "./404";
import Footer from "./../components/Footer";
import "./../util/analytics";
import Chat from "./../components/Chat";
import { AuthProvider } from "./../util/auth";
import { QueryClientProvider } from "./../util/db";

function ConditionalFooter() {
  let location = useLocation();
  
  // Do not render the Footer on the dashboard page
  if (location.pathname === '/dashboard') {
    return null;
  }

  return (
    <Footer
      size="md"
      bgColor="bg-white"
      bgImage=""
      bgImageOpacity={1}
      textColor=""
      sticky={true}
    />
  );
}

function App(props) {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <CssVarsProvider> {/* Wrap the entire application with CssVarsProvider */}
        <CssBaseline />
        <Chat />
        <Router>
          <>
            <Navbar bgColor="bg-white" />

            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/faq" component={FaqPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/pricing" component={PricingPage} />
              <Route exact path="/dashboard" component={DashboardPage} />
              <Route exact path="/auth/:type" component={AuthPage} />
              <Route exact path="/settings/:section" component={SettingsPage} />
              <Route exact path="/legal/:section" component={LegalPage} />
              <Route exact path="/purchase/:plan" component={PurchasePage} />
              <Route component={NotFoundPage} />
            </Switch>

            <ConditionalFooter />
          </>
          </Router>
        </CssVarsProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;