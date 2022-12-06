import {DataPolicyOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDataPolicyOperation} from './serializeDataPolicyOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDataPolicyOperationCollectionResponse(writer: SerializationWriter, dataPolicyOperationCollectionResponse: DataPolicyOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, dataPolicyOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", dataPolicyOperationCollectionResponse.value as any, serializeDataPolicyOperation);
}
