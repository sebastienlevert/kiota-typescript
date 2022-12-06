import {LicenseAssignmentStateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeLicenseAssignmentState} from './serializeLicenseAssignmentState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLicenseAssignmentStateCollectionResponse(writer: SerializationWriter, licenseAssignmentStateCollectionResponse: LicenseAssignmentStateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, licenseAssignmentStateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", licenseAssignmentStateCollectionResponse.value as any, serializeLicenseAssignmentState);
}
