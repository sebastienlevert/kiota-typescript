import {SynchronizationQuarantine} from './index';
import {QuarantineReason} from './quarantineReason';
import {serializeSynchronizationError} from './serializeSynchronizationError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationQuarantine(writer: SerializationWriter, synchronizationQuarantine: SynchronizationQuarantine | undefined = {}) : void {
            writer.writeDateValue("currentBegan", synchronizationQuarantine.currentBegan);
            writer.writeObjectValueFromMethod("error_escaped", synchronizationQuarantine.error_escaped as any, serializeSynchronizationError);
            writer.writeDateValue("nextAttempt", synchronizationQuarantine.nextAttempt);
            writer.writeEnumValue<QuarantineReason>("reason", synchronizationQuarantine.reason);
            writer.writeDateValue("seriesBegan", synchronizationQuarantine.seriesBegan);
            writer.writeNumberValue("seriesCount", synchronizationQuarantine.seriesCount);
}
