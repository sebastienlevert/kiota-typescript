import {MembershipRuleProcessingStatusDetails} from './membershipRuleProcessingStatusDetails';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MembershipRuleProcessingStatus extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Detailed error message if dynamic group processing ran into an error.  Optional. Read-only. */
    errorMessage?: string;
    /** Most recent date and time when membership of a dynamic group was updated.  Optional. Read-only. */
    lastMembershipUpdated?: Date;
    /** The status property */
    status?: MembershipRuleProcessingStatusDetails;
}
