import {UserInsightsSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserInsightsSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserInsightsSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserInsightsSettings();
}
