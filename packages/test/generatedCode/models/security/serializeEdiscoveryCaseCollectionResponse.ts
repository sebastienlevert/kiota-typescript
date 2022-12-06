import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryCaseCollectionResponse} from './index';
import {serializeEdiscoveryCase} from './serializeEdiscoveryCase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryCaseCollectionResponse(writer: SerializationWriter, ediscoveryCaseCollectionResponse: EdiscoveryCaseCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryCaseCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", ediscoveryCaseCollectionResponse.value as any, serializeEdiscoveryCase);
}
