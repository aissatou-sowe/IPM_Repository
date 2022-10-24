import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

export  function initializeKeycloak(keycloak: KeycloakService): () => Promise<any> {
    return () =>
        keycloak.init({
            config: {
                url: 'http://localhost:8180/auth',
              //  url:'http://10.14.14.232:8180/auth/',
               realm: 'IPM-Front',
              // clientId: 'ipm-fronte',
            //    realm: 'Authentification-IPM',
             clientId:'front-end'
               
            } ,
            initOptions : {
                onLoad:"check-sso",
               // onLoad:"login-required",
            },
          //  enableBearerInterceptor: true,

        }) 
    
}