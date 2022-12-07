import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AccessReviewReviewer} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewReviewer(accessReviewReviewer: AccessReviewReviewer | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessReviewReviewer),
        "createdDateTime": n => { accessReviewReviewer.createdDateTime = n.getDateValue() as any ; },
        "displayName": n => { accessReviewReviewer.displayName = n.getStringValue() as any ; },
        "userPrincipalName": n => { accessReviewReviewer.userPrincipalName = n.getStringValue() as any ; },
    }
}
