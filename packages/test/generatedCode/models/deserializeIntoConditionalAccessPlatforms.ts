import {ConditionalAccessDevicePlatform} from './conditionalAccessDevicePlatform';
import {ConditionalAccessPlatforms} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessPlatforms(conditionalAccessPlatforms: ConditionalAccessPlatforms | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "excludePlatforms": n => { conditionalAccessPlatforms.excludePlatforms = n.getEnumValues<ConditionalAccessDevicePlatform>(ConditionalAccessDevicePlatform) as any ; },
        "includePlatforms": n => { conditionalAccessPlatforms.includePlatforms = n.getEnumValues<ConditionalAccessDevicePlatform>(ConditionalAccessDevicePlatform) as any ; },
        "@odata.type": n => { conditionalAccessPlatforms.odataType = n.getStringValue() as any ; },
    }
}
