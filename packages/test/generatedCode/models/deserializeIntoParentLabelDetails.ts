import {ParentLabelDetails} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParentLabelDetails(parentLabelDetails: ParentLabelDetails | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "color": n => { parentLabelDetails.color = n.getStringValue() as any ; },
        "description": n => { parentLabelDetails.description = n.getStringValue() as any ; },
        "id": n => { parentLabelDetails.id = n.getStringValue() as any ; },
        "isActive": n => { parentLabelDetails.isActive = n.getBooleanValue() as any ; },
        "name": n => { parentLabelDetails.name = n.getStringValue() as any ; },
        "parent": n => { parentLabelDetails.parent = n.getObject(deserializeIntoParentLabelDetails) as any ; },
        "sensitivity": n => { parentLabelDetails.sensitivity = n.getNumberValue() as any ; },
        "tooltip": n => { parentLabelDetails.tooltip = n.getStringValue() as any ; },
    }
}
