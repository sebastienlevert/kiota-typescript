import {SynchronizationError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationError(synchronizationError: SynchronizationError | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { synchronizationError.code = n.getStringValue() as any ; },
        "message": n => { synchronizationError.message = n.getStringValue() as any ; },
        "tenantActionable": n => { synchronizationError.tenantActionable = n.getBooleanValue() as any ; },
    }
}
