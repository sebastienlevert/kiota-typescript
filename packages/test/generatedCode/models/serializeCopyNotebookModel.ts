import {CopyNotebookModel} from './index';
import {OnenoteUserRole} from './onenoteUserRole';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeNotebookLinks} from './serializeNotebookLinks';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyNotebookModel(writer: SerializationWriter, copyNotebookModel: CopyNotebookModel | undefined = {}) : void {
            writer.writeStringValue("createdBy", copyNotebookModel.createdBy);
            writer.writeObjectValueFromMethod("createdByIdentity", copyNotebookModel.createdByIdentity as any, serializeIdentitySet);
            writer.writeDateValue("createdTime", copyNotebookModel.createdTime);
            writer.writeStringValue("id", copyNotebookModel.id);
            writer.writeBooleanValue("isDefault", copyNotebookModel.isDefault);
            writer.writeBooleanValue("isShared", copyNotebookModel.isShared);
            writer.writeStringValue("lastModifiedBy", copyNotebookModel.lastModifiedBy);
            writer.writeObjectValueFromMethod("lastModifiedByIdentity", copyNotebookModel.lastModifiedByIdentity as any, serializeIdentitySet);
            writer.writeDateValue("lastModifiedTime", copyNotebookModel.lastModifiedTime);
            writer.writeObjectValueFromMethod("links", copyNotebookModel.links as any, serializeNotebookLinks);
            writer.writeStringValue("name", copyNotebookModel.name);
            writer.writeStringValue("@odata.type", copyNotebookModel.odataType);
            writer.writeStringValue("sectionGroupsUrl", copyNotebookModel.sectionGroupsUrl);
            writer.writeStringValue("sectionsUrl", copyNotebookModel.sectionsUrl);
            writer.writeStringValue("self", copyNotebookModel.self);
            writer.writeEnumValue<OnenoteUserRole>("userRole", copyNotebookModel.userRole);
}
