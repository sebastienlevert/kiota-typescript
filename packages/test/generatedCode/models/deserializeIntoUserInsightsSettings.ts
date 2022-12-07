import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserInsightsSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserInsightsSettings(userInsightsSettings: UserInsightsSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userInsightsSettings),
        "isEnabled": n => { userInsightsSettings.isEnabled = n.getBooleanValue() as any ; },
    }
}
