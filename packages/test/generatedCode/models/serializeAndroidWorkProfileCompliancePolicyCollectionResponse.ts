import {AndroidWorkProfileCompliancePolicyCollectionResponse} from './index';
import {serializeAndroidWorkProfileCompliancePolicy} from './serializeAndroidWorkProfileCompliancePolicy';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidWorkProfileCompliancePolicyCollectionResponse(writer: SerializationWriter, androidWorkProfileCompliancePolicyCollectionResponse: AndroidWorkProfileCompliancePolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, androidWorkProfileCompliancePolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", androidWorkProfileCompliancePolicyCollectionResponse.value as any, serializeAndroidWorkProfileCompliancePolicy);
}
