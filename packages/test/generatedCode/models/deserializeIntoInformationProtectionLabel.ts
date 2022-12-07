import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoParentLabelDetails} from './deserializeIntoParentLabelDetails';
import {InformationProtectionLabel} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInformationProtectionLabel(informationProtectionLabel: InformationProtectionLabel | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(informationProtectionLabel),
        "color": n => { informationProtectionLabel.color = n.getStringValue() as any ; },
        "description": n => { informationProtectionLabel.description = n.getStringValue() as any ; },
        "isActive": n => { informationProtectionLabel.isActive = n.getBooleanValue() as any ; },
        "name": n => { informationProtectionLabel.name = n.getStringValue() as any ; },
        "parent": n => { informationProtectionLabel.parent = n.getObject(deserializeIntoParentLabelDetails) as any ; },
        "sensitivity": n => { informationProtectionLabel.sensitivity = n.getNumberValue() as any ; },
        "tooltip": n => { informationProtectionLabel.tooltip = n.getStringValue() as any ; },
    }
}
