import {PrintServiceCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintService} from './serializePrintService';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintServiceCollectionResponse(writer: SerializationWriter, printServiceCollectionResponse: PrintServiceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printServiceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", printServiceCollectionResponse.value as any, serializePrintService);
}
