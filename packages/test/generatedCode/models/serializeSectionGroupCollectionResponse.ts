import {SectionGroupCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSectionGroup} from './serializeSectionGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSectionGroupCollectionResponse(writer: SerializationWriter, sectionGroupCollectionResponse: SectionGroupCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sectionGroupCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", sectionGroupCollectionResponse.value as any, serializeSectionGroup);
}
