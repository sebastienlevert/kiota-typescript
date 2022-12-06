import {OnenoteResourceCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOnenoteResource} from './serializeOnenoteResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteResourceCollectionResponse(writer: SerializationWriter, onenoteResourceCollectionResponse: OnenoteResourceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, onenoteResourceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", onenoteResourceCollectionResponse.value as any, serializeOnenoteResource);
}
