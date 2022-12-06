import {Windows81CompliancePolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindows81CompliancePolicy} from './serializeWindows81CompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows81CompliancePolicyCollectionResponse(writer: SerializationWriter, windows81CompliancePolicyCollectionResponse: Windows81CompliancePolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windows81CompliancePolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windows81CompliancePolicyCollectionResponse.value as any, serializeWindows81CompliancePolicy);
}
