import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDjDVKyLiYAxn_YwuNEiA6MZ7LEjX7EAOw",
	authDomain: "chat-93cf1.firebaseapp.com",
	projectId: "chat-93cf1",
	storageBucket: "chat-93cf1.appspot.com",
	messagingSenderId: "692532718101",
	appId: "1:692532718101:web:4a8e562469ea4b79a2fc1c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
