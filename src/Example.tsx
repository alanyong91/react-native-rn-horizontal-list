import React, { useState, useEffect } from 'react';
import HorizontalList from './HorizontalList';

import SAMPLEDATA from './sample-data';

const Example = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setData(SAMPLEDATA);
    setLoading(false);
  }, []);

  return (
    <HorizontalList loading={loading} title="New Releases" data={data} />
  );
};

export default Example;
