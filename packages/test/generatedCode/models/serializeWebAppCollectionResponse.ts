import {WebAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWebApp} from './serializeWebApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWebAppCollectionResponse(writer: SerializationWriter, webAppCollectionResponse: WebAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, webAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", webAppCollectionResponse.value as any, serializeWebApp);
}
