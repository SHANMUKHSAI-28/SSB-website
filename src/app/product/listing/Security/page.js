import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function SecurityAllProducts() {
  const getAllProducts = await productByCategory("Security");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
