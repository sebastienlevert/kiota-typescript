import {BaseCollectionPaginationCountResponse, UnifiedApprovalStage} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedApprovalStageCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedApprovalStage[];
}
