import {Settings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSettings(writer: SerializationWriter, settings: Settings | undefined = {}) : void {
            writer.writeBooleanValue("hasGraphMailbox", settings.hasGraphMailbox);
            writer.writeBooleanValue("hasLicense", settings.hasLicense);
            writer.writeBooleanValue("hasOptedOut", settings.hasOptedOut);
}
