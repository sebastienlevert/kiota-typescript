import {SecurityBaselineState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecurityBaselineStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecurityBaselineState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecurityBaselineState();
}
