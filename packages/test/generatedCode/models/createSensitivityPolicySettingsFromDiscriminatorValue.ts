import {SensitivityPolicySettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSensitivityPolicySettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : SensitivityPolicySettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SensitivityPolicySettings();
}
