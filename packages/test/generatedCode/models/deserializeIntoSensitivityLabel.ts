import {ApplicationMode} from './applicationMode';
import {deserializeIntoAutoLabeling} from './deserializeIntoAutoLabeling';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoLabelActionBase} from './deserializeIntoLabelActionBase';
import {deserializeIntoLabelPolicy} from './deserializeIntoLabelPolicy';
import {SensitivityLabel} from './index';
import {SensitivityLabelTarget} from './sensitivityLabelTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSensitivityLabel(sensitivityLabel: SensitivityLabel | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(sensitivityLabel),
        "applicableTo": n => { sensitivityLabel.applicableTo = n.getEnumValue<SensitivityLabelTarget>(SensitivityLabelTarget) as any ; },
        "applicationMode": n => { sensitivityLabel.applicationMode = n.getEnumValue<ApplicationMode>(ApplicationMode) as any ; },
        "assignedPolicies": n => { sensitivityLabel.assignedPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLabelPolicy) as any ; },
        "autoLabeling": n => { sensitivityLabel.autoLabeling = n.getObject(deserializeIntoAutoLabeling) as any ; },
        "description": n => { sensitivityLabel.description = n.getStringValue() as any ; },
        "displayName": n => { sensitivityLabel.displayName = n.getStringValue() as any ; },
        "isDefault": n => { sensitivityLabel.isDefault = n.getBooleanValue() as any ; },
        "isEndpointProtectionEnabled": n => { sensitivityLabel.isEndpointProtectionEnabled = n.getBooleanValue() as any ; },
        "labelActions": n => { sensitivityLabel.labelActions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLabelActionBase) as any ; },
        "name": n => { sensitivityLabel.name = n.getStringValue() as any ; },
        "priority": n => { sensitivityLabel.priority = n.getNumberValue() as any ; },
        "sublabels": n => { sensitivityLabel.sublabels = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSensitivityLabel) as any ; },
        "toolTip": n => { sensitivityLabel.toolTip = n.getStringValue() as any ; },
    }
}
