import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

export  function initializeKeycloak(keycloak: KeycloakService): () => Promise<any> {
    return () =>
        keycloak.init({
            config: {
              url: 'http://localhost:8080/auth',
                
            //  url:'http://10.14.14.232:8180/auth/',
            
             // clientId:'ipm-fronte'
             //  realm: 'Digital-Poste',
                realm: 'Authentification-IPM',
             clientId: 'ipm-client',
  
            } ,
            initOptions : {
                onLoad:"check-sso",
               // onLoad:"login-required",
            },
          //  enableBearerInterceptor: true,

        }) 
    
}
