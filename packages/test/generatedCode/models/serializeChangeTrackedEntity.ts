import {ChangeTrackedEntity} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChangeTrackedEntity(writer: SerializationWriter, changeTrackedEntity: ChangeTrackedEntity | undefined = {}) : void {
        serializeEntity(writer, changeTrackedEntity)
            writer.writeObjectValueFromMethod("createdBy", changeTrackedEntity.createdBy as any, serializeIdentitySet);
            writer.writeDateValue("createdDateTime", changeTrackedEntity.createdDateTime);
            writer.writeObjectValueFromMethod("lastModifiedBy", changeTrackedEntity.lastModifiedBy as any, serializeIdentitySet);
            writer.writeDateValue("lastModifiedDateTime", changeTrackedEntity.lastModifiedDateTime);
}
