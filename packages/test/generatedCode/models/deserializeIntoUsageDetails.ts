import {UsageDetails} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUsageDetails(usageDetails: UsageDetails | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "lastAccessedDateTime": n => { usageDetails.lastAccessedDateTime = n.getDateValue() as any ; },
        "lastModifiedDateTime": n => { usageDetails.lastModifiedDateTime = n.getDateValue() as any ; },
    }
}
