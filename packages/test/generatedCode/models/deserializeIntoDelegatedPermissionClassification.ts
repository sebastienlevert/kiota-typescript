import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DelegatedPermissionClassification} from './index';
import {PermissionClassificationType} from './permissionClassificationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDelegatedPermissionClassification(delegatedPermissionClassification: DelegatedPermissionClassification | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(delegatedPermissionClassification),
        "classification": n => { delegatedPermissionClassification.classification = n.getEnumValue<PermissionClassificationType>(PermissionClassificationType) as any ; },
        "permissionId": n => { delegatedPermissionClassification.permissionId = n.getStringValue() as any ; },
        "permissionName": n => { delegatedPermissionClassification.permissionName = n.getStringValue() as any ; },
    }
}
