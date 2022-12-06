import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {ConnectionOperationCollectionResponse} from './index';
import {serializeConnectionOperation} from './serializeConnectionOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConnectionOperationCollectionResponse(writer: SerializationWriter, connectionOperationCollectionResponse: ConnectionOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, connectionOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", connectionOperationCollectionResponse.value as any, serializeConnectionOperation);
}
