import {UnifiedApprovalStage} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ApprovalSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** One of SingleStage, Serial, Parallel, NoApproval (default). NoApproval is used when isApprovalRequired is false. */
    approvalMode?: string;
    /** If approval is required, the one or two elements of this collection define each of the stages of approval. An empty array if no approval is required. */
    approvalStages?: UnifiedApprovalStage[];
    /** Indicates whether approval is required for requests in this policy. */
    isApprovalRequired?: boolean;
    /** Indicates whether approval is required for a user to extend their assignment. */
    isApprovalRequiredForExtension?: boolean;
    /** Indicates whether the requestor is required to supply a justification in their request. */
    isRequestorJustificationRequired?: boolean;
    /** The OdataType property */
    odataType?: string;
}
