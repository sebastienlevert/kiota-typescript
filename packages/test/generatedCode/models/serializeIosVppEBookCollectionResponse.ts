import {IosVppEBookCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosVppEBook} from './serializeIosVppEBook';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosVppEBookCollectionResponse(writer: SerializationWriter, iosVppEBookCollectionResponse: IosVppEBookCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosVppEBookCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosVppEBookCollectionResponse.value as any, serializeIosVppEBook);
}
