import {deserializeIntoAppConsentRequest} from './deserializeIntoAppConsentRequest';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AppConsentApprovalRoute} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppConsentApprovalRoute(appConsentApprovalRoute: AppConsentApprovalRoute | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(appConsentApprovalRoute),
        "appConsentRequests": n => { appConsentApprovalRoute.appConsentRequests = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppConsentRequest) as any ; },
    }
}
