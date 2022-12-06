import {PrintTaskDefinitionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintTaskDefinition} from './serializePrintTaskDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintTaskDefinitionCollectionResponse(writer: SerializationWriter, printTaskDefinitionCollectionResponse: PrintTaskDefinitionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printTaskDefinitionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", printTaskDefinitionCollectionResponse.value as any, serializePrintTaskDefinition);
}
