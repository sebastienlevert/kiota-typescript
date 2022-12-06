import {ConditionalAccessDevicePlatform} from './conditionalAccessDevicePlatform';
import {ConditionalAccessPlatforms} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessPlatforms(writer: SerializationWriter, conditionalAccessPlatforms: ConditionalAccessPlatforms | undefined = {}) : void {
            writer.writeEnumValue<ConditionalAccessDevicePlatform>("excludePlatforms", conditionalAccessPlatforms.excludePlatforms);
            writer.writeEnumValue<ConditionalAccessDevicePlatform>("includePlatforms", conditionalAccessPlatforms.includePlatforms);
            writer.writeStringValue("@odata.type", conditionalAccessPlatforms.odataType);
}
