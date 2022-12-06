import {RiskyUserCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRiskyUser} from './serializeRiskyUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRiskyUserCollectionResponse(writer: SerializationWriter, riskyUserCollectionResponse: RiskyUserCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, riskyUserCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", riskyUserCollectionResponse.value as any, serializeRiskyUser);
}
