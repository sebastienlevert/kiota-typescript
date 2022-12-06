import {IosCompliancePolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosCompliancePolicy} from './serializeIosCompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosCompliancePolicyCollectionResponse(writer: SerializationWriter, iosCompliancePolicyCollectionResponse: IosCompliancePolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosCompliancePolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosCompliancePolicyCollectionResponse.value as any, serializeIosCompliancePolicy);
}
