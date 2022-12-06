import {KeyValuePairCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKeyValuePairCollectionResponse(writer: SerializationWriter, keyValuePairCollectionResponse: KeyValuePairCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, keyValuePairCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", keyValuePairCollectionResponse.value as any, serializeKeyValuePair);
}
