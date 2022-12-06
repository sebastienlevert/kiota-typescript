import {AndroidCompliancePolicyCollectionResponse} from './index';
import {serializeAndroidCompliancePolicy} from './serializeAndroidCompliancePolicy';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidCompliancePolicyCollectionResponse(writer: SerializationWriter, androidCompliancePolicyCollectionResponse: AndroidCompliancePolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, androidCompliancePolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", androidCompliancePolicyCollectionResponse.value as any, serializeAndroidCompliancePolicy);
}
