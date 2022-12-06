import {WindowsPhone81CompliancePolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsPhone81CompliancePolicy} from './serializeWindowsPhone81CompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsPhone81CompliancePolicyCollectionResponse(writer: SerializationWriter, windowsPhone81CompliancePolicyCollectionResponse: WindowsPhone81CompliancePolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsPhone81CompliancePolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsPhone81CompliancePolicyCollectionResponse.value as any, serializeWindowsPhone81CompliancePolicy);
}
