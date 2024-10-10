import { useEffect, useState } from 'react';

const useFacebookLogin = (appId) => {
  const [isSdkLoaded, setIsSdkLoaded] = useState(false);

  // Load the Facebook SDK when the component mounts
  useEffect(() => {
    // Function to load the SDK
    const loadFacebookSDK = () => {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: appId, // Facebook App ID
          cookie: true,
          xfbml: false,
          proxy: true,
          version: 'v16.0',
        });
        setIsSdkLoaded(true);
      };

      // Asynchronously load the Facebook SDK
      (function (d, s, id) {
        const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        const js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    };

    // Only load the SDK if it hasn't been loaded yet
    if (!window.FB) {
      loadFacebookSDK();
    } else {
      setIsSdkLoaded(true);
    }
  }, [appId]);

  // Facebook login function
  const login = (callback) => {
    if (!isSdkLoaded) {
      console.error('Facebook SDK not loaded yet.');
      return;
    }

    window.FB.login(
      function (response) {
        if (response.authResponse) {
          // Pass the accessToken to the callback
          callback(response.authResponse.accessToken);
        } else {
          console.error('User cancelled login or did not fully authorize.');
        }
      },
      { scope: 'public_profile,email' }
    );
  };

  return login; // Return the login function to be used in components
};

export default useFacebookLogin;
