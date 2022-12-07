import {UsageDetails} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUsageDetails(writer: SerializationWriter, usageDetails: UsageDetails | undefined = {}) : void {
            writer.writeDateValue("lastAccessedDateTime", usageDetails.lastAccessedDateTime);
            writer.writeDateValue("lastModifiedDateTime", usageDetails.lastModifiedDateTime);
}
