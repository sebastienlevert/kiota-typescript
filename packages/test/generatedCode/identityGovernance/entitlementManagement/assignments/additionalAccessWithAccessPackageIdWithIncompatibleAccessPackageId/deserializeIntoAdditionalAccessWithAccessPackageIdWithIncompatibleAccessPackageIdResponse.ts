import {deserializeIntoAccessPackageAssignment} from '../../../../models/deserializeIntoAccessPackageAssignment';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse(additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse: AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse),
        "value": n => { additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackageAssignment) as any ; },
    }
}
