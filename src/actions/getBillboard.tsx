const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboard = async (id: string): Promise<Billboard> => {
  const response = await fetch(`${url}/${id}`);

  return response.json();
};
