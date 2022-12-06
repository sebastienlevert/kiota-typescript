import {PrintJobCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintJob} from './serializePrintJob';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintJobCollectionResponse(writer: SerializationWriter, printJobCollectionResponse: PrintJobCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printJobCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", printJobCollectionResponse.value as any, serializePrintJob);
}
