import {NamedLocationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeNamedLocation} from './serializeNamedLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNamedLocationCollectionResponse(writer: SerializationWriter, namedLocationCollectionResponse: NamedLocationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, namedLocationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", namedLocationCollectionResponse.value as any, serializeNamedLocation);
}
