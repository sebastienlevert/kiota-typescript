import {deserializeIntoItemFacet} from './deserializeIntoItemFacet';
import {deserializeIntoServiceInformation} from './deserializeIntoServiceInformation';
import {WebAccount} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWebAccount(webAccount: WebAccount | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoItemFacet(webAccount),
        "description": n => { webAccount.description = n.getStringValue() as any ; },
        "service": n => { webAccount.service = n.getObject(deserializeIntoServiceInformation) as any ; },
        "statusMessage": n => { webAccount.statusMessage = n.getStringValue() as any ; },
        "thumbnailUrl": n => { webAccount.thumbnailUrl = n.getStringValue() as any ; },
        "userId": n => { webAccount.userId = n.getStringValue() as any ; },
        "webUrl": n => { webAccount.webUrl = n.getStringValue() as any ; },
    }
}
