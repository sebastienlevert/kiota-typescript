import {OnenoteSectionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOnenoteSection} from './serializeOnenoteSection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteSectionCollectionResponse(writer: SerializationWriter, onenoteSectionCollectionResponse: OnenoteSectionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, onenoteSectionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", onenoteSectionCollectionResponse.value as any, serializeOnenoteSection);
}
