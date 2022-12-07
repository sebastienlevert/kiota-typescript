import {deserializeIntoKeyValuePair} from './deserializeIntoKeyValuePair';
import {CloudPcStatusDetails} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCloudPcStatusDetails(cloudPcStatusDetails: CloudPcStatusDetails | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "additionalInformation": n => { cloudPcStatusDetails.additionalInformation = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyValuePair) as any ; },
        "code": n => { cloudPcStatusDetails.code = n.getStringValue() as any ; },
        "message": n => { cloudPcStatusDetails.message = n.getStringValue() as any ; },
    }
}
