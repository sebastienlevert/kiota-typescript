import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoSharePointIdentity} from './deserializeIntoSharePointIdentity';
import {SharePointIdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharePointIdentitySet(sharePointIdentitySet: SharePointIdentitySet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySet(sharePointIdentitySet),
        "group": n => { sharePointIdentitySet.group = n.getObject(deserializeIntoIdentity) as any ; },
        "siteGroup": n => { sharePointIdentitySet.siteGroup = n.getObject(deserializeIntoSharePointIdentity) as any ; },
        "siteUser": n => { sharePointIdentitySet.siteUser = n.getObject(deserializeIntoSharePointIdentity) as any ; },
    }
}
