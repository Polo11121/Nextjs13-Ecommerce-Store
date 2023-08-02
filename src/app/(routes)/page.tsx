import { Container } from "@/components/ui/Container";
import { Billboard } from "@/components/Billboard";
import { ProductsList } from "@/components/ProductsList";
import { getBillboard } from "@/actions/getBillboard";
import { getProducts } from "@/actions/getProducts";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("6aa8e851-adc0-437f-964d-866000b1d24d");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductsList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
