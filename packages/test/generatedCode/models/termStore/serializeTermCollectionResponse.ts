import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {TermCollectionResponse} from './index';
import {serializeTerm} from './serializeTerm';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermCollectionResponse(writer: SerializationWriter, termCollectionResponse: TermCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, termCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", termCollectionResponse.value as any, serializeTerm);
}
