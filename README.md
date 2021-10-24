# React Native Test
## 셋팅 시점 환경
* node - v14.18.1
* yarn - 1.22.15
* java - openjdk 1.8

## 초기 설치 모듈
```
# 프로젝트 생성 방법
#react-native init reactNativeStudy1

## UI
yarn add react-native-elements
yarn add react-native-elements
npx react-native link react-native-vector-icons
yarn add react-native-safe-area-context

## HTTP 통신
yarn add axios
```

## 실행
#### Vitual Devices 실행 (Android Studio - Android Virtual Device Manger)
```
yarn run android
```

## 수정/추가 소스
* App.js
    * ```<TestView/>``` 추가
* components/
    * TestView.js
        * Http.js 통해서 http 호출
* utils/
    * Http.js (axios)