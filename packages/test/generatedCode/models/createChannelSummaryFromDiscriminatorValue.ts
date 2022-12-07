import {ChannelSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChannelSummary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChannelSummary();
}
