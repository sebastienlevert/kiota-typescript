import {CallCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCall} from './serializeCall';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallCollectionResponse(writer: SerializationWriter, callCollectionResponse: CallCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, callCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", callCollectionResponse.value as any, serializeCall);
}
