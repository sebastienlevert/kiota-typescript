import {SubjectSet} from './index';
import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageApprovalStage extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The number of days that a request can be pending a response before it is automatically denied. */
    durationBeforeAutomaticDenial?: Duration;
    /** If escalation is required, the time a request can be pending a response from a primary approver. */
    durationBeforeEscalation?: Duration;
    /** If escalation is enabled and the primary approvers do not respond before the escalation time, the escalationApprovers are the users who will be asked to approve requests. */
    escalationApprovers?: SubjectSet[];
    /** The subjects, typically users, who are the fallback escalation approvers. */
    fallbackEscalationApprovers?: SubjectSet[];
    /** The subjects, typically users, who are the fallback primary approvers. */
    fallbackPrimaryApprovers?: SubjectSet[];
    /** Indicates whether the approver is required to provide a justification for approving a request. */
    isApproverJustificationRequired?: boolean;
    /** If true, then one or more escalationApprovers are configured in this approval stage. */
    isEscalationEnabled?: boolean;
    /** The OdataType property */
    odataType?: string;
    /** The subjects, typically users, who will be asked to approve requests. A collection of singleUser, groupMembers, requestorManager, internalSponsors or externalSponsors. */
    primaryApprovers?: SubjectSet[];
}
