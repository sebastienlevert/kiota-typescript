import {SubjectSet} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedApprovalStage extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The number of days that a request can be pending a response before it is automatically denied. */
    approvalStageTimeOutInDays?: number;
    /** The escalation approvers for this stage when the primary approvers don't respond. */
    escalationApprovers?: SubjectSet[];
    /** The time a request can be pending a response from a primary approver before it can be escalated to the escalation approvers. */
    escalationTimeInMinutes?: number;
    /** Indicates whether the approver must provide justification for their reponse. */
    isApproverJustificationRequired?: boolean;
    /** Indicates whether escalation if enabled. */
    isEscalationEnabled?: boolean;
    /** The OdataType property */
    odataType?: string;
    /** The primary approvers of this stage. */
    primaryApprovers?: SubjectSet[];
}
