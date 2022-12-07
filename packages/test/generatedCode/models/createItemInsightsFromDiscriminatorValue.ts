import {ItemInsights} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemInsightsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemInsights {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemInsights();
}
