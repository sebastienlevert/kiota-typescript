import {deserializeIntoIdentitySource} from './deserializeIntoIdentitySource';
import {DomainIdentitySource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainIdentitySource(domainIdentitySource: DomainIdentitySource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySource(domainIdentitySource),
        "displayName": n => { domainIdentitySource.displayName = n.getStringValue() as any ; },
        "domainName": n => { domainIdentitySource.domainName = n.getStringValue() as any ; },
    }
}
