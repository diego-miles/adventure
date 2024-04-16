"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icons.jsx";
import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} height={"auto"} width={"auto"}/>,

  };

  return (
    <Navbar className="" height={50}>
      <NavbarContent className=" sm:flex gap-5" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 text-sm  bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Proyects
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[200px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Wiki-science"
              // description="Educational services."
            >
            <Link color="foreground" size="sm" href="wiki-science">
              Wiki Science
          </Link>
            </DropdownItem>
            <DropdownItem
              key="cultiva-saber"
              // description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
            >
                          <Link color="foreground" href="wiki-science" size="sm">
              Cultiva Saber
          </Link>

            </DropdownItem>
            <DropdownItem
              key="production_ready"
              // description="SaaS to empower Pymes in their inventory and selling process creating a cohesive solution across platforms."
            >
                          <Link color="foreground" href="wiki-science" size="sm">
              Moto tienda
          </Link>

            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              // description="Sustainable products and lifesty habits for the future."
            >
                          <Link color="foreground" href="localhost:3000/wiki-science" size="sm">
              Barro Origen
          </Link>

            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              // description="Congress event to capacite yuoug tech talend."
            >
                                        <Link color="foreground" href="wiki-science" size="sm">
              BIT
          </Link>
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              // description="Marketing and advertisment."
            >
                                        <Link color="foreground" href="wiki-science" size="sm">
              One Campaing
          </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page" size="sm">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" size="sm">
            Students
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
