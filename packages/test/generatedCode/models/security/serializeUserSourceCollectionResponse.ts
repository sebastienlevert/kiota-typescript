import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {UserSourceCollectionResponse} from './index';
import {serializeUserSource} from './serializeUserSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserSourceCollectionResponse(writer: SerializationWriter, userSourceCollectionResponse: UserSourceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userSourceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", userSourceCollectionResponse.value as any, serializeUserSource);
}
