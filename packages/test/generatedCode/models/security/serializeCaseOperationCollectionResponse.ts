import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {CaseOperationCollectionResponse} from './index';
import {serializeCaseOperation} from './serializeCaseOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCaseOperationCollectionResponse(writer: SerializationWriter, caseOperationCollectionResponse: CaseOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, caseOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", caseOperationCollectionResponse.value as any, serializeCaseOperation);
}
