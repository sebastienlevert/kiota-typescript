import {SectionGroup} from './index';
import {serializeNotebook} from './serializeNotebook';
import {serializeOnenoteEntityHierarchyModel} from './serializeOnenoteEntityHierarchyModel';
import {serializeOnenoteSection} from './serializeOnenoteSection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSectionGroup(writer: SerializationWriter, sectionGroup: SectionGroup | undefined = {}) : void {
        serializeOnenoteEntityHierarchyModel(writer, sectionGroup)
            writer.writeObjectValueFromMethod("parentNotebook", sectionGroup.parentNotebook as any, serializeNotebook);
            writer.writeObjectValueFromMethod("parentSectionGroup", sectionGroup.parentSectionGroup as any, serializeSectionGroup);
            writer.writeCollectionOfObjectValuesFromMethod("sectionGroups", sectionGroup.sectionGroups as any, serializeSectionGroup);
            writer.writeStringValue("sectionGroupsUrl", sectionGroup.sectionGroupsUrl);
            writer.writeCollectionOfObjectValuesFromMethod("sections", sectionGroup.sections as any, serializeOnenoteSection);
            writer.writeStringValue("sectionsUrl", sectionGroup.sectionsUrl);
}
