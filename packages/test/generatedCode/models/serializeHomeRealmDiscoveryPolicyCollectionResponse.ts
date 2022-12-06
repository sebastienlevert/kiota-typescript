import {HomeRealmDiscoveryPolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeHomeRealmDiscoveryPolicy} from './serializeHomeRealmDiscoveryPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHomeRealmDiscoveryPolicyCollectionResponse(writer: SerializationWriter, homeRealmDiscoveryPolicyCollectionResponse: HomeRealmDiscoveryPolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, homeRealmDiscoveryPolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", homeRealmDiscoveryPolicyCollectionResponse.value as any, serializeHomeRealmDiscoveryPolicy);
}
