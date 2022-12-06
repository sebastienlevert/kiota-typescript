import {AccessReviewHistoryStatus} from './accessReviewHistoryStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {AccessReviewHistoryInstance} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewHistoryInstance(accessReviewHistoryInstance: AccessReviewHistoryInstance | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessReviewHistoryInstance),
        "downloadUri": n => { accessReviewHistoryInstance.downloadUri = n.getStringValue() as any ; },
        "expirationDateTime": n => { accessReviewHistoryInstance.expirationDateTime = n.getDateValue() as any ; },
        "fulfilledDateTime": n => { accessReviewHistoryInstance.fulfilledDateTime = n.getDateValue() as any ; },
        "reviewHistoryPeriodEndDateTime": n => { accessReviewHistoryInstance.reviewHistoryPeriodEndDateTime = n.getDateValue() as any ; },
        "reviewHistoryPeriodStartDateTime": n => { accessReviewHistoryInstance.reviewHistoryPeriodStartDateTime = n.getDateValue() as any ; },
        "runDateTime": n => { accessReviewHistoryInstance.runDateTime = n.getDateValue() as any ; },
        "status": n => { accessReviewHistoryInstance.status = n.getEnumValue<AccessReviewHistoryStatus>(AccessReviewHistoryStatus) as any ; },
    }
}
