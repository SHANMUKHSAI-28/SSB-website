import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function RetroFitAllProducts() {
  const getAllProducts = await productByCategory("RetroFit");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
