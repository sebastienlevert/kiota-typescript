import {AppConsentRequest} from './index';
import {serializeAppConsentRequestScope} from './serializeAppConsentRequestScope';
import {serializeEntity} from './serializeEntity';
import {serializeUserConsentRequest} from './serializeUserConsentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppConsentRequest(writer: SerializationWriter, appConsentRequest: AppConsentRequest | undefined = {}) : void {
        serializeEntity(writer, appConsentRequest)
            writer.writeStringValue("appDisplayName", appConsentRequest.appDisplayName);
            writer.writeStringValue("appId", appConsentRequest.appId);
            writer.writeStringValue("consentType", appConsentRequest.consentType);
            writer.writeCollectionOfObjectValuesFromMethod("pendingScopes", appConsentRequest.pendingScopes as any, serializeAppConsentRequestScope);
            writer.writeCollectionOfObjectValuesFromMethod("userConsentRequests", appConsentRequest.userConsentRequests as any, serializeUserConsentRequest);
}
