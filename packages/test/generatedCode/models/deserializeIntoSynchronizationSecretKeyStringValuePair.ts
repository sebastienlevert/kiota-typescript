import {SynchronizationSecretKeyStringValuePair} from './index';
import {SynchronizationSecret} from './synchronizationSecret';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationSecretKeyStringValuePair(synchronizationSecretKeyStringValuePair: SynchronizationSecretKeyStringValuePair | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { synchronizationSecretKeyStringValuePair.key = n.getEnumValue<SynchronizationSecret>(SynchronizationSecret) as any ; },
        "value": n => { synchronizationSecretKeyStringValuePair.value = n.getStringValue() as any ; },
    }
}
