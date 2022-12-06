import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeImportedWindowsAutopilotDeviceIdentity} from '../../../models/serializeImportedWindowsAutopilotDeviceIdentity';
import {ImportResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImportResponse(writer: SerializationWriter, importResponse: ImportResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, importResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", importResponse.value as any, serializeImportedWindowsAutopilotDeviceIdentity);
}
