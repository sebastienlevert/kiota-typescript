import {OmaSettingCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOmaSetting} from './serializeOmaSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOmaSettingCollectionResponse(writer: SerializationWriter, omaSettingCollectionResponse: OmaSettingCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, omaSettingCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", omaSettingCollectionResponse.value as any, serializeOmaSetting);
}
