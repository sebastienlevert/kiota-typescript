import {WritebackConfiguration} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWritebackConfiguration(writer: SerializationWriter, writebackConfiguration: WritebackConfiguration | undefined = {}) : void {
            writer.writeBooleanValue("isEnabled", writebackConfiguration.isEnabled);
}
