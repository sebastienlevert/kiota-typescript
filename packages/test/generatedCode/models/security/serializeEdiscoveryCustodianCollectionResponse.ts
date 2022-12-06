import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryCustodianCollectionResponse} from './index';
import {serializeEdiscoveryCustodian} from './serializeEdiscoveryCustodian';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryCustodianCollectionResponse(writer: SerializationWriter, ediscoveryCustodianCollectionResponse: EdiscoveryCustodianCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryCustodianCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", ediscoveryCustodianCollectionResponse.value as any, serializeEdiscoveryCustodian);
}
