import {PrintDocumentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintDocument} from './serializePrintDocument';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintDocumentCollectionResponse(writer: SerializationWriter, printDocumentCollectionResponse: PrintDocumentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printDocumentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", printDocumentCollectionResponse.value as any, serializePrintDocument);
}
