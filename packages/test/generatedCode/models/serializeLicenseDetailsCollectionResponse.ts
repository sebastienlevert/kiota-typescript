import {LicenseDetailsCollectionResponse} from './index';
import {serializeLicenseDetails} from './serializeLicenseDetails';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLicenseDetailsCollectionResponse(writer: SerializationWriter, licenseDetailsCollectionResponse: LicenseDetailsCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", licenseDetailsCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", licenseDetailsCollectionResponse.value as any, serializeLicenseDetails);
}
