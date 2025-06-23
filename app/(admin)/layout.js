import { getAdmin } from "@/actions/admin";
import Header from "@/components/Header";
import { notFound } from "next/navigation";
import React from "react";
import SideBar from "./admin/_components/SideBar";

const AdminLayout = async ({ children }) => {
  const admin = await getAdmin();

  if (!admin.authorized) {
    return notFound();
  }

  return (
    <div className="h-full">
      <Header isAdminPage={true} />
      <div className="flex h-full w-56 flex-col top-20 fixed inset-y-0 z-57">
        <SideBar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default AdminLayout;
