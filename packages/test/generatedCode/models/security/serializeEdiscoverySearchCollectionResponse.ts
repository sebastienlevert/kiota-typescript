import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoverySearchCollectionResponse} from './index';
import {serializeEdiscoverySearch} from './serializeEdiscoverySearch';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoverySearchCollectionResponse(writer: SerializationWriter, ediscoverySearchCollectionResponse: EdiscoverySearchCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoverySearchCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", ediscoverySearchCollectionResponse.value as any, serializeEdiscoverySearch);
}
