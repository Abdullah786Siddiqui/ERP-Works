import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import {  Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionCards } from "@/components/section-cards";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Analytics = () => {
  return (
    <>
      <div className="flex items-center justify-between py-2">
  {/* Left Heading */}
  <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
    Dashboard
  </h1>

  {/* Right Section */}
  <div className="flex items-center gap-3">
    {/* Date Picker Box */}
    <div className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer hover:bg-accent">
      <Calendar className="w-5 h-5" />
      <span className="font-semibold">Oct 17, 2024 - Nov 6, 2024</span>
    </div>

    {/* Button */}
    <Button className="px-5 py-2.5 font-medium">Download</Button>
  </div>
</div>

        
          <Tabs defaultValue="account" className="w-[350px]">
            <TabsList className="w-full  ">
              <TabsTrigger value="account" className="cursor-pointer">
                Overview
              </TabsTrigger>
              <TabsTrigger value="Analytics" className="cursor-pointer">
                Analytics
              </TabsTrigger>
              <TabsTrigger value="Reports" className="cursor-pointer">
                Reports
              </TabsTrigger>
              <TabsTrigger value="Notification" className="cursor-pointer">
                Notification
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <SectionCards />

          <ChartAreaInteractive />
          </>
  )
}

export default Analytics