import {AddInCollectionResponse} from './index';
import {serializeAddIn} from './serializeAddIn';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddInCollectionResponse(writer: SerializationWriter, addInCollectionResponse: AddInCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, addInCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", addInCollectionResponse.value as any, serializeAddIn);
}
