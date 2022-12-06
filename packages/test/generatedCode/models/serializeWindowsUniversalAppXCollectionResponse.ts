import {WindowsUniversalAppXCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsUniversalAppX} from './serializeWindowsUniversalAppX';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsUniversalAppXCollectionResponse(writer: SerializationWriter, windowsUniversalAppXCollectionResponse: WindowsUniversalAppXCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsUniversalAppXCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsUniversalAppXCollectionResponse.value as any, serializeWindowsUniversalAppX);
}
