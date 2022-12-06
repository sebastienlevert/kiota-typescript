import {deserializeIntoAccessReviewReviewerScope} from './deserializeIntoAccessReviewReviewerScope';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AdminConsentRequestPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAdminConsentRequestPolicy(adminConsentRequestPolicy: AdminConsentRequestPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(adminConsentRequestPolicy),
        "isEnabled": n => { adminConsentRequestPolicy.isEnabled = n.getBooleanValue() as any ; },
        "notifyReviewers": n => { adminConsentRequestPolicy.notifyReviewers = n.getBooleanValue() as any ; },
        "remindersEnabled": n => { adminConsentRequestPolicy.remindersEnabled = n.getBooleanValue() as any ; },
        "requestDurationInDays": n => { adminConsentRequestPolicy.requestDurationInDays = n.getNumberValue() as any ; },
        "reviewers": n => { adminConsentRequestPolicy.reviewers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewReviewerScope) as any ; },
        "version": n => { adminConsentRequestPolicy.version = n.getNumberValue() as any ; },
    }
}
