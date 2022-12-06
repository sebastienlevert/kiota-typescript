import {PrintConnectorCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintConnector} from './serializePrintConnector';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintConnectorCollectionResponse(writer: SerializationWriter, printConnectorCollectionResponse: PrintConnectorCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printConnectorCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", printConnectorCollectionResponse.value as any, serializePrintConnector);
}
