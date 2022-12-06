import {ProcessCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeProcess} from './serializeProcess';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProcessCollectionResponse(writer: SerializationWriter, processCollectionResponse: ProcessCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, processCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", processCollectionResponse.value as any, serializeProcess);
}
