#

This is a [Next.js](~https://nextjs.org/~) project bootstrapped with [`create-next-app`](~https://github.com/vercel/next.js/tree/canary/packages/create-next-app~).

**## Start** Demo Link: [https://merquri-test-app.netlify.app/]https://merquri-test-app.netlify.app/

To run locally:

1. Clone repo
2. Next, you will need to create a Firestore account.[https://console.firebase.google.com/](~https://console.firebase.google.com/~)
3. Create a Web App + RealTime Database on Firebase Console.
4. Obtain FireBaseConfig json details

   ```
   //@your-project/ProjectSettings/your apps/Firebase SDK Snippet -> choose config radio button

   const firebaseConfig = {
   apiKey: <API_KEY>,
   authDomain: <AUTH_DOMAIN>,
   databaseURL: <DATEABASE_URL>,
   projectId: <PROJECT_ID>,
   storageBucket: <STORAGE_BUCKET>,
   messagingSenderId: <MSGSENDER_ID>,
   appId: <APP_ID>
   };
   ```

5. Next you will need to obtain an API KEY from OpenWeatherMap [Weather API - OpenWeatherMap](https://openweathermap.org/api)
6. Create ‘.env.local’ at root of directory.
   ```
   //@Add environmental variables
   NEXT_PUBLIC_OPENWEATHER_API_KEY=OPENWEATHERKEY
   NEXT_PUBLIC_FIREBASE_API_KEY=API_KEY
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=AUTH_DOMAIN
   NEXT_PUBLIC_FIREBASE_DATABASE_URL=DATEABASE_URL
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=PROJECT_ID
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=STORAGE_BUCKET
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=MSGSENDER_ID
   NEXT_PUBLIC_FIREBASE_APP_ID=APP_ID
   NEXT_PUBLIC_ENV="DEVELOPMENT"
   ```
7. Be sure to npm install dependencies
8. And you’re good to npm run dev
