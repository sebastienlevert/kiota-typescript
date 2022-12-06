import {KeyValueCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeKeyValue} from './serializeKeyValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKeyValueCollectionResponse(writer: SerializationWriter, keyValueCollectionResponse: KeyValueCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, keyValueCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", keyValueCollectionResponse.value as any, serializeKeyValue);
}
