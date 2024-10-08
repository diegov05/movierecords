/* eslint-disable prettier/prettier */
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";
import Image from "next/image";
import { Chip } from "@nextui-org/chip";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import { ThemeSwitch } from "@/components/theme-switch";
import { BookMarkIcon, SearchIcon } from "@/components/icons";

export const Navbar = () => {


  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden sm:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarMenuToggle className="flex sm:hidden gap-2" />
      <NavbarBrand className="gap-3 max-w-fit">
        <NextLink className="flex justify-start items-center gap-1" href="/">
          <Image
            alt="movierecords logo"
            height={24}
            src={"/movierecords.png"}
            width={24}
          />
          <p className="font-bold text-inherit">movierecords</p>
        </NextLink>
      </NavbarBrand>

      <NavbarContent
        className="flex basis-1/5 sm:basis-full items-center"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex flex-grow max-w-lg">
          {searchInput}
        </NavbarItem>

        <NavbarMenu>
          <NavbarMenuItem>{searchInput}</NavbarMenuItem>
        </NavbarMenu>

        <NavbarItem className="flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <SignedIn>
          <NavbarItem className="hidden md:flex">
            <Button
              as={Link}
              className="text-sm font-normal"
              href={"/watchlist"}
              startContent={<BookMarkIcon className="size-5" />}
              variant="bordered"
            >
              Watchlist
              <Chip color="primary" size="sm">
                23
              </Chip>
            </Button>
          </NavbarItem>
          <NavbarItem className="flex">
            <UserButton />
          </NavbarItem>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <Button color="primary" size="sm" variant="solid">
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
      </NavbarContent>
    </NextUINavbar>
  );
};
