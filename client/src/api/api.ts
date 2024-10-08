
export type DataItem = {
  name: string;
  size: number;
  children: DataItem[];
}

export const fetchAllData = async (): Promise<DataItem> => {
  const data: Promise<DataItem> = fetch('http://localhost:5001/getAll').then(response => response.json());
  return data;
}