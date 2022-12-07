import {InstitutionData} from './index';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInstitutionData(writer: SerializationWriter, institutionData: InstitutionData | undefined = {}) : void {
            writer.writeStringValue("description", institutionData.description);
            writer.writeStringValue("displayName", institutionData.displayName);
            writer.writeObjectValueFromMethod("location", institutionData.location as any, serializePhysicalAddress);
            writer.writeStringValue("webUrl", institutionData.webUrl);
}
