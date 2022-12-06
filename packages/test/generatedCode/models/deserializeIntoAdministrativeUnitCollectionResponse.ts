import {deserializeIntoAdministrativeUnit} from './deserializeIntoAdministrativeUnit';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AdministrativeUnitCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAdministrativeUnitCollectionResponse(administrativeUnitCollectionResponse: AdministrativeUnitCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(administrativeUnitCollectionResponse),
        "value": n => { administrativeUnitCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAdministrativeUnit) as any ; },
    }
}
