import {deserializeIntoAssignedLicense} from '../../models/deserializeIntoAssignedLicense';
import {AssignLicensePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignLicensePostRequestBody(assignLicensePostRequestBody: AssignLicensePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "addLicenses": n => { assignLicensePostRequestBody.addLicenses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAssignedLicense) as any ; },
        "removeLicenses": n => { assignLicensePostRequestBody.removeLicenses = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
