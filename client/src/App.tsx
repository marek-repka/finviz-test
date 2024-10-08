import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import PageContainer from './components/PageContainer/PageContainer';
import { DataItem, fetchAllData } from './api/api';
import TreeView from './components/TreeView/TreeView';

function App() {
  const [data, setData] = useState<DataItem>();

  const getAllData = async () => {
    const _data = await fetchAllData();
    setData(_data);
  }

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <PageContainer>
      <Header title={data?.name} />
      <TreeView items={data?.children} />
    </PageContainer>
  );
}

export default App;
