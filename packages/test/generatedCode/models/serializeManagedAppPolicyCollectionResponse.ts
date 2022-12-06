import {ManagedAppPolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppPolicy} from './serializeManagedAppPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppPolicyCollectionResponse(writer: SerializationWriter, managedAppPolicyCollectionResponse: ManagedAppPolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAppPolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", managedAppPolicyCollectionResponse.value as any, serializeManagedAppPolicy);
}
