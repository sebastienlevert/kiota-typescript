import {AppConsentApprovalRoute} from './index';
import {serializeAppConsentRequest} from './serializeAppConsentRequest';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppConsentApprovalRoute(writer: SerializationWriter, appConsentApprovalRoute: AppConsentApprovalRoute | undefined = {}) : void {
        serializeEntity(writer, appConsentApprovalRoute)
            writer.writeCollectionOfObjectValuesFromMethod("appConsentRequests", appConsentApprovalRoute.appConsentRequests as any, serializeAppConsentRequest);
}
