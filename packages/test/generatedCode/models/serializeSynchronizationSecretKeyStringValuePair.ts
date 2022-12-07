import {SynchronizationSecretKeyStringValuePair} from './index';
import {SynchronizationSecret} from './synchronizationSecret';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationSecretKeyStringValuePair(writer: SerializationWriter, synchronizationSecretKeyStringValuePair: SynchronizationSecretKeyStringValuePair | undefined = {}) : void {
            writer.writeEnumValue<SynchronizationSecret>("key", synchronizationSecretKeyStringValuePair.key);
            writer.writeStringValue("value", synchronizationSecretKeyStringValuePair.value);
}
