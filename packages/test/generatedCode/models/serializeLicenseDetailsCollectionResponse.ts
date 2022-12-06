import {LicenseDetailsCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeLicenseDetails} from './serializeLicenseDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLicenseDetailsCollectionResponse(writer: SerializationWriter, licenseDetailsCollectionResponse: LicenseDetailsCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, licenseDetailsCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", licenseDetailsCollectionResponse.value as any, serializeLicenseDetails);
}
