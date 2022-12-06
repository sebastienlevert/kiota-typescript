import {WindowsMobileMSICollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsMobileMSI} from './serializeWindowsMobileMSI';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsMobileMSICollectionResponse(writer: SerializationWriter, windowsMobileMSICollectionResponse: WindowsMobileMSICollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsMobileMSICollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsMobileMSICollectionResponse.value as any, serializeWindowsMobileMSI);
}
