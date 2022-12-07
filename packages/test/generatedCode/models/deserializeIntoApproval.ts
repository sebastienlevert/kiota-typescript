import {deserializeIntoApprovalStep} from './deserializeIntoApprovalStep';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Approval} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApproval(approval: Approval | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(approval),
        "steps": n => { approval.steps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoApprovalStep) as any ; },
    }
}
