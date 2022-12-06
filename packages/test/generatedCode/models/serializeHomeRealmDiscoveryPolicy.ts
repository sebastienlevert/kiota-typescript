import {HomeRealmDiscoveryPolicy} from './index';
import {serializeStsPolicy} from './serializeStsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHomeRealmDiscoveryPolicy(writer: SerializationWriter, homeRealmDiscoveryPolicy: HomeRealmDiscoveryPolicy | undefined = {}) : void {
        serializeStsPolicy(writer, homeRealmDiscoveryPolicy)
}
