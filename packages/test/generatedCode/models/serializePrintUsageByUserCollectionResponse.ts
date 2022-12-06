import {PrintUsageByUserCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintUsageByUser} from './serializePrintUsageByUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintUsageByUserCollectionResponse(writer: SerializationWriter, printUsageByUserCollectionResponse: PrintUsageByUserCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printUsageByUserCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", printUsageByUserCollectionResponse.value as any, serializePrintUsageByUser);
}
