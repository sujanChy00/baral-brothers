"use client";

import { cn } from "@/lib/utils";

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export const PathBreadCrumb = () => {
  const router = useRouter();
  const pathnames = router.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb>
      <BreadcrumbList className="sm:gap-1">
        {pathnames.length == 0 ? (
          <BreadcrumbItem>Home</BreadcrumbItem>
        ) : (
          pathnames.map((path, index) => {
            const isLast = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            return (
              <React.Fragment key={path + index}>
                <BreadcrumbItem>
                  {!isLast ? (
                    <BreadcrumbLink asChild>
                      <Link href={to} className="text-muted-foreground">
                        {path}
                      </Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage
                      className={cn(
                        "text-muted-foreground",
                        pathnames.length > 1 ? "font-semibold" : ""
                      )}
                    >
                      {path}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator className="[&>svg]:size-4" />}
              </React.Fragment>
            );
          })
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
