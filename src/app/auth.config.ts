import { AuthConfig } from 'angular-oauth2-oidc'

//eu sei deveria ir para o git ignore, porém é para revisar também
export const auth: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: window.location.origin,
    clientId: '244839892907-gnvh3n83vmdr90a5natgjiqun1h6jje7.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false
}