import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader, 
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Percent, Plus, Trash, Trash2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const AddProduct = () => {
  return (
    <>
      {/* Product Publish bar */}
      <Card className="p-4 flex flex-row max-sm:flex-col  items-center justify-between">
        {/* Left section: Title and description */}
        <div>
          <div className="p-0 ">
            <CardTitle className="max-sm:text-center">
              Add New Product
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Last Update 28 April 2024 at 8:43 PM
            </CardDescription>
          </div>
        </div>

        {/* Right section: Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="flex items-center gap-1 cursor-pointer "
          >
            <Trash size={16} className="" />
          </Button>
          <Button variant="secondary" className="cursor-pointer">
            Save Draft
          </Button>
          <Button variant="default" className="cursor-pointer">
            Publish
          </Button>
        </div>
      </Card>

      {/* Product Layout Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6  ">
        {/* Left Sidebar - Images, Visibility, Related Items */}
        <div className="col-span-1 space-y-6 ">
          {/* Images Section */}
          <Card>
            <CardContent className="grid grid-cols-2 gap-4 p-4 bg-white rounded-lg">
              {/* Left: Big Image */}
              <div className="w-full overflow-hidden rounded-xl border border-gray-300 hover:border-blue-500 transition-colors duration-300">
                <img
                  src="https://nicolegrahamdesigns.com/wp-content/uploads/2022/09/BG-7.jpg"
                  alt="Main"
                  className="w-full h-full  object-cover rounded-xl"
                />
              </div>

              {/* Right: 2x2 Grid of Small Images */}
              <div className="grid grid-cols-2 grid-rows-2 gap-3">
                <div className="aspect-square overflow-hidden rounded-xl border border-gray-300 hover:border-blue-500 transition-colors duration-300">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbkwbU36ZqP0s6_Ltc3z7t0n1sGvavBn6mA&s"
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl border border-gray-300 hover:border-blue-500 transition-colors duration-300">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbkwbU36ZqP0s6_Ltc3z7t0n1sGvavBn6mA&s"
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl border border-gray-300 hover:border-blue-500  transition-colors duration-300">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbkwbU36ZqP0s6_Ltc3z7t0n1sGvavBn6mA&s"
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="aspect-square rounded-xl border-2 border-dashed border-blue-600 flex items-center justify-center text-2xl font-semibold text-blue-600 cursor-pointer hover:bg-blue-50 transition-colors duration-300">
                  +
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Visibility Card */}
              <Card className="p-4">
                <div className="p-0 m-0">
                  <CardTitle className="text-base m-0">Visibility</CardTitle>
                </div>
                <CardContent className="flex items-center justify-between p-0 m-0">
                  <p className="text-sm text-muted-foreground max-w-[70%] m-0">
                    You can change the visibility of this product for customers
                  </p>
                  <Switch defaultChecked />
                </CardContent>
              </Card>

              {/* Preview Card */}
              <Card className="p-4">
                <div className="p-0 ">
                  <CardTitle className="text-base m-0">Preview</CardTitle>
                </div>
                <CardContent className="flex flex-col gap-2 p-0 m-0">
                  <p className="text-sm text-muted-foreground m-0">
                    Want to see how your product will look like?
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Preview
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <Card className="p-3">
              <div className="flex items-center justify-between p-0 ">
                <CardTitle className="text-base">Related Items</CardTitle>
                <Button size="icon" variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="space-y-2 p-0">
                {/* Related Product Item */}
                {[
                  { id: 1, name: "Find Comfort Body ...", price: 28 },
                  { id: 2, name: "Find Comfort Gentle...", price: 18 },
                  { id: 3, name: "Find Comfort Hydrat...", price: 20 },
                  { id: 3, name: "Find Comfort Hydrat...", price: 29 },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border rounded-lg p-2"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbkwbU36ZqP0s6_Ltc3z7t0n1sGvavBn6mA&s"
                        className="h-10 w-10 rounded bg-muted"
                      />
                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <Button size="icon" variant="ghost">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content - Product Details Form */}
        <div className="col-span-1  ">
          <Card className="p-4 py-6 h-screen">
            <CardHeader className="flex flex-row gap-2 items-center justify-between p-0">
              <div>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>
                  Key info to describe and display your product.
                </CardDescription>
              </div>
              <div>
                <Button variant="outline" size="sm" className="rounded-lg">
                  Status: Draft
                </Button>
              </div>
            </CardHeader>

            <Tabs defaultValue="general" className="mb-6">
              <TabsList className="w-full ">
                <TabsTrigger value="general" className="cursor-pointer ">
                  General
                </TabsTrigger>
                <TabsTrigger value="advanced" className="cursor-pointer ">
                  Advanced
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general">
                <form className="space-y-6">
                  {/* Product Name */}
                  <div>
                    <Label htmlFor="productName">
                      Product Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="productName"
                      placeholder="e.g. Natural Glow Face Moisturizer"
                      className="mt-2"
                    />
                  </div>

                  {/* Status and Brand */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="status">
                        Status <span className="text-red-500">*</span>
                      </Label>
                      <Select defaultValue="">
                        <SelectTrigger className="mt-2 w-full">
                          <SelectValue placeholder="Choose product status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                          <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="brand">
                        Brand <span className="text-red-500">*</span>
                      </Label>
                      <Select defaultValue="">
                        <SelectTrigger className="mt-2 w-full">
                          <SelectValue placeholder="Select the brand name" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="brandA">Brand A</SelectItem>
                          <SelectItem value="brandB">Brand B</SelectItem>
                          <SelectItem value="brandC">Brand C</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Category and Subcategory */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="category">
                        Category <span className="text-red-500">*</span>
                      </Label>
                      <Select defaultValue="">
                        <SelectTrigger className="mt-2 w-full">
                          <SelectValue placeholder="Select main category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="skincare">Skincare</SelectItem>
                          <SelectItem value="makeup">Makeup</SelectItem>
                          <SelectItem value="haircare">Haircare</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subcategory">Subcategory</Label>
                      <Select defaultValue="">
                        <SelectTrigger className="mt-2 w-full">
                          <SelectValue placeholder="Select subcategory" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="facecreams">
                            Face Creams
                          </SelectItem>
                          <SelectItem value="serums">Serums</SelectItem>
                          <SelectItem value="lotions">Lotions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Price and Discount */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="price">
                        Price <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="price"
                        placeholder="e.g. 29.99 USD"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="discount ">Discount</Label>
                      <div className="relative mt-2">
                        <Input
                          id="discount"
                          placeholder="e.g. 15"
                          className="pr-10" // Add padding so icon doesn't overlap
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                          <Percent className="w-4 h-4" /> {/* Smaller size */}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      rows={6}
                      placeholder="Write a short description highlighting key benefits and features"
                      className="mt-3 min-h-[150px]" // 👈 ye height control karega
                    />
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="advanced">
                <p className="text-gray-500">Advanced settings go here...</p>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
