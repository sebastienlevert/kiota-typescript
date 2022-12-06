import {serializeImportedWindowsAutopilotDeviceIdentity} from '../../../models/serializeImportedWindowsAutopilotDeviceIdentity';
import {ImportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImportPostRequestBody(writer: SerializationWriter, importPostRequestBody: ImportPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("importedWindowsAutopilotDeviceIdentities", importPostRequestBody.importedWindowsAutopilotDeviceIdentities as any, serializeImportedWindowsAutopilotDeviceIdentity);
}
