import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle , CardContent , CardHeader} from "@/components/ui/card";

import { Link } from "react-router-dom";
import DataTableDemo from "./table/data-table";
import { SquarePlus } from "lucide-react";
const Productlist = () => {
  return (
<>
{/* Add Product bar  */}
    <Card className="p-4 flex flex-row max-sm:flex-col  items-center justify-between">
      {/* Left section: Title and description */}
      <div>
        <div className="p-0 ">
          <CardTitle className="max-sm:text-center">Products</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Last Update 28 April 2024 at 8:43 PM
          </CardDescription>
        </div>
      </div>

      {/* Right section: Actions */}
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link to={"addProduct"}>
            <SquarePlus className="mr-1 h-4 w-4" /> Add Products
          </Link>
        </Button>
      </div>
    </Card>

{/* Products Analytics  */}

 <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-4 ">
      {/* Total Sales */}
   <Card className="rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between  ">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Total Sales
        </CardTitle>
        <Badge
   
          className="bg-green-100 text-green-600 hover:bg-green-200 text-xs px-2  -mr-3 py-0.5 rounded-md"
        >
          +20.1%
        </Badge>
      </CardHeader>

      <CardContent>
        <div className="text-3xl  font-bold">$30,230</div>
        <p className="text-xs text-muted-foreground mt-1"> Growth in overall store revenue</p>
      </CardContent>
    </Card>

      {/* Number of Sales */}
    
         <Card className="rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between  ">
        <CardTitle className="text-sm font-medium text-muted-foreground">
           Number of Sales
        </CardTitle>
        <Badge
   
          className="bg-green-100 text-green-600 hover:bg-green-200 text-xs px-2  -mr-3 py-0.5 rounded-md"
        >
        +5.02
        </Badge>
      </CardHeader>

      <CardContent>
        <div className="text-3xl  font-bold">982</div>
        <p className="text-xs text-muted-foreground mt-1">    Orders placed across all products</p>
      </CardContent>
    </Card>

      {/* Affiliate */}
    
         <Card className="rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between  ">
        <CardTitle className="text-sm font-medium text-muted-foreground">
       Affiliate
        </CardTitle>
        <Badge
   
          className="bg-green-100 text-green-600 hover:bg-green-200 text-xs px-2  -mr-3 py-0.5 rounded-md"
        >
         +3.1%
        </Badge>
      </CardHeader>

      <CardContent>
        <div className="text-3xl  font-bold">$4,530</div>
        <p className="text-xs text-muted-foreground mt-1"> Value of discounts applied</p>
      </CardContent>
    </Card>

      {/* Discounts */}
   
          <Card className="rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between  ">
        <CardTitle className="text-sm font-medium text-muted-foreground">
       Discounts
        </CardTitle>
        <Badge
   
          className="bg-green-100 text-green-600 hover:bg-green-200 text-xs px-2  -mr-3 py-0.5 rounded-md"
        >
         -3.58%
        </Badge>
      </CardHeader>

      <CardContent>
        <div className="text-3xl  font-bold">$2,230</div>
        <p className="text-xs text-muted-foreground mt-1">Compared to last month</p>
      </CardContent>
    </Card>
    </div>

   


{/* Products Table  */}
  
      <DataTableDemo />
 

    
    </>
  );
};

export default Productlist;
