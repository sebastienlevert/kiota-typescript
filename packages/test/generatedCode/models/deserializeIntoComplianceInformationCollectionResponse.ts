import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoComplianceInformation} from './deserializeIntoComplianceInformation';
import {ComplianceInformationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoComplianceInformationCollectionResponse(complianceInformationCollectionResponse: ComplianceInformationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(complianceInformationCollectionResponse),
        "value": n => { complianceInformationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoComplianceInformation) as any ; },
    }
}
