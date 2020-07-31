import React, { useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import Title from './components/Title';
import FlatItem from './components/FlatItem';
import WebView from './components/WebView'

interface IHorizontalListProps {
  loading: boolean;
  title: string | null;
  data: any[];
}

interface IWebViewModalProps {
  open: boolean;
  uri: string | null
}

export default ({ loading, title, data }: IHorizontalListProps) => {
  const [webViewModal, setWebViewModal] = useState<IWebViewModalProps>({
    open: false,
    uri: null,
  });

  const toggleModal = (uri: string | null = null) => {
    setWebViewModal({
      open: !webViewModal.open,
      uri,
    });
  };

  return (
    <React.Fragment>
      {title && <Title title={title} />}
      {!loading ? (
        <>
          <FlatList
            horizontal
            data={data}
            renderItem={(props) => (
              <FlatItem total={data.length} onOpen={toggleModal} {...props} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
          <WebView open={webViewModal.open} uri={webViewModal.uri} onClose={toggleModal} />
        </>
      ) : (
        <ActivityIndicator />
      )}
    </React.Fragment>
  );
};
