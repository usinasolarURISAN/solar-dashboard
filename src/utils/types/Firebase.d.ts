declare type FirebaseRemoteConfigKeys = 'remoteConfigTest';

declare type FirebaseRemoteConfigDefaultValues = {
  [key in FirebaseRemoteConfigKeys]: string | number | boolean;
};
