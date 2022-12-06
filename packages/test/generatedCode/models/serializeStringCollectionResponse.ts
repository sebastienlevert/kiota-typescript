import {StringCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStringCollectionResponse(writer: SerializationWriter, stringCollectionResponse: StringCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, stringCollectionResponse)
            writer.writeCollectionOfPrimitiveValues<string>("value", stringCollectionResponse.value);
}
