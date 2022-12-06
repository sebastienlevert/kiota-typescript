import {AccessReviewHistoryStatus} from './accessReviewHistoryStatus';
import {AccessReviewHistoryInstance} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewHistoryInstance(writer: SerializationWriter, accessReviewHistoryInstance: AccessReviewHistoryInstance | undefined = {}) : void {
        serializeEntity(writer, accessReviewHistoryInstance)
            writer.writeStringValue("downloadUri", accessReviewHistoryInstance.downloadUri);
            writer.writeDateValue("expirationDateTime", accessReviewHistoryInstance.expirationDateTime);
            writer.writeDateValue("fulfilledDateTime", accessReviewHistoryInstance.fulfilledDateTime);
            writer.writeDateValue("reviewHistoryPeriodEndDateTime", accessReviewHistoryInstance.reviewHistoryPeriodEndDateTime);
            writer.writeDateValue("reviewHistoryPeriodStartDateTime", accessReviewHistoryInstance.reviewHistoryPeriodStartDateTime);
            writer.writeDateValue("runDateTime", accessReviewHistoryInstance.runDateTime);
            writer.writeEnumValue<AccessReviewHistoryStatus>("status", accessReviewHistoryInstance.status);
}
