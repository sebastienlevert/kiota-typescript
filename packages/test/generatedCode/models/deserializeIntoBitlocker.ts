import {deserializeIntoBitlockerRecoveryKey} from './deserializeIntoBitlockerRecoveryKey';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Bitlocker} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBitlocker(bitlocker: Bitlocker | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bitlocker),
        "recoveryKeys": n => { bitlocker.recoveryKeys = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBitlockerRecoveryKey) as any ; },
    }
}
