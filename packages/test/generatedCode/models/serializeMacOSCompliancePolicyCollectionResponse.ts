import {MacOSCompliancePolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMacOSCompliancePolicy} from './serializeMacOSCompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSCompliancePolicyCollectionResponse(writer: SerializationWriter, macOSCompliancePolicyCollectionResponse: MacOSCompliancePolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, macOSCompliancePolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", macOSCompliancePolicyCollectionResponse.value as any, serializeMacOSCompliancePolicy);
}
