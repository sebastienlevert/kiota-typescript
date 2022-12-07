import {VersionAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVersionAction(writer: SerializationWriter, versionAction: VersionAction | undefined = {}) : void {
            writer.writeStringValue("newVersion", versionAction.newVersion);
}
