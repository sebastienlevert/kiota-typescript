import {deserializeIntoAppConsentRequestScope} from './deserializeIntoAppConsentRequestScope';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoUserConsentRequest} from './deserializeIntoUserConsentRequest';
import {AppConsentRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppConsentRequest(appConsentRequest: AppConsentRequest | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(appConsentRequest),
        "appDisplayName": n => { appConsentRequest.appDisplayName = n.getStringValue() as any ; },
        "appId": n => { appConsentRequest.appId = n.getStringValue() as any ; },
        "consentType": n => { appConsentRequest.consentType = n.getStringValue() as any ; },
        "pendingScopes": n => { appConsentRequest.pendingScopes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppConsentRequestScope) as any ; },
        "userConsentRequests": n => { appConsentRequest.userConsentRequests = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserConsentRequest) as any ; },
    }
}
