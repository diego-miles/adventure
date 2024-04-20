"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Link} from "@nextui-org/react";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icons.jsx";
import {AcmeLogo} from "./AcmeLogo.jsx";




export default function App() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} height={"auto"} width={"auto"}/>,

  };

  return (
    <Navbar shouldHideOnScroll className="onScrollPositionChange" height="3rem">
      <NavbarContent className=" sm:flex gap-4" justify="center">
                <NavbarItem>
          <Link color="foreground" href="/" size="sm">
            Home
          </Link>
        </NavbarItem>
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
            className="w-[210px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Wiki-science"
              description="Educational services"
            >
            <Link color="foreground" size="sm" href="/wiki-science">
              Wiki Science
          </Link>
            </DropdownItem>

            <DropdownItem
              key="cultiva-saber"
              description="Promoting susteinability, independecy and community"
            >
          <Link color="foreground" href="cultiva-saber" size="sm">
          
          
              Cultiva Saber
          </Link>
            </DropdownItem>

            <DropdownItem
              key="production_ready"
              description="Empowering Pymes. Inventoring and selling, cohesive solution across platforms"
            >
            <Link color="foreground" href="#" size="sm">
              Moto tienda
          </Link>
            </DropdownItem>

            <DropdownItem
              key="99_uptime"
              description="Market place for sustainable daily life products"
            >
                          <Link color="foreground" href="#" size="sm">
              Barro Origen
          </Link>

            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              // description="Congress event to capacite yuoug tech talend."
            >
                                        <Link color="foreground" href="#" size="sm">
              BIT
          </Link>
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              // description="Marketing and advertisment."
            >
                                        <Link color="foreground" href="#" size="sm">
              One Campaing
          </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="services" aria-current="page" size="sm">
            Services
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" href="#" size="sm">
            Students
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link color="foreground" href="contact" size="sm">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
