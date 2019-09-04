const apolloClientOptions = {
  // uri: "http://localhost:4000/graphql" - bug!!!
  // uri: "http://localhost:4000"
  // Android Simulator 사용경우에는
  // uri: "${deviceIP}:4000" deviceIP는 expo 실행시 LAN 에 찍힌 ip 찍힌거를 넣으면 된다!
  // ex) exp://127.0.0.1:19000 => http://127.0.0.1:4000
  // uri: "http://192.168.0.8:4000"
  // uri: "http://192.168.0.3:4000"
  uri: "http://35.200.102.74:4000" // 아임포트 테스트 서버
};

export default apolloClientOptions;
