import {AdministrativeUnitCollectionResponse} from './index';
import {serializeAdministrativeUnit} from './serializeAdministrativeUnit';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAdministrativeUnitCollectionResponse(writer: SerializationWriter, administrativeUnitCollectionResponse: AdministrativeUnitCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, administrativeUnitCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", administrativeUnitCollectionResponse.value as any, serializeAdministrativeUnit);
}
