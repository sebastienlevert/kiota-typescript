import {AssignedLicenseCollectionResponse} from './index';
import {serializeAssignedLicense} from './serializeAssignedLicense';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignedLicenseCollectionResponse(writer: SerializationWriter, assignedLicenseCollectionResponse: AssignedLicenseCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, assignedLicenseCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", assignedLicenseCollectionResponse.value as any, serializeAssignedLicense);
}
