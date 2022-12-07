import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UsageRight} from './index';
import {UsageRightState} from './usageRightState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUsageRight(usageRight: UsageRight | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(usageRight),
        "catalogId": n => { usageRight.catalogId = n.getStringValue() as any ; },
        "serviceIdentifier": n => { usageRight.serviceIdentifier = n.getStringValue() as any ; },
        "state": n => { usageRight.state = n.getEnumValue<UsageRightState>(UsageRightState) as any ; },
    }
}
