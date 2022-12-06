import {deserializeIntoAccessReviewSet} from './deserializeIntoAccessReviewSet';
import {deserializeIntoAppConsentApprovalRoute} from './deserializeIntoAppConsentApprovalRoute';
import {deserializeIntoEntitlementManagement} from './deserializeIntoEntitlementManagement';
import {deserializeIntoTermsOfUseContainer} from './deserializeIntoTermsOfUseContainer';
import {IdentityGovernance} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityGovernance(identityGovernance: IdentityGovernance | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "accessReviews": n => { identityGovernance.accessReviews = n.getObject(deserializeIntoAccessReviewSet) as any ; },
        "appConsent": n => { identityGovernance.appConsent = n.getObject(deserializeIntoAppConsentApprovalRoute) as any ; },
        "entitlementManagement": n => { identityGovernance.entitlementManagement = n.getObject(deserializeIntoEntitlementManagement) as any ; },
        "@odata.type": n => { identityGovernance.odataType = n.getStringValue() as any ; },
        "termsOfUse": n => { identityGovernance.termsOfUse = n.getObject(deserializeIntoTermsOfUseContainer) as any ; },
    }
}
