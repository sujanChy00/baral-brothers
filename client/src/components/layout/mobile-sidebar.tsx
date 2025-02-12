import { HeaderResponse } from "@/types/global";
import { PanelRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { NavLinks } from "./nav-links";

export const MobileSidebar = ({
  links,
}: {
  links: HeaderResponse["data"]["links"];
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size={"icon"}>
          <PanelRight />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Baral & Brothers</SheetTitle>
        </SheetHeader>
        <NavLinks links={links} className="block space-y-6 pt-32 [&>li]:py-3" />
      </SheetContent>
    </Sheet>
  );
};
