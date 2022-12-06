import {Windows10MobileCompliancePolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindows10MobileCompliancePolicy} from './serializeWindows10MobileCompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows10MobileCompliancePolicyCollectionResponse(writer: SerializationWriter, windows10MobileCompliancePolicyCollectionResponse: Windows10MobileCompliancePolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windows10MobileCompliancePolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windows10MobileCompliancePolicyCollectionResponse.value as any, serializeWindows10MobileCompliancePolicy);
}
