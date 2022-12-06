import {AccessReviewHistoryStatus} from './accessReviewHistoryStatus';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewHistoryInstance extends Entity, Partial<Parsable> {
    /** Uri which can be used to retrieve review history data. This URI will be active for 24 hours after being generated. Required. */
    downloadUri?: string;
    /** Timestamp when this instance and associated data expires and the history is deleted. Required. */
    expirationDateTime?: Date;
    /** Timestamp when all of the available data for this instance was collected. This will be set after this instance's status is set to done. Required. */
    fulfilledDateTime?: Date;
    /** Timestamp, reviews ending on or before this date will be included in the fetched history data. */
    reviewHistoryPeriodEndDateTime?: Date;
    /** Timestamp, reviews starting on or after this date will be included in the fetched history data. */
    reviewHistoryPeriodStartDateTime?: Date;
    /** Timestamp when the instance's history data is scheduled to be generated. */
    runDateTime?: Date;
    /** Represents the status of the review history data collection. The possible values are: done, inProgress, error, requested, unknownFutureValue. Once the status has been marked as done, a link can be generated to retrieve the instance's data by calling generateDownloadUri method. */
    status?: AccessReviewHistoryStatus;
}
