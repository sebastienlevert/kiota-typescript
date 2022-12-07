import {deserializeIntoStsPolicy} from './deserializeIntoStsPolicy';
import {HomeRealmDiscoveryPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHomeRealmDiscoveryPolicy(homeRealmDiscoveryPolicy: HomeRealmDiscoveryPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoStsPolicy(homeRealmDiscoveryPolicy),
    }
}
