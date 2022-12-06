import {Notebook} from './index';
import {OnenoteUserRole} from './onenoteUserRole';
import {serializeNotebookLinks} from './serializeNotebookLinks';
import {serializeOnenoteEntityHierarchyModel} from './serializeOnenoteEntityHierarchyModel';
import {serializeOnenoteSection} from './serializeOnenoteSection';
import {serializeSectionGroup} from './serializeSectionGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNotebook(writer: SerializationWriter, notebook: Notebook | undefined = {}) : void {
        serializeOnenoteEntityHierarchyModel(writer, notebook)
            writer.writeBooleanValue("isDefault", notebook.isDefault);
            writer.writeBooleanValue("isShared", notebook.isShared);
            writer.writeObjectValueFromMethod("links", notebook.links as any, serializeNotebookLinks);
            writer.writeCollectionOfObjectValuesFromMethod("sectionGroups", notebook.sectionGroups as any, serializeSectionGroup);
            writer.writeStringValue("sectionGroupsUrl", notebook.sectionGroupsUrl);
            writer.writeCollectionOfObjectValuesFromMethod("sections", notebook.sections as any, serializeOnenoteSection);
            writer.writeStringValue("sectionsUrl", notebook.sectionsUrl);
            writer.writeEnumValue<OnenoteUserRole>("userRole", notebook.userRole);
}
