import {serializeAssignedLicense} from '../../models/serializeAssignedLicense';
import {AssignLicensePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignLicensePostRequestBody(writer: SerializationWriter, assignLicensePostRequestBody: AssignLicensePostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("addLicenses", assignLicensePostRequestBody.addLicenses as any, serializeAssignedLicense);
            writer.writeCollectionOfPrimitiveValues<string>("removeLicenses", assignLicensePostRequestBody.removeLicenses);
}
