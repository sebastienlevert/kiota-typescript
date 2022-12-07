import {deserializeIntoOfficeGraphInsights} from './deserializeIntoOfficeGraphInsights';
import {ItemInsights} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemInsights(itemInsights: ItemInsights | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOfficeGraphInsights(itemInsights),
    }
}
