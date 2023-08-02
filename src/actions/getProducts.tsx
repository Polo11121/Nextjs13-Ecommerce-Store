import queryString from "query-string";

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const url = `${process.env.NEXT_PUBLIC_API_URL}/products/`;

export const getProducts = async ({
  categoryId,
  colorId,
  sizeId,
  isFeatured,
}: Query): Promise<Product[]> => {
  const queryUrl = queryString.stringifyUrl({
    url,
    query: { categoryId, colorId, sizeId, isFeatured },
  });

  const response = await fetch(queryUrl);

  return response.json();
};
