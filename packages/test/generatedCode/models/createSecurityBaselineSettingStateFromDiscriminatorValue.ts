import {SecurityBaselineSettingState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecurityBaselineSettingStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecurityBaselineSettingState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecurityBaselineSettingState();
}
