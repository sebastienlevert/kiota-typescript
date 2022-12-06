import {deserializeIntoAccessPackageAssignment} from '../../../../models/deserializeIntoAccessPackageAssignment';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {AdditionalAccessResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAdditionalAccessResponse(additionalAccessResponse: AdditionalAccessResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(additionalAccessResponse),
        "value": n => { additionalAccessResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessPackageAssignment) as any ; },
    }
}
