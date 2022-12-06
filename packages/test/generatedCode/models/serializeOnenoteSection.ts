import {OnenoteSection} from './index';
import {serializeNotebook} from './serializeNotebook';
import {serializeOnenoteEntityHierarchyModel} from './serializeOnenoteEntityHierarchyModel';
import {serializeOnenotePage} from './serializeOnenotePage';
import {serializeSectionGroup} from './serializeSectionGroup';
import {serializeSectionLinks} from './serializeSectionLinks';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteSection(writer: SerializationWriter, onenoteSection: OnenoteSection | undefined = {}) : void {
        serializeOnenoteEntityHierarchyModel(writer, onenoteSection)
            writer.writeBooleanValue("isDefault", onenoteSection.isDefault);
            writer.writeObjectValueFromMethod("links", onenoteSection.links as any, serializeSectionLinks);
            writer.writeCollectionOfObjectValuesFromMethod("pages", onenoteSection.pages as any, serializeOnenotePage);
            writer.writeStringValue("pagesUrl", onenoteSection.pagesUrl);
            writer.writeObjectValueFromMethod("parentNotebook", onenoteSection.parentNotebook as any, serializeNotebook);
            writer.writeObjectValueFromMethod("parentSectionGroup", onenoteSection.parentSectionGroup as any, serializeSectionGroup);
}
