import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppPolicy} from '../../../models/serializeManagedAppPolicy';
import {GetManagedAppPoliciesResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetManagedAppPoliciesResponse(writer: SerializationWriter, getManagedAppPoliciesResponse: GetManagedAppPoliciesResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getManagedAppPoliciesResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getManagedAppPoliciesResponse.value as any, serializeManagedAppPolicy);
}
