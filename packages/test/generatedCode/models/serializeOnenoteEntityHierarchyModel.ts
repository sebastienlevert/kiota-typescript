import {OnenoteEntityHierarchyModel} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeOnenoteEntitySchemaObjectModel} from './serializeOnenoteEntitySchemaObjectModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteEntityHierarchyModel(writer: SerializationWriter, onenoteEntityHierarchyModel: OnenoteEntityHierarchyModel | undefined = {}) : void {
        serializeOnenoteEntitySchemaObjectModel(writer, onenoteEntityHierarchyModel)
            writer.writeObjectValueFromMethod("createdBy", onenoteEntityHierarchyModel.createdBy as any, serializeIdentitySet);
            writer.writeStringValue("displayName", onenoteEntityHierarchyModel.displayName);
            writer.writeObjectValueFromMethod("lastModifiedBy", onenoteEntityHierarchyModel.lastModifiedBy as any, serializeIdentitySet);
            writer.writeDateValue("lastModifiedDateTime", onenoteEntityHierarchyModel.lastModifiedDateTime);
}
