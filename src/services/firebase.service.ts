// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getRemoteConfig } from 'firebase/remote-config';
import { defaultFirebaseValues, firebaseConfig } from '~/utils';

// Firebase general instance
const app = initializeApp(firebaseConfig);

// Firebase Remote Config
const firebaseRemoteConfig = getRemoteConfig(app);
firebaseRemoteConfig.defaultConfig = defaultFirebaseValues;

export { firebaseRemoteConfig };
