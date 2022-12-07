import {DelegatedPermissionClassification} from './index';
import {PermissionClassificationType} from './permissionClassificationType';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDelegatedPermissionClassification(writer: SerializationWriter, delegatedPermissionClassification: DelegatedPermissionClassification | undefined = {}) : void {
        serializeEntity(writer, delegatedPermissionClassification)
            writer.writeEnumValue<PermissionClassificationType>("classification", delegatedPermissionClassification.classification);
            writer.writeStringValue("permissionId", delegatedPermissionClassification.permissionId);
            writer.writeStringValue("permissionName", delegatedPermissionClassification.permissionName);
}
