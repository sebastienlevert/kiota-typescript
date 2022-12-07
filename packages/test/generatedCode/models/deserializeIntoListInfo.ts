import {ListInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoListInfo(listInfo: ListInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "contentTypesEnabled": n => { listInfo.contentTypesEnabled = n.getBooleanValue() as any ; },
        "hidden": n => { listInfo.hidden = n.getBooleanValue() as any ; },
        "template": n => { listInfo.template = n.getStringValue() as any ; },
    }
}
