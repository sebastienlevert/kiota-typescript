import {IosVppAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosVppApp} from './serializeIosVppApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosVppAppCollectionResponse(writer: SerializationWriter, iosVppAppCollectionResponse: IosVppAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosVppAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosVppAppCollectionResponse.value as any, serializeIosVppApp);
}
