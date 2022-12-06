import {Windows10CompliancePolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindows10CompliancePolicy} from './serializeWindows10CompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows10CompliancePolicyCollectionResponse(writer: SerializationWriter, windows10CompliancePolicyCollectionResponse: Windows10CompliancePolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windows10CompliancePolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windows10CompliancePolicyCollectionResponse.value as any, serializeWindows10CompliancePolicy);
}
