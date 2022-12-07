import {AssignedLabel} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignedLabel(assignedLabel: AssignedLabel | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { assignedLabel.displayName = n.getStringValue() as any ; },
        "labelId": n => { assignedLabel.labelId = n.getStringValue() as any ; },
    }
}
