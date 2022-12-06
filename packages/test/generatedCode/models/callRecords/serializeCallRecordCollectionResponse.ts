import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {CallRecordCollectionResponse} from './index';
import {serializeCallRecord} from './serializeCallRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallRecordCollectionResponse(writer: SerializationWriter, callRecordCollectionResponse: CallRecordCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, callRecordCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", callRecordCollectionResponse.value as any, serializeCallRecord);
}
