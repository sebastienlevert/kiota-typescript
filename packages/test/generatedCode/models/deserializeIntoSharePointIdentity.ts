import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {SharePointIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharePointIdentity(sharePointIdentity: SharePointIdentity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(sharePointIdentity),
        "loginName": n => { sharePointIdentity.loginName = n.getStringValue() as any ; },
    }
}
