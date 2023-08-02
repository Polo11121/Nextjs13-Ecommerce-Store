const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategory = async (id: string): Promise<Category> => {
  const response = await fetch(`${url}/${id}`);

  return response.json();
};
