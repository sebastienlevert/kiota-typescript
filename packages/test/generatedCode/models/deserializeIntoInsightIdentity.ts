import {InsightIdentity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInsightIdentity(insightIdentity: InsightIdentity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { insightIdentity.address = n.getStringValue() as any ; },
        "displayName": n => { insightIdentity.displayName = n.getStringValue() as any ; },
        "id": n => { insightIdentity.id = n.getStringValue() as any ; },
    }
}
