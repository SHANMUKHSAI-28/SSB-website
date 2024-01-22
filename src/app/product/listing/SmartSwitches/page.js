import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function SmartSwitchesAllProducts() {
  const getAllProducts = await productByCategory("SmartSwitches");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
