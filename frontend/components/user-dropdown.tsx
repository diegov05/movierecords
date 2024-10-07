/* eslint-disable prettier/prettier */

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button, ButtonGroup } from "@nextui-org/button";
import Link from "next/link";

import { ChevronDownIcon, UserIcon } from "./icons";



export default function UserDropdown() {

  const variant:
    "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost" | undefined
    = "bordered"

  const descriptionsMap = {
    watchlist:
      "Your Watchlist",
    settings:
      "Customize settings",
    logOut:
      "Log out of your account",
  };

  const labelsMap = {
    watchlist: "Your Watchlist",
    settings: "Customize settings",
    logOut: "Log Out",
  };

  return (
    <>
      <ButtonGroup isIconOnly className="flex sm:hidden" variant={variant}>
        <Button as={Link} href="/user" startContent={<UserIcon className="size-5" />} />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button isIconOnly>
              <ChevronDownIcon className="size-5" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            aria-label="User options"
            className="max-w-[300px]"
            selectionMode="single"
            onSelectionChange={() => { }}
          >
            <DropdownItem key="watchlist" as={Link} description={descriptionsMap["watchlist"]} href="/user#watchlist">
              {labelsMap["watchlist"]}
            </DropdownItem>
            <DropdownItem key="settings" as={Link} description={descriptionsMap["settings"]} href="/user#settings">
              {labelsMap["settings"]}
            </DropdownItem>
            <DropdownItem key="logOut" className="text-danger" description={descriptionsMap["logOut"]}>
              {labelsMap["logOut"]}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ButtonGroup>
      <ButtonGroup className="hidden sm:flex" variant={variant}>
        <Button as={Link} href="/user" startContent={<UserIcon className="size-5" />}>
          <span>User</span>
        </Button>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button isIconOnly>
              <ChevronDownIcon className="size-5" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            aria-label="User options"
            className="max-w-[300px]"
            selectionMode="single"
            onSelectionChange={() => { }}
          >
            <DropdownItem key="watchlist" as={Link} description={descriptionsMap["watchlist"]} href="/user#watchlist">
              {labelsMap["watchlist"]}
            </DropdownItem>
            <DropdownItem key="settings" as={Link} description={descriptionsMap["settings"]} href="/user#settings">
              {labelsMap["settings"]}
            </DropdownItem>
            <DropdownItem key="logOut" className="text-danger" description={descriptionsMap["logOut"]}>
              {labelsMap["logOut"]}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ButtonGroup>
    </>
  );
}
