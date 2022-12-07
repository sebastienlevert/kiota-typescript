import {GroupWritebackConfiguration} from './index';
import {serializeWritebackConfiguration} from './serializeWritebackConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupWritebackConfiguration(writer: SerializationWriter, groupWritebackConfiguration: GroupWritebackConfiguration | undefined = {}) : void {
        serializeWritebackConfiguration(writer, groupWritebackConfiguration)
            writer.writeStringValue("onPremisesGroupType", groupWritebackConfiguration.onPremisesGroupType);
}
