import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {SensitivityLabel} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSensitivityLabel(sensitivityLabel: SensitivityLabel | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(sensitivityLabel),
        "color": n => { sensitivityLabel.color = n.getStringValue() as any ; },
        "contentFormats": n => { sensitivityLabel.contentFormats = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "description": n => { sensitivityLabel.description = n.getStringValue() as any ; },
        "hasProtection": n => { sensitivityLabel.hasProtection = n.getBooleanValue() as any ; },
        "isActive": n => { sensitivityLabel.isActive = n.getBooleanValue() as any ; },
        "isAppliable": n => { sensitivityLabel.isAppliable = n.getBooleanValue() as any ; },
        "name": n => { sensitivityLabel.name = n.getStringValue() as any ; },
        "parent": n => { sensitivityLabel.parent = n.getObject(deserializeIntoSensitivityLabel) as any ; },
        "sensitivity": n => { sensitivityLabel.sensitivity = n.getNumberValue() as any ; },
        "tooltip": n => { sensitivityLabel.tooltip = n.getStringValue() as any ; },
    }
}
