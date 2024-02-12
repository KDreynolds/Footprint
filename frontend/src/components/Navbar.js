import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDownIcon,
  CodeBracketIcon,
  SwatchIcon,
  PuzzlePieceIcon,
  BeakerIcon,
  DocumentIcon,
  LifebuoyIcon,
  ChatBubbleLeftEllipsisIcon,
  Squares2X2Icon,
  CogIcon,
  LockClosedIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";
import Section from "components/Section";
import FeatureIcon from "components/FeatureIcon";
import Button from "components/Button";
import { useAuth } from "util/auth";

function Navbar(props) {
  const auth = useAuth();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const classes = {
    navLink:
      "font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:text-blue-500 py-6",
    navLinkIcon:
      "opacity-50 transform transition duration-200 ease-out group-hover:rotate-180 inline-block w-4 h-4",
    dropdown: {
      base: "absolute top-19 pt-1 z-10 invisible group-hover:visible transform transition duration-800 ease-in opacity-0 group-hover:opacity-100",
      left: "right-0",
      center: "left-1/2 -translate-x-1/2",
      right: "left-0",
      normal: "w-48",
      large: "w-96",
      inner:
        "bg-white shadow-xl ring-1 ring-black ring-opacity-5 rounded-lg overflow-hidden",
      title:
        "text-xs uppercase font-semibold tracking-wider text-blue-800 mb-5",
      link: "text-gray-600 hover:text-blue-600 font-medium text-sm flex items-center space-x-2",
      icon: "opacity-25 inline-block w-5 h-5",
      feature:
        "p-3 rounded-xl flex items-center space-x-4 text-gray-600 font-medium text-sm",
      featureName: "font-semibold mb-1",
      featureDescription: "opacity-75",
    },
    accountDropdown: {
      base: "absolute right-0 origin-top-right mt-2 w-48 z-10",
      inner:
        "bg-white ring-1 ring-black ring-opacity-5 rounded divide-y divide-gray-100 shadow-xl rounded",
      link: "flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700",
      linkActive: "text-gray-700 bg-gray-100",
      linkInactive:
        "text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700",
      icon: "opacity-50 inline-block w-5 h-5",
    },
  };

  return (
    <Section bgColor={props.bgColor}>
      <div className="container py-4">
        <div className="flex justify-between">
        <Link href="/">
          <a className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-blue-600 hover:text-blue-400">
            <img
              src="/footprint-favicon-black.png" // Path to your logo in the public directory
              alt="Footprint Logo" // Alt text for the logo
              className="inline-block w-6 h-6" // Adjust width and height as needed
            />
            <span>Footprint</span>
          </a>
        </Link>
          <div className="flex items-center ml-auto space-x-1 lg:space-x-4">
            <ul className="hidden lg:flex items-center ml-auto">
              <li className="relative group">
                <span className={`${classes.navLink}`} href="">
                  <span>Solutions</span>
                  <ChevronDownIcon className={classes.navLinkIcon} />
                </span>
                <div
                  className={`${classes.dropdown.base} ${classes.dropdown.large} ${classes.dropdown.center}`}
                >
                  <div className={`${classes.dropdown.inner}`}>
                    <div className="p-3">
                      <div className="px-3 pt-3">
                        <h4 className={`${classes.dropdown.title}`}>
                          Featured Products
                        </h4>
                      </div>
                      <nav className="flex flex-col space-y-1">
                        <Link href="/">
                          <a
                            className={`hover:text-blue-600 hover:bg-blue-50 ${classes.dropdown.feature}`}
                          >
                            <div>
                              <FeatureIcon color="blue">
                                <CodeBracketIcon />
                              </FeatureIcon>
                            </div>
                            <div>
                              <h5 className={`${classes.dropdown.featureName}`}>
                                HTML Editor
                              </h5>
                              <p
                                className={`${classes.dropdown.featureDescription}`}
                              >
                                Write and manipulate your markup directly in
                                your browser
                              </p>
                            </div>
                          </a>
                        </Link>
                        <Link href="/">
                          <a
                            className={`hover:text-emerald-600 hover:bg-emerald-50 ${classes.dropdown.feature}`}
                          >
                            <div>
                              <FeatureIcon color="emerald">
                                <SwatchIcon />
                              </FeatureIcon>
                            </div>
                            <div>
                              <h5 className={`${classes.dropdown.featureName}`}>
                                CSS Editor
                              </h5>
                              <p
                                className={`${classes.dropdown.featureDescription}`}
                              >
                                Style your markup code with smart tools
                                supporting Sass
                              </p>
                            </div>
                          </a>
                        </Link>
                        <Link href="/">
                          <a
                            className={`hover:text-orange-600 hover:bg-orange-50 ${classes.dropdown.feature}`}
                          >
                            <div>
                              <FeatureIcon color="orange">
                                <PuzzlePieceIcon />
                              </FeatureIcon>
                            </div>
                            <div>
                              <h5 className={`${classes.dropdown.featureName}`}>
                                Web Page Builder
                              </h5>
                              <p
                                className={`${classes.dropdown.featureDescription}`}
                              >
                                Explore all available components and build your
                                website
                              </p>
                            </div>
                          </a>
                        </Link>
                      </nav>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <span className={`${classes.navLink}`} href="">
                  <span>Resources</span>
                  <ChevronDownIcon className={classes.navLinkIcon} />
                </span>
                <div
                  className={`${classes.dropdown.base} ${classes.dropdown.large} ${classes.dropdown.center}`}
                >
                  <div className={`${classes.dropdown.inner}`}>
                    <div className="grid grid-cols-2">
                      <div className="p-6 space-y-6">
                        <h4 className={`${classes.dropdown.title}`}>Learn</h4>
                        <nav className="flex flex-col space-y-3">
                          <Link href="/">
                            <a className={`${classes.dropdown.link}`}>
                              Resource Center
                            </a>
                          </Link>
                          <Link href="/">
                            <a className={`${classes.dropdown.link}`}>
                              Developer
                            </a>
                          </Link>
                          <Link href="/">
                            <a className={`${classes.dropdown.link}`}>
                              User Guides
                            </a>
                          </Link>
                        </nav>
                      </div>
                      <div className="p-6 space-y-6">
                        <h4 className={`${classes.dropdown.title}`}>Links</h4>
                        <nav className="flex flex-col space-y-3">
                          <Link href="/">
                            <a className={`${classes.dropdown.link}`}>
                              Starters
                            </a>
                          </Link>
                          <Link href="/">
                            <a className={`${classes.dropdown.link}`}>
                              Video Library
                            </a>
                          </Link>
                          <Link href="/">
                            <a className={`${classes.dropdown.link}`}>
                              Tutorials
                            </a>
                          </Link>
                        </nav>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 bg-gray-50">
                      <nav className="p-6 flex flex-col space-y-4">
                        <Link href="/">
                          <a className={`${classes.dropdown.link}`}>
                            <BeakerIcon className={classes.dropdown.icon} />
                            <span>API Reference</span>
                          </a>
                        </Link>
                        <Link href="/">
                          <a className={`${classes.dropdown.link}`}>
                            <DocumentIcon className={classes.dropdown.icon} />
                            <span>Documentation</span>
                          </a>
                        </Link>
                      </nav>
                      <nav className="p-6 flex flex-col space-y-4">
                        <Link href="/">
                          <a className={`${classes.dropdown.link}`}>
                            <LifebuoyIcon className={classes.dropdown.icon} />
                            <span>Support</span>
                          </a>
                        </Link>
                        <Link href="/">
                          <a className={`${classes.dropdown.link}`}>
                            <ChatBubbleLeftEllipsisIcon
                              className={classes.dropdown.icon}
                            />
                            <span>Support</span>
                          </a>
                        </Link>
                      </nav>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <Link href="/about">
                  <a className={`${classes.navLink}`}>
                    <span>About</span>
                  </a>
                </Link>
              </li>

              {(!auth.user || !auth.user.stripeSubscriptionId) && (
                <li className="relative group">
                  <Link href="/pricing">
                    <a className={`${classes.navLink}`}>
                      <span>Pricing</span>
                    </a>
                  </Link>
                </li>
              )}

              {!auth.user && (
                <li className="relative group">
                  <Link href="/auth/signin">
                    <a className={`${classes.navLink}`}>
                      <span>Sign in</span>
                    </a>
                  </Link>
                </li>
              )}
            </ul>

            {auth.user && (
              <Menu as="div" className="relative inline-block">
                <Button
                  component={Menu.Button}
                  variant="simple"
                  size="sm"
                  endIcon={
                    <ChevronDownIcon className="opacity-50 inline-block w-5 h-5" />
                  }
                >
                  Account
                </Button>
                <Transition
                  as={React.Fragment}
                  enter="transition ease-out duration-150"
                  enterFrom="transform opacity-0 scale-75"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-75"
                >
                  <Menu.Items className={classes.accountDropdown.base}>
                    <div className={`${classes.accountDropdown.inner}`}>
                      <div className="p-2 space-y-1">
                        <Menu.Item>
                          <Link href="/dashboard">
                            <a className={`${classes.accountDropdown.link}`}>
                              <Squares2X2Icon
                                className={classes.accountDropdown.icon}
                              />
                              <span>Dashboard</span>
                            </a>
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link href="/settings/general">
                            <a className={`${classes.accountDropdown.link}`}>
                              <CogIcon
                                className={classes.accountDropdown.icon}
                              />
                              <span>Settings</span>
                            </a>
                          </Link>
                        </Menu.Item>
                      </div>
                      <div className="p-2 space-y-1">
                        <Link href="#">
                          <a
                            className={`${classes.accountDropdown.link}`}
                            onClick={(e) => {
                              e.preventDefault();
                              auth.signout();
                            }}
                          >
                            <LockClosedIcon
                              className={classes.accountDropdown.icon}
                            />
                            <span>Sign out</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}

            <div className="flex lg:hidden items-center justify-center">
              <Button
                variant="simple"
                size="sm"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                endIcon={<Bars3Icon className="inline-block w-5 h-5" />}
              />
            </div>
          </div>
        </div>
        <div className={"lg:hidden" + (!mobileNavOpen ? " hidden" : "")}>
          <div className="grid grid-cols-1 sm:grid-cols-3 border rounded-xl my-5">
            <div className="col-span-2 p-3 space-y-6">
              <div className="px-3 pt-3">
                <h4 className={`${classes.dropdown.title}`}>
                  Featured Products
                </h4>
              </div>
              <nav className="flex flex-col space-y-1">
                <Link href="/">
                  <a
                    className={`hover:text-blue-600 hover:bg-blue-50 ${classes.dropdown.feature}`}
                  >
                    <div>
                      <FeatureIcon color="blue">
                        <CodeBracketIcon />
                      </FeatureIcon>
                    </div>
                    <div>
                      <h5 className={`${classes.dropdown.featureName}`}>
                        HTML Editor
                      </h5>
                      <p className={`${classes.dropdown.featureDescription}`}>
                        Write and manipulate your markup directly in your
                        browser
                      </p>
                    </div>
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className={`hover:text-emerald-600 hover:bg-emerald-50 ${classes.dropdown.feature}`}
                  >
                    <div>
                      <FeatureIcon color="emerald">
                        <SwatchIcon />
                      </FeatureIcon>
                    </div>
                    <div>
                      <h5 className={`${classes.dropdown.featureName}`}>
                        CSS Editor
                      </h5>
                      <p className={`${classes.dropdown.featureDescription}`}>
                        Style your markup code with smart tools supporting Sass
                      </p>
                    </div>
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className={`hover:text-orange-600 hover:bg-orange-50 ${classes.dropdown.feature}`}
                  >
                    <div>
                      <FeatureIcon color="orange">
                        <PuzzlePieceIcon />
                      </FeatureIcon>
                    </div>
                    <div>
                      <h5 className={`${classes.dropdown.featureName}`}>
                        Web Page Builder
                      </h5>
                      <p className={`${classes.dropdown.featureDescription}`}>
                        Explore all available components and build your website
                      </p>
                    </div>
                  </a>
                </Link>
              </nav>
            </div>
            <div className="p-6 space-y-6">
              <h4 className={`${classes.dropdown.title}`}>Learn</h4>
              <nav className="flex flex-col space-y-3">
                <Link href="/">
                  <a className={`${classes.dropdown.link}`}>Resource Center</a>
                </Link>
                <Link href="/">
                  <a className={`${classes.dropdown.link}`}>Developer</a>
                </Link>
                <Link href="/">
                  <a className={`${classes.dropdown.link}`}>User Guides</a>
                </Link>
              </nav>
              <h4 className={`${classes.dropdown.title}`}>More</h4>
              <nav className="flex flex-col space-y-3">
                <Link href="/about">
                  <a className={`${classes.dropdown.link}`}>About</a>
                </Link>
                <Link href="/pricing">
                  <a className={`${classes.dropdown.link}`}>Pricing</a>
                </Link>

                {!auth.user && (
                  <Link href="/auth/signin">
                    <a className={`${classes.dropdown.link}`}>Sign in</a>
                  </Link>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Navbar;
