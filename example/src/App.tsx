import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import HorizontalList, {HorizontalListExample} from 'react-native-rn-horizontal-list';

import SAMPLEDATA from './sample-data';

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setData(SAMPLEDATA);
    setLoading(false);
  }, []);

  return (
    <View>
      <HorizontalListExample />
      <HorizontalList loading={loading} title="New Releases" data={data} />
    </View>
  );
}