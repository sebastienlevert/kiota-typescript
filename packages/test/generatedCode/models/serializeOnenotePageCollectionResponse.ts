import {OnenotePageCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOnenotePage} from './serializeOnenotePage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenotePageCollectionResponse(writer: SerializationWriter, onenotePageCollectionResponse: OnenotePageCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, onenotePageCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", onenotePageCollectionResponse.value as any, serializeOnenotePage);
}
