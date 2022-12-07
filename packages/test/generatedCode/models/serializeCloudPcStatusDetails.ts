import {CloudPcStatusDetails} from './index';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCloudPcStatusDetails(writer: SerializationWriter, cloudPcStatusDetails: CloudPcStatusDetails | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("additionalInformation", cloudPcStatusDetails.additionalInformation as any, serializeKeyValuePair);
            writer.writeStringValue("code", cloudPcStatusDetails.code);
            writer.writeStringValue("message", cloudPcStatusDetails.message);
}
