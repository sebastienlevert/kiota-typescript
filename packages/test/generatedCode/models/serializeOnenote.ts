import {Onenote} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeNotebook} from './serializeNotebook';
import {serializeOnenoteOperation} from './serializeOnenoteOperation';
import {serializeOnenotePage} from './serializeOnenotePage';
import {serializeOnenoteResource} from './serializeOnenoteResource';
import {serializeOnenoteSection} from './serializeOnenoteSection';
import {serializeSectionGroup} from './serializeSectionGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenote(writer: SerializationWriter, onenote: Onenote | undefined = {}) : void {
        serializeEntity(writer, onenote)
            writer.writeCollectionOfObjectValuesFromMethod("notebooks", onenote.notebooks as any, serializeNotebook);
            writer.writeCollectionOfObjectValuesFromMethod("operations", onenote.operations as any, serializeOnenoteOperation);
            writer.writeCollectionOfObjectValuesFromMethod("pages", onenote.pages as any, serializeOnenotePage);
            writer.writeCollectionOfObjectValuesFromMethod("resources", onenote.resources as any, serializeOnenoteResource);
            writer.writeCollectionOfObjectValuesFromMethod("sectionGroups", onenote.sectionGroups as any, serializeSectionGroup);
            writer.writeCollectionOfObjectValuesFromMethod("sections", onenote.sections as any, serializeOnenoteSection);
}
