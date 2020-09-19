import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCaxctVn5WFGhw7uHYOLE1KC6nTEuHlH7Y",
  authDomain: "portfolio-15954.firebaseapp.com",
  databaseURL: "https://portfolio-15954.firebaseio.com",
  projectId: "portfolio-15954",
  storageBucket: "portfolio-15954.appspot.com",
  messagingSenderId: "664834292840",
  appId: "1:664834292840:web:96ba530cad168fdf238fdd",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
