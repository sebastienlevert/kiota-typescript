import {BitlockerRecoveryKeyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBitlockerRecoveryKey} from './serializeBitlockerRecoveryKey';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBitlockerRecoveryKeyCollectionResponse(writer: SerializationWriter, bitlockerRecoveryKeyCollectionResponse: BitlockerRecoveryKeyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bitlockerRecoveryKeyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", bitlockerRecoveryKeyCollectionResponse.value as any, serializeBitlockerRecoveryKey);
}
