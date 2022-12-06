import {ComplianceInformationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeComplianceInformation} from './serializeComplianceInformation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeComplianceInformationCollectionResponse(writer: SerializationWriter, complianceInformationCollectionResponse: ComplianceInformationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, complianceInformationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", complianceInformationCollectionResponse.value as any, serializeComplianceInformation);
}
