import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {TabUpdatedEventMessageDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTabUpdatedEventMessageDetail(tabUpdatedEventMessageDetail: TabUpdatedEventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(tabUpdatedEventMessageDetail),
        "initiator": n => { tabUpdatedEventMessageDetail.initiator = n.getObject(deserializeIntoIdentitySet) as any ; },
        "tabId": n => { tabUpdatedEventMessageDetail.tabId = n.getStringValue() as any ; },
    }
}
