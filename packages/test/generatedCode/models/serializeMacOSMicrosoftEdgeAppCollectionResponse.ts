import {MacOSMicrosoftEdgeAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMacOSMicrosoftEdgeApp} from './serializeMacOSMicrosoftEdgeApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSMicrosoftEdgeAppCollectionResponse(writer: SerializationWriter, macOSMicrosoftEdgeAppCollectionResponse: MacOSMicrosoftEdgeAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, macOSMicrosoftEdgeAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", macOSMicrosoftEdgeAppCollectionResponse.value as any, serializeMacOSMicrosoftEdgeApp);
}
