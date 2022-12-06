import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSharedInsight} from './deserializeIntoSharedInsight';
import {deserializeIntoTrending} from './deserializeIntoTrending';
import {deserializeIntoUsedInsight} from './deserializeIntoUsedInsight';
import {OfficeGraphInsights} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOfficeGraphInsights(officeGraphInsights: OfficeGraphInsights | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(officeGraphInsights),
        "shared": n => { officeGraphInsights.shared = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSharedInsight) as any ; },
        "trending": n => { officeGraphInsights.trending = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTrending) as any ; },
        "used": n => { officeGraphInsights.used = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUsedInsight) as any ; },
    }
}
