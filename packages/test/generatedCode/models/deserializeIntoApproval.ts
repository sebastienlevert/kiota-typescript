import {deserializeIntoApprovalStage} from './deserializeIntoApprovalStage';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Approval} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApproval(approval: Approval | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(approval),
        "stages": n => { approval.stages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoApprovalStage) as any ; },
    }
}
