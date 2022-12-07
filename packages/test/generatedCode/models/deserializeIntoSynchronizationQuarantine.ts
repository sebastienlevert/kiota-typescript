import {deserializeIntoSynchronizationError} from './deserializeIntoSynchronizationError';
import {SynchronizationQuarantine} from './index';
import {QuarantineReason} from './quarantineReason';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationQuarantine(synchronizationQuarantine: SynchronizationQuarantine | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "currentBegan": n => { synchronizationQuarantine.currentBegan = n.getDateValue() as any ; },
        "error": n => { synchronizationQuarantine.error_escaped = n.getObject(deserializeIntoSynchronizationError) as any ; },
        "nextAttempt": n => { synchronizationQuarantine.nextAttempt = n.getDateValue() as any ; },
        "reason": n => { synchronizationQuarantine.reason = n.getEnumValue<QuarantineReason>(QuarantineReason) as any ; },
        "seriesBegan": n => { synchronizationQuarantine.seriesBegan = n.getDateValue() as any ; },
        "seriesCount": n => { synchronizationQuarantine.seriesCount = n.getNumberValue() as any ; },
    }
}
