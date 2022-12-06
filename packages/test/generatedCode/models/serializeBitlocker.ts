import {Bitlocker} from './index';
import {serializeBitlockerRecoveryKey} from './serializeBitlockerRecoveryKey';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBitlocker(writer: SerializationWriter, bitlocker: Bitlocker | undefined = {}) : void {
        serializeEntity(writer, bitlocker)
            writer.writeCollectionOfObjectValuesFromMethod("recoveryKeys", bitlocker.recoveryKeys as any, serializeBitlockerRecoveryKey);
}
