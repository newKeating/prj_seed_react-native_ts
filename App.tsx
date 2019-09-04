import React, {useState, useEffect} from 'react';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {persistCache} from 'apollo-cache-persist';
import {ApolloProvider} from '@apollo/react-hooks';
import {ApolloProvider as ApolloComponentProvider} from '@apollo/react-components';
import {ThemeProvider} from 'styled-components';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ApolloClient from 'apollo-boost';
import apolloClientOptions from './src/apollo/apollo';
import Theme from './src/styles/Theme';
import NavController from './src/components/NavControllers';
import {AuthProvider} from './src/contexts/AuthContext';

export default () => {
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const preLoad = async () => {
    // await AsyncStorage.clear();
    // for development purpose - only to clear storage
    try {
      // 폰트 로딩
      // await loadAsync({
      //   ...Ionicons.font
      // }); ==> package.json에 rnpm 등록 후, react-native link 적용한 결과와 동일

      // 로고 로딩
      // await Asset.loadAsync([require("./assets/logo.png")]);

      // 메모리 캐싱
      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: AsyncStorage,
      });

      // 아폴로 클라이언트 생성
      const client = new ApolloClient({
        // cache,
        request: async (operation): Promise<any> => {
          const token = await AsyncStorage.getItem('jwt');
          return operation.setContext({
            headers: {Authorization: `Bearer ${token}`},
          });
        },
        ...apolloClientOptions,
      });
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (isLoggedIn === null || isLoggedIn === 'false') {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }

      // 로딩 완료
      setLoaded(true);
      setClient(client);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);

  return loaded && client && isLoggedIn !== null ? (
    <ApolloProvider client={client}>
      <ApolloComponentProvider client={client}>
        <ThemeProvider theme={Theme}>
          <AuthProvider isLoggedIn={isLoggedIn}>
            <NavController />
          </AuthProvider>
        </ThemeProvider>
      </ApolloComponentProvider>
    </ApolloProvider>
  ) : (
    <View>
      <Text>AppLoading...</Text>
    </View>
  );
};
